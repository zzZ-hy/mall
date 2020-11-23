<template>
	<!-- 第一个 -->
	
	<!-- <view class="good_lost">
		<goods-list @goodsItemClick="goodsItemClicks" :goods="goods"/>
		<view class="goodsOver">到底了</view>
	</view> -->
	
	<!-- 第二个 -->
	<!-- <view class="content">
		<view class="info">
			<view @click="phone">联系电话：18296645356（点击拨打）</view>
			<view>地址：浙江省嘉兴市南湖区嘉兴科技城人才公寓</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
	</view> -->
	
	<!-- 第三个 -->
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view :class="{active:isActive===index}" 
						v-for="(item,index) in cates"
						:key="item.cat_id" 
						@click="picsClick(index)">
							{{item.cat_name}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-for="(item,index) in rightcates" :key="index">
				<image @click="previewImg(item.cat_icon)" :src="item.cat_icon" mode=""></image>
				<text>{{item.cat_name}}</text>
			</view>
			<view v-if="rightcates.length===0">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	// import GoodsList from '../../components/goodsList/GoodList.vue'
	
	export default {
		data(){
			return {
				//第一个
				
				// goods:[],
				// currentIndex:1,
				// pagenum:1,
				// falg:false
				
				//第二个
				
				// longitude:120.835307,
				// latitude:30.747913,
				// scale:16,
				// markers:[
				// 	{
				// 		longitude:120.835307,
				// 		latitude:30.747913,
				// 		iconPath:'../../static/font/icon_FJ.png',
				// 		width:30,
				// 		height:30
				// 	}
				// ]
				
				//第三个
				cates:[],
				isActive:0,
				rightcates:[]
			}
		},
		components:{
			// GoodsList
		},
		onLoad() {
			//第一个
			// this.getGoodsList(this.currentIndex)
			
			//第三个
			this.getPicsCate()
		},
		onReachBottom() {
			// if(this.currentIndex!==this.pagenum){
			// 	this.falg=true
			// }
			// this.currentIndex++
			// this.getGoodsList(this.currentIndex)
		},
		onPullDownRefresh() {
			// this.currentIndex=1
			// this.goods=[]
			// this.getGoodsList(this.currentIndex,()=>{
			// 	uni.stopPullDownRefresh()
			// })
		},
		methods:{
			//第一个
			
			// getGoodsList(num,callback){
			// 	this.$myRequest({
			// 		url:'/goods/search',
			// 		data:{
			// 			pagenum:num
			// 		}
			// 	}).then(res=>{
			// 		// console.log(res,res.data.message.goods)
			// 		this.goods=[...this.goods,...res.data.message.goods]
			// 		this.pagenum=res.data.message.pagenum
			// 		callback&&callback()
			// 	})
			// },
			// goodsItemClicks(goods_id){
			// 	uni.navigateTo({
			// 		url:'/pages/goDetail/goDetail?goods_id='+goods_id
			// 	})
			// }
			
			//第二个
			
			// phone(){
			// 	uni.makePhoneCall({
			// 		phoneNumber:'18296645356'
			// 	})
			// }
			
			//第三个
			getPicsCate(){
				this.$myRequest({
					url:'/categories'
				}).then(res=>{
					console.log(res,res.data.message)
					this.cates=res.data.message
					this.getPicsCater(0)
				})
			},
			getPicsCater(index){
				this.$myRequest({
					url:'/categories'
				}).then(res=>{
					// console.log(res.data.message[index].children)
					this.rightcates=res.data.message[index].children[0].children
				})
			},
			picsClick(index){
				this.isActive=index
				this.getPicsCater(index)
			},
			previewImg(current){
				const urls=this.rightcates.map(item=>{
					return item.cat_icon
				})
				// console.log(urls)
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	//第一个
	
	// .good_lost{
	// 	background: #eee;
	// }
	// .goodsOver{
	// 	text-align: center;
	// }
	
	//第二个
	// .content{
	// 	.info{
	// 		padding: 10rpx 20rpx;
	// 		font-size: 30rpx;
	// 		view{
	// 			line-height: 80px;
	// 			border-bottom: 1px solid #eee;
				
	// 		}
	// 	}
	// 	.map{
	// 		width: 750rpx;
	// 		height: 750rpx;
	// 	}
	// }
	
	//第三个
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background: $shop-color;
				color: #fff;
			}
		}
		.right{
			width: 520rpx;
			height: 100%;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
					width: 520rpx;
					display: block;
					text-align: center;
				}
			}
		}
	}
	
</style>
