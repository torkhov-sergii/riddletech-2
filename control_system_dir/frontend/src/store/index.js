import Vue from 'vue'
import Vuex from 'vuex'
import bypasses from "@/store/models/bypasses";
import hint from "@/store/models/hint";
import music from "@/store/models/music";
import quest from "@/store/models/quest";
import riddles from "@/store/models/riddles";
import rooms from "@/store/models/rooms";
import signals from "@/store/models/signals";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseApiUrl: process.env.VUE_APP_BASE_API_URL
  },
  modules: {
    bypasses,
    hint,
    music,
    quest,
    riddles,
    rooms,
    signals,
  }
})
