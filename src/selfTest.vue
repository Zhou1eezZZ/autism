<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="4"></el-col>
      <el-col :span="16">
        <el-card>
          <div slot="header">
            <span style="font-size:2rem">自闭症儿童ABC量表</span>
          </div>
          <el-form ref="selfTestFormABC" v-model="selfTestFormABC" label-width="40rem" label-position="left" style="margin:0 50px;">
          <el-form-item label="1. 对声音和语言感到迟钝。" prop="t1">
            <el-radio-group v-model="selfTestFormABC.t1">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="2. 与其他儿童交往感到困难。" prop="t2">
            <el-radio-group v-model="selfTestFormABC.t2">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="3. 厌恶学习。" prop="t3">
            <el-radio-group v-model="selfTestFormABC.t3">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="4. 对各种危险，如玩火、登高、在街上乱跑缺乏应有的认识。" prop="t4">
            <el-radio-group v-model="selfTestFormABC.t4">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="5. 已养成的习惯坚决不改变。" prop="t5">
            <el-radio-group v-model="selfTestFormABC.t5">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="6. 不爱说话，有时宁愿用手势表示意愿也不用语言表达。" prop="t6">
            <el-radio-group v-model="selfTestFormABC.t6">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="7. 常常无缘无故地微笑。" prop="t7">
            <el-radio-group v-model="selfTestFormABC.t7">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="8. 不是像一般的幼儿那样弓着身子睡觉，而是僵硬地伸直腿脚睡。" prop="t8">
            <el-radio-group v-model="selfTestFormABC.t8">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="9. 精力异常充沛，有时可半夜醒来，一直玩到早晨仍不疲倦。" prop="t9">
            <el-radio-group v-model="selfTestFormABC.t9">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="10. 不愿和任何人的目光接触。" prop="t10">
            <el-radio-group v-model="selfTestFormABC.t10">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="11. 对某件事物可能产生特殊的爱好和依恋，抓住不放。" prop="t11">
            <el-radio-group v-model="selfTestFormABC.t11">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="12. 喜欢旋转圆形物体，而且可以长时间做出同样动作。" prop="t12">
            <el-radio-group v-model="selfTestFormABC.t12">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="13. 重复、持续地玩一些单调的游戏，如撕纸、摇铁筒中的石块等。" prop="t13">
            <el-radio-group v-model="selfTestFormABC.t13">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="14. 怪僻孤独，不合群。" prop="t14">
            <el-radio-group v-model="selfTestFormABC.t14">
              <el-radio label="1">A.无</el-radio>
              <el-radio label="2">B.轻</el-radio>
              <el-radio label="3">C.明显</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        </el-card>
        
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfTestFormABC: {}
    };
  }
};
</script>

