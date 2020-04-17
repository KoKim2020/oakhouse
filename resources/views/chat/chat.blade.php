<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <form action="{{ route('messages.store') }}" method="post">
        @csrf
        Name:   <input type="text" name="name"><br>
        E-mail: <input type="text" name="email"><br>
        <button type="submit">lllll</button>
    </form>
</body>
</html>