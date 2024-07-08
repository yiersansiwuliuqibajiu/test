<template>
  <div class="flex items-center justify-center h-screen m-10">
    按钮测试111111
    <nut-uploader url="http://服务器地址" capture></nut-uploader>
  </div>
  <book />
</template>


<script setup >
import { onMounted } from 'vue';
onMounted(() => {

})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
