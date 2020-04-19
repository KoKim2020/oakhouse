@extends('layouts.app')

@section('content')

<div class="container">
    {{-- <q-select v-model="model" :options="options" label="Standard" /> --}}
    <chat-component ></chat-component>
</div>
@endsection 