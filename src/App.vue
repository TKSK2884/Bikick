<template>
  <div :class="$style.app" id="app">
    <div :class="$style.container">
      <div :class="$style.overBox">
        <navMenu />
        <div :class="$style.viewBox">
          <router-view />
        </div>
      </div>
      <div :class="$style.centerLinkBox">
        <div :class="$style.linkBox">
          <router-link :to="'/Bi'">BI </router-link>
          <router-link :to="'/Used'">중고매물보기</router-link>
          <router-link :to="'/Download'">앱 다운로드</router-link>
        </div>
      </div>
      <footerView />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import navMenu from "@/components/navMenu.vue";
import footerView from "@/components/footerView.vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    navMenu,
    footerView,
    // HelloWorld,
  },
})
export default class AppView extends Vue {}
</script>

<style lang="scss" module>
.overBox {
  position: relative;
}
.viewBox {
  width: 100%;
  height: calc(763px - 53px);
}
.centerLinkBox {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
.linkBox {
  width: calc(1280px - 840px);
  height: calc(49px + 50px + 27px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  a {
    width: 147px;
    height: 27px;
    text-align: center;
    color: #333333;
    text-decoration-line: none;
    font-size: 18px;
  }
}
</style>
<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
}
.router-link-exact-active.router-link-active {
  font-weight: bold;
}
</style>
