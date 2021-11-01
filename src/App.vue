<template>
  <BasicApp />
</template>

<script lang="ts">
import BasicApp from "./components/basicapp.vue";
import store from "./store";
import Vue from "vue";
import { set } from "vue/types/umd";

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    BasicApp,
  },
});
</script>
