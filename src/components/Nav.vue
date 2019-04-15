<template>
  <el-row type="flex" justify="space-between" align="middle" class="navFix">
    <el-col :span="4">
      <h1 class="logo efont">AUTISM</h1>
    </el-col>
    <el-col :span="14">
      <ul class="nav-block">
        <router-link
          to="/"
          tag="li"
          :class="{active:isActive==='1',boldfont:true}"
        >
          首页 /
          <span class="efont">Home</span>
        </router-link>
        <router-link
          to="/News"
          tag="li"
          :class="{active:isActive==='2',boldfont:true}"
        >
          资讯 /
          <span class="efont">Information</span>
        </router-link>
        <router-link
          to="/SelfTest"
          tag="li"
          :class="{active:isActive==='3',boldfont:true}"
        >
          自测 /
          <span class="efont">self-test</span>
        </router-link>
        <router-link
          to="/"
          tag="li"
          :class="{active:isActive==='4',boldfont:true}"
        >
          游戏 /
          <span class="efont">Games</span>
        </router-link>
      </ul>
    </el-col>
    <el-col :span="4">
      <div v-if="!$store.state.islogin">
        <ul class="nav-log-block">
          <router-link to="/SignIn" tag="li" class="boldfont">登录</router-link>
          <router-link to="/Login" tag="li" class="boldfont">注册</router-link>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      //isActive: "1"
    }
  },
  computed:{
    isActive(){
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
    }
  }
};
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
ul li {
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
