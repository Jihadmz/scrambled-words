<template>
  <Card>
    <v-card-title>Select your level</v-card-title>
    <v-container class="px-0" fluid>
      <v-radio-group v-model="$store.state.radioGroup">
        <v-radio
          v-for="n in ['Hard', 'Medium', 'Easy']"
          :key="n"
          :label="n"
          :value="n"
        ></v-radio>
      </v-radio-group>
    </v-container>
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
