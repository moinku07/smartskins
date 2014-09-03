Ext.define('SmartSkins.view.Building',{
	extend:'Ext.Panel',
	xtype:'building',
	config:{
		layout: 'hbox',
		title:'Social Media & Helpful Viral Campaigns',
		scrollable:'vertical',
		items:[{
			flex:1,
			styleHtmlContent: true,
			html:'<div class="homeDiv"><h1>Building Brand Personality</h1><p class="quote">"People buy into you before they purchase what you are selling"<br>- Are you part of your brand mix?</p><div class="videoImg"><a style="height:200px; width:260px; display:block; background:url(resources/images/brand.jpg) no-repeat center center;" href="http://www.youtube.com/watch?v=OB0AcEI9cUA"></a></div><div class="textDiv"><p>Social Media Strategies<br>Launch new products through social media branding<br>Corporate identity<br>Brand positioning<br>Brand story telling<br>Create customer persona profiles<br>Brand management<br>Stakeholder loyalty strategies</p><p class="yplayer"><a class="letsTalk" href="#letstalk"></a></p></div></div>'
		}]
	}
});