<template>
    <div :class="$style.home">
        <div :class="$style.textContainer">
            <div :class="$style.textBox">
                <div :class="$style.text">바이킥</div>
                <div :class="$style.secondText">No.1 국내 이륜차 커뮤니티</div>
            </div>
            <div :class="$style.textBox2">
                <div :class="$style.numberText">{{ Numberincrease }}</div>
                <div :class="$style.thirdText">건의 소통이 지금도 진행 중!</div>
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
export default class HomeView extends Vue {
    Numberincrease: number = 1325967;
    timer?: number;
    mounted() {
        this.Numberincrease = this.$store.getters.getMyNumber;
        this.timer = setInterval(this.increaseHandler, 5000);
    }
    increaseHandler() {
        this.Numberincrease += this.getRandomInt();
    }
    beforeDestroy() {
        clearInterval(this.timer);

        this.$store.commit("setMyNumber", this.Numberincrease);
    }
    getRandomInt() {
        return Math.round(Math.random() * 3);
    }
}
</script>

<style lang="scss" module>
@import "@/assets/utils.scss";
.home {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url("@/assets/group8.png");

    width: 100%;
    height: 800px;
    @include mobile {
        height: 463px;
        margin-bottom: 120px;
    }
}
.textContainer {
    display: flex;
    padding-top: 300px;
    justify-content: space-between;
    @include mobile {
        display: block;
        padding-top: 70px;
    }
}

.textBox,
.textBox2 {
    padding-left: 70px;
    padding-right: 70px;
    color: #ffffff;
    font-weight: bold;
    @include mobile {
        padding-top: 35px;
    }
    .text {
        font-size: 64px;
        padding-bottom: calc(132px - 64px - 32px);
        @include mobile {
            font-size: 42px;
            padding-bottom: 12px;
        }
    }
    .secondText {
        font-size: 32px;
        @include mobile {
            font-size: 24px;
        }
    }
    .numberText {
        font-size: 64px;
        padding-bottom: calc(132px - 64px - 32px);
        text-align: right;
        @include mobile {
            font-size: 42px;
            padding-bottom: 12px;
        }
    }
    .thirdText {
        font-size: 32px;
        text-align: right;
        @include mobile {
            font-size: 24px;
        }
    }
}
.textBox {
    @include mobile {
        padding-left: 30px;
        padding-right: 0px;
    }
}
.textBox2 {
    @include mobile {
        padding-right: 30px;
        padding-left: 0px;
    }
}
</style>
