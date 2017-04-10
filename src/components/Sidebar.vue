<template>
    <h1 class="sidebar">{{ message }}</h1>
</template>

<script>
    import ClassExample from '../classes/ClassExample.js';
    var deneme = new ClassExample();
    deneme.deneme();
    export default {
        name: 'Sidebar',
        data () {
            return {
                message: 'This is a siderbar.'
            }
        }
    }
</script>
<style lang="scss">
    .sidebar {
        background: brown;
    }
</style>
