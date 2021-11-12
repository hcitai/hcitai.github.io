<template>
    <div >
        <!-- 轮播图 -->
        <div class='lunbo'>
            <!-- <img src="../assets/hero-bg-pattern.jpg" alt=""> -->
            <div class='lunbotit'>
                <h3 style='margin: 20px 0;'>{{$t('contact.connecttit')}}</h3>
            </div>
            <div class='duanxian'></div>
            <div class='lunbohui'>
               {{$t('contact.connecthui')}}
            </div>
        </div>

        <div class='allTellme'> 
            <div class="box2">
                <!-- <div class="boxbody2"> -->                    
                    <div class="allbox2">
                        <div class="box2NR">
                            <span v-for="(item,i) in $t('contact.SHheadquartersAddress')" :key='i'>
                                {{item}}
                            </span>
                        </div>
                        <div class="box2btn">
                            <!-- <q-btn outline color="dark" label="了解更多" class="NRbtn" /> -->
                        </div>
                    </div>
                    <div class="box2Pic">
                        <img src="../assets/map/上海高容百度地图.png" alt="">
                    </div>
                <!-- </div> -->
            </div>
            <div class="box2">
                <!-- <div class="boxbody2"> -->   
                    <div class="HZmap">
                        <img src="../assets/map/杭州微引百度地图2.png" alt="">
                    </div>

                    <div class="allbox2">
                        <div class="box2NR">
                            <span  v-for="(item,i) in $t('contact.HZheadquartersAddress')" :key='i'>
                                {{item}}
                            </span>
                        </div>
                        <div class="box2btn">
                            <!-- <q-btn outline color="dark" label="了解更多" class="NRbtn" /> -->
                        </div>
                    </div>
                <!-- </div> -->
            </div>
            <!-- 办公地点 -->
            <!-- <div class="Officelocation">
                <div class="OfficelocationTit">
                    合作伙伴
                </div>
                <div class='Officelocationbox'>
                    <div class="Officelocationzuo">
                        <div class='allOfficelocation'>
                            <div class="allOfficelocationTit">
                                杭州地区办事处
                            </div>
                            <div class="OfficelocationNR">
                                <span>Intuitive Surgical, Inc.</span>
                                <span>1020 Kifer Road</span>
                                <span>Sunnyvale, CA 94086-5304</span>
                            </div>
                            <div class="OfficelocationPhone">
                                <div class='phone'>电话: <span class='blues'>408-523-2100</span></div>
                            </div>
                        </div>

                        <div class='allOfficelocation'>
                            <div class="allOfficelocationTit">
                                杭州地区办事处
                            </div>
                            <div class="OfficelocationNR">
                                <span>Intuitive Surgical, Inc.</span>
                                <span>1020 Kifer Road</span>
                                <span>Sunnyvale, CA 94086-5304</span>
                            </div>
                            <div class="OfficelocationPhone">
                                <div class='phone'>电话: <span class='blues'>408-523-2100</span></div>
                            </div>
                        </div>

                        <div class='allOfficelocation'>
                            <div class="allOfficelocationTit">
                                杭州地区办事处
                            </div>
                            <div class="OfficelocationNR">
                                <span>Intuitive Surgical, Inc.</span>
                                <span>1020 Kifer Road</span>
                                <span>Sunnyvale, CA 94086-5304</span>
                            </div>
                            <div class="OfficelocationPhone">
                                <div class='phone'>电话: <span class='blues'>408-523-2100</span></div>
                            </div>
                        </div>

                        <div class='allOfficelocation'>
                            <div class="allOfficelocationTit">
                                杭州地区办事处
                            </div>
                            <div class="OfficelocationNR">
                                <span>Intuitive Surgical, Inc.</span>
                                <span>1020 Kifer Road</span>
                                <span>Sunnyvale, CA 94086-5304</span>
                            </div>
                            <div class="OfficelocationPhone">
                                <div class='phone'>电话: <span class='blues'>408-523-2100</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="Officelocationyou">
                        <div class='allOfficelocation'>
                            <div class="allOfficelocationTit">
                                杭州地区办事处
                            </div>
                            <div class="OfficelocationNR">
                                <span>Intuitive Surgical, Inc.</span>
                                <span>1020 Kifer Road</span>
                                <span>Sunnyvale, CA 94086-5304</span>
                            </div>
                            <div class="OfficelocationPhone">
                                <div class='phone'>电话: <span class='blues'>408-523-2100</span></div>
                            </div>
                        </div>
                        <div class='allOfficelocation'>
                            <div class="allOfficelocationTit">
                                杭州地区办事处
                            </div>
                            <div class="OfficelocationNR">
                                <span>Intuitive Surgical, Inc.</span>
                                <span>1020 Kifer Road</span>
                                <span>Sunnyvale, CA 94086-5304</span>
                            </div>
                            <div class="OfficelocationPhone">
                                <div class='phone'>电话: <span class='blues'>408-523-2100</span></div>
                            </div>
                        </div>
                        <div class='allOfficelocation'>
                            <div class="allOfficelocationTit">
                                杭州地区办事处
                            </div>
                            <div class="OfficelocationNR">
                                <span>Intuitive Surgical, Inc.</span>
                                <span>1020 Kifer Road</span>
                                <span>Sunnyvale, CA 94086-5304</span>
                            </div>
                            <div class="OfficelocationPhone">
                                <div class='phone'>电话: <span class='blues'>408-523-2100</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            
        </div>
    </div>
</template>
<script>
import '../styles/contact/contact.less'
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
        fuwu(){
            
        },
        goContact(){
            
        },
    },
}
</script>
<style lang="less" scoped>

</style>
