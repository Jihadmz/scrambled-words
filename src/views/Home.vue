<template>
  <div class="home">
    <Level class="ma-6 pl-6" />
    <Name class="ma-6" />
    <Numofwords class="ma-6" />

    <div class="ready">
      <h2>Ready?</h2>
      <hr />

      <v-btn color="primary" elevation="9" @click="startchallenge()"
        >Start Challenge
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Level from "../components/appcredentials/level.vue";
import Name from "../components/appcredentials/name.vue";
import Numofwords from "../components/appcredentials/#ofwords.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Level,
    Name,
    Numofwords,
  },
  methods: {
    startchallenge() {
      if (this.$store.state.radioGroup == "" || this.$store.state.name == "") {
        alert("Please fill all of the fields");
      } else if (this.$store.state.number <= 9) {
        alert("Enter a number between 10 and 28");
      } else {
        this.$store.commit("definingwordslevel");
        this.$router.replace("/game");
      }
    },
  },
});
</script>
