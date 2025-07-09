<template>
  <div class="right_entrance">
    <!--学生入口-->
    <div class="stu_block">
      <div class="header" onclick="return Login(0)"></div>
      <div class="title" onclick="return Login(0)">
        <span class="t1">我是学生</span>
        <span class="t2">I AM A STUDENT</span>
      </div>
      <div class="entrance clearfix">
        <router-link to="/student_info">
          <span class="left">个人信息</span>
        </router-link>
        <router-link to="/resume" class="right">个人简历</router-link>
        <a class="left" href="/favor"><span>职位收藏</span></a>
        <a class="right" href="/student_send"
          ><span>求职管理</span></a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.stu_block {
  width: 385px;
  height: 210px;
  float: left;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.stu_block .header {
  width: 385px;
  height: 68px;
  background: url(../assets/images/stu-entrance.png) no-repeat center center;
  cursor: pointer;
  display: block;
}
.title {
  padding: 18px 30px 0 30px;
  position: relative;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  cursor: pointer;
  display: block;
}
.title .t1 {
  font-size: 18px;
  color: #000;
}
.title .t2 {
  font-size: 14px;
  color: #e7e7e7;
  position: absolute;
  right: 30px;
}
.entrance {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  padding: 0 30px 20px 30px;
}
.entrance > a {
  display: inline-block;
  font-size: 14px;
  color: #3b72bd;
  width: 45%;
  border-bottom: 1px solid #eee;
  line-height: 20px;
  margin-top: 20px;
  text-decoration: none;
}
.left {
  float: left;
}
.right {
  float: right;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
