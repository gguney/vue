<template>
    <div class="template-class">
       {{ $store.state.stateVariable }}
        <br>
    </div>

</template>

<script>
    export default {
        components:{

        },
        data () {
            return {
                message: 'This is a message from menu component.'
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
