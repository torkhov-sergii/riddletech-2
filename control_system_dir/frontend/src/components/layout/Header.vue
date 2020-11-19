<template>
  <div>
    <v-app-bar
        app
        color="indigo"
        dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Riddle Tech</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list dense>
        <v-list-item
            link
            v-for="quest in guests.all"
            :key="quest.id"
            v-on:click="selectQuest(quest)"
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ quest.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "Header",
  components: {},
  data: () => ({
    drawer: false, //меню
  }),
  computed: {
    ...mapGetters({
      guests: 'quest/get',
    }),
  },
  methods: {
    async selectQuest(quest) {
      this.drawer = false;
      await this.$store.dispatch('quest/fetchAllByQuestId', quest.id)
    },
  },
  async mounted() {
    await this.$store.dispatch('quest/fetchQuests')
  }
}
</script>

<style scoped>

</style>