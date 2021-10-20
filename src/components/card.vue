<template>
    <v-card
  elevation="24"
  outlined
  shaped
>
<!-- <v-card-title></v-card-title>
<v-card-text></v-card-text>
<v-card-actions></v-card-actions> -->

<slot></slot>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>