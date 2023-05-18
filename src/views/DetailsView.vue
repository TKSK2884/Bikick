<template>
    <div :class="$style.container">
        <div :class="$style.centerContainer">
            <div :class="$style.bikeIMG" :style="getImageStyle()">
                <div
                    :class="$style.mark"
                    v-on:click="clickMark(targetObject.id)"
                >
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
    productsArray: any[] = [];
    targetObject: any = {};
    gettedStore: any = {};

    haveID: any = this.$route.query.id;
    transHaveID: number = Number(this.haveID);

    beforeUpdate() {
        this.gettedStore = this.$store.getters.getMyMark;
    }
    mounted() {
        this.productsArray = productsList.products;
        this.gettedStore = this.$store.getters.getMyMark;
        // console.log(this.gettedStore[this.transHaveID]);
        for (let i: number = 0; i < this.productsArray.length; i++) {
            if (this.productsArray[i].id == this.transHaveID) {
                this.targetObject = this.productsArray[i];
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
@import "@/assets/utils.scss";
.container {
    width: 100%;
    padding-top: 200px;
    @include mobile {
        padding-top: 70px;
    }
}
.centerContainer {
    display: flex;
    @include mobile {
        display: block;
        text-align: center;
    }
    .bikeIMG {
        width: 400px;
        height: 400px;
        margin-left: 40px;
        background-size: cover;
        background-repeat: no-repeat;
        // background-image: ;
        @include mobile {
            margin: 0;
            display: inline-block;
            width: 100%;
            height: 100vw;
        }
        img {
            width: 100%;
            height: 100%;
        }
        .mark {
            width: 24px;
            height: 24px;
            position: relative;
            top: calc(100% - 35px);
            left: calc(100% - 30px);
        }
    }
}
.textBox {
    margin-left: 53px;
    @include mobile {
        text-align: left;
        padding-left: 20px;
        padding-top: 10px;
        margin: 0;
    }
    .name {
        font-size: 48px;
        padding-bottom: 12px;
        font-weight: bold;
        @include mobile {
            font-size: 32px;
            padding-bottom: 6px;
        }
    }
    .date {
        font-size: 24px;
        padding-bottom: 44px;
        @include mobile {
            font-size: 15px;
            padding-bottom: 16px;
        }
    }
    .price {
        font-size: 32px;
        padding-bottom: 29px;
        @include mobile {
            font-size: 18px;
            padding-bottom: 20px;
        }
    }
    .contents {
        white-space: pre-wrap;
        font-size: 15px;
        @include mobile {
            font-size: 15px;
        }
    }
}
</style>
