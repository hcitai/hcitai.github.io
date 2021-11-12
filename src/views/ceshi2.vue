<template>
      <!-- 电脑页面 -->
      <div>
        <!-- 顶部区域 -->
        <!-- <div class='top'>
          <div class="biaoti">高容科技</div>
          <div class="function">
            <a href="#/" @click="fuwu">首页</a>
            <a href="###" @click="fuwu">公司简介</a>
            <a href="###" @click="fuwu">公司新闻</a>
            <a href="###" @click="fuwu">关于我们</a>
            <a href="###" @click="fuwu">加入我们</a>
            <a href="#Contact" @click="goContact">联系我们</a>
          </div>
        </div> -->
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
            height='40.625rem'
          >
            <q-carousel-slide :name="1">
              <!-- <img src="../assets/狗.jpg" alt=""> -->
              <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="">
            </q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
          </q-carousel>
        </div>
        <!-- 身体部分1 -->
        <div class='fuWu'>
          <div class='fuWuTitle'>
            户外广告机服务提供商
          </div>
          <div class='fuWuXiaozi'>
            公司秉承质量、服务至上的宗旨，按照客户需求精心设计、科学管理、严格生产
          </div>
          <div class='fuWuContent'>
            <!-- 内容1 -->
            <div class='Content'>
              <q-avatar style='margin-bottom: 25px;' size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
              <div class='Contenttit'>品牌可信赖</div>
              <div class='ContentNR'>多年设计经验，产品贯穿每一个行业</div>
              <div class='ContentNR'>覆盖多个城市的户外广告</div>
            </div>
            <!-- 内容2 -->
            <div class='Content'>
              <q-avatar style='margin-bottom: 25px;' size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
              <div class='Contenttit'>品牌可信赖</div>
              <div class='ContentNR'>多年设计经验，产品贯穿每一个行业</div>
              <div class='ContentNR'>覆盖多个城市的户外广告</div>
            </div>
            <!-- 内容3 -->
            <div class='Content'>
              <q-avatar style='margin-bottom: 25px;' size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
              <div class='Contenttit'>品牌可信赖</div>
              <div class='ContentNR'>多年设计经验，产品贯穿每一个行业</div>
              <div class='ContentNR'>覆盖多个城市的户外广告</div>
            </div>
            <!-- 内容4 -->
            <div class='Content'>
              <q-avatar style='margin-bottom: 25px;' size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
              <div class='Contenttit'>品牌可信赖</div>
              <div class='ContentNR'>多年设计经验，产品贯穿每一个行业</div>
              <div class='ContentNR'>覆盖多个城市的户外广告</div>
            </div>
          </div>
        </div>

        <!-- 滚动播放动画 -->
        <div class="donghua">
          <div class='donghuabody'>
            <div class='donghuaTitle'>
              合作客户
            </div>
            <div class='donghuaNR'>
                <div class='donghubox'>
                  <img src="../assets/狗.jpg" alt="">
                </div>
                <div class='donghubox'>
                  <img src="../assets/狗.jpg" alt="">
                </div>
                <div class='donghubox'>
                  <img src="../assets/狗.jpg" alt="">
                </div>
                <div class='donghubox'>
                  <img src="../assets/狗.jpg" alt="">
                </div>
                <div class='donghubox'>
                  <img src="../assets/狗.jpg" alt="">
                </div>
                <div class='donghubox'>
                  <img src="../assets/狗.jpg" alt="">
                </div>
            </div>
          </div>
        </div>
        
        <!-- 产品展示区 -->
        <div class='product'>
          <!-- 产品展示标题 -->
          <div class='productTitle'>
            产品中心
          </div>
          <!-- 产品展示小字 -->
          <div class='productXiaozi'>
            严格的高技术把关，打造质量好的产品
          </div>
          <div class='productContent'>
            <div class='productbox'>
              <img src="../assets/狗.jpg" alt="">
            </div>
            <div class='productbox'>
              <img src="../assets/狗.jpg" alt="">
            </div>
            <div class='productbox'>
              <img src="../assets/狗.jpg" alt="">
            </div>
          </div>
          <div class='productContent'>
            <div class='productbox'>
              <img src="../assets/狗.jpg" alt="">
            </div>
            <div class='productbox'>
              <img src="../assets/狗.jpg" alt="">
            </div>
            <div class='productbox'>
              <img src="../assets/狗.jpg" alt="">
            </div>
          </div>
        </div>

        <!-- 公司简介 -->
        <!-- <div class="introduction">
          <div class='introductionbody'>
            公司简介内容区
            <div class='introductionNR'>
              <div class='introductionbox'>
                <div class='introductionTit'>
                  公司简介
                </div>
                <div class='introductionJS'>
                  某某科技有限公司是专门从事大屏显示系统的研发、生产与销售，产品面向整个亚太地区。公司始终以产品质量为核心，服务至上为已任，作为国内的户外广告机及应用解决方案的供应商，始终站在液晶显示行业发展的前沿，并长期与国际知名液晶品牌厂商保持良好的战略合作伙伴关系。
                </div>
                <div class='introductionJS'>
                  公司主营产品有：液晶广告机、触摸一体机、液晶拼接屏、液晶监视器、户外广告机等商显产品，产品尺寸覆盖10.1-98寸，产品采用优质的原材料并完全按照国家标准研发，具备了精外观、低功耗、高品质、高音质、高画质等特点。产品质量可靠并成功通过国家强制性CCC认证、CE认证、FCC认证、ROHS认证等，保证产品性能和安全。产品广泛用于政府、医院、车站、商业楼宇、超市、地铁、酒店、教育、地产、文化传媒等行业。
                </div>
              </div>
            </div>
            公司简介图片区
            <div class='introductionT'>
              <img src="../assets/敖冰.png" alt="">
            </div>
          </div>
        </div> -->

        <!-- 底部区域 -->
        <!-- <div class='foot'>
          <div class='footqian'>
            <div class='footFunction'>
              <div>
                <a href="###" @click="fuwu">服务提供商</a>
              </div>
              <div>
                合作客户
              </div>
              <div>
                产品中心
              </div>
              <div>
                公司简介
              </div>
            </div>
            <div class="Telephone">
              <div class='fw24'>24小时服务热线</div>
              <div class='phone'>020-000000</div>
            </div>
          </div>
          <div class='footshen'>
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
          </div>
        </div> -->

      </div>
</template>
<script>
import WidthSwitch from '@/components/Widthwatch/WidthSwitch.vue'
import '../styles/ceshi2/ceshi2.less'

export default {
   data() {
      return {
        slide: 1,
        autoplay: true,
      }
   },
   components:{
    WidthSwitch
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
  
.q-carousel__slide{
  padding: 0;
}
</style>

