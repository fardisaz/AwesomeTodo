<template>
  <q-page padding>
    <button style="position:absolute; right:10px" @click="counter++">{{counter}}</button>

    <input 
    v-model="message"
     @keyup.esc="clearMessage"
     @keyup.enter="alertMessage"
     v-autofocus
     :class="{'error': message.length>22}"
     ref="messageInput"
     />

    <button @click="clearMessage">Clear</button>
    <div>{{message.length}}</div>

   <h5 
   v-if="message" 
   class="border-grey">{{message}}</h5>
   <h6 v-else>No message entered 😕</h6>

   <hr>

  <p>Uppercase message:{{messageUppercase}} </p>
  <p>Lowercase message: {{message  | messageLowercase}}</p>

  </q-page>
</template>

<script>
export default {
  data(){
    return{
      message:'I love Vue.js so hard!',
      counter:0
    }
  },
  computed:{
  messageUppercase(){
      console.log('message uppercase was fired')
      return this.message.toUpperCase()
    },
    errorStyle(){
      if(this.message.length>22){
        return {
          'color':'red',
          'background':'pink'
        }
      }
    }
  },
  methods:{
    clearMessage(){
      this.message=""
    },
   
    alertMessage(){
      alert(this.message)
    }
  
  },
  filters:{
    //filters are methods which accepts value
    //filter vs computed property
    //in computed property we have access to data and methods however in filter
    //we have no access to the above stuff,all we can do is to accept a value 
    //modify it and outputs it to the page
    messageLowercase(value){
      console.log('message lowercase was fired')
        return value.toLowerCase()
    }
  },
  directives:{
    autofocus:{
      //this is one of the hook functions
      inserted(el){
        el.focus()
      }
    }
  },
 
   mounted(){
    this.$refs.messageInput.className='bg-green'
  }
}
//what is refs? refs allow us to access a particular element in the DOM
//& then grab information from it and manipulate it in some way

//what do we use refs for? we use them for form validation, autofocusing fields
</script>

<style scoped>
  .border-grey{
    border:1px solid grey
  }
  input,button{
    font-size: 23px;
  }
  .error{
    color: red;
    background: pink;
  }
</style>
