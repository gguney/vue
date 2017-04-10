<template>
    <div id="app">
        <!--<img class="logo">-->
        <h1>{{ message }}</h1>
        <p>Deneme</p>
        <p>{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
        <Sidebar></Sidebar>
    </div>
</template>
<script>
    import Sidebar from './components/Sidebar.vue'

    export default {
        components: {Sidebar},
        name: 'app',
        data () {
            return {
                message: 'Vue Starter',
                count: 0
            }
        },
    computed: {
        count () {
            return store.state.count
        }
    },
    methods: {
        increment () {
            this.count++;
        },
        decrement () {
            this.count--;

        }
    }
    }


</script>
<style lang="scss" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 60px;
        color: #42b983;
    }
    h1{
        color: bisque;
    }
</style>
