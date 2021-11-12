<template>
  <!-- <width-switch :width='500'> -->
    <!-- 宽度大于500时 -->
    <div id="app">
       <!-- 顶部区域 -->
        <div class="guding">
          <div class='top'>
            <div class="biaoti">
              {{$t('appcontent.top.topbiaoti')}}
            </div>
            <div class="function">
              <a href="#home" @click="goHome">{{$t('appcontent.top.function.functionbtn1')}}</a>
              <!-- <a href="#Introduction" @click="goIntroduction">{{$t('appcontent.top.function.functionbtn2')}}</a> -->
              <a href="#News" @click="goNews">{{$t('appcontent.top.function.functionbtn3')}}</a>
              <a href="#Profile" @click="goProfile">{{$t('appcontent.top.function.functionbtn4')}}</a>
              <a href="#join" @click="goJoin">{{$t('appcontent.top.function.functionbtn5')}}</a>
              <a href="#Contact" @click="goContact">{{$t('appcontent.top.function.functionbtn6')}}</a>
              <q-icon  v-if='language' name="iconfont icon-zhongyingqiehuan-qiehuanzhongwen" size="sm" @click="change('en')"/>
              <q-icon  v-else name="iconfont icon-zhongyingqiehuan-qiehuanyingwen" size="sm" @click="change('zh')"/>
            </div>
          </div>
        </div>
        <div style='width: 100%;'>
          <router-view></router-view>
        </div>
        <!-- 底部区域 -->
        <div class='foot'>
          <div class='footqian'>
            <div class="TelephonePIC">
              <!-- <img src="./assets/狗.jpg" alt=""> -->
              <div>·</div>
              <div class="logo">hict.ai</div>
            </div>
            <!-- 公司地址电话 -->
            <div class="Telephone">
              <div class='TelephoneNR' v-for="(item,i) in $t('appcontent.foot.Telephone.TelephoneNR')" :key='i'>
                <div class='fw24'>
                  <span class='tit'>{{item.NR1}}</span>
                  <span>{{item.NR2}}</span>
                  <span>{{item.NR3}}</span>
                  <span>{{item.NR4}}</span>
                  <span>{{item.NR5}}</span>
                </div>
                <div class='shouji'>
                  <span>{{item.shouji.shouji1}}</span>
                  <span>{{item.shouji.email}}</span>
                </div>
              </div>
              
              <!-- <div class='TelephoneNR'>
                <div class='fw24'>
                  <span class='tit'>上海高容科技</span>
                  <span>75 Sgt William B Terry Drive</span>
                  <span>Suite 2400</span>
                  <span>Hingham, MA 02043</span>
                  <span>China</span>
                </div>
                <div class='shouji'>
                  <span>电话： +1-888-317-XACT (9228)</span>
                  <span>电话： +1-888-317-XACT (9228)</span>
                </div>
              </div> -->
            </div>
            <!-- 模块跳转 -->
            <div class='footFunction'>
              <!-- <div v-for="(item,i) in $t('appcontent.foot.footFunction')" :key='i'>
                <a href="#home" @click="goHome">{{item}}</a>
              </div> -->
              <div>
                <a href="#home" @click="goHome">{{$t('appcontent.foot.footFunction[0]')}}</a>
              </div>
              <!-- 公司简介 -->
              <!-- <div>
                <a href="#Introduction" @click="goIntroduction">{{$t('appcontent.foot.footFunction[1]')}}</a>
              </div> -->
              <div>
                <a href="#Profile" @click="goProfile">{{$t('appcontent.foot.footFunction[2]')}}</a>
              </div>
              <div>
                <a href="#join" @click="goJoin">{{$t('appcontent.foot.footFunction[3]')}}</a>
              </div>
              <div>
                <a href="#Contact" @click="goContact">{{$t('appcontent.foot.footFunction[4]')}}</a>
              </div>
              <div>
                <a href="#Contact" @click="goContact">{{$t('appcontent.foot.footFunction[5]')}}</a>
              </div>
            </div>
          </div>
          <div class='footshen'>
            {{$t('appcontent.foot.copyright')}}
          </div>
        </div>
    </div>
    <!-- 宽度小于500时 -->
    <!-- <div slot="b">
      <div class='Phtop'>
        <div class='logo'>
          <img src="./assets/avatar.png" alt="">
        </div>
        <q-btn flat round dense icon="menu" class="q-mr-sm" size='xl' />
      </div>
      

    </div> -->
  <!-- </width-switch> -->
    
</template>
<script>
import WidthSwitch from '@/components/Widthwatch/WidthSwitch.vue'

import './styles/allstyes.less'
import './styles/Phone/Pallstyles/Pallstyles.less'
export default {
  data() {
    return {
      language:true
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
    change(row){
      if(this.language){
        this.language=false
        console.log(this.$i18n.locale);
        this.$i18n.locale = row
      }else{
        this.language=true
        console.log(this.$i18n.locale);

        this.$i18n.locale = row
      }
    },
    fuwu(){
      console.log(1);
      console.log(this.$router);
    },
    // 加入我们
    goJoin(){
      if(this.$route.path == '/Join'){
        return
      }
      this.$router.push('/Join')
    },
    //公司简介
    goIntroduction(){
      if(this.$route.path == '/Introduction'){
        return
      }
      this.$router.push('/Introduction')
    },
    //公司新闻
    goNews(){
      if(this.$route.path == '/News'){
        return
      }
      this.$router.push('/News')
    },
    // 首页
    goHome(){
      if(this.$route.path == '/Home'){
        return
      }
      this.$router.push('/Home')
    },
    // 联系哦们
    goContact(){
      if(this.$route.path == '/Contact'){
        return
      }
      this.$router.push('/Contact')
    },
    // 关于我们
    goProfile(){
      if(this.$route.path == '/Profile'){
        return
      }
      this.$router.push('/Profile')
    }
  },
}
</script>
<style lang="less" scoped>

</style>
