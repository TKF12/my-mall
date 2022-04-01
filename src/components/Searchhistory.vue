<template>
  <div class="Searchhistory">
      <h4>历史记录：</h4>
      <div class="history">
        <div class="his-item"
          v-for="(item, i) in historyList"
          :key="i"
          @touchend="$emit('toucheItem', item.value)">
            {{item.value}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['historyList'],
};
</script>

<style lang="less" scoped>
.Searchhistory{
    width: 100%;
    .history{
        display: flex;
        flex-wrap: wrap;
        .his-item{
            margin: 5px;
            padding: 8px;
            background-color: #eee;
        }
    }
}
</style>
