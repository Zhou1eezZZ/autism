<template>
  <el-row type="flex" justify="space-between" align="middle" style="height:100vh">
    <el-col :span="4"></el-col>
    <el-col :span="6">
      <h1 class="logo efont">AUTISM</h1>
      <el-input
        placeholder="请输入账号"
        prefix-icon="el-icon-mobile-phone"
        class="gap"
        v-model="accountNum"
      ></el-input>
      <el-input
        type="password"
        placeholder="请输入密码"
        prefix-icon="el-icon-goods"
        class="gap"
        clearable
        v-model="password"
      ></el-input>
      <div style="width:100%" class="gap">
        <router-link to="/SignIn" tag="p" class="tips">没有账号?</router-link>
      </div>
      <el-button type="primary" round style="width:45%" class="gap">登录</el-button>
      <el-button round style="width:45%" class="gap" @click="backHome">返回首页</el-button>
    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      accountNum: "",
      password: ""
    };
  },
  methods:{
    backHome(){
      this.$router.push({path:'/'})
    }
  }
};
</script>


<style scoped>
.logo {
  font-size: 3.2rem;
  /* font-weight: bold; */
  color: #409eff;
}
.tips {
  float: right;
  font-size: 1.4rem;
  color: #409eff;
}
.gap {
  margin-top: 2rem;
  overflow: hidden;
}
</style>
