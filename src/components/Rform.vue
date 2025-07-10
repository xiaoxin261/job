<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="120px" class="form-container">
    <el-row v-for="(item, index) in items" :key="index">
      <el-col :span="24">

        <template v-if="['text', 'password', 'number', 'email'].indexOf(item.type) != -1">
          <el-form-item :label="item.label" :prop="item.prop">
            <el-input :type="item.type" :value="form[item.name]" :placeholder="item.placeholder"></el-input>
          </el-form-item>
        </template>

        <template v-if="['checkselect'].indexOf(item.type) != -1">
          <el-form-item :label="item.label" :prop="item.prop">
            <treeselect :value="form[item.name]" :placeholder="item.placeholder" :multiple="true"
              :options="item.options" />
          </el-form-item>
        </template>
        <template v-if="['switch'].indexOf(item.type) != -1">
          <el-form-item :label="item.label" :prop="item.prop">
            <el-switch :value="form[item.name]" active-color="#13ce66"></el-switch>
          </el-form-item>
        </template>

        <template v-if="['area'].indexOf(item.type) != -1">
          <el-form-item :label="item.label" :prop="item.prop">
            <mavon-editor :value="form[item.name]" />
          </el-form-item>
        </template>

        <template v-if="['date'].indexOf(item.type) != -1">
          <el-form-item :label="item.label" :prop="item.prop">
            <el-date-picker :value="form[item.name]" type="date" value-format="yyyy-MM-dd" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </template>

        <template v-if="['file'].indexOf(item.type) != -1">
          <el-form-item :label="item.label" :prop="item.prop">
            <el-upload class="upload-demo" :data="{ name: item.name }" :http-request="uploadImg"
              :before-upload="beforeUpload" :limit="1">
              <el-button size="small" type="primary">点击上传</el-button>
              <div class="el-upload__tip">只能上传jpg/jpeg/png文件，且不超过2M</div>
            </el-upload>
          </el-form-item>
        </template>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { upload } from '@/api/upload'

const form = ref()

const uploadImg = async (options: any) => {
  const { file } = options
  const formData = new FormData()
  formData.append('file', file)
  try {
    await upload(formData)
  } catch (error) {
    console.error('Upload failed:', error)
  }
}

const beforeUpload = (file: File) => {
  const isImage = ['image/jpeg', 'image/png'].includes(file.type)
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isImage) {
    console.error('只能上传jpg/jpeg/png文件')
    return false
  }
  if (!isLt2M) {
    console.error('文件大小不能超过2M')
    return false
  }
  return true
}

defineProps({
  form: {
    required: true,
    type: Object,
    default: () => ({})
  },
  items: {
    required: true,
    type: Object,
    default: () => ({})
  },
  rules: {
    required: true,
    type: Object,
    default: () => ({})
  }
})

const validateForm = () => {
  let flag = false
  form.value.validate((valid: boolean) => {
    if (valid) {
      flag = true
    }
  })
  return flag
}

</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
