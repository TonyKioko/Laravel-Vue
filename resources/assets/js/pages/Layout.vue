<style>

</style>

<template>
<div id="app-layout">
    <Navigation></Navigation>
    <router-view></router-view>
</div>
</template>

<script>
import Navigation from '../components/global/Navigation.vue';
export default {
    Navigation,

    created() {
        this.$store.dispatch('loadCafes');
        this.$store.dispatch('loadUser');
        this.$store.dispatch('loadBrewMethods');

    }

}
</script>
