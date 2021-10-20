<template>
    <v-app id="inspire">
    <v-navigation-drawer  v-model="$store.state.drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="$store.state.drawer = !$store.state.drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Scramble Words</v-toolbar-title>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>