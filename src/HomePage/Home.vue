<script setup>
  import Menu from "@/Navigation/Menu.vue";
  import Header from "@/Navigation/Header.vue";

</script>

<template>
  <Header class="bg-white dark:bg-gray-800 dark:bg-gray-900"></Header>
  <div class="box">
    <div class="left">
      <Menu></Menu>
    </div>
    <div class="right">
      <router-view>

      </router-view>

    </div>

  </div>


</template>

<style scoped>
.box{
  display: flex;
}
.box .left{
  width: 200px;
}
.box .right{
  width: 100%;
}
</style>