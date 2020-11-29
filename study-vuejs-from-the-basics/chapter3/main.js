new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js',
  },
  methods: {
    handleClick: function() {
    },
    handleInput: function (event) {
      // 代入する前に何かしら処理が行える
      this.message = event.target.value
    },
    handler: function(comment) {
      console.log(comment)
    }
  }
})