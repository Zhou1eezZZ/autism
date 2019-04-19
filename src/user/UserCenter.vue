<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle" class="navFix">
      <el-col :span="5"></el-col>
      <el-col :span="14">
        <el-card>
          <div slot="header" style="text-align:left;">
            <span style="font-size:1.8rem;font-weight:bold">我的信息</span>
          </div>
          <transition name="fade" mode="out-in" appear>
            <user-form
             :is-editable.sync="editable"
             @changeEditState="changeEditState"
             />
          </transition>
        </el-card>
        <el-tabs
          v-model="activeTabName"
          style="margin-top:2rem"
          type="border-card"
          tab-position="top"
        >
          <el-tab-pane label="配置管理" name="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>

<script>
import userForm from './UserForm'
export default {
  data() {
    return {
      activeTabName: '配置管理',
      editable: false
    }
  },
  components: {
    userForm
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
    changeEditState(state) {
      this.editable = state
    }
  }
}
</script>
