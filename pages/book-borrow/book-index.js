//获取应用实例
const app = getApp()

Page({
  data: {
    pageCur: 0,

    arrayList: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    isBookDetailShow: false,
    isSkeletonLoading: true
  },

  onLoad: function () {

  },

  onPageScroll(event) {
    this.setData({
      scrollTop: event.scrollTop
    });
  },

  onBookDetailClickShow: function () {
    var _this = this
    _this.setData({
      isSkeletonLoading: true,
      isBookDetailShow: true
    })
    setTimeout(() => {
      _this.setData({
        isSkeletonLoading: false
      })
    }, 2000)
  }, 

  onBookDetailClickHide: function () {
    this.setData({
      isBookDetailShow: false
    })
  },

  onBookBorrowBtnClick: function () {
    var _this = this
    wx.showModal({
      title: '提示',
      content: '请扫描书籍背部的条形码',
      success: (res) => {
        if (res.confirm) {
          wx.scanCode({
            success: (res) => {
              wx.showModal({
                title: '扫描成功',
                content: '内容: ' + res.result,
                showCancel: false
              })
            }
          })
        }
      }
    })
  },

  onNavChange: function (e) {
    this.setData({
      pageCur: e.currentTarget.dataset.cur
    })
  }
})