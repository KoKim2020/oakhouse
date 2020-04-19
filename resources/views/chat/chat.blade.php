@extends('layouts.app')

@section('content')
    {{-- login user --}}
    {{-- {{ Auth::user() }} --}}
    
<div class="container">
    {{-- <q-select v-model="model" :options="options" label="Standard" /> --}}
    <chat-component :user="{{ Auth::user() }}"></chat-component>
</div>
@endsection 