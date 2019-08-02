<template>
  <div>
    <h2>Vue Todo</h2>
    <b-form inline>
      <label class="sr-only" for="inline-form-input-name">Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="Todo Text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem"></b-input>
      <b-button v-on:click="addTodoItem()">Add</b-button>
      <b-button v-on:click="deleteTodoItem()">Delete</b-button>
    </b-form>
    <p></p>
    <b-form v-for="item in items" v-bind:key="item.title">

      <label v-bind:class="{ done: isChecked }">
        <b-form-checkbox type="checkbox" class="mb-2 mr-sm-2 mb-sm-0" v-model="item.isChecked">{{ item.title }}</b-form-checkbox>
      </label>
    </b-form>
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
