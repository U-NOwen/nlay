<template>
  <el-page-header @back="goBack" icon="">
    <template #title >
      汕头大学
    </template>
    <template #content>
      <span class="text-large font-600 mr-3"> 脑力奥运刷题系统 </span>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-button link="link" :onclick="goLogin">Login</el-button>
      </div>
    </template>
  </el-page-header>
</template>
<script lang="ts" setup>

import router from "@/router";

const goBack = () => {
  console.log('go back')
}
const goLogin = () => {
  console.log('go login')
  router.push('/login')
}
</script>
