new Vue({
  el: '#app',
  data: {
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray',
    item: {
      src: './sunset_master.jpg',
      alt: 'サムネ',
      width: 200,
      height: 100,
    },
    radius: 50,
    name: 'キマイラ',
    list: []
  },
  methods: {
    increment: function() {
      this.count += 1;
    },
    // 追加ボタンをクリックしたときのハンドラ
    doAdd: function () {
      // リスト内で1番大きいIDを取得
      var max = this.list.reduce(function (a, b) {
        return a > b.id ? a : b.id
      }, 0)
      // 新しいモンスターをリストに追加
      this.list.push({
        id: max + 1, // 現在の最大のIDに+1してユニークなIDを作成
        name: this.name, // 現在のフォームの入力値
        hp: 500
      })
    },
    // 追加ボタンをクリックしたときのハンドラ
    doRemove: function (index) {
      this.list.splice(index, 1)
    },
    // 攻撃ボタンをクリックしたときのハンドラ
    doAttack: function (index) {
      this.list[index].hp -= 10 // HPを減らす
    }
  },
  created: function(){
    this.list.forEach(function(item) {
      this.$set(item, 'active', false)
    }, this),
    axios.get('list.json').then(function (response) {
      // 取得完了したらlistリストに代入
      this.list = response.data
    }.bind(this)).catch(function (e) {
      console.error(e)
    })
  }
})