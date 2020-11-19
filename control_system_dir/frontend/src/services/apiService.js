import gql from "graphql-tag";
import {apolloClient} from "@/vue-apollo"

export const ApiService = {
    async fetchQuests() {
        return await apolloClient.query({
           query: gql`query {
                    quests {
                      id,
                      title
                    }
                }`
       });
    },
    async fetchAllByQuestId(selectedQuestId) {
        return await apolloClient.query({
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
            variables: {
                id: selectedQuestId
            },
        })
    }
}
