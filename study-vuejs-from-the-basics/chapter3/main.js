var scroll = new SmoothScroll()
new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js',
    val: true,
    val2: [],
    radio: '',
    select: '',
    selects: [],
    preview: '',
    scrollY: 0,
    timer: null
  },
  created: function () {
    // ハンドラを登録
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function () {
    // ハンドラを解除（コンポーネントやSPAの場合忘れずに！）
    window.removeEventListener('scroll', this.handleScroll)
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
    },
    handleChange: function (event) {
      var file = event.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file)
      }
    },
    // 違和感のない程度に200ms間隔でscrollデータを更新する例
    handleScroll: function () {
      if (this.timer === null) {
        this.timer = setTimeout(function () {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
    },
    scrollTop: function () {
      scroll.animateScroll(0)
    }
  }
})