<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <el-card class="gameCard">
            <img src="http://www.autismgames.com.au/img/s/s_02.jpg" class="image">
            RON GET DRESSED
          </el-card>
          <el-card class="gameCard">
            RUFUS GOES TO SCHOOL
          </el-card>
          <el-card class="gameCard">
            RUFUS GOES TO SCHOOL22
          </el-card>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    //
  }
}
</script>

<style scoped>
.gameCard{
  width: calc((100% - 60px) / 3);
  margin: 2% 9px;
  float: left;
}
.image {
    width: 100%;
    display: block;
  }
</style>
