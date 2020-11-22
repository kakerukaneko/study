var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue.js!',
    list: ['リンゴ', 'バナナ', 'イチゴ'],
    show: true
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})
