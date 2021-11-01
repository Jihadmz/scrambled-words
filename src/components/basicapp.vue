<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="$store.state.drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Scramble Words
          </v-list-item-title>
          <v-list-item-subtitle>
            V 2.0
            <span @click="onclick()" v-if="new_features_trigger == 0"
              ><router-link to="/new-features">New Features</router-link></span
            >
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in $store.state.items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ "mdi-bug" }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              ><a class="bug" href="mailto:jihadmahfouz8@gmail.com"
                >Report a Bug</a
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon
        @click="$store.state.drawer = !$store.state.drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Scramble Words</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      new_features_trigger: 0,
    };
  },

  mounted() {
    if (localStorage.new_features_trigger) {
      this.new_features_trigger = localStorage.new_features_trigger;
    }
  },

  watch: {
    new_features_trigger(newvalue) {
      localStorage.new_features_trigger = newvalue;
    },
  },

  methods: {
    onclick() {
      this.resetting();
      console.log("clicked");
    },
    resetting() {
      this.new_features_trigger = 1;
    },
  },
});
</script>

<style lang="scss" scoped>
.bug {
  text-decoration: none;
  color: black;
  &:visited {
    color: purple;
  }
}
</style>
