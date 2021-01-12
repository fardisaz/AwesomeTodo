//in store obj we have 4 diifferent objects
//the first is state

//all the data go inside this
const state={
    //we want to create an object of an object bc in 
    //future when we use firebase , our data should be
    //presented in obj format
    tasks:{
        'ID1':{
            name:'Go to shop',
          completed:false,
          dueDate:'2020/12/13',
          dueTime:'18:30'
        },
        'ID2':{name:'Get bananas',
              completed:false,
               dueDate:'2020/10/13',
              dueTime:'10:30'},
        'ID3':{
            name:'Get apples',
          completed:false,
           dueDate:'2020/07/05',
          dueTime:'13:15'
        }
    }
  


}
//this contains methods which manipulates the state.These methods can not be asynchronous
const mutations={
updateTask:(state,payload)=>{
    console.log('payload from mutation:',payload);
}
}
//this object also contains methods ,this method can be asynchronous
const actions={
updateTask:({commit},payload)=>{
    // console.log('updateTask action');
    // console.log('payload:',payload);
    commit('updateTask',payload)
}
}
//in this we create methods which get the data from the state
//which then can be used by the components in our app
const getters={
    tasks:(state)=>{
        return state.tasks
    }
}
//namespaced property allows to have multiple store modules
//in our app 
export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}