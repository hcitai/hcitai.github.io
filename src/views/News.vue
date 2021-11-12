<template>
    <div>
        <!-- 轮播图 -->
        <div class='lunbo'>
            <!-- <img src="../assets/hero-bg-pattern.jpg" alt=""> -->
            <div class='lunbotit'>
                <h3 style='margin: 20px 0;'>{{$t('news.Newstoptit')}}</h3>
            </div>
            <div class='duanxian'></div>
            <div class='lunbohui'>
                {{$t('news.Newstophuizi')}}
            </div>
        </div>
        <!-- 新闻模块 -->
        <div class="allNews">

            <!-- 精选模块 -->
            <div class="FeaturedNews">
                <div class='NewsCard'>
                    <!-- v-for="(item,i) in $t('home.allNews')" :key='i' -->
                    <q-card class="my-card card">
                        <!-- 精选新闻 -->
                        <q-card-section>
                           <q-chip square color="grey-10" text-color="white" class='newschip'>
                                {{  $t('news.FeaturedNewstit')}}
                            </q-chip>
                        </q-card-section>
                        <!-- 卡片标题 -->
                        <q-card-section class="cardtit">
                           {{  $t('news.FeaturedNews.Newstit')}}
                        </q-card-section>
                        <!-- 新闻作者 -->
                        <q-card-section class="hui">
                             {{  $t('news.FeaturedNews.NewAuthor')}}
                        </q-card-section>
                        <div class='duanxian'></div>
                        <!-- 新闻摘要 -->
                        <q-card-section class='cardNR'>
                            {{  $t('news.FeaturedNews.NewsSummary')}}
                        </q-card-section>
                        <!-- 阅读更多 -->
                        <q-card-section class='cardBtn'>
                            <a :href="$t('news.FeaturedNews.JumpAddress')">{{$t('news.readmore')}}<q-icon name="iconfont icon-zhixiangyou" /></a>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <!-- 普通新闻卡 -->
            <div class="NewsModule">
                <q-card class="my-card NewsModulecard" v-for="(item,i) in $t('news.allNews')" :key='i'>
                    <!-- 卡片标题 -->
                    <q-card-section class="cardtit">
                        {{ item.Newstit }}
                    </q-card-section>
                    <!-- 新闻作者 -->
                    <q-card-section class="hui">
                        {{ item.NewAuthor }}
                    </q-card-section>
                    <div class='duanxian'></div>
                    <!-- 新闻摘要 -->
                    <q-card-section class='cardNR'>
                        {{ item.NewsSummary }}
                    </q-card-section>
                    <!-- 阅读更多 -->
                    <q-card-section class='cardBtn'>
                        <a :href="item.JumpAddress">{{ $t('news.readmore') }}<q-icon name="iconfont icon-zhixiangyou" /></a>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
import '../styles/news/News.less'
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
