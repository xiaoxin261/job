<template>
  <el-form ref="ruleFormRef" style="max-width: 600px;text-align: center;" :model="ruleForm" :rules="rules" label-width="auto">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="ruleForm.name" placeholder="请输入姓名"/>
    </el-form-item>
    <el-form-item label="账号" prop="account">
      <el-input v-model="ruleForm.account" />
    </el-form-item>
    <el-form-item label="密码" prop="password1">
      <el-input v-model="ruleForm.password1" />
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input v-model="ruleForm.password2" />
    </el-form-item>
    <el-form-item label="联系人" prop="linkName">
      <el-input v-model="ruleForm.linkName" />
    </el-form-item>
    <el-form-item label="联系电话" prop="phone">
      <el-input v-model="ruleForm.phone" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        创建
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { CompanyForm } from '@/types/Rule'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<CompanyForm>({
  name: '',
  account: '',
  password1: '',
  password2: '',
  linkName: '',
  phone: ''
})

const validatePwd = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== ruleForm.password1) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<CompanyForm>>({
  name: [{ required: true, message: '必填项不能为空' }],
  account: [{ required: true, message: '必填项不能为空' }],
  password1: [{ required: true, message: '必填项不能为空' }],
  password2: [
    { required: true, message: '必填项不能为空' },
    { required: true, validator: validatePwd }
  ],
  phone: [{ required: true, message: '必填项不能为空' }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>
