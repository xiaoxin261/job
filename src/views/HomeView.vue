<template>
  <el-container class="container">
    <el-container>
      <el-header>
        <Navbar></Navbar>
      </el-header>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ menuName }}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view class="rv"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue'

const menuName = ref('')

const handleMenuItem = (item:any) => {
  if (item && item.name) {
    menuName.value = item.name
  } else {
    menuName.value = '首页'
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: pink;
}

.el-header {
  padding: 0;
}

.el-main {
  padding: 0;
  background-color: #f2f2f2;
}

.el-breadcrumb {
  background-color: #ffffff;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e2dddd;
  padding-left: 10px;
  box-sizing: border-box;
}

.rv {
  background-color: #ffffff;
  margin: 10px;
  padding: 10px;
  border-radius: 3px;
}
</style>
