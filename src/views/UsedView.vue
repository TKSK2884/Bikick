<template>
  <div :class="$style.usedContainer">
    <div :class="$style.centerContainer">
      <div v-for="bike in productsAraay" :key="bike.id">
        <div :class="$style.bikeBox">
          <div :class="$style.thumbnail">
            <img :src="`${bike.thumbnail}`" />
            <div :class="$style.mark" v-on:click="clickMark(bike.id)">
              <div v-if="gettedStore[bike.id] == true">
                <img :src="require(`@/assets/Vector1.png`)" />
              </div>
              <div v-else>
                <img :src="require(`@/assets/Vector0.png`)" />
              </div>
            </div>
          </div>
          <router-link :to="`/details?id=${bike.id}`">
            <div :class="$style.bikeText">
              <div :class="$style.name">{{ bike.name }}</div>
              <div :class="$style.date">{{ bike.date }}</div>
            </div>
          </router-link>
        </div>
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
export default class UsedView extends Vue {
  // checkMark: number = 91;
  productsAraay: any[] = [];
  targetId: number = 0;
  markUpdateArray: any[] = [];
  markCheckArray: any[] = [];
  gettedStore: any = {};

  setObjMark() {
    if (this.gettedStore["check"] == true) {
      return;
    } else {
      for (let i: number = 0; i < this.productsAraay.length; i++) {
        //(<{ id: number }>this.objMark).id = this.productsAraay[i].id;
        let setID: any = this.productsAraay[i].id;
        this.gettedStore[setID] = false;
        //console.log(this.gettedStore[setID]);
      }
      this.gettedStore["check"] = true;
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
  // pageChange() {
  //   this.$router.push({ path: "/details" });
  // }
  mounted() {
    this.productsAraay = productsList.products;
    this.gettedStore = this.$store.getters.getMyMark;
    this.setObjMark();

    // this.gettedStore["setID"] = false;

    // console.log(productsList.products);
    // this.setObjMark();
    //this.markCheckArray[i] = this.$store.getters.getMyMarkArray;

    //this.$store.commit("setMyMarkArray", this.markUpdateArray[i]);
  }

  beforeDestroy() {
    this.gettedStore = this.$store.getters.getMyMark;
    this.gettedStore["check"] = true;
    this.$store.commit("setMyMark", this.gettedStore);
  }
}
</script>

<style lang="scss" module>
.usedContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .centerContainer {
    width: 1215px;
    height: auto;
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
  }
}

.bikeBox {
  width: 203px;
  height: 255px;
  display: block;
  text-align: center;
  margin: 20px;
  margin-top: 28px;
  color: #000000;
  text-decoration-line: none;
  a {
    color: #333333;
    text-decoration-line: none;
  }
  .bikeText {
    width: 203px;
    height: 47px;
    padding-top: 10px;
    .name {
      width: 203px;
      font-size: 15px;
      font-weight: bold;
    }
    .date {
      padding-top: 4px;
      font-size: 15px;
    }
  }

  .thumbnail {
    width: 200px;
    height: 200px;
    position: relative;
    img {
      width: 200px;
      height: 200px;
      border-radius: 24px;
    }
    .mark {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 80%;
      left: calc(90% - 16px);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
