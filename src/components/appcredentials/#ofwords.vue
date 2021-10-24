<template>
  <Card>
    <v-card-title>Enter how many words you want to unscramble</v-card-title>
    <v-text-field
      class="ml-7"
      label="Number of Words"
      hide-details="auto"
      v-model="$store.state.number"
    ></v-text-field>
  </Card>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "../card.vue";
export default Vue.extend({
  components: {
    Card,
  },
});
</script>
