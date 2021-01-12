<template>
  <q-page class="q-pa-md">


    <q-list separator bordered >
      <task v-for="(task,key) in tasks" 
      :key="key" :task="task" :id="key"></task>
      
            
    </q-list>
  </q-page>
</template>

<script>
import Task from 'src/components/Tasks/Task.vue'

import {mapGetters } from 'vuex'
export default {
 computed:{
   //the first arg of this method is the name of the module
   //we are getting from
   //the second arg is the name of all getters we want 
   //to get
  ...mapGetters('tasks',['tasks'])
 },
 components:{
   'task':require('../components/Tasks/Task').default
  
 }
}
</script>

<style scoped>
  
</style>
