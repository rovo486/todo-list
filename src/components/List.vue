<template>
    <div>
        <button @click="todo">todo</button>
        <button @click="chat">chat</button>
        <button @click="module">module</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        todo() {
            this.$router.push({
                path: '/todo'
            })
        },
        chat() {
            this.$router.push({
                path: '/chat'
            })
        },
        module() {
            this.$router.push({
                path: '/module'
            })
        }
    }
}
</script>