<template>
    <div style="margin-top: 20px">
        <div class="head">
            <van-swipe :autoplay="3000" :height="150">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="body">
            <div class="left" style="position:relative; width: 20%; background-color: azure; float:left; height: 100%">
                <ul>
                    <li>主菜</li>
                    <li>米饭</li>
                    <li>饮料</li>
                </ul>
            </div>
            <div class="main" style="position:relative; width: 80%; float: right">
                <van-swipe-cell :right-width="65" :on-close="onClose" v-for="(i,key) in shopData" :key="key">
                    <van-cell-group>
                        <van-card
                                num="1"
                                :tag="hot"
                                :price="price"
                                :desc="desc"
                                :title="title"
                                :thumb="imageURL"
                                :origin-price="originPrice"
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
                    :price="3050"
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
                    "http://img2.imgtn.bdimg.com/it/u=234634259,4236876085&fm=26&gp=0.jpg",
                    "http://img2.imgtn.bdimg.com/it/u=234634259,4236876085&fm=26&gp=0.jpg",
                ],
                imageURL:"http://img2.imgtn.bdimg.com/it/u=234634259,4236876085&fm=26&gp=0.jpg",
                hot:'热卖中',
                price:'1.00',
                originPrice:'2.00',
                desc:'微辣',
                title:'鱼香肉丝',
                shopData: [
                    1, 2, 3, 5, 6
                ]
            };
        },
        created() {
        },
        computed: {},
        mounted() {
            this.getAccountOptions();
        },
        methods: {
            onClickLeft() {
                this.$router.push({name: 'finance-withdraw-list', query: {}});
            },
            getAccountOptions() {
                this.$api.FinanceWithdrawAccountList({}).then(res => {
                    if (res.status === 1) {
                        this.accountOptions = res.data;
                    } else if (res.status === 3) {
                        Toast.fail(res.message);
                        this.$router.push({name: 'login', query: {}});
                    } else {

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
    .van-button--warning {
        color: #fff;
        background-color: #409eff;
        border: 1px solid #409eff;
    }
</style>
