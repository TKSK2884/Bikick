<template>
    <div :class="$style.container">
        <div :class="$style.centerContainer">
            <div v-for="bike in productsAraay" :key="bike.id">
                <div :class="$style.bikeBox">
                    <router-link :to="`/details?id=${bike.id}`">
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
    .centerContainer {
        margin-right: auto;
        margin-left: auto;
        width: 100%;
        max-width: 1280px;
        padding-top: 120px;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
    }
}
.bikeBox {
    text-align: center;
    margin: 20px;
    margin-top: 28px;
    color: #000000;
    text-decoration-line: none;
    @include mobile {
        width: 100%;
        max-width: 140px;
        margin: 5px;
    }
    a {
        color: #333333;
        text-decoration-line: none;
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
