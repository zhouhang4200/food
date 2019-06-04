<template>
    <div style="margin-top: 20px">
        <div class="head">
            <van-swipe :autoplay="3000" :height="150" indicator-color="white" class="imageStyle">
                <van-swipe-item><img src="/images/banner1.jpg"></van-swipe-item>
                <van-swipe-item><img src="/images/banner2.jpg"></van-swipe-item>
                <van-swipe-item><img src="/images/banner1.jpg"></van-swipe-item>
                <van-swipe-item><img src="/images/banner2.jpg"></van-swipe-item>
            </van-swipe>
        </div>
        <div class="body">
            <div class="main" style="position:relative; width: 100%; float: right">
                <van-swipe-cell :right-width="10" :on-close="onClose" v-for="dish in dishData" :key="dish.id">
                    <van-cell-group>
                        <van-card
                                :num="number"
                                :price="dish.amount"
                                :title="dish.name"
                                :thumb="dish.logo"
                                :origin-price="dish.original_amount"
                        >
                            <div slot="footer">
                                <van-button size="mini">-</van-button>
                                <van-button size="mini">+</van-button>
                            </div>
                        </van-card>
                    </van-cell-group>
                </van-swipe-cell>
            </div>
        </div>
        <div class="foot">
            <van-submit-bar
                    :price="totalAmount"
                    button-text="提交订单"
                    @submit="onSubmit"
            />
        </div>
    </div>
</template>

<script>
    import {Toast} from 'vant';
    import Vue from 'vue';
    import {
        GoodsAction,
        GoodsActionBigBtn,
        GoodsActionMiniBtn
    } from 'vant';

    Vue
        .use(GoodsAction)
        .use(GoodsActionBigBtn)
        .use(GoodsActionMiniBtn);

    export default {
        data() {
            return {
                form: {
                    account: '',
                    fee: '',
                },
                accountOptions: [],
                accountShow: false,
                showNumber: false,
                images: [
                    "h5.keeper.test/images/banner1.jpg",
                    "h5.keeper.test/images/banner2.jpg",
                ],
                imageURL:"/images/banner1.jpg",
                hot:'热卖中',
                price:'1.00',
                originPrice:'2.00',
                desc:'微辣',
                title:'鱼香肉丝',
                number:0,
                totalAmount:0,
                dishData: {}
            };
        },
        created() {
        },
        computed: {},
        mounted() {
            this.dishes();
        },
        methods: {
            dishes() {
                this.$api.h5DishList({merchant_id:1}).then(res => {
                    if (res.status === 1) {
                        console.log(res.data);
                        this.dishData = res.data;
                    } else if (res.status === 3) {
                        Toast.fail(res.message);
                        // this.$router.push({name: 'login', query: {}});
                    } else {
                        Toast.fail(res.message);
                    }
                });
            },
            onConfirmAccount(value, index) {
                this.form.account = value;
                this.accountShow = false;
            },
            onInput(key) {
                this.form.fee += key;
            },
            onDelete() {
                this.form.fee = '';
            },
            onClose() {
                this.showNumber = false;
            },
            // 表单提交
            onSubmitForm() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$api.FinanceWithdrawApply(this.form).then(res => {
                            if (res.status === 1) {
                                Toast.success(res.message);
                            } else if (res.status === 3) {
                                Toast.fail(res.message);
                                this.$router.push({name: 'login', query: {}});
                            } else {
                                Toast.fail(res.message);
                            }
                        }).catch(err => {
                            Toast.fail('表单数据异常!');
                        });
                    }
                });
            }
        }
    }
</script>

<style lange="less">
    .imageStyle img {
        width: 100%;
        height: 100%;
        display: block;
    }
    .van-card__thumb {
        width: 100px;
        height: 70px;
        margin-right: 10px;
        /* -webkit-box-align: center; */
        /* -webkit-align-items: center; */
        /* align-items: center; */
        /* -webkit-box-pack: center; */
        -webkit-justify-content: center;
        /* justify-content: center; */
        /* -webkit-box-flex: 0; */
        -webkit-flex: none;
        /* flex: none; */
        /* margin-top: 20px; */
    }

    .van-button--warning {
        color: #fff;
        background-color: #409eff;
        border: 1px solid #409eff;
    }

    .van-card {
        position: relative;
        color: #323233;
        padding: 10px 15px;
        font-size: 14px;
        box-sizing: border-box;
        background-color: #fafafa;
    }
    .van-card__content, .van-card__header {
        height: 44px;
    }
    .van-card__title {
        line-height: 16px;
        max-height: 32px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        padding-top: 5px;
    }

    .van-card__bottom, .van-card__desc {
        line-height: 20px;
        margin-top: 4px;
        font-size: 14px;
    }
</style>
