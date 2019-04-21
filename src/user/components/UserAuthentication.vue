<template>
  <section style="text-align:left">
    <h1 style="font-size:1.6rem;line-height:3rem">
      <span v-if="$store.state.user.type !== '1'">已认证，</span>您是
      <span v-if="$store.state.user.type==='2'">来自星星的孩子</span>
      <span v-else>{{$store.state.user.type | filterByDic(userDic)}}</span>
      <span v-if="$store.state.user.type === '1'">，您可以认证成为：</span>
    </h1>
    <div v-if="$store.state.user.type === '1'" style="font-size:1.4rem;line-height:3rem">
      <p>
        <el-tag type="success">ASD儿童</el-tag>我们为ASD儿童提供了辅助治疗的游戏介绍和游戏的入口。这些游戏采用寓教于乐的游戏形式，让用户在游戏过程中能够接受一些信息，得到训练或者治疗。
      </p>
      <p>
        <el-tag type="warning">家长用户</el-tag>我们为家长用户提供了对应ASD儿童的干预情况总结和分析，让家长能第一时间全面的了解到自己孩子的病症情况。
      </p>
      <p>
        <el-tag type="danger">治疗师</el-tag>我们为治疗师提供其治疗对象的基本信息和干预进展总结，以及对其工作的若干辅助功能。提升了治疗师辅助治疗效率的同时也方便治疗师与家长之间的信息互通。
      </p>
      <div style="width:100%;text-align:center">
        <el-button type="primary" @click="dialogVisible = true">开始认证</el-button>
      </div>
    </div>
    <div v-if="$store.state.user.type === '2'" style="font-size:1.4rem">
      <h1 style="font-size:1.6rem;font-weight:bold;line-height:4rem">《守护星星的孩子》</h1>
      <pre>{{wish}}</pre>
    </div>
    <div v-if="$store.state.user.type === '3'" style="font-size:1.4rem;line-height:3rem">
      <p>您可以去关联管理TAB查看您关联的用户，在详情页能了解到他们的干预情况。</p>
      <el-button type="text" @click="dialogVisible = true">继续关联用户>></el-button>
    </div>
    <div v-if="$store.state.user.type === '4'" style="font-size:1.4rem;line-height:3rem">
      <p>您可以去关联管理TAB查看您关联的用户，在详情页能添加和编辑他们的干预情况。</p>
      <el-button type="text" @click="dialogVisible = true">继续关联用户>></el-button>
    </div>

    <el-dialog title="用户认证" :visible.sync="dialogVisible" width="600px" :before-close="handleClose">
      <el-form
        :model="userInfo"
        label-position="right"
        label-width="140px"
        style="margin-right:50px"
      >
        <el-form-item prop="type" label="用户类型" required>
          <el-select
            v-model="userInfo.type"
            placeholder="请选择"
            style="float:left"
            :disabled="!($store.state.user.type === '1')"
          >
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
          <el-form-item v-if="!userInfo.deptId" prop="deptId" label="所属机构">
            <el-input v-model="userInfo.deptId"/>
          </el-form-item>
          <el-form-item
            v-if="!userInfo.qualificationNumber"
            prop="qualificationNumber"
            label="干预师资格认证号"
          >
            <el-input v-model="userInfo.qualificationNumber"/>
          </el-form-item>
          <el-form-item v-if="!userInfo.workTime" prop="workTime" label="从业开始时间">
            <el-date-picker
              v-model="userInfo.workTime"
              type="date"
              placeholder="选择日期"
              value-format="timestamp"
            ></el-date-picker>
          </el-form-item>
        </div>
        <el-form-item
          v-if="userInfo.type === '3' || userInfo.type === '4'"
          prop="relationUserId"
          label="关联用户ID"
          :required="userInfo.type === '3'"
        >
          <el-input v-model="relationUserId"/>
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
      relationUserId: '',
      wish: `美丽的夜空，你独自漂泊在遥远的天际，

用纯净的眼睛，注视着迷茫而陌生的世界。

你的身旁，闪烁着无数个和你一样的生命，

你们近在咫尺却又相隔万里。

你是星星的孩子，你是全世界最美丽的，星星的孩子。


因为你的目光，尘封了你的心门，

因为你的心门，惧怕这个世界的冷。

你用生命点燃了星空，却无法照亮自己的心灵。


鲜花在夜色下悄悄的绽开，

你有没有嗅到一缕缕的花香，

沁入你的心扉，

你有没有看到月色下娇艳的花蕊，

淌下的冰冷的泪珠。

那是因为你莫名的遥远，让花儿也学会了忧伤，

那是因为你拒绝开启的心门，让疼痛在花瓣上绽放。


你孤傲地在茫茫的宇宙流浪，

这个世界所有的美好，都淡漠在你的视野，

因为你的心里，放不下尘世间太多的喧嚣。

你是星星的孩子，你是全世界最美丽的，星星的孩子。


我在静静的夜里，仰望着璀灿的星空，

仰望着你骄傲的眼睛，那渴望温暖的心痛。

听你孤独的心灵，在黑暗中歌唱着自由。

星星的孩子，我们和你们一样，

感动和微笑是我们共同的信仰

快乐和忧伤请让我们一起的分享。


天空就像爱的大家庭，好多星星都住在一起

夜晚来临点亮了自己，默默照亮我们的心房

好想写信寄给那星星，好想爬上最高的屋顶

安慰每个爱哭的孩子，擦干眼泪开心到梦里

每一颗星星都像是天使，夜夜都来守护我和你。

每一颗星星都不怕迷路，天天托阳光送来贴心的祝福：


我们都要相信，共同努力，超越自己；

我们都有梦想，一起学习，快乐成长。

让梦想成为现实，我们一同走进知识的殿堂；

让自信带我们飞翔，明亮的世界就在前方。

让我们一起向着阳光奋力飞翔！飞翔！飞翔！`
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
  computed: {
    userStore() {
      return this.$store.state.user
    }
  },
  watch: {
    userStore: function(nv, ov) {
      if (nv) {
        this.userInfo = Object.assign({}, nv)
      }
    }
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
                this.$store.dispatch('user/SetUserInfo')
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
                  this.$store.dispatch('user/SetUserInfo')
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
