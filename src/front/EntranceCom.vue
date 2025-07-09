<template>
  <!--企业入口-->
  <div class="teach_block">
    <div class="header" onclick="return Login(1)"></div>
    <div class="title" onclick="return Login(1)">
      <span class="t1">我是企业</span>
      <span class="t2">I AM A BUSINESS</span>
    </div>
    <div class="entrance clearfix">
      <a class="left" href="/company_info"
        ><span>信息管理</span></a
      >
      <a class="right" href="/post"
        ><span>职位管理</span></a
      >
      <a class="left" href="/send"><span>投递管理</span></a>
      <a class="right" href="/index"
        ><span>管理中心</span></a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.teach_block {
  width: 385px;
  height: 210px;
  float: left;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.teach_block .header {
  width: 385px;
  height: 68px;
  background: url(../assets/images/com-entrance.png) no-repeat center center;
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
