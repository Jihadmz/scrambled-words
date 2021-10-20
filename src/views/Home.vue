<template>
<div class="home">
<Level class="ma-6 pl-6"/>
<Name class="ma-6"/>


        <div class="ready">
            <h2>Ready?</h2>
            <hr>
            
            <v-btn
  color="primary"
  elevation="9"
  @click="startchallenge()"
>Start Challenge
</v-btn>
          
</div>
</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Level from '../components/appcredentials/level.vue'
  import Name from '../components/appcredentials/name.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      Level,
      Name,
    },
    methods: {
     startchallenge(){
       if(this.$store.state.radioGroup == '' || this.$store.state.name == ''){
         alert('Please fill both fields')
       }
       else{
       this.$store.commit('definingwordslevel')
       this.$router.replace('/game')
     }
     }
    }
  })
</script>
