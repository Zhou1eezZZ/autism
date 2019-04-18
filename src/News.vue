<template>
  <div>
    <section>
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <ul v-for="i in newsList" :key="i.index">
            <li style="margin-top:1rem">
              <el-card
                :body-style="{ padding: '2rem 4rem'}"
                style="border-radius:1rem;height:100%"
                shadow="hover"
              >
                <h1 class="title" @click="showNewsDetail(i)">{{i.title}}</h1>
                <p class="from">来源：{{i.src}}</p>
                <p class="time">{{i.time}}</p>
              </el-card>
            </li>
          </ul>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </section>
    <section>
      <el-dialog
        :visible="isShow"
        :title="showNews ? showNews.title : 'title'"
        :lock-scroll="true"
        width="60%"
        @close="handleClose"
        class="dialog"
      >
          <div style="height:60vh">
            <el-scrollbar style="height:100%">
              <p style="margin:0 50px" v-html="showNews ? showNews.content : ''"></p>
            </el-scrollbar>
            
          </div>
          
      </el-dialog>
    </section>
  </div>
</template>
<script>
import { fetchNews } from '@/api/jisuAPI'
export default {
  data() {
    return {
      newsList: [],
      isShow: false,
      showNews: null
    }
  },
  created() {
    const vm = this
    fetchNews().then(response => {
      if (
        response.status === 200 &&
        response.data.msg === 'ok' &&
        response.data.result.list
      ) {
        vm.newsList = response.data.result.list
        vm.$message({
          showClose: true,
          type: 'success',
          title: '加载新闻成功',
          message: '加载新闻成功'
        })
      } else {
        vm.$message({
          showClose: true,
          type: 'error',
          title: '加载新闻失败',
          message: '加载新闻失败'
        })
      }
      console.log(response)
    })
  },
  methods: {
    showNewsDetail(n) {
      this.isShow = true
      this.showNews = n
    },
    handleClose() {
      this.isShow = false
      this.showNews = null
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 1.8rem;
  cursor: pointer;
  text-align: left;
  width: 100%;
}
.from,
.time {
  font-size: 1.6rem;
  text-align: left;
  width: 100%;
  margin-top: 1rem;
}
.dialog p {
  text-align: left;
  font-size: 1.6rem;
  line-height: 2rem;
  text-indent: 2em;
}
</style>
