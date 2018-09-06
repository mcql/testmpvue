<template>
    <div class="search">
        <input type="text" placeholder="搜索" />
        <img src="/static/images/ioc/xiaoxi.png" mode="aspectFit" />
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0f0;
  z-index: 999;
}
.search image {
  width: 10%;
  height: 25px;
}
.search input {
  width: 85%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border: 1px solid #6f926c;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 15px;
  background: #fafafa;
}
</style>
