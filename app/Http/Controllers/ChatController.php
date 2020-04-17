<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use chat model
use App\Chat;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{

    // contruct =>  PHP will automatically call this function when you create an object from a class.
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index() 
    {
        return view('chat.chat');
    }

    public function fetchAllMessages() 
    {
        //call chat from user
        // $user = Auth::user();
        // $chats = $user->messages()->get();
        // return $chats;

        //call user from chat
        // $chat = Chat::find(1);
        // $user = $chat->user()->get();
        // return $user;

        // return Chat::with('user')->get();
        return view('chat.chat');
        
    }

    public function sendMessage(Request $request)
    {
        
        $user = Auth::user();
        $chats = $user->messages()->create([
            'message' => 'testing 123'
        ]);
        return $chats->load('user');  //attaching user with chats

        //associate() is used to update a belongsTo() relationship.
        // $chat = Chat::find(2);        
        // $chat->user()->associate($user);
        // $chat->save();

        
            
    }
}
