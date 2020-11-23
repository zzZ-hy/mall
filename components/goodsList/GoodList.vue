<template>
	<view class="goods_list">
		<view class="goods_item" v-for="(item,index) in goods" :key="index" @click="goodsClick(item.goods_id)">
			<image :src="item.goods_big_logo" mode=""></image>
			<view class="price">
				<text>{{item.goods_price}}</text>
				<text>{{item.goods_price}}</text>
			</view>
			<view class="name">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			goodsClick(goods_id){
				this.$emit('goodsItemClick',goods_id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods_item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 10rpx;
			box-sizing: border-box;

			image {
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
			}

			.price {
				margin-top: 20rpx 0 15rpx 0;
				color: $shop-color;
				font-size: 36rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
