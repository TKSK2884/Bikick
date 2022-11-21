<template>
  <div :class="$style.footer">
    <div :class="$style.footerLogo">
      <img :src="require(`@/assets/group2.png`)" />
    </div>
    <div :class="$style.footerMSG">
      <div :class="$style.footerBMSG">
        (C) 2022 by BIKICK, All Rights Reserved.
      </div>
      <div :class="$style.footerSMSG">
        커뮤니티의 모든 이용 권리는 바이킥에게 있으며, 저작권의 경우 각 게시물
        저작자에게 있습니다.<br />
        커뮤니티 약관 위반 시 이용약관에 따라 추가 제재 및 법적 조치가 진행될 수
        있습니다.
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
export default class footerView extends Vue {}
</script>

<style lang="scss" module>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 120px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;

  .footerLogo {
    width: 164px;
    height: 58px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .footerMSG {
    padding: 30px;
  }
  .footerBMSG {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 4px;
  }
  .footerSMSG {
    font-size: 13px;
    color: #595959;
  }
}
</style>
