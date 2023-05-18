<template>
    <div :class="$style.container">
        <div :class="$style.semiContainer">
            <div :class="$style.logo"></div>
        </div>
        <div :class="$style.message">“이륜차 중고거래, 커뮤니티는 바이킥”</div>
        <div :class="[$style.linkBox, $style.double]">
            <a :href="'https://www.apple.com/kr/app-store/'"
                ><div :class="$style.linkApple"></div
            ></a>

            <a :href="'http://play.google.com/'"
                ><div :class="$style.linkGoogle"></div
            ></a>
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
        font-size: 38px;
        margin-left: 10px;
        margin-right: 10px;
    }
}
.linkBox {
    margin-top: 80px;
    margin-bottom: 160px;
    display: flex;
    justify-content: center;
    @include mobile {
        margin-top: 50px;
        margin-bottom: 90px;
        display: block;
        width: 100%;
    }
    a {
        margin-left: 15px;
        margin-right: 15px;
    }
    .linkApple,
    .linkGoogle {
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
    .linkApple {
        background-image: url("@/assets/image 36.png");
    }
    .linkGoogle {
        background-image: url("@/assets/image 35.png");
    }
}
</style>
