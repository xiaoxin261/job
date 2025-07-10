<template>
  <Header></Header>
  <div class="main mar-20">
    <el-row :gutter="15">
      <el-col :span="16">
        <el-card style="min-height: 1000px">
          <el-tabs v-model="activeName">
            <el-tab-pane label="学生注册" name="first">
              <StudentReg></StudentReg>
            </el-tab-pane>
            <el-tab-pane label="企业注册" name="second">
              <CompanyReg></CompanyReg>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Header from './Header.vue'
import StudentReg from './StudentReg.vue'
import CompanyReg from './CompanyReg.vue'

const activeName = ref('first')
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.register-card {
  width: 480px;
}

.card-header {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
</style>
