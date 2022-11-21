<template>
  <div :class="$style.DLContainer">
    <div :class="$style.DLLogo">
      <img :src="require(`@/assets/group12.png`)" />
    </div>
    <div :class="$style.DLMSG">“이륜차 중고거래, 커뮤니티는 바이킥”</div>
    <div :class="$style.AppDL">
      <a :href="'https://www.apple.com/kr/app-store/'">
        <img :src="require(`@/assets/image 36.png`)" />
      </a>
      <a :href="'http://play.google.com/'">
        <img :src="require(`@/assets/image 35.png`)" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CenterView from "@/components/centerContainer.vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  },
})
export default class BiView extends Vue {}
</script>

<style lang="scss" module>
.DLContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .DLLogo {
    width: 415px;
    height: 148px;
    margin-top: 182px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .DLMSG {
    padding: 45px;
    font-size: 42px;
    font-weight: 900;
  }
  .AppDL {
    img {
      margin-right: 34px;
      padding-top: 39px;
    }
  }
}
</style>
