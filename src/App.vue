<template>
    <div :class="$style.app" id="app">
        <div :class="$style.container">
            <NavMenu />
            <div :class="$style.viewBox">
                <router-view />
            </div>
            <linkBox />
            <Footer />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavMenu from "@/components/NavMenu.vue";
import Footer from "@/components/Footer.vue";
import linkBox from "@/components/LinkBoxView.vue";

// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
    components: {
        NavMenu,
        Footer,
        linkBox,
        // HelloWorld,
    },
})
export default class AppView extends Vue {}
</script>

<style lang="scss" module>
.container {
}
.viewBox {
    width: 100%;
}
</style>
<style lang="scss">
* {
    box-sizing: border-box;
}
html,
body {
    margin: 0;
}
.router-link-exact-active.router-link-active {
    font-weight: bold;
}
</style>
