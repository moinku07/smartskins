Ext.define('SmartSkins.view.Privacy',{
	extend:'Ext.Panel',
	xtype:'privacy',
	config:{
		layout: 'hbox',
		title:'Privacy Policy',
		scrollable:'vertical',
		items:[{
			flex:1,
			styleHtmlContent: true,
			html:'<div class="homeDiv"><h1>Privacy Policy</h1><div class="imageDiv"><img src="resources/images/homeimage.jpg" /></div><div class="textDiv"><p>Cernsequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor.</p><p>Sectetuer adipiscing elit. Sed diam nonummy nibh euismod. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor ster porta.</p><p>Apiscing elit. Sed diam nonummy nibh euismod. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis.</p><p>Cernsequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor.</p><p>Sectetuer adipiscing elit. Sed diam nonummy nibh euismod. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet.</p><p class="yplayer"><a class="letsTalk" href="#letstalk"></a></p></div></div>'
		}]
	}
});