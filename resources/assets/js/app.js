import form from '../core/Form';
import vue from 'vue';
import axios from 'axios';
import Example form '../components/Example';

window.vue=vue;
window.axios= axios;
app= new Vue({
    el:'#app',
    data:{
       projects:{},
       form: new Form({
         name:'',
         description:'',

       }),
      
      
    },
    components(){
      Example
    },
    mounted() {
         this.init();
    },
    methods: {
       onSubmit(){
         this.form.submit('post','/projects')
           .then(data=>console.log(data))
           .catch(error=>console.log(error));



       },
       // onSuccess(response){
       //   form.rest();
       // },
       init(){
         axios.get('/projects').then(response => this.projects=response.data )
         .catch(error => this.errors=error.response.data);
       }
    }

});