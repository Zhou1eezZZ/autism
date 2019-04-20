<template>
  <section style="text-align:left">
    <h1 style="font-size:1.6rem;line-height:3rem">您现在是{{$store.state.user.type | filterByDic(userDic)}}<span v-if="$store.state.user.type === '1'">，您可以认证成为：</span></h1>
    <div v-if="$store.state.user.type" style="font-size:1.4rem;line-height:3rem">
      <p>
        <el-tag type="success">ASD儿童</el-tag>
        我们为ASD儿童提供了辅助治疗的游戏介绍和游戏的入口。这些游戏采用寓教于乐的游戏形式，让用户在游戏过程中能够接受一些信息，得到训练或者治疗。
      </p>
      <p>
        <el-tag type="warning">家长用户</el-tag>
        我们为家长用户提供了对应ASD儿童的干预情况总结和分析，让家长能第一时间全面的了解到自己孩子的病症情况。
      </p>
      <p>
        <el-tag type="danger">治疗师</el-tag>
        我们为治疗师提供其治疗对象的基本信息和干预进展总结，以及对其工作的若干辅助功能。提升了治疗师辅助治疗效率的同时也方便治疗师与家长之间的信息互通。
      </p>
      <div style="width:100%;text-align:center">
        <el-button type="primary" @click="dialogVisible = true">开始认证</el-button>
      </div>
    </div>
    <el-dialog
      title="用户认证"
      :visible.sync="dialogVisible"
      width="600px"
      :before-close="handleClose">
      <el-form :model="userInfo"
       label-position="right"
      label-width="140px"
      style="margin-right:50px">
        <el-form-item prop="type" label="用户类型" required>
          <el-select v-model="userInfo.type" placeholder="请选择" style="float:left" >
            <el-option
              v-for="item in userDic"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.value==='1'"
            ></el-option>
          </el-select>
        </el-form-item>
        <div v-if="userInfo.type === '4'">
        <el-form-item prop="deptId" label="所属机构">
            <el-input v-model="userInfo.deptId"/>
          </el-form-item>
          <el-form-item prop="qualificationNumber" label="干预师资格认证号">
            <el-input v-model="userInfo.qualificationNumber"/>
          </el-form-item>
          <el-form-item prop="workTime" label="从业开始时间">
            <el-date-picker
              v-model="userInfo.workTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </div>
        <el-form-item v-if="userInfo.type === '3' || userInfo.type === '4'" prop="relationUserId" label="关联用户ID" :required="userInfo.type === '3'">
          <el-input v-model="relationUserId" />
        </el-form-item>
        <el-form-item v-if="userInfo.type === '2'">
          <span style="color:#909399">愿来自星星的你被温柔善待。</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="authentication">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import userDic from '@/assets/dictionary/user'
import UserRelateAPI from '@/api/userRelate'
export default {
  data() {
    return {
      userDic: userDic,
      dialogVisible: false,
      userInfo: null,
      relationUserId: ''
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
    this.userInfo = Object.assign({}, this.$store.state.user)
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    updateInfo(info) {
      const vm = this
      vm.$store.dispatch('user/UpdateUserInfo', info).then(res => {
        if (res && res.data && res.data.successful && res.data.data.list) {
          vm.$message({
            type: 'success',
            message: '认证成功'
          })
        } else {
          vm.$message({
            type: 'error',
            message: res.data.statusMessage
          })
        }
        vm.handleClose()
      })
    },
    authentication() {
      switch (this.userInfo.type) {
        case '1':
          this.handleClose()
          break
        case '2':
          this.$confirm('确认当前操作？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.updateInfo(this.userInfo)
          })
          break
        case '3':
          this.$confirm('确认当前操作？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            const data = {
              relationUserId: this.relationUserId,
              userId: this.$store.state.user.uuid
            }
            UserRelateAPI.addRelation(data).then(res => {
              // debugger
              if (res && res.data && res.data.successful) {
                this.$message({
                  type: 'success',
                  message: '关联成功'
                })
              } else {
                this.$message({
                  type: 'error',
                  message: res.data.statusMessage
                })
              }
            })
            this.updateInfo(this.userInfo)
          })
          break
        case '4':
          this.$confirm('确认当前操作？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if (this.relationUserId) {
              const data = {
                relationUserId: this.relationUserId,
                userId: this.$store.state.user.uuid
              }
              UserRelateAPI.addRelation(data).then(res => {
                if (res && res.data && res.data.successful) {
                  this.$message({
                    type: 'success',
                    message: '关联成功'
                  })
                } else {
                  this.$message({
                    type: 'error',
                    message: res.data.statusMessage
                  })
                }
              })
            }
            this.updateInfo(this.userInfo)
          })
          break
        default:
          break
      }
    }
  }
}
</script>
