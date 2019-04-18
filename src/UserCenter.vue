<template>
  <div>
    个人中心
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
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
  }
}
</script>
