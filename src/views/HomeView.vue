<template>
  <div :class="$style.home">
    <div :class="$style.backIMG">
      <img :src="require(`@/assets/group8.png`)" />
    </div>
    <div :class="$style.centerContainer">
      <div :class="$style.textBox">
        <div :class="$style.BMSG">바이킥</div>
        <div :class="$style.SMSG">No.1 국내 이륜차 커뮤니티</div>
      </div>
      <div :class="$style.textBox">
        <div :class="$style.NBMSG">{{ Numberincrease }}</div>
        <div :class="$style.SMSG">건의 소통이 지금도 진행 중!</div>
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
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .centerContainer {
    display: flex;
    width: calc(1280px - 76 * 2px);
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .backIMG {
    width: 100%;
    height: 804px;
    position: absolute;
    object-fit: cover;
    top: 0;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.textBox {
  color: #ffffff;
  font-weight: bold;
  .BMSG {
    font-size: 64px;
    padding-bottom: calc(132px - 64px - 32px);
  }
  .SMSG {
    font-size: 32px;
  }
  .NBMSG {
    font-size: 64px;
    padding-bottom: calc(132px - 64px - 32px);
    text-align: right;
  }
}
</style>
