<template>
    <div>
        <q-card class="my-card" flat bordered>
            <q-card-section>
                <div class="text-h5 q-mt-sm q-mb-xs tit">C++软件工程师
                    <q-btn unelevated  size="xs" color="primary" label="联系我们" @click="join"/>
                </div>
                <div class="text-caption text-grey">
                    <q-chip size="sm">C++</q-chip>
                    <q-chip size="sm">硕士</q-chip>
                    <q-chip size="sm">医学影像软件</q-chip>
                    <q-chip size="sm">深圳</q-chip>
                </div>
                <div class="text-caption text-grey">
                    <div>
                        岗位职责：
                    </div>
                    1、从事公司医学影像软件的相关开发和研究；<br/>
                    2、依据产品开发计划实施产品设计工作，并确定产品技术性能标准；<br/>
                    3、按照工作进度和编程规范编写系统中的关键模块、关键算法的程序；<br/>
                    4、参与软件系统的设计和分析，完成软件开发的设计、开发和编程任务；<br/>
                    5、负责软件故障的诊断、定位、分析和调试，以实施产品测试方案；<br/>
                    6、对所编写的程序进行严格的综合测试，配合测试组作相应的修改；<br/>
                    7、分析并理解软件需求，撰写功能及设计规范文档，实施软件文档计划。
                </div>
            </q-card-section>

            <q-card-actions>
                <q-space />
                <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expandeds ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expandeds = !expandeds"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expandeds">
                    <q-separator />
                    <q-card-section class="text-subitle2">
                        <div class="text-caption text-grey">
                        <div>
                            任职要求：
                        </div>
                            1、计算机、电子信息、数学、物理等相关专业硕士及以上学历；<br/>
                            2、熟练掌握C++编程；<br/>
                            3、2年以上Windows/Linux软件开发项目经验，良好的英语阅读及写作能力；<br/>
                            4、良好的编码习惯和技术文档编写能力，能及时掌握业务领域内的新技术；<br/>
                            5、工作认真负责，有较强的逻辑分析及学习能力，有协调沟通和团队合作精神；<br/>
                            6、具有医学影像领域开发经验者优先，熟悉VTK/ITK/OpenCV/OpenGL等开发者优先；<br/>
                            7、具有MATLAB、Python等编程经验者优先。
                        </div>
                    </q-card-section>
                </div>
            </q-slide-transition>
        </q-card>
    </div>
</template>
<script>
export default {
    props:{
        expanded: { // 新增订单信息
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
        }
    },
    created(){
    },
    computed:{
        expandeds:{
            get(){
                return this.expanded;
            },
            set(v){
                this.$emit('update:expanded',v)
            }
        }
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
