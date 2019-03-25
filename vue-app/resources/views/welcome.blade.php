<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
       <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    </head>
    <body>
        <div class="app">
            <ul>
                <li v-for="skill in skilles" v-text="skill"></li>
            </ul>
        </div>
        <script>
            var app= new Vue({
                el:"#app",
                data:{
                    skilles:[]
                },mounted(){
                    axios.get('/skilles')
                    .then(response=>this.skilles= response.data)
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    });
                }
            })
        </script>
    </body>
</html>
