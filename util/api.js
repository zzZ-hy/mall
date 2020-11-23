const baseURL='https://api-hmugo-web.itheima.net/api/public/v1'

export const myRequest=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseURL+options.url,
			method:options.method||'GET',
			data:options.data||{},
			success:(res)=>{
				if(res.data.meta.status!==200){
					return uni.showToast({
						title:'请求数据失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:'接口请求失败'
				})
				reject(err)
			}
		})
	})
}