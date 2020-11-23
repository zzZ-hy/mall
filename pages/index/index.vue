<template>
	<view class="home">
		<swiper indicator-dots circular :interval="1000">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>

		<view class="nav">
			<view class="nav_item" v-for="(item,index) in catitems" :key="index" @click="navItemClick(item.navigator_url)">
				<view>
					<image :src="item.image_src" mode=""></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>

		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goodsItemClick" :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/goodsList/GoodList.vue'
	
	export default {
		data() {
			return {
				swipers: [],
				goods:[],
				catitems:[]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods(1)
			this.getCatitems()
		},
		components:{
			GoodsList
		},
		methods: {
			// async getSwipers() {

			// 	// this.$myRequest({
			// 	// 	url:'/home/swiperdata'
			// 	// }).then(res=>{
			// 	// 	console.log(res)
			// 	// })

			// 	const res = await this.$myRequest({
			// 		url: '/home/swiperdata'
			// 	})
			// 	console.log(res)
			// }

			getCatitems(){
				this.$myRequest({
					url:'/home/catitems'
				}).then(res=>{
					// console.log(res,res.data.message)
					this.catitems=res.data.message
				})
			},

			getSwipers() {

				// this.$myRequest({
				// 	url:'/home/swiperdata'
				// }).then(res=>{
				// 	console.log(res)
				// })

				this.$myRequest({
					url: '/home/swiperdata'
				}).then(res => {
					// console.log(res)
					this.swipers = res.data.message
				})
			},
			
			getHotGoods(num){
				this.$myRequest({
					url:'/goods/search',
					data:{
						pagenum:num
					}
				}).then(res=>{
					// console.log(res,res.data.message.goods)
					this.goods=res.data.message.goods
				})
			},
			navItemClick(url){
				// console.log(url)
				uni.navigateTo({
					url
				})
			},
			
			//详情页
			goodsItemClick(goods_id){
				uni.navigateTo({
					url:'/pages/goDetail/goDetail?goods_id='+goods_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				flex: 1;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;

					image {
						width: 80rpx;
						height: 80rpx;
						padding: 20rpx;
					}
				}
			}
		}

		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 30rpx;
			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}
	}
</style>
