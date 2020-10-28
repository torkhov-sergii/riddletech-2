<template>
  <v-app>
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
          v-for="quest in quests"
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

    <v-main class="dashboard">
      <v-container
        fluid
      >
        <div v-if="quest">
          <v-progress-linear
            v-model="gameProgress"
            color="success"
            striped
            height="20"
          >
            <template v-slot="{ value }">
              <strong>{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>

          <v-row>
            <v-col cols="10">
              <v-card class="d-flex justify-space-between align-center mb-4" style="height: 44px">
                <v-card-title class="py-0">{{ quest.title }}</v-card-title>

                <v-card-title>
                  <countdown
                    v-if="gameStarted"
                    :time=gameTime
                    @end="handleCountdownEnd"
                    @progress="handleCountdownProgress"
                    :transform="transformCountdown"
                  >
                    <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }}</template>
                  </countdown>
                </v-card-title>
              </v-card>

              <v-expansion-panels
                v-model="roomSetPanel"
                :accordion="true"
                :multiple="true"
                class="room-set"
              >
                <v-expansion-panel
                  v-for="room in quest.roomSet"
                  :key="room.id"
                >
                  <v-expansion-panel-header>Комната: {{ room.title }}</v-expansion-panel-header>

                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="2">
                        <div>Загадки</div>
                      </v-col>
                      <v-col cols="2">
                        <div>Пропуски</div>
                      </v-col>
                      <v-col cols="2">
                        <div>Музыка</div>
                      </v-col>
                      <v-col cols="3">
                        <div>Подсказки</div>
                      </v-col>
                      <v-col cols="3">
                        <div>Сигналы</div>
                      </v-col>
                    </v-row>

                    <v-row
                      v-for="riddle in room.riddleSet"
                      :key="riddle.id"
                    >
                      <v-col cols="2">
                        <h4>{{ riddle.title }}</h4>
                        <h5>({{ riddle.typeId.title }})</h5>
                      </v-col>

                      <v-col cols="2">
                        <v-tooltip
                          top
                          v-for="bypass in riddle.bypassSet"
                          :key="bypass.id"
                          class="mb-5"
                          :class="{ 'green--text' : bypass.state }"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              small
                              dark
                              class="mb-2 mr-2 indigo"
                              v-on:click="makeBypass(bypass)"
                              :class="{ 'success' : bypass.state }"
                              v-bind="attrs"
                              v-on="on"
                            >
                              <v-icon>mdi-arrow-right-circle-outline</v-icon>
                            </v-btn>
                          </template>
                          <span>{{ bypass.title }}</span>
                        </v-tooltip>
                      </v-col>
<!--Музыка-->
                      <v-col cols="2">
                        <v-chip
                          small
                          color="default"
                          class="mr-2 mb-2">
                          Музыка 1
                        </v-chip>

<!--                        <v-btn small outlined color="indigo" class="mb-2">-->
<!--                          <v-icon left>mdi-play</v-icon>-->
<!--                          Музыка 1-->
<!--                        </v-btn>-->
                      </v-col>
<!--Подсказки-->
                      <v-col cols="3">
                        <v-tooltip
                          top
                          v-for="hint in riddle.hintSet"
                          :key="hint.id"
                          class="mb-5"
                          :class="{ 'green--text' : hint.state }"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              small
                              outlined
                              dark
                              class="mb-2 mr-2 indigo"
                              v-on:click="makeHint(hint)"
                              :class="{ 'success' : hint.state }"
                              v-bind="attrs"
                              v-on="on"
                            >
                              <v-icon>mdi-play</v-icon>
                            </v-btn>
                          </template>
                          <span>{{ hint.title }}</span>
                        </v-tooltip>
                      </v-col>

                      <v-col cols="3">
                        <v-chip
                          small
                          :class="{ 'success' : signal.state }"
                          color="default"
                          v-for="signal in riddle.signalSet"
                          :key="signal.id"
                          class="mr-2 mb-2">
                          {{ signal.title }}
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>

            <v-col cols="2">
              <div class="mb-4">
                <v-btn
                  large
                  block
                  color="success"
                  @click.stop="gameStartPopup = true"
                  v-if="!gameStarted"
                >
                  start game
                </v-btn>
                <v-btn
                  large
                  block
                  color="error"
                  @click.stop="gameStopPopup = true"
                  v-else
                >
                  stop game
                </v-btn>
              </div>

              <v-dialog
                v-model="gameStartPopup"
                max-width="290"
              >
                <v-card>
                  <v-card-title class="headline">Начать новую игру</v-card-title>

                  <v-card-text>
                    Время игры и состояние датчиков будет сброшено
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="darken-1"
                      text
                      @click="gameStartPopup = false"
                    >
                      Закрыть
                    </v-btn>

                    <v-btn
                      color="success"
                      @click="startGame()"
                    >
                      Start
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog
                v-model="gameStopPopup"
                max-width="290"
              >
                <v-card>
                  <v-card-title class="headline">Остановить игру</v-card-title>

                  <v-card-text>
                    Время игры и состояние датчиков будет сброшено
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="darken-1"
                      text
                      @click="gameStopPopup = false"
                    >
                      Закрыть
                    </v-btn>

                    <v-btn
                      color="error"
                      @click="stopGame()"
                    >
                      Stop
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-card class="mb-4">
                <v-card-title>General hints</v-card-title>

                <v-card-text>
                  <v-btn outlined block color="indigo" class="mb-2 justify-start">
                    <v-icon left>mdi-play</v-icon>
                    No force
                  </v-btn>

                  <v-btn outlined block color="indigo" class="mb-2 justify-start">
                    <v-icon left>mdi-play</v-icon>
                    Be careful
                  </v-btn>

                  <v-btn outlined block color="indigo" class="mb-2 justify-start">
                    <v-icon left>mdi-play</v-icon>
                    No contact
                  </v-btn>

                  <v-btn outlined block color="indigo" class="mb-2 justify-start">
                    <v-icon left>mdi-play</v-icon>
                    Stop
                  </v-btn>

                  <v-btn outlined block color="indigo" class="mb-2 justify-start">
                    <v-icon left>mdi-play</v-icon>
                    Answer
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div v-else class="text-center">
          <v-alert type="warning">
            Выберите квест
          </v-alert>
        </div>

      </v-container>
    </v-main>

    <v-footer
      color="indigo"
    >
      <span class="white--text">Kadroom &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import gql from "graphql-tag";
  import moment from 'moment';

  export default {
    name: 'App',
    components: {},
    data: () => ({
      selectedQuestId: null,
      quests: null,
      quest: null,
      drawer: false, //меню
      gameStartPopup: false,
      gameStopPopup: false,
      gameProgress: 0,
      gameStarted: false,
      gameTime: 6 * 1000,
      roomSetPanel: [0, 1, 2, 3, 4, 5]
    }),
    apollo: {
      quests: {
        query: gql`query {
                    quests {
                      id,
                      title
                    }
                }`,
      },
      quest: {
        query: gql`query questQuery($id: Int!) {
                    quest(id: $id) {
                      id,
                      title,
                      roomSet {
                        id,
                        title,
                        riddleSet {
                            id,
                            title,
                            state,
                            typeId {
                                id,
                                title,
                            },
                            signalSet {
                                id,
                                title,
                                state
                            },
                            hintSet {
                                id,
                                title,
                                state
                            },
                            bypassSet {
                                id,
                                title,
                                state
                            }
                        }
                      }
                    }
                }`,
        variables() {
          return {
            id: this.selectedQuestId
          }
        },
        skip() {
          return !this.selectedQuestId
        },
        pollInterval: 30000
      },
    },
    created() {
      // this.getRooms();
    },
    methods: {
      selectQuest: function (quest) {
        this.drawer = false;
        this.selectedQuestId = quest.id;
      },
      handleCountdownEnd: function () {
        this.gameProgress = 100;
        this.gameStarted = false;
      },
      handleCountdownProgress(data) {
        this.gameProgress = 100 - 100 / (this.gameTime / data.totalMilliseconds);
      },
      startGame() {
        this.drawer = false;
        this.gameStartPopup = false;
        this.gameProgress = 0;
        this.gameStarted = true;
      },
      stopGame() {
        this.gameStopPopup = false;
        this.gameProgress = 0;
        this.gameStarted = false;
      },
      transformCountdown(props) {
        Object.entries(props).forEach(([key, value]) => {
          // Adds leading zero
          const digits = value < 10 ? `0${value}` : value;

          props[key] = `${digits}`;
        });

        return props;
      },
      async makeBypass(bypass) {
        await this.$apollo.mutate({
          mutation: gql`mutation updateBypass($id: String, $state: Boolean) {
                      updateBypass(id: $id, state: $state) {
                        bypass {
                          id
                          state
                          title
                        }
                        ok
                      }
                    }`,
          variables: {
            id: bypass.id,
            state: true
          },
        })
      },
      async makeHint(hint) {
        await this.$apollo.mutate({
          mutation: gql`mutation updateHint($id: String, $state: Boolean) {
                      updateHint(id: $id, state: $state) {
                        hint {
                          id
                          state
                          title
                        }
                        ok
                      }
                    }`,
          variables: {
            id: hint.id,
            state: true
          },
        })
      },
    },
    props: {
      source: String,
    },
  };
</script>

<style lang="scss">
  .dashboard {
    background: #f6f8ff;
  }

  .room-set {
    font-size: 13px;

    .v-expansion-panel-header {
      border-bottom: 1px solid #e8e8e8;
    }
  }
</style>