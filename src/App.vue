<template>
    <div id="app">
        <h1>This is simple Vue app with Vuex and Component support.</h1>
        <ul>
            <li>
                <button @click="changeVariable">Change Directly By State Action Button</button>
                <AComponent></AComponent>
            </li>
            <li>
                <button @click="changeByFunction">Change By Component Function Button</button><br>
                <input type="text" v-model="message"/><br>
                This is var from state: {{ $store.state.stateVariableTwo }}<br>
                This is message from app: {{ message }}

            </li>
        </ul>


        <br>
    </div>
</template>
<script>
    import AComponent from './components/AComponent.vue'
    import {mapActions} from 'vuex'
    export default {
        components: {
            AComponent
        },
        data () {
            return {
                message: 'Foo'
            }
        },
        methods: {
            ...mapActions([ 'changeVariable', 'changeVariableWithParam']),
            changeByFunction(){
                this.changeVariableWithParam(this.message);
            }
        }

    }
</script>
<style lang="scss" scoped>

</style>
