<template>
    <div :class="$style.container">
        <div :class="$style.centerContainer">
            <div v-for="(bike, index) in productsAraay" :key="index">
                <div :class="$style.bikeBox">
                    <router-link :to="`/details?id=${bike.id ?? 0}`">
                        <div :class="$style.thumbnail">
                            <img :src="`${bike.thumbnail}`" />
                            <div
                                :class="$style.mark"
                                v-on:click.prevent.stop="clickMark(bike.id)"
                            >
                                <div v-if="gettedStore[bike.id]">
                                    <img
                                        :src="require(`@/assets/Vector1.png`)"
                                    />
                                </div>
                                <div v-else>
                                    <img
                                        :src="require(`@/assets/Vector0.png`)"
                                    />
                                </div>
                            </div>
                        </div>
                        <div :class="$style.text">
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
    components: {},
})
export default class UsedView extends Vue {
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
                let setID: number = this.productsAraay[i].id;
                this.gettedStore[setID] = false;
            }
            this.gettedStore["check"] = true;
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

    mounted() {
        this.productsAraay = productsList.products;
        this.gettedStore = this.$store.getters.getMyMark;
        console.log(this.gettedStore);
        this.setObjMark();
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

    .centerContainer {
        width: 100%;
        max-width: 1280px;

        margin-right: auto;
        margin-left: auto;
        padding-top: 120px;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}
.bikeBox {
    margin: 20px;
    margin-top: 28px;

    text-align: center;
    text-decoration-line: none;

    color: #000000;

    @include mobile {
        width: 100%;
        max-width: 140px;

        margin: 5px;
    }
    a {
        text-decoration-line: none;

        color: #333333;
    }
    .text {
        padding-top: 10px;
        .name {
            font-size: 15px;
            font-weight: bold;

            @include mobile {
                margin-left: auto;
                margin-right: auto;
            }
        }
        .date {
            padding-top: 4px;

            font-size: 15px;

            @include mobile {
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
    .thumbnail {
        max-width: 200px;

        position: relative;
        @include mobile {
            width: 100%;
            max-width: 320px;
        }
        img {
            width: 100%;

            border-radius: 24px;
        }
        .mark {
            width: 24px;
            height: 24px;

            position: absolute;
            top: calc(100% - 35px);
            left: calc(100% - 30px);

            @include mobile {
                width: 20px;
                height: 20px;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
