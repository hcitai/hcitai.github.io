<template>
    <div>
        <!-- 轮播图 -->
        <div class='lunbo'>
            <!-- <img src="../assets/hero-bg-pattern.jpg" alt=""> -->
            <div class='lunbotit'>
                <h3 style='margin: 20px 0;'>{{$t('profile.profiletit')}}</h3>
            </div>
            <div class='duanxian'></div>
            <div class='lunbohui'>
                {{$t('profile.profilehui')}}
            </div>
        </div>
        <!-- 关于我们 -->
        <!-- <div class='alljoinMe'> 
            <div v-if="tab=='Projectbg'" class='joinmeTit'> 
               项目背景
            </div>
            <div v-else-if="tab=='idea'" class='joinmeTit'> 
               公司理念
            </div>
            <div v-else class='joinmeTit'> 
               公司简介
            </div>
            <div class='choice'>
                <q-splitter
                v-model="splitterModel"
                >

                <template v-slot:before>
                    <q-tabs
                    v-model="tab"
                    vertical
                    class="text-teal"
                    >
                    <q-tab name="introduction" icon="iconfont icon-qiyejianjie" label="公司简介" />
                    <q-tab name="idea" icon="iconfont icon-qiyelinian" label="公司理念" />
                    <q-tab name="Projectbg" icon="iconfont icon-xiangmubeijing-" label="项目背景" />
                    </q-tabs>
                </template>

                <template v-slot:after>
                    <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    vertical
                    transition-prev="jump-up"
                    transition-next="jump-up"
                    >
                    <q-tab-panel name="introduction">
                        <div class='profilePic'>
                            <img src="../assets/狗.jpg" alt="">
                        </div>
                        <div class='allprofileNR'>
                            <div class="allprofiletit">
                                关于高容
                            </div>
                            <div class="profileJieShao">
                                国家级高新技术企业和深圳市高新技术企业。
                            </div> 
                            <div class="profileJieShao">
                                自主知识产权、亚毫米级、多级、适型3D+人体可视化应用系统研发、个性化数据服务运营及相关数字医学应用集成。
                            </div>
                            <div class="profileJieShao">
                               中国一流的3D+人体可视化临床、科研、教学的互联网服务平台，融合“5G+互联网”的云影像、云阅片、云规划、云存储等数字医学人工智能创新服务。
                            </div>
                            <div class="profileJieShao">
                                印象更直观、图像更精准、信息更丰富、操作更灵活、临床应用效果更显著的3D+可视化用户体验，流畅服务临床、教学、科研等数字医学精准应用需求。
                            </div>

                        </div>
                    </q-tab-panel>
                    <q-tab-panel name="idea">
                        <div class='allIdeaNR'>
                            <div class='ideaPIC'>
                                <img src="../assets/狗.jpg" alt="">
                            </div>
                            <div class='ideaPIC'>
                                <img src="../assets/狗.jpg" alt="">
                            </div>
                            <div class='ideaPIC'>
                                <img src="../assets/狗.jpg" alt="">
                            </div>
                            <div class='ideaPIC'>
                                <img src="../assets/狗.jpg" alt="">
                            </div>
                            <div class='ideaPIC'>
                                <img src="../assets/狗.jpg" alt="">
                            </div>
                        </div>
                    </q-tab-panel>
                    <q-tab-panel name="Projectbg">
                        <div class='allProjectbgNR'>
                            <div class='ProjectbgPIC'>
                                <img src="../assets/狗.jpg" alt="">
                            </div>
                            <div class='Projectbgcontent'>
                                3D+医学影像可视化处理系统，源于我国数字虚拟人研究的成功。在十多年前的世纪之交，钟世镇院士成功地把人体解剖学带入了一个全新的交叉学科领域，也就是数字虚拟人的研究项目。
                            </div>
                            <div class='ProjectbgPIC'>
                                <img src="../assets/狗.jpg" alt="">
                            </div>
                            <div class='Projectbgcontent'>
                                3D+医学影像可视化处理系统，源于我国数字虚拟人研究的成功。在十多年前的世纪之交，钟世镇院士成功地把人体解剖学带入了一个全新的交叉学科领域，也就是数字虚拟人的研究项目。
                            </div>
                            <div class='Projectbgcontent'>
                                3D+医学影像可视化处理系统，源于我国数字虚拟人研究的成功。在十多年前的世纪之交，钟世镇院士成功地把人体解剖学带入了一个全新的交叉学科领域，也就是数字虚拟人的研究项目。
                            </div>
                        </div>
                    </q-tab-panel>
                    </q-tab-panels>
                </template>

                </q-splitter>
            </div>
        </div> -->

        <div class="AboutUs">
            <!-- 公司简介 -->
            <div class="Introduction">
                <div class="Introductionbody">
                    <!-- 公司简介标题 -->
                    <div class="Introductiontit">
                        {{$t('profile.allIntroduction.Introductiontit')}}
                    </div>
                    <!--公司简介内容 -->
                    <div class="IntroductionNR">  
                        {{$t('profile.allIntroduction.IntroductionNR')}}
                    </div>
                </div>
            </div>

            <!-- 公司简介 信息来自于Introduction.js-->
            <div class="CompanyProfile">
                <!-- <div class="boxbody2"> -->
                    <div class="allCompanyProfile">
                        <div class="CompanyProfiletit">{{$t('introduction.allintroduction.introductiontit')}}</div>
                        <div class="CompanyProfileNR">
                            {{$t('introduction.allintroduction.introductionNR1')}}
                        </div>
                        <!-- <div class="box2btn">
                            <q-btn outline color="dark" label="了解更多" class="NRbtn" />
                        </div> -->
                    </div>
                    <div class="CompanyProfilePic"></div>
                <!-- </div> -->
            </div>

            <!-- 研发中心区域 -->
            <!-- <div class="RandD">
                    <div class="RandDPic">
                        <img src="../assets/Profile/全球分布研发中心.png" alt="">
                    </div>
                <div class="boxbody2">
                    <div class="allRandD">
                        <div class="RandDtit">{{$t('profile.allRandD.RandDtit')}}</div>
                        <div class="RandDNR">  
                            <div class="RandDNRdate" v-for="(item,i) in $t('profile.allRandD.RandDNR')" :key='i'>
                                {{item}}
                            </div>
                        </div>
                        <div class="RandDbtn">
                            <q-btn outline color="dark" label="了解更多" class="NRbtn" />
                        </div>
                    </div>
                </div>
            </div>

            产品矩阵 ProductMatrix 
            <div class="ProductMatrix">
                <div class="boxbody2">
                    <div class="allProductMatrix">
                        <div class="ProductMatrixtit">{{$t('profile.allProductMatrix.ProductMatrixtit')}}</div>
                        <div class="ProductMatrixNR">
                            <div v-for="(item,i) in $t('profile.allProductMatrix.ProductMatrixNR')" :key='i'>
                               {{item}}
                            </div>
                        </div>
                        <div class="ProductMatrixbtn">
                            <q-btn outline color="dark" label="了解更多" class="NRbtn" />
                        </div>
                    </div>
                    <div class="ProductMatrixPic">
                        <img src="../assets/Profile/产品矩阵.png" alt="">
                    </div>
                </div>
            </div> -->
            <!-- 服务医院模块 -->
            <div class="ServiceHospital">
                <div class="allServiceHospital">
                        <div class="ServiceHospitaltit">{{$t('profile.ServiceHospitaltit')}}</div>
                    </div>
                <div class="ServiceHospitalPic">
                    <img src="../assets/Profile/国内合作医院.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import '../styles/profile/profile.less'
export default {
    data() {
        return {
            tab: 'introduction',
            //左边的宽度
            splitterModel: 20
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
