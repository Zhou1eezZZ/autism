<template>
  <div>
    <section>
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <el-carousel type="card" indicator-position="outside" arrow="never">
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
              <img :src="item.url" class="image">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-row type="flex" justify="space-between" align="middle" style="margin-top:4rem">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <el-card :body-style="{ padding: '5vh 0','overflow':'hidden'}" style="border-radius:1rem;">
            <div class="cardLeft">
              <p>上面这些画美吗？</p>
              <p>它们的作者是星星的孩子⭐</p>
            </div>
            <div class="cardRight">
              <h1>什么是自闭症？</h1>
              <p>自闭症谱系障碍(ASD)是一种广泛性发育障碍，具体表现为社交沟通和社会交往缺陷与局限重复的行为、兴趣或活动。</p>
              <el-button
                class="font"
                type="primary"
                style="margin-top:5%"
                @click="toAboutASD()"
              >了解更多关于自闭症的信息</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </section>
    <section style="margin-top:4rem;">
      <h1 class="aboutTitle boldfont">关于本站</h1>
      <el-row type="flex" justify="space-between" style="margin-top:2.5rem">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <el-row type="flex" justify="space-between">
            <el-col :span="5" v-for="(data,index) in about" :key="index">
              <el-card class="aboutCard">
                <h1 class="boldfont" :style="{color:data.color}">{{data.userName}}</h1>
                <p>{{data.detail}}</p>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-button
        type="primary"
        class="font"
        style="margin:4rem 0;font-size:1.6rem"
        @click="signIn()"
      >注册对应类型的用户以获得相对应的服务→</el-button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: [
        {
          userName: '普通用户',
          detail:
            '我们为普通用户提供ASD相关的知识普及、量表自测等服务。确保用户能在第一时间收到关于自闭症的最新消息。',
          color: '#909399'
        },
        {
          userName: 'ASD儿童',
          detail:
            '我们为ASD儿童提供了辅助治疗的游戏介绍和游戏的入口。这些游戏采用寓教于乐的游戏形式，让用户在游戏过程中能够接受一些信息，得到训练或者治疗。',
          color: '#67C23A'
        },
        {
          userName: '家长',
          detail:
            '我们为家长用户提供了对应ASD儿童的干预情况总结和分析，让家长能第一时间全面的了解到自己孩子的病症情况。',
          color: '#E6A23C'
        },
        {
          userName: '治疗师',
          detail:
            '我们为治疗师提供其治疗对象的基本信息和干预进展总结，以及对其工作的若干辅助功能。提升了治疗师辅助治疗效率的同时也方便治疗师与家长之间的信息互通。',
          color: '#F56C6C'
        }
      ],
      imgList: [
        { url: '../static/images/homeCard.jpg' },
        { url: '../static/images/homeCard1.jpg' },
        { url: '../static/images/homeCard2.jpg' },
        { url: '../static/images/homeCard3.jpg' },
        { url: '../static/images/homeCard4.jpg' },
        { url: '../static/images/homeCard5.jpg' },
        { url: '../static/images/homeCard6.jpg' }
      ]
    }
  },
  components: {
    //
  },
  created() {
    this.$store.commit('user/SET_IP', returnCitySN['cip'])// 通过引入的搜狐js代码片段获取用户的ip
    this.$store.dispatch('weather/setWeather', this.$store.state.user.ip).then(() => {
      console.log('天气加载成功')
    })
  },
  methods: {
    signIn() {
      this.$router.push({ path: '/Login' })
    },
    toAboutASD() {
      this.$router.push({ path: '/AboutASD' })
    }
  }
}
</script>

<style scoped>
.image {
  /* width: 100%; */
  height: 100%;
}
.cardLeft{
  width: 50%;
  float: left;
  overflow: hidden;
  box-sizing: border-box;
}
.cardLeft p{
  font-size: 2.6rem;
  line-height: 6.8rem;
}
.cardRight {
  width: 50%;
  float: left;
  overflow: hidden;
  box-sizing: border-box;
  border-left: 1px solid #DCDFE6;
}
.cardRight h1 {
  font-size: 2.6rem;
  font-weight: bold;
}
.cardRight p {
  width: 50%;
  font-size: 1.6rem;
  text-align: left;
  margin: 0 auto;
  margin-top: 20px;
  line-height: 1.8rem;
}
.aboutTitle {
  color: #409eff;
  font-size: 2.8rem;
  font-weight: bold;
}
.aboutCard {
  box-sizing: border-box;
  padding: 1rem 1rem;
  height: 100%;
}
.aboutCard h1 {
  /* font-weight: bold; */
  font-size: 2.4rem;
}
.aboutCard p {
  margin-top: 2rem;
  font-size: 1.6rem;
  line-height: 1.8rem;
}
</style>
