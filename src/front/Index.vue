<template>
  <div>
    <Header></Header>
    <div style="width: 100%;">
      <el-carousel :height="bannerHeight + 'px'" style="width: 100vw; text-align: center;">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.idView" alt="" style="object-fit: cover; width: 100%; height: inherit;">
        </el-carousel-item>
      </el-carousel>

    </div>
    <div class="floortwo">
      <div class="notice-board">
        <div class="header">
          <div class="title1">
            <i class="t1"></i>
            <h2>通知公告</h2>
            <span>NOTICE ANNOUNCEMENT</span>
          </div>
        </div>
        <div class="content">
          <div><a href="/list/3" class="more-link">查看更多 >></a></div>
          <div v-for="notice in notices" :key="notice.id" class="news">
            <div class="date">{{ notice.date }}</div>
            <a :href="notice.href">
              <div class="newtext">{{ notice.title }}</div>
            </a>

          </div>
        </div>
      </div>
      <div class="enright">
        <EntranceStu></EntranceStu>
        <EntranceCom></EntranceCom>
      </div>
    </div>
    <!-- 广告图片区域 -->
    <div class="main mar-20">
      <img src="../assets/images/p5.jpg" width="1200px" />
    </div>
    <!-- 三层区域 -->
    <div class="main mar-20">
      <el-row>
        <el-col :span="8">
          <r-card :channelId="1"></r-card>
        </el-col>
        <el-col :span="8">
          <r-card :channelId="2"></r-card>
        </el-col>
        <el-col :span="8">
          <el-card><el-calendar v-model="value"> </el-calendar></el-card>
        </el-col>
      </el-row>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue'
import EntranceStu from './EntranceStu.vue'
import EntranceCom from './EntranceCom.vue'
import { onMounted, reactive, ref } from 'vue'

const bannerHeight = ref(1)
const value = new Date()
const imgList = reactive([
  {
    id: 1,
    idView: require('@/assets/images/p3.jpg')
  },
  {
    id: 2,
    idView: require('@/assets/images/p2.png')
  },
  {
    id: 3,
    idView: require('@/assets/images/p1.jpg')
  }
])
const notices = reactive([
  {
    id: 1,
    date: '2024-12-20',
    title: '汕头大学2025新年网络招聘会邀请函',
    href: '/detail/21',
    content:
      '汕头大学2025新年网络招聘会邀请函尊敬的用人单位：首先衷心感谢贵单位长期以来对汕头大学毕业生就业工作的大力支持！为方便广大用人单位选拔人才，帮助毕业生拓宽就业渠道，由汕头大学招生就业处主办、广东百城'
  },
  {
    id: 2,
    date: '2024-12-11',
    title:
      '关于举办第二届全国大学生职业规划大赛汕头大学校决赛赛前培训会的通知',
    href: '/detail/22',
    content: ''
  },
  {
    id: 3,
    date: '2024-12-04',
    title:
      '关于转发教育部“24365校园招聘服务”全国教育系统2025届高校毕业生招聘活动的通知',
    href: '/detail/23',
    content: ''
  },
  {
    id: 4,
    date: '2024-12-03',
    title:
      '广东省2025届高校毕业生“秋季校园招聘月”系列网络招聘活动(汕头大学专场)邀请函',
    href: '/detail/24',
    content: ''
  }
])
onMounted(() => {
  const screenWidth = window.innerWidth
  bannerHeight.value = 400 / 1920 * screenWidth
  window.onresize = () => {
    const screenWidth = window.innerWidth
    bannerHeight.value = 400 / 1920 * screenWidth
  }
})
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

a {
  text-decoration: none;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.notice-board {
  width: 800px;
  background-color: white;
  border-radius: 5px;
}

.header {
  display: flex;
  height: 145px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background: url(../assets/images/bh1.jpg) center center;
}

.title1 {
  width: 185px;
  height: 145px;
  background: #0057ce;
}

.t1 {
  margin-top: 40px;
  margin-left: 16px;
  width: 57px;
  height: 2px;
  background: #fff;
  display: block;
}

.header h2 {
  margin-top: 10px;
  margin-left: 16px;
  margin-bottom: 10px;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
}

.header span {
  margin-left: 16px;
  font-size: 12px;
  color: #fff;
}

.more-link {
  position: absolute;
  top: -30px;
  right: 40px;
  color: #0057ce;
  text-decoration: none;
  font-size: 14px;
}

.news {
  display: flex;
  justify-content: flex-start;
}

.date {
  height: 42px;
  width: 180px;
  line-height: 42px;
}

.newtext {
  width: 600px;
  color: #333;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 42px;
  height: 42px;
  font-size: 14px;
  font-weight: 200;
}

.content {
  margin-top: 60px;
  position: relative;
  line-height: 1.6;
  padding-bottom: 30px;
}

.date {
  color: #666;
  margin-bottom: 5px;
}

h3 {
  margin: 0;
  margin-bottom: 10px;
}

.floortwo {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
}

.enright {
  width: 385px;
  height: 433px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
