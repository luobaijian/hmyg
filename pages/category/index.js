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
    currentIndex:0,
    scrollTop:0,
  },
  Cates:[],
  onLoad(){
    const cates = wx.getStorageSync("cates");
    // 没有数据的时候，崇信发送请求，并且把数据存储到本地
      if (!cates){
        this.getCategoryList()
      }
      else{
        // 有数据 判断数据是否过期，暂定时间超过20S，就过期
        if(Date.now()-cates.time>20*1000){
          this.getCategoryList()
        }
          // 数据没有过期 可以直接使用
        else{
          this.Cates=cates.data
          let leftMenuList = this.Cates.map((v, i) => ({
            cat_name: v.cat_name,
            cat_id: v.cat_id
          }))
          let rightMenuList = this.Cates[0].children
          this.setData({
            leftMenuList,
            rightMenuList
          })
        }
      }

    
  },
  //获取分类数据
  getCategoryList(){
    request({
      url: '/categories'
    })
    .then(result=>{
      console.log(result);

      //把请求回来的数据赋值
      this.Cates = result;
      //把请求回来的数据存储在本地
      wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
        
      let leftMenuList = this.Cates.map((v, i) => ({
        cat_name: v.cat_name,
        cat_id: v.cat_id
      }))
      let rightMenuList = this.Cates[0].children
      this.setData({
        leftMenuList,
        rightMenuList
      })
    })
  },

  // 点击左侧菜单
  handleMEnuChange(e){
    const {index}=e.currentTarget.dataset
    let rightMenuList = this.Cates[index].children
    this.setData({
      rightMenuList,
      currentIndex:index,
      scrollTop:0
    })
  }

  
})