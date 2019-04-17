<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="4"></el-col>
        <el-col :span="16" class="waterfull">
          <el-card v-for="(i,index) in gameList" :key="index" class="gameCard">
              <img :src="i.img" class="image">
              <h1 class="efont">{{i.name}}</h1>
              <p>{{i.summary}}</p>
              <el-button v-if="i.name !== 'Autism Games'" type="primary" style="margin-top:1.6rem" class="efont" @click="playGame(i.url)">PLAY NOW</el-button>
              <el-button v-else type="primary" style="margin-top:1.6rem" class="efont" @click="playGame(i.url)">VIEW NOW</el-button>
          </el-card>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
  </div>
</template>

<script>
import GameAPI from '@/api/game'
export default {
  data(){
    return {
      gameList:[]
    }
  },
  created(){
    this.getGameList()
  },
  methods:{
    playGame(url){
      console.log(url)
      const link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      link.remove()
    },
    getGameList(){
      const vm = this
      GameAPI.getGames().then(response => {
        if(response && response.data && response.data.successful){
          // debugger
          vm.gameList = response.data.data.list
        }else{
          vm.$message({
            title:'游戏列表查询失败',
            message:response.data.statusMessage,
            type:'error'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.waterfull{
  column-gap:10px;
  column-count: 3;
}
.gameCard{
  /* width: calc((100% - 60px) / 3); */
  width: 100%;
  margin: 2% 9px;
  float: left;
  break-inside: avoid;
}
.gameCard h1{
  font-size:2rem;
  line-height: 3rem;
  font-weight: bold;
}
.gameCard p{
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.8rem;
}
.image {
    width: 100%;
    display: block;
  }
</style>
