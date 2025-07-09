<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        style="width: 400px"
        src="../assets/logo-title.png"
        alt="Element logo"
      />
    </el-menu-item>
    <el-menu-item index="1" route-link="/">首页</el-menu-item>
    <el-menu-item index="2" route="">职位信息</el-menu-item>
    <el-sub-menu index="3">
      <template #title>注册/登录</template>
      <el-menu-item index="3-1">注册</el-menu-item>
      <el-menu-item index="3-2">登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
