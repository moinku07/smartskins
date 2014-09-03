Ext.define('SmartSkins.view.Marketing',{
	extend:'Ext.Panel',
	xtype:'marketing',
	config:{
		layout: 'hbox',
		title:'Marketing Strategies',
		scrollable:'vertical',
		items:[{
			flex:1,
			styleHtmlContent: true,
			html:'<div class="homeDiv"><h1>Marketing Strategies and Public Relations</h1><p class="quote">"Together we move from me to you marketing"<br>- Whats in it for them?</p><div class="videoImg"><a style="height:200px; width:260px; display:block; background:url(resources/images/marketing.jpg) no-repeat center center;" href="http://www.youtube.com/watch?v=V1bKgU4PxqE"></a></div><div class="textDiv"><p>Relationship and performance marketing<br>Permission marketing<br>Guerrilla marketing<br>Viral and buzz marketing<br>Business to business strategies<br>New approaches to customer services<br>Online public relations<br>Communication strategies<br>Strategies that link you to breaking news<br>Strategies that incorporate social enterprise<br>Reputation Management</p><p class="yplayer"><a class="letsTalk" href="#letstalk"></a></p></div></div>'
		}]
	}
});