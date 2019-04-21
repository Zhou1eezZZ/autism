<template>
  <el-row type="flex" justify="space-between" align="middle" style="height:100vh">
    <el-col :span="4"></el-col>
    <el-col :span="6">
      <h1 class="logo efont">AUTISM</h1>
      <el-input
        placeholder="用户名"
        prefix-icon="el-icon-mobile-phone"
        class="gap"
        v-model="accountNum"
      ></el-input>
      <el-input
        type="phone"
        placeholder="手机号"
        prefix-icon="el-icon-mobile-phone"
        class="gap"
        v-model="phone"
      ></el-input>
      <el-input
        type="password"
        placeholder="请输入密码"
        prefix-icon="el-icon-goods"
        class="gap"
        show-password
        v-model="password"
      ></el-input>
      <el-input
        type="password"
        placeholder="请确认密码"
        prefix-icon="el-icon-goods"
        class="gap"
        show-password
        v-model="passwordConfirm"
      ></el-input>
      <div style="width:100%" class="gap">
        <p style="float:left">点击"注册"代表您同意遵守
          <i style="text-decoration:underline">用户协议</i>
        </p>
        <router-link to="/SignIn" tag="p" class="tips">已有账号?</router-link>
      </div>
      <el-button type="primary" round @click="signUp" style="width:45%" class="gap">注册</el-button>
      <el-button round style="width:45%" class="gap" @click="backHome">返回首页</el-button>
    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>

<script>
import UserAPI from '@/api/user'

export default {
  data() {
    return {
      accountNum: '',
      password: '',
      passwordConfirm: '',
      phone: ''
    }
  },
  methods: {
    backHome() {
      this.$router.push({ path: '/' })
    },
    signUp() {
      // const vm = this
      if (this.password === this.passwordConfirm) {
        const data = {
          name: this.accountNum,
          password: this.password,
          phone: this.phone
        }
        UserAPI.userSignUp(data).then(respone => {
          if (respone && respone.data && respone.data.successful) {
            this.$message({
              message: '注册成功',
              type: 'success'
            })
            this.$router.push({ path: '/SignIn' })
          } else {
            this.$message({
              message: respone.data.statusMessage,
              type: 'error'
            })
          }
        })
      } else {
        this.$message({
          type: 'error',
          message: '两次密码输入不一样'
        })
      }
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
