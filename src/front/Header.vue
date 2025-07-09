<template>
  <div>
    <!-- 顶部 -->
    <div class="main">
      <div class="top">
        <a href="/"><img src="../assets/images/stulogo.png" width="225px" />
          <img src="../assets/images/logo-title.png" width="400px" /></a>

        <span class="reg-login" v-if="!loginState">
          <router-link to="/register">注册</router-link>
          <span> | </span>
          <router-link to="/login">登录</router-link>
        </span>
        <span class="reg-login" v-else>
          <router-link to="/index">管理中心</router-link>
        </span>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="nav">
      <div class="main">
        <ul>
          <li>
            <el-dropdown trigger="hover">
              <router-link to="/">
                <span class="el-dropdown-link">主页</span>
              </router-link>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown>
              <router-link to="/post_list">
                <span class="el-dropdown-link">职位信息</span>
              </router-link>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import local from '@/store/local'
import '@/assets/css/global.css'

const loginState = computed(() => {
  if (local.getToken()) {
    return true
  } else {
    return false
  }
})
</script>

<style scoped>
.reg-login {
  margin-top: 28px;
  padding: 20px 20px;
  font-size: 14px;
}

.reg-login a {
  color: #333333;
  text-decoration: none;
}

.reg-login a:hover {
  color: red;
}

.top {
  margin-top: -13px;
  display: flex;
  justify-content: space-between;
}

.main li {
  margin-right: 30px;
}

a {
  text-decoration: none;
}

.el-dropdown-link {
  color: #ffffff;
  font-size: 15px;
  display: block;
  padding: 0 20px;
  cursor: pointer;
  line-height: 60px;
}

.el-dropdown-link a {
  color: #ffffff;
  text-decoration: none;
}

.el-dropdown-item {
  padding: 0 20px !important;
}

.nav-sub {
  color: #222222;
  text-decoration: none;
}

.mar-20 {
  margin-top: 20px;
}

.el-card {
  height: 400px;
}

.el-calendar-day {
  height: 40px !important;
}
</style>
