<template>
  <div :class="$style.detailsContainer">
    <div :class="$style.centerContainer">
      <div :class="$style.bikeIMG" :style="getImageStyle()">
        <div :class="$style.mark" v-on:click="clickMark(targetObject.id)">
          <div v-if="gettedStore[transHaveID] == true">
            <img :src="require(`@/assets/Vector1.png`)" />
          </div>
          <div v-else>
            <img :src="require(`@/assets/Vector0.png`)" />
          </div>
        </div>
        <!-- <img :src="`${targetObject.thumbnail}`" /> -->
      </div>
      <div :class="$style.textBox">
        <div :class="$style.name">{{ targetObject.name }}</div>
        <div :class="$style.date">{{ targetObject.date }}</div>
        <div :class="$style.price">{{ targetObject.price }}</div>
        <div :class="$style.contents">{{ targetObject.contents }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import productsList from "@/assets/products.json";

@Component({
  components: {
    // HelloWorld,
  },
})
export default class DetailsView extends Vue {
  productsAraay: any[] = [];
  targetObject: any = {};
  gettedStore: any = {};
  haveID: any = this.$route.query.id;
  transHaveID: number = Number(this.haveID);
  setMark() {}
  beforeUpdate() {
    this.gettedStore = this.$store.getters.getMyMark;
  }
  mounted() {
    this.productsAraay = productsList.products;
    this.gettedStore = this.$store.getters.getMyMark;
    // console.log(this.gettedStore[this.transHaveID]);
    for (let i: number = 0; i < this.productsAraay.length; i++) {
      if (this.productsAraay[i].id == this.transHaveID) {
        this.targetObject = this.productsAraay[i];
        this.$forceUpdate(); // <- 지우지마
        break;
      }
    }
  }
  clickMark(getID: any) {
    if (this.gettedStore[getID] == true) {
      this.gettedStore[getID] = false;
    } else {
      this.gettedStore[getID] = true;
    }
    this.gettedStore = this.$store.getters.getMyMark;
    this.$store.commit("setMyMark", this.gettedStore);
    // console.log(this.gettedStore[getID]);
    this.$forceUpdate();
  }
  getImageStyle(): any {
    if (this.targetObject == undefined) return {};
    return {
      backgroundImage: `url("${this.targetObject.thumbnail}")`,
    };
  }
  beforeDestroy() {
    this.gettedStore = this.$store.getters.getMyMark;
    this.gettedStore["check"] = true;
    this.$store.commit("setMyMark", this.gettedStore);
  }
  // getImageMark(): any {
  //   if (this.targetObject == undefined) return {};
  //   return {
  //     backgroundImage: `url("@/assets/Vector2.png"$)`,
  //   };
  // }
}
</script>

<style lang="scss" module>
.detailsContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.centerContainer {
  display: flex;
  width: calc(1280px - 90px);
  height: auto;
  margin-top: 82px;
  .bikeIMG {
    width: 400px;
    height: 400px;
    background-size: contain;
    position: relative;
    // background-image: ;
    img {
      width: 100%;
      height: 100%;
    }
    .mark {
      width: 24px;
      height: 24px;
      position: absolute;
      top: calc(95% - 19px);
      left: calc(95% - 19px);
    }
  }
}
.textBox {
  width: 719px;
  margin-left: 53px;
  height: calc(396px + 48px + 107px);
  .name {
    font-size: 48px;
    padding-bottom: 12px;
    font-weight: bold;
  }
  .date {
    font-size: 24px;
    padding-bottom: 44px;
  }
  .price {
    font-size: 32px;
    padding-bottom: 29px;
  }
  .contents {
    white-space: pre-wrap;
    font-size: 15px;
  }
}
</style>
