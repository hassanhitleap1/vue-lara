//import { format } from "util";

class Erorrs{


  constructor(){
    this.errors={}
  }



  get(fieled){ 
    if(this.errors[fieled]){
      return this.errors[fieled][0];
    }
  }


  record(errors){
    console.log(errors);
    this.errors=errors
  }

  clear(fieled){
    if(fieled)
      {
        delete this.errors[fieled];
        return;
      }
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
    for(let field in this.originalData){
      this[field]='';
    }


    this.errors.clear();
  }


  data(){
    let data={};
    for(let property in this.originalData){
      data[property]=this[property];
      // this do loop 
      // data.name =this.name; 
      // data.description= this.description;
    }
  //  let data=  Object.assign({},this);

  //  delete data.errors;
  //  delete data.originalData;
  //  return data;
  }


  post (url){
    return this.submit('post',url);
  }


  delete(url){
    return this.submit('delete',url);
  }

  submit(requastType,url){

    return new Promise((resolve,reject)=>{
        axios[requastType](url,this.data())
          .then(response=>{
            this.onSuccess(response.data);
            resolve(response.data)
          })
          .catch(error=>{
            //this.onFail.bind(this)
            this.onFail(error.response.data)

            reject(error.response.data)
          });
    });
 
  }


  onSuccess(data){
    alert(data,message)
    this.rest();
  }


  onFail(errors){
      this.errors.record(errors)
  }


}




app= new Vue({
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


 