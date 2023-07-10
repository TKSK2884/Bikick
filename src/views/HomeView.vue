<template>
    <div :class="$style.index">
        <div :class="$style.container">
            <div :class="$style.textBox">
                <div :class="$style.mainText">바이킥</div>
                <div :class="[$style.text, $style.left]">
                    No.1 국내 이륜차 커뮤니티
                </div>
            </div>
            <div :class="$style.textBox">
                <div :class="[$style.mainText, $style.right]">
                    {{ Numberincrease }}
                </div>
                <div :class="[$style.text, $style.right]">
                    건의 소통이 지금도 진행 중!
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {},
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
.index {
    width: 100%;
    height: 800px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url("@/assets/group8.png");

    @include mobile {
        height: 463px;

        margin-bottom: 120px;
    }
}
.container {
    padding-top: 300px;

    display: flex;
    justify-content: space-between;

    @include mobile {
        padding-top: 70px;

        display: block;
    }
}

.textBox {
    padding-left: 70px;
    padding-right: 70px;

    font-weight: bold;

    color: #ffffff;
    @include mobile {
        padding-top: 35px;
    }
    .mainText {
        padding-bottom: 36px;

        font-size: 64px;

        @include mobile {
            padding-bottom: 12px;

            font-size: 42px;
        }
    }

    .text {
        font-size: 32px;
        @include mobile {
            font-size: 24px;
        }
    }

    .right {
        text-align: right;
    }

    @include mobile {
        padding-left: 30px;
        padding-right: 0px;
    }
}
</style>
