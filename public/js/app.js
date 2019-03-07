import { format } from "util";

class Erorrs
{


  constructor(){
    this.errors={}
  }



  get(fieled){
    if(this.errors[fieled]){
      return this.errors[fieled][0];
    }
  }


  record(errors){
    this.errors=errors
  }

  clear(fieled){
    if(fieled) delete this.errors[fieled];
    this.errors={};
  }



  has(fieled){
    return this.errors.hasOwnProperty(fieled)
  }


  any(){
    return Object.keys(this.errors).length >0 ;
  }

} 

class Form{

  constructor(data){
    this.originalData=data;
    for(let field in data){
      this[field]=data[field];
    }
    this.errors= new Erorrs();
  }


  rest(){
    for(let field in originalData){
      this[field]='';
    }
  }


  data(){
   let data=  Object.assign({},this);

   delete data.errors;
   delete data.originalData;
   return data;
  }




  submit(requastType,url){
    axios[requastType]('/projects',this.data())
    .then(this.onSuccess.bind(this))
    .catch(this.onFail.bind(this));
  }


  onSuccess(){
    this.errors.clear();
  }


  onFail(){
    this.form.error.record(error.response.data)
  }


}




 new Vue({
     el:'#app',
     data:{
        projects:{},
        form: new Form({
          name:'',
          description:'',
        }),
       
       
     },
     mounted() {
          this.init();
     },
     methods: {
        onSubmit(){
          this.form.submit('post','/projects');
            // axios.post('/projects',this.$data)
            //   .then(this.onSuccess)
            //   .catch(function (error) {
            //       this.form.error.record(error.response.data)
            //     console.log(error.response.data);
            //   });
        },
        onSuccess(response){
          form.rest();
        },
        init(){
            axios.get('/projects')
              .then(function (response) {
                  this.projects=response.data;
              }).catch(error => this.errors=error.response.data);
        }
     },

 });