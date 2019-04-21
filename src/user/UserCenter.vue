<template>
  <div>
    <keep-alive>
      <el-row type="flex" justify="space-between" align="middle" class="navFix">
        <el-col :span="5"></el-col>
        <el-col :span="14">
          <el-card>
            <div slot="header" style="text-align:left;">
              <span style="font-size:1.8rem;font-weight:bold">我的信息</span>
            </div>
            <transition name="fade" mode="out-in" appear>
              <user-form :is-editable.sync="editable" @changeEditState="changeEditState"/>
            </transition>
          </el-card>
          <el-tabs
            v-model="activeTabName"
            style="margin-top:2rem"
            type="border-card"
            tab-position="top"
          >
            <el-tab-pane label="用户认证" name="用户认证">
              <user-authentication/>
            </el-tab-pane>
            <el-tab-pane
              v-if="$store.state.user.type === '3' || $store.state.user.type === '4'"
              label="关联管理"
              name="关联管理"
            >
              <el-table :data="relationData">
                <el-table-column label="真实姓名">
                  <template slot-scope="scope">
                    <el-button
                      type="text"
                      @click="$router.push({path:'/RelationDetail',query:{info:scope.row}})"
                    >{{scope.row.realName}}</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="phone" label="电话"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column label="民族">
                  <template slot-scope="scope">
                    <span>{{scope.row.nation|filterByDic(nationDic)}}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <!-- <el-tab-pane label="定时任务补偿" name="定时任务补偿">定时任务补偿</el-tab-pane> -->
          </el-tabs>
        </el-col>
        <el-col :span="5"></el-col>
      </el-row>
    </keep-alive>
  </div>
</template>

<script>
import userForm from './components/UserForm'
import nationDic from '@/assets/dictionary/nation'
import UserAuthentication from './components/UserAuthentication'
export default {
  data() {
    return {
      activeTabName: '用户认证',
      editable: false,
      relationData: this.$store.state.user.relatedUser,
      nationDic: nationDic
    }
  },
  components: {
    userForm,
    UserAuthentication
  },
  computed: {
    userStore() {
      return this.$store.state.user
    }
  },
  watch: {
    'userStore.relatedUser': function(nv, ov) {
      if (nv) {
        this.relationData = nv
      }
    }
  },
  filters: {
    filterByDic(val, dic) {
      // debugger
      if (val && dic) {
        return dic.find(e => e.value === val).label
      }
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
    changeEditState(state) {
      this.editable = state
    }
  }
}
</script>
