 new Vue({
     el:'#app',
     data:{
        projects:{},
         name:'',
         description:'',
         error:{}
     },
     mounted() {
          this.init();
     },
     methods: {
        onSubmit(){
            axios.post('/projects', {
                name: this.name,
                description: this.description
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                  this.error=error.response.data
                console.log(error.response.data);
              });
        },
        init(){
            axios.get('/projects')
              .then(function (response) {

                  this.projects=response.data;

               
              })
              .catch(function (error) {
                console.log(error);
              });
        }
     },

 });