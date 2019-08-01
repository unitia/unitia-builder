<template>
  <div>
    <h2>Vue Todo</h2>
    <b-form inline>
      <label class="sr-only" for="inline-form-input-name">Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="Todo Text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem"></b-input>
      <b-button v-on:click="addTodoItem()">Add</b-button>
      <b-button v-on:click="deleteTodo()">Delete</b-button>
    </b-form>
    <b-form v-for="item in items">
      <label v-bind:class="{ done: isChecked }"></label>
      <b-form-checkbox type="checkbox" class="mb-2 mr-sm-2 mb-sm-0" v-model="item.isChecked">{{ item.title }}</b-form-checkbox>

    </b-form>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        { title: '領収書を準備する', isChecked: true },
        { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
        { title: '参加者の人数を確認する', isChecked: false },
        { title: 'ピザを注文する', isChecked: false },
        { title: '参加費のお釣りを準備する', isChecked: false },
        { title: '会場設営をする', isChecked: false }
      ],
      newTodoItem: '' // 追加
    }
  },
  methods: { // methodsオプションをまるっと追加
    addTodoItem: function () {
      this.items.push({
        title: this.newTodoItem,
        isChecked: false
      })
      this.mewTodoItem = ''
    },
    deleteTodoItem: function () {
      this.items = this.items.filter(function (item) {
        return item.isChecked === false
      })
    }
  }
}

</script>

<style>
.done { text-decoration: line-through; }
</style>
