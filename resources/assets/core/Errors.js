
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


  export default Erorrs;