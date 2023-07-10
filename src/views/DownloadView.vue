<template>
    <div :class="$style.container">
        <div :class="$style.semiContainer">
            <div :class="$style.logo"></div>
        </div>
        <div :class="$style.message">“이륜차 중고거래, 커뮤니티는 바이킥”</div>
        <div :class="$style.linkBox">
            <a :href="'https://www.apple.com/kr/app-store/'"
                ><div :class="[$style.link, $style.appStore]"></div
            ></a>

            <a :href="'http://play.google.com/'"
                ><div :class="[$style.link, $style.googlePlay]"></div
            ></a>
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

.container {
    text-align: center;
}

.semiContainer {
    padding-top: 180px;

    @include mobile {
        padding-top: 120px;
    }
}

.logo {
    width: 100%;
    max-width: 415px;
    height: 150px;

    margin-left: auto;
    margin-right: auto;

    background-image: url("@/assets/group12.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;

    @include mobile {
        max-width: 320px;
        height: 116px;
    }
}

.message {
    padding-top: 45px;
    padding-bottom: 45px;

    font-size: 42px;
    font-weight: 900;

    @include mobile {
        margin-left: 10px;
        margin-right: 10px;

        font-size: 38px;
    }
}
.linkBox {
    margin-top: 80px;
    margin-bottom: 160px;

    display: flex;
    justify-content: center;

    @include mobile {
        width: 100%;

        margin-top: 50px;
        margin-bottom: 90px;

        display: block;
    }

    a {
        margin-left: 15px;
        margin-right: 15px;
    }

    .link {
        width: 270px;
        height: 80px;

        padding: 20px;

        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;

        @include mobile {
            width: 100%;
            max-width: 220px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .appStore {
        background-image: url("@/assets/appStore.png");
    }

    .googlePlay {
        background-image: url("@/assets/googlePlay.png");
    }
}
</style>
