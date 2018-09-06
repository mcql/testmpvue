<template>
    <div class="tabbar">
        <ul>
            <navigator url="../home/main">
                <li>首页</li>
            </navigator>
            <navigator url="../category/main">
                <li>分类</li>
            </navigator>
            <navigator url="../home/main">
                <li>购物车</li>
            </navigator>
            <navigator url="../home/main">
                <li>我的</li>
            </navigator>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabbar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #fafafa;
  text-align: center;
  background: #fff;
}
.tabbar ul {
  display: flex;
  justify-content: space-between;
}
.tabbar navigator {
  width: 25%;
  font-size: 14px;
}
.active{
    color: #fff;
}
</style>
