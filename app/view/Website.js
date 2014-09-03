Ext.define('SmartSkins.view.Website',{
	extend:'Ext.Panel',
	xtype:'website',
	config:{
		layout: 'hbox',
		title:'Website Design and Development',
		scrollable:'vertical',
		items:[{
			flex:1,
			styleHtmlContent: true,
			html:'<div class="homeDiv"><h1>Website Design and Development</h1><p class="quote">"Set goals for your website, go mobile"<br>- Are you there for your customers 24/7?</p><div class="videoImg"><a style="height:200px; width:260px; display:block; background:url(resources/images/website.jpg) no-repeat center center;" href="http://www.youtube.com/watch?v=npW7rtj7B4E"></a></div><div class="textDiv"><p>Search Engine<br>Optimisation<br>Email campaigns<br>Mobile website and apps development<br>Copywriting<br>E-Commerce<br>E- newsletters<br>Maximise the use of social networking tools<br>Registration, sign–ups, reviews<br>Analytics</p><p class="yplayer"><a class="letsTalk" href="#letstalk"></a></p></div></div>'
		}]
	}
});