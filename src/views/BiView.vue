<template>
    <div :class="$style.index">
        <div :class="$style.container">
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

@Component({
    components: {},
})
export default class BiView extends Vue {}
</script>

<style lang="scss" module>
@import "@/assets/utils.scss";
.index {
    width: 100%;

    .container {
        max-width: 1280px;

        margin-left: auto;
        margin-right: auto;
        padding-top: 300px;
        padding-bottom: 300px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        @include mobile {
            padding-bottom: 200px;
            padding-top: 200px;

            display: block;

            text-align: center;
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
        font-weight: bold;

        color: #cf0000;
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
