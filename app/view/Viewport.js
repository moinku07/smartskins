Ext.define('SmartSkins.view.Viewport',{
	extend:'Ext.Panel',
	xtype:'viewport',
	id:'viewport',
	config:{
		fullscreen: true,
		layout: 'hbox',
		title:'Intro',
		scrollable:'vertical',
		items:[{
			flex:1,
			styleHtmlContent: true,
			html:'<div class="introDiv"><p style="margin-top:30%;">You are inspired...</p><p>You have just made a Smart landing.</p></div>'
		}]
	}
});