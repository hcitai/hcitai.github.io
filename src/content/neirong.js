import {joinContent} from './JoinContent' //加入我们内容
import {introduction} from './Introduction' //公司介绍内容
import {home} from './Home' //首页内容
import {contact} from './Contact' //联系我们内容
import {news} from './News' //新闻内容
import {profile} from './Profile' //关于我们内容

export const messages = {
    zh: {
      //公共APP内容区
      appcontent: {
        //顶部
        top:{
          //顶部公司名称
          topbiaoti:'高容科技',
          //顶部按钮区域
          function:{
            functionbtn1:'首页',
            functionbtn2:'公司简介',
            functionbtn3:'公司新闻',
            functionbtn4:'关于我们',
            functionbtn5:'加入我们',
            functionbtn6:'联系我们',
          }
        },
        //底部
        foot:{
          // 底部功能区
          footFunction:['首页','公司简介','公司新闻','关于我们','加入我们','联系我们'],
          // 公司地址电话
          Telephone:{
            //内容区
            TelephoneNR:[
              {
                NR1:'上海高容科技有限公司',
                NR2:'上海市闵行区东川路',
                NR3:'555号',
                NR4:'紫竹数码港',
                NR5:'6号楼',
                shouji:{
                  shouji1:'手机: 021-61200998',
                  email:'邮箱: cs@hcit.ai',
                },
              },
              {
                NR1:'杭州微引科技有限公司',
                NR2:'浙江省杭州市萧山区',
                NR3:'启迪路198号',
                NR4:'杭州湾信息港',
                NR5:'F座',
                shouji:{
                  shouji1:'手机:021-61200998',
                  email:'邮箱: cs@hcit.ai',
                },
              }
            ],
          },
          //版权问题
          copyright:'版权所有 © 上海高容科技有限公司。保留一切权利。'
        }
      },
      // 加入我们内容区
      joinContent:joinContent[0],
      // 公司简介模块内容
      introduction: introduction[0],
      // 首页模块内容
      home: home[0],
      //联系我们模块
      contact: contact[0],
      //公司新闻模块
      news:news[0],
      //关于我们模块
      profile:profile[0],
    },

    // 英文区
    en: {
      //公共APP内容区
      appcontent: {
        //顶部
        top:{
          topbiaoti:'HCit',
          //顶部按钮区域
          function:{
            functionbtn1:'Home',
            functionbtn2:'CompanyProfile',
            functionbtn3:'CompanyNews',
            functionbtn4:'AboutUs',
            functionbtn5:'JoinMe',
            functionbtn6:'contactUs',
          }
        },
        //底部
        foot:{
          // 底部功能区
          footFunction:['Home','CompanyProfile','CompanyNews','CompanyNews','AboutUs','JoinMe'],
          // 公司地址电话
          Telephone:{
            //内容区
            TelephoneNR:[
              {
                NR1:'Shanghai Gaorong Technology Co., Ltd',
                NR2:'Dongchuan Road, Minhang District, Shanghai',
                NR3:'555号',
                NR4:'Zizhu Cyberport',
                NR5:'Building 6',
                shouji:{
                  shouji1:'Phone: 021-61200998',
                  email:'email: cs@hcit.ai',
                },
              },
              {
                NR1:'Hangzhou Weiyin Technology Co., Ltd',
                NR2:'Xiaoshan District, Hangzhou City, Zhejiang Province',
                NR3:'198 Qidi Road',
                NR4:'Hangzhou Bay Information Port',
                NR5:'Seat F',
                shouji:{
                  shouji1:'Phone : 021-61200998',
                  email:'email: cs@hcit.ai',
                },
              }
            ],
          },
          //版权问题
          copyright:'Copyright © Shanghai Gaorong Technology Co., Ltd. All rights reserved.'
        }
      },
      // 加入我们模块内容
      joinContent:joinContent[1],
      // 公司简介模块内容
      introduction: introduction[1],
      // 首页模块内容
      home: home[1],
      //联系我们模块
      contact: contact[1],
      //公司新闻模块
      news:news[1],
      //关于我们模块
      profile:profile[1],
    }
}