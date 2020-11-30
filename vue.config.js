module.exports ={
	devServer :{
		//反向代理的字段
		proxy:{
			'/api':{
				target :'http://39.97.33.178',
				//设置是否反向代理改变地址
				changeOrigin: true
			}
		}
	}
}