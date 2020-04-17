import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import List from '@/components/List'
import Chat from '@/components/Chat'
import Module from '@/components/Module'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'List',
            component: List
        },
        {
            path: '/todo',
            name: 'Todo',
            component: Todo
        },
        {
            path: '/chat',
            name: 'Chat',
            component: Chat
        },
        {
            path: '/module',
            name: 'Module',
            component: Module
        },
    ]
})