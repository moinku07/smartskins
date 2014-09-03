Ext.define('SmartSkins.view.Letstalk',{
	extend:'Ext.Panel',
	xtype:'letstalk',
	config:{
		layout: 'hbox',
		title:"Let's Talk",
		scrollable:'vertical',
		items:[{
			flex:1,
			styleHtmlContent: true,
			html:'<div class="homeDiv"><h1>' + "Let's Talk" + '</h1><div class="imageDiv"><img src="resources/images/main-images-tea-bags.jpg" /></div><div class="textDiv"><p style="color:#666"><strong>Smart Skins - Creatively Aware</strong></p><p style="margin-bottom: 5px;">Corby<br>Northamptonshire</p><p style="margin-bottom: 5px;">Tel: 01604 779054 or 07804 893 011</p><p style="margin-bottom: 5px;">Email: <a href="mailto:info@smart-skins.co.uk">info@smart-skins.co.uk</a></p><p class="yplayer">Follow us<br><a  class="facebook" href="http://www.facebook.com/pages/SmartSkins/112925725440068?v=info" target="_blank"></a><a class="twitter" href="http://twitter.com/#!/Smart_Skins" target="_blank"></a><a class="linkedin" href="http://www.linkedin.com/profile/view?id=120132645&amp;locale=en_US&amp;trk=tyah" target="_blank"></a><a class="youtube" href="http://www.youtube.com/user/smartskinsocialmedia?feature=watch" target="_blank"></a></p><br><p class="yplayer">Read our blogs<br><span class="wordpress"></span></p></div></div>'
		}]
	}
});