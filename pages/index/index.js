// pages/index/index.js
Page({
data: {
swiperList:[]
},
onLoad(){
  this.getSwiperList()
},
getSwiperList(){
  wx.request({
    url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    success: (result) => {
      console.log(result.data.message);
      this.setData({
        swiperList:result.data.message
      })
    },
  });
    
}
})