<template>
    <div :class="$style.nav">
        <router-link :to="'/'">
            <div :class="$style.centerLogo"></div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
    components: {
        // HelloWorld,
    },
})
export default class NavMenu extends Vue {}
</script>

<style lang="scss" module>
@import "@/assets/utils.scss";
.nav {
    width: 100%;
    height: 118px;

    position: absolute;
    background-color: rgba(255, 255, 255, 0.356);
    z-index: 9;

    @include mobile {
        height: 70px;
    }
    .centerLogo {
        width: 200px;
        max-width: 200px;
        height: 70px;

        margin-left: auto;
        margin-right: auto;
        margin-top: 16px;

        background-image: url("@/assets/group1.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;

        @include mobile {
            width: 115px;
            height: 40px;
        }
    }
}
</style>
