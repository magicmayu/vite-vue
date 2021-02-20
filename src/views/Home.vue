<template>
<div class="m-4 overflow-hidden flex flex-col" style="height: 600px;">
  <div class="table_box w-full border overflow-x-hidden flex-1 overflow-y-auto flex flex-col">
<!--    <div class="border-b flex">-->
<!--      <div v-for="(it, idx) of title" :key="idx" :style="it.width ? {'width': it.width + 'px'} : {'flex': 1}" class="p-2">{{it.title}}</div>-->
<!--    </div>-->

    <div  v-for="(item, idx) of data" :key="idx" class="body_row text-xs flex">
      <div
        v-for="(col, cIdx) of title" :key="cIdx"
        :style="col.width ? {'width': col.width + 'px'} : {'flex': 1}"
        :class="['p-2 flex items-center', {type: '', time: 'border-l px-0 mx-2', content: 'break-all'}[col.title]]"
      >
        <svg v-if="col.title === 'type'" fill="none" :viewBox="item.type === 'ekv' ? '0 0 20 20' : '0 0 24 24'" width="20" height="20" :style="{color: item.type === 'page_info' ? '#c5d4f1' : '#ee9d9d'}">
          <path v-if="item.type === 'page_info'" fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zm-5-3h4v2h-4V6z" />
          <path v-if="item.type === 'custom'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          <path v-if="item.type === 'ekv'" fill="currentColor" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path v-if="item.type === 'ekv'" fill="currentColor" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
        </svg>
        <div v-else-if="col.title === 'time'" class="flex-1">
          <span class="px-2">{{item[col.title]}}</span>
          <div class="relative flex items-center" :style="{color: item.type === 'page_info' ? '#c5d4f1' : '#ee9d9d'}">
            <svg viewBox="0 0 2 2" fill="currentColor" width="5" height="5" style="position: absolute;left: -3px;bottom: 0;"><circle r="1" cx="1" cy="1" /></svg>
            <svg fill="currentColor" width="1" height="1" class="flex-1"><rect x="0" y="0" width="100%" height="100%" /></svg>
            <svg viewBox="0 0 2 2" fill="currentColor" width="5" height="5"><circle r="1" cx="1" cy="1" /></svg>
          </div>
        </div>
        <span v-else>{{item[col.title]}}</span>
      </div>
    </div>
  </div>

  <div class="p-2 footer_row flex justify-end" @click="type = null">
    <button v-for="it of operation" @click.stop="type = it.type" class="ml-2 w-24 flex items-center justify-end focus:outline-none" style="color: #789fd8">
      <svg v-if="it.type === 'page_info'" fill="none" viewBox="0 0 24 24" width="20" height="20">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zm-5-3h4v2h-4V6z" />
      </svg>
      <svg v-if="it.type === 'custom'" fill="none" viewBox="0 0 24 24" width="20" height="20">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
      <svg v-if="it.type === 'ekv'" viewBox="0 0 20 20" fill="currentColor" width="24" height="20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
      </svg>
      <span class="text-sm">{{it.text}}</span>
    </button>
  </div>
</div>
</template>

<script>
const list = Array.from({length: 30}).map((it, idx) => ({
  type: ['page_info', 'custom', 'ekv'][idx % 3],
  time: '22:34:00',
  content: idx % 2 ? ['购买产品， 产品为【天天利2号】', '购买失败， 产品为【天天利2号】，失败编码为【ERROR01】', '购买成功， 产品为【天天利2号】，购买金额为【10000】'][parseInt(Math.random() * 3)] : ['首页', '手势密码解锁'][idx % 2],
}))
const operation = [
  {type: 'page_info', text: '页面'},
  {type: 'custom', text: '普通事件'},
  {type: 'ekv', text: '业务事件'},
]
const title = [
  {title: 'type', width: 40},
  {title: 'time', width: 120},
  {title: 'content'},
]

export default {
  data () {
    return {
      type: null,
      list,
      operation,
      title,
    }
  },

  computed: {
    data () {
      return list.filter(it => !this.type || it.type === this.type)
    }
  },
}
</script>

<style scoped>
.table_box .body_row:nth-child(even) {
  @apply bg-gray-100;
}

.footer_row {
  background-color: lightblue;
}
</style>
