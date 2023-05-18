<template>
    <div :class="$style.container">
        <div :class="$style.centerContainer">
            <div :class="$style.logo"></div>
            <div :class="$style.message">
                이륜차의 상징인 <span :class="$style.bold">‘오토바이’</span> 를
                <br />심볼화하였으며<br />
                <span :class="$style.colorRed">적색 포인트는</span><br />
                <span :class="$style.bold">‘고 RPM’ 및 ‘속도’</span> 를
                상징합니다.
            </div>
        </div>
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
export default class BiView extends Vue {}
</script>

<style lang="scss" module>
@import "@/assets/utils.scss";
.container {
    .centerContainer {
        display: flex;
        max-width: 1280px;
        padding-top: 300px;
        padding-bottom: 300px;
        justify-content: space-between;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        @include mobile {
            display: block;
            text-align: center;
            padding-bottom: 200px;
            padding-top: 200px;
        }
    }
    .logo {
        width: 100%;
        max-width: 415px;
        height: 150px;
        margin-left: 32px;
        background-image: url("@/assets/group3.png");
        background-repeat: no-repeat;
        background-size: contain;
        // background-position: center center;
        @include mobile {
            max-width: 320px;
            height: 116px;
            @include alignCenter;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .bold {
        font-weight: bold;
    }
    .colorRed {
        color: #cf0000;
        font-weight: bold;
    }
    .message {
        font-size: 32px;
        @include mobile {
            padding-top: 32px;
            font-size: 18px;
        }
    }
}
</style>
