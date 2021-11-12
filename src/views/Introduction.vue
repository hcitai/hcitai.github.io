<template>
    <div>
        <!-- 轮播图 -->
        <div class='lunbo'>
            <!-- <img src="../assets/hero-bg-pattern.jpg" alt=""> -->
            <div class='lunbotit'>
                <h3 style='margin: 20px 0;'>{{$t('introduction.PicName')}}</h3>
            </div>
            <div class='duanxian'></div>
            <div class='lunbohui'>
                {{$t('introduction.Pichui')}}
            </div>
        </div>
        <!-- 公司简介区域 -->
        <div class='allIntroduction'>
            <!-- 图片和简介 -->
            <div class="joinPic">
                <div class='joinimg'>
                    <!-- <img src="../assets/狗.jpg" alt="">  -->
                    <img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="">
                </div>
            </div>
            <!-- 公司简介 -->
            <div class="introductions">
                <div class='introductionbody'>
                    <!-- 公司简介内容区 -->
                    <div class='introductionNR'>
                        <div class='introductionbox'>
                            <div class='introductionJS'>
                                <div class='tit'>
                                    {{$t('introduction.allintroduction.introductiontit')}}
                                </div><br/>
                                <div class='tittop'>
                                    {{$t('introduction.allintroduction.introductionNR1')}}
                                </div>
                                <div class='zhengfu' v-for="(item,i) in $t('introduction.allintroduction.introductionNR2')" :key='i'>
                                    <span>
                                        <q-icon name="iconfont icon-icon_quanquan" />{{item}}
                                    </span>
                                </div>
                            </div>
                            <div class='introductionJS'>
                            </div>
                        </div>
                    </div>
                    <!-- 公司简介图片区 -->
                    <div class='introductionT'>
                        <img src="../assets/狗.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '../styles/Introduction/Introduction.less'

export default {
    data() {
        return {
        }
    },
    created(){
    },
    computed:{
    },
    methods:{
    },
}
</script>
<style lang="less" scoped>

</style>

