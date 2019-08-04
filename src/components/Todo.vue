<template>
  <div>
    <nav class="panel">
      <p class="panel-heading">Vue Todo</p>
    <div class="panel-block">
      <b-field grouped>
        <input placeholder="TodoText" v-model="newTodoItem" v-on:keyup.enter="addTodoItem" type="text" class="input" />
          <div class="control">
            <b-button v-on:click="addTodoItem()" expanded>Add</b-button>
            <b-button v-on:click="deleteTodoItem()" expanded>Delete</b-button>
          </div>
      </b-field>
    </div>
    <div class="panel-tabs control">
      <a class="is-active">All</a>
      <a>Active</a>
      <a>Completed</a>
    </div>
      <b-field v-for="item in items" v-bind:key="item.title" class="panel-block">
          <label v-bind:class="{ done: isChecked }">
            <b-checkbox type="checkbox" v-model="item.isChecked" aria-hidden="true">{{ item.title }}</b-checkbox>
          </label>
      </b-field>
    </nav>
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
