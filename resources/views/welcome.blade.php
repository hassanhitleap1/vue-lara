<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
    </head>
    <body>
      
        <div id="root">
            <ul>
                <li v-for="skill in skills" V-text="skill"></li>
            </ul>
        </div>
        <script>
                new Vue({
                    el:'#app',
                    data:{
                        skills:[],  
                    }
                    mounted() {
                       skills:function(){
                        axios.get('/skills')
                            .then(function (response) {
                                this.skills=response.data;
                                console.log(response);
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .then(function () {
                                // always executed
                            });
                       } 
                    },

                })
        </script>
    </body>
</html>
