<template>
  <div :class="$style.biContainer">
    <div :class="$style.centerContainer">
      <div :class="$style.biLogo">
        <img :src="require(`@/assets/group3.png`)" />
      </div>
      <div :class="$style.biMSG">
        이륜차의 상징인 <span :class="$style.bold">‘오토바이’</span> 를
        <br />심볼화하였으며<br />
        <span :class="$style.colorRed">적색 포인트는</span><br />
        <span :class="$style.bold">‘고 RPM’ 및 ‘속도’</span> 를 상징합니다.
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
.biContainer {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  .centerContainer {
    display: flex;
    width: calc(1280px - 89 * 2px);
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .biLogo {
    width: 415px;
    height: 148px;
    margin-left: calc(121px - 89px);

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
  .biMSG {
    font-size: 32px;
  }
}
</style>
