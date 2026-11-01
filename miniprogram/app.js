const config=require('./config');
App({
 globalData:{orderEntry:null},
 onLaunch(){if(config.mode==='cloud'&&config.cloud&&config.cloud.env)wx.cloud.init({env:config.cloud.env,traceUser:true});},
 onShow(options={}){
  // Capture external order links even when the existing page is resumed.
  if(options.path==='pages/shop/index'&&Object.prototype.hasOwnProperty.call(options.query||{},'out_trade_no'))this.globalData.orderEntry={outTradeNo:options.query.out_trade_no};
 }
});
