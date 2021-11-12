<template>
    <width-switch :width='500'>
        <div id="home" slot='a'>
            <!-- 轮播图区域 -->
            <div class='lunbox' style="">
                <q-carousel
                    animated
                    v-model="slide"
                    arrows
                    infinite
                    :autoplay="autoplay"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    @mouseenter="autoplay = false"
                    @mouseleave="autoplay = true"
                    height='480px'
                >
                    <q-carousel-slide :name="1">
                        <img src="../assets/人工智能驱动医疗变革.png" alt="">
                    </q-carousel-slide>
                    <q-carousel-slide :name="2">
                        <img src="../assets/轮播2.jpg" alt="">
                    </q-carousel-slide>
                    <q-carousel-slide :name="3">
                        <img src="../assets/轮播3.jpg" alt="">
                    </q-carousel-slide>
                    <q-carousel-slide :name="4">
                        <img src="../assets/轮播4.png" alt="">
                    </q-carousel-slide>
                </q-carousel>
            </div>
            <!-- 技术展示 -->
            <div class='jishu'>
                <div class='fudongshuju3'>
                    <h4 style="margin: 25px 0;">{{$t('home.team.companyTeamtit')}}</h4>
                    <div class='duanxian'></div>
                    <div class='NR3'>
                        {{$t('home.team.companyTeamDate')}}
                    </div>
                </div>
                <!-- 团队成员 -->
                <div class='member'>
                    <div class='memberPIC'>
                        <img src="../assets/大图.jpg" alt="">
                        <div class='memberBtn'>
                            <!-- <a href="####">认识团队<q-icon name="iconfont icon-zhixiangyou" /></a> -->
                        </div>
                    </div>
                </div>
                <div class="news">
                    <div>
                        <h4 style='margin: 0 0 40px 0;'>{{$t('home.Newstit')}}</h4>
                    </div>
                    <!-- 新闻区标题结束 -->
                </div>

                <!-- <div class='fudongjishu1'>
                    <div class='tupian'>
                        <img src="../assets/手拿机器png.png" alt="">
                    </div>
                    <div class='hui1'>
                        <div class='hui2'></div>
                    </div>
                    <div class='jishuNR'>
                        <span class='NRtit'>我们所做的</span>
                        <span class='da'>XACT Robotics 的技术</span>
                        <span class='xiao'>XACT Robotics 的技术旨在与广泛的成像模式兼容，能够将各种仪器输送到各种临床应用和适应症的所需目标。</span>
                        <q-btn outline color="dark" label="了解更多" class="NRbtn"/>
                    </div>
                </div>
                <div class='fudongshuju2'>
                    <div class='box1'>
                        <q-card class="my-card card">
                            <q-card-section>
                                <q-icon name="place" />
                            </q-card-section>
                            <q-card-section>
                                准确性
                            </q-card-section>
                            <q-card-section>
                                旨在提高仪器插入所需目标的准确性和安全性
                            </q-card-section>
                        </q-card>
                        <q-card class="my-card card">
                            <q-card-section>
                                <q-icon name="place" />
                            </q-card-section>
                            <q-card-section>
                                准确性
                            </q-card-section>
                            <q-card-section>
                                旨在提高仪器插入所需目标的准确性和安全性
                            </q-card-section>
                        </q-card>
                        <q-card class="my-card card">
                            <q-card-section>
                                <q-icon name="place" />
                            </q-card-section>
                            <q-card-section>
                                准确性
                            </q-card-section>
                            <q-card-section>
                                旨在提高仪器插入所需目标的准确性和安全性
                            </q-card-section>
                        </q-card>
                    </div>
                </div> -->
                <!-- 公司团队 -->
            </div>
            <div class="newshui">
                <!-- 新闻卡片模块 -->
                <!-- <div class='cardfu'> -->
                     <div class='newsCard'>
                        <!-- 新闻1 -->
                        <q-card class="my-card card" v-for="(item,i) in $t('home.allNews')" :key='i'>
                            <!-- 卡片标题 -->
                            <q-card-section class="cardtit">
                                {{item.Newstit}}
                            </q-card-section>
                            <!-- 新闻作者 -->
                            <q-card-section class="hui">
                                {{item.NewAuthor}}
                            </q-card-section>
                            <div class='duanxian'></div>
                            <!-- 新闻摘要 -->
                            <q-card-section class='cardNR'>
                                {{item.NewsSummary}}
                            </q-card-section>
                            <!-- 阅读更多 -->
                            <q-card-section class='cardBtn'>
                                <a :href="item.JumpAddress">{{$t('home.readmore')}}<q-icon name="iconfont icon-zhixiangyou" /></a>
                            </q-card-section>
                        </q-card>

                    </div>
                    <!-- 卡片区域结束 -->
                    
                    <!-- 新闻按钮 -->
                    <div class='cardbtn'> 
                        <q-btn outline color="dark" :label="$t('home.Newsbtn')" class="NRbtn" @click="$router.push('/News')"/>
                    </div>
                <!-- </div> -->
            </div>
            
        </div>
        
        <div slot="b">

        </div>

    </width-switch>
    
</template>
<script>
import '../styles/home/home.less'
import WidthSwitch from '@/components/Widthwatch/WidthSwitch.vue'

export default {
   data() {
      return {
        slide: 1,
        autoplay: true,
      }
   },
   created(){
   },
   computed:{
   },
   components:{
    WidthSwitch
   },
   methods:{
   },
}
</script>
<style lang="less" scoped>
  
.q-carousel__slide{
  padding: 0;
}
</style>
