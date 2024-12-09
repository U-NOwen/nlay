<template>
  <div class="form-container">
    <el-form
        label-width="auto"
        :model="formLabelAlign"
        style="max-width: 600px; text-align: center"
    >
      <h2>Login</h2>
      <el-form-item label="Name" label-position="left">
        <el-input v-model="formLabelAlign.username" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.password" />
      </el-form-item>
      <el-button @click="login" type="primary">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import request from '../../utils/request';

const formLabelAlign = reactive({
  username: '',
  password: '',
  type: '',
});

function login() {
  request.post('/login', {
    username: formLabelAlign.username,
    password: formLabelAlign.password,
  }).then((res) => {
    console.log(res);
  });
}
</script>

<style scoped>
/* 父容器：让内容居中 */
.form-container {
  display: flex;               /* 使用 Flexbox */
  justify-content: center;     /* 水平居中 */
  align-items: center;         /* 垂直居中 */
  height: 100vh;               /* 父容器高度填满视口 */
  background-color: #f5f5f5;   /* 可选：设置背景色 */
}

/* 表单元素：添加额外样式（可选） */
.el-form {
  padding: 20px;
  background: white;           /* 设置表单背景为白色 */
  border-radius: 8px;          /* 添加圆角 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}
</style>

