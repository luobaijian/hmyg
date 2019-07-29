// pages/index/index.js
Page({
  data: {
    swiperList: [],
    navCateList: []
  },
  onLoad() {
    this.getSwiperList()
    this.getCateList()
  },
  //请求轮播图数据
  getSwiperList() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (result) => {
        this.setData({
          swiperList: result.data.message
        })
      },
    });

  },
  // 请求分类导航数据
  getCateList() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (result) => {
        console.log(result.data.message);
        this.setData({
          navCateList: result.data.message
        })
      },

    });

  }
})