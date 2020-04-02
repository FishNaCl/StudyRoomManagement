// pages/index.js
Page({

  data: {

  },

  onLoad: function (options) {

  },

  onUnlockBtnClick: function () {
    wx.showModal({
      title: '提示',
      content: '请扫描大门上粘贴的二维码',
      showCancel: false,
      success: () => {
        wx.scanCode()
      }
    })
  },

  onBookBtnClick: function () {
    wx.navigateTo({
      url: '/pages/book-borrow/book-index',
    })
  }
})