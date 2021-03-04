<template>
  <el-row type="flex" justify="space-between" align="middle" class="navFix">
    <el-col :span="4">
      <h1 class="logo efontBold">启明星</h1>
    </el-col>
    <el-col :span="14">
      <transition name="fade" mode="out-in" appear>
      <ul v-if="!$route.meta.isCenter" class="nav-block">
        <router-link to="/" tag="li" :class="{active:isActive==='1',boldfont:true}">
          首页 /
          <span class="efont">Home</span>
        </router-link>
        <router-link to="/News" tag="li" :class="{active:isActive==='2',boldfont:true}">
          资讯 /
          <span class="efont">Information</span>
        </router-link>
        <router-link to="/SelfTest" tag="li" :class="{active:isActive==='3',boldfont:true}">
          自测 /
          <span class="efont">self-test</span>
        </router-link>
        <router-link to="/Games" tag="li" :class="{active:isActive==='4',boldfont:true}">
          游戏 /
          <span class="efont">Games</span>
        </router-link>
      </ul>
      <!-- <section v-if="$route.meta.isCenter">
        <div style="font-size:1.6rem;">
          <i class="el-icon-location-outline" style="color:#409eff"></i>
          <span style="color:#409eff">{{$store.state.weather.city}}&nbsp;&nbsp;</span>
          <img v-if="weatherIconSrc.length>10" :src="weatherIconSrc" style="width:1.4rem;height:1.4rem">
          <span v-else>{{weatherIconSrc}}</span>
          <span>{{$store.state.weather.weather}}&nbsp;&nbsp;</span>
          <span>{{$store.state.weather.temp}}°C&nbsp;&nbsp;</span>
          <span>{{$store.state.weather.date}}&nbsp;&nbsp;</span>
          <span>{{$store.state.weather.week}}</span>
        </div>
      </section> -->
      </transition>
    </el-col>
    <el-col :span="4">
      <div v-if="!$store.state.user.isLogin">
        <ul class="nav-log-block">
          <router-link to="/SignIn" tag="li" class="boldfont">登录</router-link>
          <router-link to="/Login" tag="li" class="boldfont">注册</router-link>
        </ul>
      </div>
      <div v-else class="efont" style="font-size:1.4rem">
        <el-dropdown>
          <span class="link-type">{{$store.state.user.name}}</span>▾
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item v-if="!$route.meta.isCenter" disabled>
              <i class="el-icon-location-outline" style="color:#409eff"></i>
              <span>{{$store.state.weather.city}}</span>
              <br>
              <img v-if="weatherIconSrc.length>10" :src="weatherIconSrc" style="width:1.4rem;height:1.4rem">
              <span v-else>{{weatherIconSrc}}</span>
              <span>{{$store.state.weather.temp}}°C</span>
            </el-dropdown-item> -->
            <el-dropdown-item v-if="!($route.path==='/')" @click.native="$router.push({path:'/'})">返回首页</el-dropdown-item>
            <el-dropdown-item
              v-if="!($route.path==='/UserCenter')"
              :divided="!$route.meta.isCenter"
              @click.native="toUserCenter"
            >个人中心</el-dropdown-item>
            <el-dropdown-item v-if="!($route.path==='/resetPsw')" @click.native="$router.push({path:'/resetPsw'})">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      // isActive: "1"
    }
  },
  computed: {
    isActive() {
      switch (this.$route.name) {
        case 'News':
          return '2'
        case 'SelfTest':
          return '3'
        case 'Games':
          return '4'
        default:
          return '1'
      }
    },
    weatherIconSrc() {
      const tmp = this.$store.state.weather.img
      if (tmp === '0') { return '☀️' } else if (tmp === '1') { return '🌥️' } else if (tmp === '2') { return '☁️' } else if (tmp === '3') { return '🌦️' } else if (tmp === '4') { return '⛈️' } else if (tmp === '7' || tmp === '8' || tmp === '9') { return '🌧️' } else if (tmp === '13' || tmp === '14') { return '🌨️' } else if (tmp === '15' || tmp === '16' || tmp === '17') { return '❄️' } else if (tmp === '18') { return '🌫️' } else { return `static/weathercn/${this.$store.state.weather.img}.png` }
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('user/FedLogOut').then(() => {
        this.$message({
          type: 'success',
          message: '成功退出登录',
          duration: 1000
        })
        this.$router.push({ path: '/' })
      })
    },
    toUserCenter() {
      if (this.$store.state.user.isLogin) {
        this.$router.push({ path: '/UserCenter' })
      }
    }
  }
}
</script>

<style scoped>
.navFix {
  height: 8rem;
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: white;
  min-width: 1200px;
}
.logo {
  font-size: 3.2rem;
  color: #409eff;
}
.nav-block li,
.nav-log-block li {
  float: left;
  font-size: 1.8rem;
}
.nav-block li {
  width: 25%;
  color: #909399;
  cursor: pointer;
}
.nav-log-block li {
  width: 46%;
  color: #409eff;
  cursor: pointer;
}
.nav-log-block li:first-child {
  text-align: right;
  padding-right: 0.5rem;
  border-right: solid 0.2rem #409eff;
}
.nav-log-block li:last-child {
  text-align: left;
  padding-left: 0.5rem;
}
.active {
  color: #409eff !important;
}
</style>
