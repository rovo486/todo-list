import Vuex from 'vuex'
import Vue from 'vue'
import { module1 } from './modules/module1'
import { module2 } from './modules/module2'

Vue.use(Vuex)
 
const store = new Vuex.Store({
    strict: process.env.NODE_DEV !== 'production',
    
    modules: {
        module1,
        module2
    },
    state: {
        chatList: [
            {
              id: 1,
              lastMessage: '채팅 메시지1',
              new: 1
            },
            {
              id: 2,
              lastMessage: '채팅 메시지2',
              new: 2
            },
            {
              id: 3,
              lastMessage: '채팅 메시지3',
              new: 1
            },
            {
              id: 4,
              lastMessage: '채팅 메시지4',
              new: 5
            }
          ]
    },
    mutations: {
        readChat(state, chat) {
            state.chatList.forEach(item => {
                if (item.id === chat.id) {
                    item.new = 0
                }
            })
        }
    },
    actions: {
        readChat( context, chat) {
            context.commit('readChat', chat)
        }
    },
})


export default store