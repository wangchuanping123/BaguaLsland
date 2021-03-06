var app = getApp();
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var that = this;
		this.setData({
			id:options.noticeId
		})
		// 详情
		util.ajax({
			url: app.globalData.path + 'Notice/details',
			method: 'GET',
			data: {
				noticeId:that.data.id
			},
			success: function (res) {
				if (res.data.code == 0) {
					var article = res.data.data.content;
					// 富文本处理
					WxParse.wxParse('article', 'html', article, that, 5);
					that.setData({
						notice:res.data.data
					})
				}
			}
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})