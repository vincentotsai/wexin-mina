//index.js
//获取App应用实例
const app = getApp()

// 使用Page()函数来注册一个页面，
// 为其指定页面的初始数据，生命周期函数，事件处理等。
// data 页面的初始数据，可以使用setData更新定义的数据
// onLoad 页面加载事件
// onReady 页面渲染完成
// onShow 页面显示
// onHide 页面隐藏
// onUnload 页面卸载
Page({
  data: {
    motto: 'Hello 🐶 ',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sysInfo:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })

      wx.getSystemInfo({
        success: function (res) {
          console.log(res)
          app.golablData.sysInfo = res
        },
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
})
