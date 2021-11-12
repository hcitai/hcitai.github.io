<template>
    <div>
        <!-- 轮播图 -->
        <div class='lunbo'>
            <!-- <img src="../assets/hero-bg-pattern.jpg" alt=""> -->
            <div class='lunbotit'>
                <h3 style='margin: 20px 0;'>{{$t('joinContent.PicName')}}</h3>
            </div>
            <div class='duanxian'></div>
            <div class='lunbohui'>
                {{$t('joinContent.Pichui')}}
            </div>
        </div>
        <!-- 加入我们 -->
        <div class='alljoinMe'> 
            <!-- 标题 -->
            <!-- <div class='joinmeTit'> 
                为了可以看得见的价值！上海高容科技招聘信息
            </div> -->
            <!-- 图片和简介 -->
            <div class="joinPic">
                <div class='joinimg'>
                    <!-- <img src="../assets/狗.jpg" alt="">  -->
                    <img src="../assets/加入我们.jpg" alt="">
                </div>
            </div>
            <div class='joinJS'>
                <div class="joinzuoJS">
                    <!-- 员工福利 -->
                    <div class='joinNR'>
                        <div class='telIntroduction'>{{$t('joinContent.welfare.welfareName')}}:</div>
                        <span class='telxinxi' v-for="(item,i) in $t('joinContent.welfare.welfareDate')" :key='i'>
                            {{item}}
                        </span>
                    </div>
                    <!-- 招聘职位 -->
                    <div class='zhiwei'>
                        <!-- 招聘职位标题 -->
                        <span class='telIntroduction'>{{$t('joinContent.recruitName')}}:</span> 
                        <!-- 招聘职位内容 -->
                        <span class='zhiwuxinxi'>{{$t('joinContent.RecruitmentPosition')}}</span>
                    </div>
                    <!-- 招聘地址 -->
                    <div class='zhiwei'>
                        <!-- 招聘地址标题 -->
                        <span class='telIntroduction'>{{$t('joinContent.Workcity.WorkName')}}:</span> 
                        <!-- 招聘地址内容 -->
                        <span class='zhiwuxinxi'>{{$t('joinContent.Workcity.cityName')}}</span>
                    </div>
                </div>
                <div class="joinyouJS">
                    <div class='Apply'>
                        <!-- 申请1 -->
                        <div class='Applybox' v-for="(item,i) in $t('joinContent.allApply')" :key='i'>

                            <q-card class="my-card" flat bordered>
                                <q-card-section>
                                    <div class="text-h5 q-mt-sm q-mb-xs tit">
                                        {{item.ApplyName}}
                                        <q-btn unelevated  size="xs" color="primary" :label="$t('joinContent.cllme')" @click="join"/>
                                    </div>
                                    <div class="text-caption text-grey">
                                        <q-chip size="sm"  v-for="(itemC,i) in item.chip" :key='i'>
                                            {{itemC}}
                                        </q-chip>
                                    </div>
                                    <div class="text-caption text-grey">
                                        <div>
                                            岗位职责：
                                        </div>
                                        <div v-for="(items,i) in item.jobResponsibilities" :key='i'>
                                            {{items}}
                                        </div>
                                        <!-- 1、从事公司医学影像软件的相关开发和研究；<br/>
                                        2、依据产品开发计划实施产品设计工作，并确定产品技术性能标准；<br/>
                                        3、按照工作进度和编程规范编写系统中的关键模块、关键算法的程序；<br/>
                                        4、参与软件系统的设计和分析，完成软件开发的设计、开发和编程任务；<br/>
                                        5、负责软件故障的诊断、定位、分析和调试，以实施产品测试方案；<br/>
                                        6、对所编写的程序进行严格的综合测试，配合测试组作相应的修改；<br/>
                                        7、分析并理解软件需求，撰写功能及设计规范文档，实施软件文档计划。 -->
                                        <!-- {{$t('joinContent.allApply[0].jobresponsibilities')}} -->
                                    </div>
                                </q-card-section>

                                <q-card-actions>
                                    <q-space />
                                    <q-btn color="grey" round flat dense :icon="item.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" @click="item.expanded = !item.expanded"/>
                                </q-card-actions>

                                <q-slide-transition>
                                    <div v-show="item.expanded">
                                        <q-separator />
                                        <q-card-section class="text-subitle2">
                                            <div class="text-caption text-grey">
                                                <div>
                                                    任职要求：
                                                </div>
                                                <div v-for="(item2,i) in item.jobRequirements" :key='i'>
                                                    {{item2}}
                                                </div>
                                            </div>
                                        </q-card-section>
                                    </div>
                                </q-slide-transition>
                            </q-card>

                        </div>
                    </div>
                </div>
            </div>

            
            
            
        </div>
        
    </div>
</template>
<script>
import '../styles/join/join.less'
export default {
    data() {
        return {
            expanded:false,
            expanded1: false,
            expanded2: false,
            expanded3: false,
            expanded4: false,
            lorem: 'aaaaa100',
        }
    },
    created(){
    },
    computed:{
    },
    components:{
    },
    methods:{
        join(){
            this.$router.push('/Contact')
        }
    },
}
</script>
<style lang="less" scoped>
.tit{
    display: flex;
    justify-content: space-between;
}
</style>
