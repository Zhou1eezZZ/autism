<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle" class="navFix">
      <el-col :span="5"></el-col>
      <el-col :span="14">
        <el-card>
          <div slot="header" style="text-align:left;">
            <el-row type="flex" justify="space-between" align="middle">
              <span style="font-size:1.8rem;font-weight:bold">{{relateInfo.realName}}</span>
              <el-button type="text" @click="$router.back(-1)" style="padding:0">返回个人中心</el-button>
            </el-row>
          </div>
          <el-form :model="relateInfo" label-position="left" label-width="85px">
            <el-form-item prop="uuid" label="用户ID：" class="formItem">
              <span>{{relateInfo.uuid}}</span>
            </el-form-item>
            <el-form-item prop="type" label="用户类型：" class="formItem">
              <span>{{relateInfo.type | filterByDic(userDic)}}</span>
            </el-form-item>
            <el-form-item prop="phone" label="手机号：" class="formItem">
              <span>{{relateInfo.phone}}</span>
            </el-form-item>
            <el-form-item prop="name" label="用户名：" class="formItem">
              <span>{{relateInfo.name}}</span>
            </el-form-item>
            <el-form-item v-if="relateInfo.email" prop="email" label="邮箱：" class="formItem">
              <span>{{relateInfo.email}}</span>
            </el-form-item>
            <!-- <el-form-item v-if="userData.realName" prop="realName" label="真实姓名：" class="formItem">
        <span>{{userData.realName}}</span>
            </el-form-item>-->
            <el-form-item prop="sex" label="性别：" class="formItem">
              <span>{{relateInfo.sex | filterByDic(sexDic)}}</span>
            </el-form-item>
            <el-form-item v-if="relateInfo.nation" prop="nation" label="民族：" class="formItem">
              <span>{{relateInfo.nation |filterByDic(nationDic)}}</span>
            </el-form-item>
            <el-form-item v-if="relateInfo.address" prop="address" label="地址：" class="formItem">
              <span>{{relateInfo.address}}</span>
            </el-form-item>
            <!-- <el-form-item prop="relatedUser" label="关联用户：" class="formItem">
        <el-input v-model="data.relatedUser" />
            </el-form-item>-->
          </el-form>
        </el-card>
        <el-card style="margin-top:2rem">
          <div slot="header" style="text-align:left;">
            <el-row type="flex" justify="space-between" align="middle">
              <span style="font-size:1.8rem;font-weight:bold">{{relateInfo.realName}}的干预报告</span>
              <el-button
                v-if="$store.state.user.type === '4'"
                type="text"
                style="padding:0"
                @click="dialogVisible = true"
              >新增</el-button>
            </el-row>
          </div>
          <el-table :data="interventionList">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="干预日志">
                    <span>{{ props.row.blog }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="interventionistId" label="干预师ID"></el-table-column>
            <el-table-column prop="startTime" label="开始时间"></el-table-column>
            <el-table-column prop="endTime" label="结束时间"></el-table-column>
            <el-table-column label="评估状态">
              <template slot-scope="scope">
                <span>{{scope.row.state|filterByDic(interventionDic)}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
    <el-dialog title="新增干预报告" :visible="dialogVisible" width="800px" :before-close="handleClose">
      <el-form
        :model="interventionInfo"
        label-position="right"
        label-width="140px"
        style="margin-right:50px"
      >
        <el-form-item prop="interventionId" label="干预对象ID">
          <el-input v-model="interventionInfo.interventionId" disabled/>
        </el-form-item>
        <el-form-item prop="interventionistId" label="干预师ID">
          <el-input v-model="interventionInfo.interventionistId" disabled/>
        </el-form-item>
        <el-form-item prop="state" label="干预状态">
          <el-select v-model="interventionInfo.state" placeholder="请选择" style="float:left">
            <el-option
              v-for="item in interventionDic"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="startTime" label="开始时间">
          <el-date-picker
            v-model="interventionInfo.startTime"
            type="date"
            placeholder="选择日期"
            value-format="timestamp"
            style="float:left"
          ></el-date-picker>
        </el-form-item>
        <el-form-item prop="endTime" label="结束时间">
          <el-date-picker
            v-model="interventionInfo.endTime"
            type="date"
            placeholder="选择日期"
            value-format="timestamp"
            style="float:left"
          ></el-date-picker>
        </el-form-item>
        <el-form-item prop="blog" label="干预日志">
          <el-input
            type="textarea"
            :autosize="{ minRows: 6, maxRows: 20}"
            placeholder="请输入内容"
            v-model="interventionInfo.blog">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="addIntervention">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import sexDic from '@/assets/dictionary/sex'
import nationDic from '@/assets/dictionary/nation'
import userDic from '@/assets/dictionary/user'
import interventionDic from '@/assets/dictionary/interventionState'
import AsscessAPI from '@/api/asscess'
export default {
  data() {
    return {
      relateInfo: '',
      sexDic: sexDic,
      nationDic: nationDic,
      userDic: userDic,
      interventionDic: interventionDic,
      interventionList: [],
      dialogVisible: false,
      interventionInfo: {}
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
    if (this.$route.query && this.$route.query.info) {
      this.relateInfo = this.$route.query.info
    }
    this.getInterventionList()
    const data = {
      interventionId: this.relateInfo.uuid,
      interventionistId: this.$store.state.user.uuid
    }
    this.interventionInfo = Object.assign({}, data)
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    getInterventionList() {
      const vm = this
      const data = {
        interventionId: this.relateInfo.uuid
      }
      AsscessAPI.getAsscess(data).then(res => {
        if (res && res.data && res.data.successful) {
          vm.interventionList = res.data.data.list
        } else {
          vm.$message({
            type: 'error',
            message: res.data.statusMessage
          })
        }
      })
    },
    addIntervention() {
      const vm = this
      AsscessAPI.addAsscess(this.interventionInfo).then(res => {
        debugger
        if (res && res.data && res.data.successful) {
          vm.$message({
            type: 'success',
            message: '新增报告成功'
          })
          vm.getInterventionList()
        } else {
          vm.$message({
            type: 'error',
            message: res.data.statusMessage
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.formItem {
  width: 50%;
  float: left;
  text-align: left;
}
</style>