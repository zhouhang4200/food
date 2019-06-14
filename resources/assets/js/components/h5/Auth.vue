<template>
    <div>
        111
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
            };
        },
        created() {
            // let code=getUrlKey("code");
            // if(code){
            //     //调用接口获取openId   参考文档https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
            //     this.getOpenIdApi(code);
            // }else{
            //     this.getCodeApi("123");
            // }
        },
        computed: {},
        mounted() {
            // let code=this.getUrlKey("code");
            // if(code){
            //     console.log(code);
            //     //调用接口获取openId   参考文档https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
            //     this.getOpenIdApi(code);
            // }else{
            //     console.log('code');
            //     this.getCodeApi("123");
            // }
        },
        methods: {
            // getUrlKey(name){//获取url 参数
            //     return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
            // },
            // getCodeApi(state) {//获取code
            //     let urlNow=encodeURIComponent(window.location.href);
            //     let scope='snsapi_base';    //snsapi_userinfo   //静默授权 用户无感知
            //     let appid='wx5e0fd315aff830a4';
            //     let url=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
            //     window.location.replace(url);
            // },
            // getOpenIdApi(code) {
            //     this.$api.getopenId({code:code}).then(res => {
            //         console.log(123122312);
            //         if (res.status === 1) {
            //             console.log('pay_success');
            //         } else if (res.status === 3) {
            //             // Toast.fail(res.message);
            //         } else {
            //             // Toast.fail(res.message);
            //         }
            //     });
            // },

        }
    }
</script>

<style lange="less">

</style>
