<template>
  <el-row type="flex" justify="space-between" align="middle" style="height:100vh">
    <el-col :span="4"></el-col>
    <el-col :span="6">
      <h1 class="logo efont">AUTISM</h1>
      <el-form ref="signInData" :rules="rules" :model="data">
        <el-form-item prop="phone">
          <el-input
            placeholder="请输入手机号"
            prefix-icon="el-icon-mobile-phone"
            class="gap"
            v-model="data.phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-goods"
            show-password
            v-model="data.password"
          ></el-input>
        </el-form-item>
      </el-form>

      <div style="width:100%" class="gap">
        <router-link to="/Login" tag="p" class="tips">没有账号?</router-link>
      </div>
      <el-button type="primary" round style="width:45%" class="gap" @click="signIn">登录</el-button>
      <el-button round style="width:45%" class="gap" @click="backHome">返回首页</el-button>
    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      rules: {},
      data: {
        phone: '',
        password: ''
      }
    }
  },
  created() {
    // console.log(this.$store)
  },
  methods: {
    backHome() {
      this.$router.push({ path: '/' })
    },
    signIn() {
      this.$store.dispatch('user/LoginByPhone', this.data).then(response => {
        if (response && response.data && response.data.successful) {
          this.$message({
            type: 'success',
            message: '登录成功',
            duration: 1000
          })
          this.$router.push({ path: '/' })
        } else {
          this.$message({
            type: 'error',
            message: response.data.statusMessage,
            showClose: true
          })
        }
      })
    }
  }
}
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
