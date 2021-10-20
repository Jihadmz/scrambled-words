<template>
    <Card>
        <v-card-title>Enter your Name</v-card-title>
        <v-text-field 
        class="ml-7"
      label="Name"
      :rules="rules"
      hide-details="auto"
      v-model="$store.state.name"
    ></v-text-field>
    </Card>
</template>


<script >
import Vue from 'vue';
import Card from '../card.vue'

export default Vue.extend({
    components: {
        Card
    },
    data() {
        return {
         rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
  }     
    },
    methods: {
        
    }
})
</script>