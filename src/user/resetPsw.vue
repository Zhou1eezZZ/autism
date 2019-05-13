<template>
  <el-row type="flex" justify="space-between" align="middle" style="height:88vh">
    <el-col :span="4"></el-col>
    <el-col :span="6">
      <el-form ref="signInData" :rules="rules" :model="data">
        <el-form-item prop="oldPsw" label="旧密码">
          <el-input v-model="data.oldPsw" type="password" show-password></el-input>
        </el-form-item>
        <el-form-item prop="newPsw" label="新密码">
          <el-input
            type="password"
            show-password
            v-model="data.newPsw"
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmNewPsw" label="确认新密码">
          <el-input
            type="password"
            show-password
            v-model="data.confirmNewPsw"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" round style="width:45%" @click="resetPsw">确认</el-button>
      <el-button round style="width:45%" class="gap" @click="$router.back(-1)">返回</el-button>
    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>

<script>
import UserAPI from '@/api/user'
export default {
  data() {
    return {
      data: {
        oldPsw: '',
        newPsw: '',
        confirmNewPsw: ''
      },
      rules: {},
      userInfo: this.$store.state.user
    }
  },
  created() {
    if (!this.$store.state.user.isLogin) {
      this.$message({
        type: 'warning',
        message: '账号未登录'
      })
      this.$router.push({ path: '/' })
    }
  },
  methods: {
    resetPsw() {
      const vm = this
      if (this.data.newPsw === this.data.confirmNewPsw) {
        let data = {
          newPsd: this.data.newPsw,
          password: this.data.oldPsw
        }
        data = Object.assign({}, data, this.userInfo)
        this.$delete(data, 'phone')
        // debugger
        UserAPI.pswUpdate(data).then(res => {
          // debugger
          if (res && res.data && res.data.successful) {
            vm.$message({
              type: 'success',
              message: '密码更新成功'
            })
            this.$router.push({ path: '/' })
          } else {
            vm.$message({
              type: 'error',
              message: res.data.statusMessage
            })
          }
        })
      } else {
        this.$message({
          type: 'warning',
          message: '两次密码输入不相同'
        })
      }
    }
  }
}
</script>
