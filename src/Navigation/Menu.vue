<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="my-menu"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          popper-effect="light"
          router="router"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>思想道德</span>
          </template>
            <el-menu-item index="1-1">思想道德与修养</el-menu-item>
            <el-menu-item index="/fljc">思想道德与法律基础</el-menu-item>
            <el-menu-item index="1-3">思想道德与法制</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>马克思主义基本原理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>中国近现代史纲要</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>毛概</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
.my-menu {
  height: 100vh;  /* 设置菜单高度为视口高度 */
  width: 200px;   /* 设置菜单宽度 */
  position: fixed;  /* 设置菜单固定在页面左侧 */
  left: 0;
}
</style>
