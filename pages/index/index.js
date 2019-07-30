// pages/index/index.js
Page({
  data: {
    swiperList: [],
    navCateList: [],
    floorList: []
  },
  onLoad() {
    this.getSwiperList()
    this.getCateList()
    this.getFloorData()
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
        this.setData({
          navCateList: result.data.message
        })
      },

    });

  },
  // 请求楼层数据
  getFloorData() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: (result) => {
        console.log(result.data.message);
        this.setData({
          floorList: result.data.message
        })
      },
    });

  }
})