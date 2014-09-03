Ext.define('SmartSkins.view.Social',{
	extend:'Ext.Panel',
	xtype:'social',
	config:{
		layout: 'hbox',
		title:'Social Media & Helpful Viral Campaigns',
		scrollable:'vertical',
		items:[{
			flex:1,
			styleHtmlContent: true,
			html:'<div class="homeDiv"><h1>Social Media and Helpful Viral Campaigns</h1><p class="quote">"Be socially active and link to breaking news"<br>- Where were you when?</p><div class="videoImg"><a style="height:200px; width:260px; display:block; background:url(resources/images/social.jpg) no-repeat center center;" href="http://www.youtube.com/watch?v=2lzemboVKxA"></a></div><div class="textDiv"><p>Social Media Strategies<br>Publishing and Messaging Strategies<br>Construct Blog and Social Media Platform Integration<br>Write and manage compelling blogs<br>Content strategy<br>Face to face communication strategies<br>Listening strategies<br>Helpful viral campaigns<br>Target demographics review and monitor your success<br>Compelling Storytelling<br>Create YouTube channels<br>Video content</p><p class="yplayer"><a class="letsTalk" href="#letstalk"></a></p></div></div>'
		}]
	}
});