<template>
    <div :class="$style.nav">
        <router-link :to="'/'">
            <div :class="$style.logo"></div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class NavMenu extends Vue {}
</script>

<style lang="scss" module>
@import "@/assets/utils.scss";
.nav {
    width: 100%;
    height: 118px;

    position: absolute;
    background-color: #ffffff5b;
    z-index: 9;

    @include mobile {
        height: 70px;
    }
    .logo {
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
