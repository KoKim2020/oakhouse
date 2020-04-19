<template>
    <div class="container-fluid">
            
        <div class="row">
            <div class="col-9 col-md-9">
                <!-- using vue chat scroll module for chatting -->
                <div style="height:500px; overflow: hidden; overflow-y:scroll" v-chat-scroll>
                    <!-- chat messages -->
                    <div style="max-width: 100%;" v-for="(message, index) in messages" :key="index">
                        <q-chat-message   v-if ="message.user.id != user_id"
                            :name=message.user.name
                            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                            :text="[message.message]"
                            stamp="7 minutes ago"
                            sent
                            bg-color="secondary"
                            class="mr-4"
                        />
                        <q-chat-message   v-if ="message.user.id === user_id"
                            :name=message.user.name
                            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                            :text="[message.message]"
                            stamp="4 minutes ago"
                            text-color="white"
                            bg-color="primary"
                            class="ml-4"
                        />
                    </div>
                </div>
                <!-- send button -->
                <div class="m-3">
                    <q-input bottom-slots 
                            v-model="newMessage"  
                            counter maxlength="150" 
                            :dense="dense" 
                            @keyup.enter="sendMessage"
                            @keydown="sendTypingEvent">
                            <!-- keydown
                                keypress
                                textInput     
                                keyup
                                -->
                        <template v-slot:before>
                            <q-avatar>
                                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                            </q-avatar>
                        </template>
                        <template v-slot:hint>
                        Enter Your Message.....
                        </template>

                        <template v-slot:after>
                            <q-btn round dense flat icon="send" @click="sendMessage" />
                        </template>
                    </q-input>
                    <span v-show="typing" class="help-block" style="font-style: italic;">
                            {{ otherUser }} is typing...
                    </span>
                </div>
            </div>
            <!-- Active Users -->
            <div class="col-3 col-md-3">
                <h5 class="text-center">Active Guys</h5>
                <div v-for="(user, index) in users" :key="index">
                    <q-item clickable v-ripple>
                        <q-item-section>{{ user.name }}</q-item-section>
                        <q-item-section avatar>
                            <q-avatar rounded>
                                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                            </q-avatar>
                        </q-item-section>
                    </q-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            name: this.user.name,
            messages: [], //messages from database
            user_id: this.user.id,
            newMessage: '',
            dense: false,
            users: [],//all users
            testing: [],
            typing: false,
            otherUser:{}
        }
    },
    created() {
        let _this = this;
        this.getMessages()
        //Using Chat Channel As presence
        Echo.join('chat')
        // channel ထဲမှာ လက်ရှိ active ဖြစ်နေတဲ့ user တွေ ကို channel က return
        // ပြန်ပေးတာ
        .here(user => {
            // console.log(user);
            this.users = user
        })
        // အသစ် join လာတဲ့ user ကို channel က reply ပြန်ပေးတာ
        .joining(user => {
            this.users.push(user)
        })
        /// to remove the leaving user from active guys
        .leaving(user => {
            this.users = this.users.filter(u => u.id != user.id);
        })
        //listening the broadcast event
        .listen('ChatEvent', (event) => {
            
            /// to add other people message 
            this.messages.push(event.chat)
        })
        .listenForWhisper('typing', (e) => {
            let v = this
            console.log(e)
            this.otherUser = e.user;
            this.typing = e.typing;
            // remove is typing indicator after 0.9s
            setTimeout(function() {
                v.typing = false
            }, 900);
        });
        
    },
    methods: {
        getMessages() {
            axios
            .get('/messages')
            .then(response => {
                this.messages = response.data
            })
        },
        sendMessage() {
            this.messages.push({
                user: this.user,
                message: this.newMessage
            });
            axios.
            post('/messages', {message : this.newMessage})
            this.newMessage = ''
        },
        /// send typing of me
        sendTypingEvent() {
            let vm = this
            let channel = Echo.join('chat');
            setTimeout(function() {
                channel.whisper('typing', {
                    user: vm.user.name,
                    typing: true
                });
                
            }, 300);
        }
    }

}
</script>