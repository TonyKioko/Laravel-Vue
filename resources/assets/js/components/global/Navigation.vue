<style lang="scss">


</style>
<template>
    <nav class="top-navigation">
        <router-link :to="{ name: 'home'}">
            <span class="logo">Roast And Brew</span>
        </router-link>

        <ul class="links">
            <li>
                <router-link :to="{ name: 'cafes' }">
                    Cafes
                </router-link>
            </li>
        </ul>

        <div class="right">
            <img class="avatar" :src="user.avatar" v-show="userLoadStatus == 2"/>
        </div>

    </nav>
</template>
<script>
    export default {
            /*
        Defines the computed properties on the component.
        */
        computed: {
        /*
            Retrieves the User Load Status from Vuex
        */
            userLoadStatus(){
                return this.$store.getters.getUserLoadStatus;
            },

        /*
            Retrieves the User from Vuex
        */
            user(){
                return this.$store.getters.getUser;
            }
        }
    }
</script>