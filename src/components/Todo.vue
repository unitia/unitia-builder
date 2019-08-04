<template>
  <div>
    <h2 class="title">Vue Todo</h2>
    <div class="columns">
      <b-field class="column is-4">
        <b-input placeholder="TodoText" v-model="newTodoItem" v-on:keyup.enter="addTodoItem" class="column" rounded></b-input>
        <div class="buttons">
        <b-button v-on:click="addTodoItem()">Add</b-button>
        <b-button v-on:click="deleteTodoItem()">Delete</b-button>
        </div>
      </b-field>
    </div>
    <b-field v-for="item in items" v-bind:key="item.title" grouped>

      <label v-bind:class="{ done: isChecked }">
        <b-checkbox type="checkbox" v-model="item.isChecked">{{ item.title }}</b-checkbox>
      </label>
    </b-field>
  </div>
</template>

<script>
export default {
  props: {
    isChecked: Boolean,
    title: String
  },
  mounted: function () {
    this.loadTodo()
    // this.items = JSON.parse(localStorage.getItem('items')) || []
  },
  data: function () {
    return {
      items: [],
      newTodoItem: ''
    }
  },
  watch: {
    items: {
      handler: function () {
        this.saveTodo()
      },
      deep: true
    }
  },
  methods: { // methodsオプションをまるっと追加

    addTodoItem: function () {
      this.items.push({
        title: this.newTodoItem,
        isChecked: false
      })
      this.newTodoItem = ''
    },
    deleteTodoItem: function () {
      this.items = this.items.filter(function (item) {
        return item.isChecked === false
      })
    },
    deleteTodoText: function () {
      this.newTodoItem = ''
    },
    saveTodo: function () {
      localStorage.setItem('items', JSON.stringify(this.items))
    },
    loadTodo: function () {
      this.items = JSON.parse(localStorage.getItem('items'))
      if (!this.items) {
        this.items = []
      }
    }
  }

}

</script>

<style>

</style>
