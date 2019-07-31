export const request=(params)=>{
  const baesUrl = "https://api.zbztb.cn/api/public/v1";
  return new Promise((reslove,reject)=>{
    wx.request({
      ...params,
      url: baesUrl+params.url,
      success: (result) => {
        reslove(result.data.message)
      },
      fail: () => {
        reject(error)
      },
    });
      
  })
}