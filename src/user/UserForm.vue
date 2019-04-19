<template>
  <div>
    <el-form
      v-if="isEditable"
      ref="userInfoData"
      :rules="rules"
      :model="userData"
      label-position="right"
      label-width="100px"
      style="overflow:hidden"
    >
      <el-form-item prop="uuid" label="用户ID">
        <el-input v-model="userData.uuid" disabled/>
      </el-form-item>
      <el-form-item prop="type" label="用户类型" required>
        <el-input v-model="userData.type" disabled/>
      </el-form-item>
      <div v-if="userData.type === '4'">
        <el-form-item prop="deptId" label="所属机构">
          <el-input v-model="userData.deptId"/>
        </el-form-item>
        <el-form-item prop="qualificationNumber" label="干预师资格认证号">
          <el-input v-model="userData.qualificationNumber"/>
        </el-form-item>
        <el-form-item prop="workTime" label="从业时间">
          <el-input v-model="userData.workTime"/>
        </el-form-item>
      </div>
      <el-form-item prop="phone" label="手机号">
        <el-input v-model="userData.phone" disabled/>
      </el-form-item>
      <el-form-item prop="name" label="用户名">
        <el-input v-model="userData.name"/>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="userData.email"/>
      </el-form-item>
      <el-form-item prop="realName" label="真实姓名">
        <el-input v-model="userData.realName"/>
      </el-form-item>
      <el-form-item prop="sex" label="性别">
        <!-- <el-input v-model="userData.sex"/> -->
        <el-select v-model="userData.sex" placeholder="请选择" style="float:left">
          <el-option
            v-for="item in sexDic"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="nation" label="民族">
        <el-input v-model="userData.nation"/>
      </el-form-item>
      <el-form-item prop="address" label="地址">
        <el-input v-model="userData.address"/>
      </el-form-item>
      <!-- <el-form-item prop="relatedUser" label="关联用户">
        <el-input v-model="data.relatedUser" />
      </el-form-item>-->
    </el-form>
    <el-form v-else :model="userData" label-position="left" label-width="85px">
      <el-form-item prop="uuid" label="用户ID：" class="formItem">
        <span>{{userData.uuid}}</span>
      </el-form-item>
      <el-form-item prop="type" label="用户类型：" class="formItem">
        <span>{{userData.type}}</span>
      </el-form-item>
      <div v-if="userData.type === '4'">
        <el-form-item prop="deptId" label="所属机构：" class="formItem">
          <span>{{userData.deptId}}</span>
        </el-form-item>
        <el-form-item prop="qualificationNumber" label="干预师资格认证号：" class="formItem">
          <span>{{userData.qualificationNumber}}</span>
        </el-form-item>
        <el-form-item prop="workTime" label="从业时间：" class="formItem">
          <span>{{userData.workTime}}</span>
        </el-form-item>
      </div>
      <el-form-item prop="phone" label="手机号：" class="formItem">
        <span>{{userData.phone}}</span>
      </el-form-item>
      <el-form-item prop="name" label="用户名：" class="formItem">
        <span>{{userData.name}}</span>
      </el-form-item>
      <el-form-item prop="email" label="邮箱：" class="formItem">
        <span>{{userData.email}}</span>
      </el-form-item>
      <el-form-item v-if="userData.realName" prop="realName" label="真实姓名：" class="formItem">
        <span>{{userData.realName}}</span>
      </el-form-item>
      <el-form-item prop="sex" label="性别：" class="formItem">
        <span>{{userData.sex}}</span>
      </el-form-item>
      <el-form-item v-if="userData.nation" prop="nation" label="民族：" class="formItem">
        <span>{{userData.nation}}</span>
      </el-form-item>
      <el-form-item v-if="userData.address" prop="address" label="地址：" class="formItem">
        <span>{{userData.address}}</span>
      </el-form-item>
      <!-- <el-form-item prop="relatedUser" label="关联用户：" class="formItem">
        <el-input v-model="data.relatedUser" />
      </el-form-item>-->
    </el-form>
    <el-button v-if="!isEditable" type="primary" @click="$emit('changeEditState',true)">修改信息</el-button>
    <div v-else>
      <el-button type="primary" @click="updateInfo">确认</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>

<script>
import sexDic from '@/assets/dictionary/sex'
export default {
  data() {
    return {
      userData: null,
      rules: {
        name: [{ required: true, message: '用户名为必填项', trigger: 'blur' }],
        phone: [{ required: true, message: '手机号为必填项', trigger: 'blur' }],
        uuid: [{ required: true, message: 'ID为必填项', trigger: 'blur' }],
        email: [
          { required: true, message: '邮箱为必填项', trigger: 'blur' },
          {
            pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
            message: '邮箱格式有误',
            trigger: 'blur'
          }
        ]
      },
      sexDic: sexDic
    }
  },
  created() {
    this.userData = Object.assign({}, this.$store.state.user)
  },
  props: {
    isEditable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    updateInfo() {
      const vm = this
      this.$confirm('确认提交当前修改资料？', '提示', {
        confirmButtonText: '提交',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        vm.$store.dispatch('user/UpdateUserInfo', this.userData).then(res => {
          if (res && res.data && res.data.successful && res.data.data.list) {
            vm.$message({
              type: 'success',
              message: '用户信息更新成功'
            })
          } else {
            vm.$message({
              type: 'error',
              message: res.data.statusMessage
            })
          }
          vm.$emit('changeEditState', false)
        })
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
