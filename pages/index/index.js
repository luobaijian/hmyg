// pages/index/index.js
import {
  request
} from "../../request/index.js";
Page({
  data: {
    // 轮播图数据
    swiperList: [],
    // 分类导航
    navCateList: [],
    // 楼层数据
    floorList: []
  },
  onLoad() {
    this.getSwiperList()
    this.getCateList()
    this.getFloorData()
  },
  //请求轮播图数据
  getSwiperList() {
    request({
        url: '/home/swiperdata'
      })
      .then(result => {
        this.setData({
          swiperList: result
        })
      })

  },
  // 请求分类导航数据
  getCateList() {
    request({
        url: '/home/catitems'
      })
      .then(result => {
        this.setData({
          navCateList: result
        })
      })
  },
  // 请求楼层数据
  getFloorData() {
    request({
        url: '/home/floordata'
      })
      .then(result => {
        this.setData({
          floorList: result
        })
      })
  }
})