<template>
  <div class="flex items-center justify-center h-screen m-10 bg-red-100">
    按钮测试
  </div>
  <test-button placeholderTxt="xxx" />
</template>


<script setup >
import { ipv4Regex } from 'uuu-reg-test';
import { onMounted } from 'vue';
onMounted(() => {
  console.log(ipv4Regex)
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
