// pages/seckill/seckill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeList:[{status:"热抢中", time:"12:00"},{status:"即将开抢", time:"14:00"},{status:"敬请期待", time:"16:00"},{status:"敬请期待", time:"18:00"},{status:"敬请期待", time:"20:00"},{status:"敬请期待", time:"22:00"}],
    current:"0"
  },
  //事件处理函数
  getactive:function(e) {
    // 获取索引
    let index = e.currentTarget.dataset.index
    //console.log(e.currentTarget)
    // 切换颜色 / 更新数据
    this.setData({
      current: index
    })
    console.log(this.data.current)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})