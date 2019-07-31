// 引入封装的一个方法
import {
  request
} from "../../request/index.js";
// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightMenuList:[],
    currentIndex:0
  },
  onLoad(){
    this.getCategoryList()
  },
  getCategoryList(){
    request({
      url: '/categories'
    })
    .then(result=>{
      console.log(result);
      let leftMenuList=result.map((v,i)=>({
        cat_name: v.cat_name,
        cat_id: v.cat_id
      }))
      let rightMenuList=result[0].children
      this.setData({
        leftMenuList,
        rightMenuList
      })
    })
  }

  
})