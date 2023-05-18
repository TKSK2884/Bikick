<template>
    <div :class="$style.container">
        <div :class="$style.logo">
            <img :src="require(`@/assets/group2.png`)" />
        </div>
        <div :class="$style.messageBox">
            <div :class="$style.message">
                (C) 2022 by BIKICK, All Rights Reserved.
            </div>
            <div :class="$style.secondMessage">
                커뮤니티의 모든 이용 권리는 바이킥에게 있으며, 저작권의 경우 각
                게시물 저작자에게 있습니다.<br />
                커뮤니티 약관 위반 시 이용약관에 따라 추가 제재 및 법적 조치가
                진행될 수 있습니다.
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
export default class Footer extends Vue {}
</script>

<style lang="scss" module>
@import "@/assets/utils.scss";

.container {
    width: 100%;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;

    @include mobile {
        display: block;
        text-align: center;
    }
    .logo {
        @include mobile {
            width: 80px;
            height: 30px;
            padding-top: 12px;
            display: inline-block;
        }
        img {
            width: 100%;
        }
    }
    .messageBox {
        padding: 30px;
        @include mobile {
            padding: 6px;
            margin-left: 18px;
            margin-right: 18px;
        }
    }
    .message {
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 4px;
        @include mobile {
            font-size: 13px;
        }
    }
    .secondMessage {
        font-size: 13px;
        color: #595959;
        @include mobile {
            font-size: 11px;
        }
    }
}
</style>
