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
  cates:[],
  onLoad(){
    this.getCategoryList()
  },
  //获取分类数据
  getCategoryList(){
    request({
      url: '/categories'
    })
    .then(result=>{
      console.log(result);
      this.cates=result;
      let leftMenuList=this.cates.map((v,i)=>({
        cat_name: v.cat_name,
        cat_id: v.cat_id
      }))
      let rightMenuList = this.cates[0].children
      this.setData({
        leftMenuList,
        rightMenuList
      })
    })
  },

  // 点击左侧菜单
  handleMEnuChange(e){
    console.log(e.currentTarget.dataset.index);
    const {index}=e.currentTarget.dataset
    let rightMenuList=this.cates[index].children
    this.setData({
      rightMenuList,
      currentIndex:index,
      scrollTop:0
    })
  }

  
})