@extends('layouts.app')

@section('content')
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">{{ $current_user->id }}</th>
                <td>{{ $current_user->name }}</td>
                <td>{{ $current_user->email }}</td>
            </tr>
        </tbody>
    </table>
@endsection
