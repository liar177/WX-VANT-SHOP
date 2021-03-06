// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:''
  },
  getuser(e){
    let nickName, avatarUrl
   if(e.detail.userInfo){
       //用户授权
        //用户基本信息
    nickName = e.detail.userInfo.nickName
    avatarUrl = e.detail.userInfo.avatarUrl
    wx.login({
      timeout: 10000,
      success:res =>{
        wx.setStorage({
          key:"isLogin",
          data:true
        })
        wx.switchTab({
          url:"/pages/me/me"
      })
      }
    })
   }else{
       //用户没有授权
       wx.switchTab({
        url:"pages/index/index"
    })
       return false
   }

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