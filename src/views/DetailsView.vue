<template>
    <div :class="$style.container">
        <div :class="$style.centerContainer">
            <div :class="$style.bikeIMG" :style="getImageStyle()">
                <div
                    :class="$style.mark"
                    v-on:click="clickMark(targetObject.id)"
                >
                    <div v-if="gettedStore[convertedID] == true">
                        <img :src="require(`@/assets/Vector1.png`)" />
                    </div>
                    <div v-else>
                        <img :src="require(`@/assets/Vector0.png`)" />
                    </div>
                </div>
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
    components: {},
})
export default class DetailsView extends Vue {
    productsArray: any[] = [];
    targetObject: any = {};
    gettedStore: any = {};

    getID: any = this.$route.query.id;
    convertedID: number = Number(this.getID);

    beforeUpdate() {
        this.gettedStore = this.$store.getters.getMyMark;
    }
    mounted() {
        this.productsArray = productsList.products;
        this.gettedStore = this.$store.getters.getMyMark;

        for (let i: number = 0; i < this.productsArray.length; i++) {
            if (this.productsArray[i].id == this.convertedID) {
                this.targetObject = this.productsArray[i];
                this.$forceUpdate();
                break;
            }
        }
    }
    clickMark(getID: number) {
        if (this.gettedStore[getID] == true) {
            this.gettedStore[getID] = false;
        } else {
            this.gettedStore[getID] = true;
        }
        this.gettedStore = this.$store.getters.getMyMark;
        this.$store.commit("setMyMark", this.gettedStore);

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

        @include mobile {
            width: 100%;
            height: 100vw;

            margin: 0;

            display: inline-block;
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
        margin: 0;
        padding-left: 20px;
        padding-top: 10px;

        text-align: left;
    }
    .name {
        padding-bottom: 12px;

        font-size: 48px;
        font-weight: bold;

        @include mobile {
            padding-bottom: 6px;

            font-size: 32px;
        }
    }
    .date {
        padding-bottom: 44px;

        font-size: 24px;
        @include mobile {
            padding-bottom: 16px;

            font-size: 15px;
        }
    }
    .price {
        padding-bottom: 29px;

        font-size: 32px;
        @include mobile {
            padding-bottom: 20px;

            font-size: 18px;
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
