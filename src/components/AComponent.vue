<template>
    <div class="template-class">
       {{ $store.state.stateVariable }}
        <br>
        This is a prop variable: {{ propVariable }}
        <br>
        <input v-model="message"/>
        This is a computed variable: {{ reversedMessage }}
    </div>

</template>

<script>
    export default {
        components:{

        },
        data () {
            return {
                message: 'MessageMenu'
            }
        },
        props:[
            'propVariable'
        ],
        computed:{
            reversedMessage: function(){
                return this.message.split('').reverse().join('');
            }
        },
        mounted: function(){
        },


    }
</script>
<style lang="scss" scoped>
    .template-class{
        background: #e5ffe3;
    }
</style>
