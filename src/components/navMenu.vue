<template>
  <div :class="$style.nav">
    <div :class="$style.centerLogo">
      <router-link :to="'/'">
        <img :src="require(`@/assets/group1.png`)" />
      </router-link>
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
export default class navMenu extends Vue {}
</script>

<style lang="scss" module>
.nav {
  width: 100%;
  height: 118px;
  background-color: rgba(255, 255, 255, 0.356);
  z-index: 9;
  .centerLogo {
    width: 196.45px;
    height: 70px;
    margin: 0 auto;
    img {
      margin-top: 24px;
    }
  }
}
</style>
