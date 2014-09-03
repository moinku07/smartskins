Ext.define('SmartSkins.view.Main', {
    extend: 'Ext.Panel',
	requires: ['SmartSkins.view.Menu','SmartSkins.view.Signup','SmartSkins.view.Marketing','SmartSkins.view.Social','SmartSkins.view.Building','SmartSkins.view.Website','SmartSkins.view.Letstalk','SmartSkins.view.Privacy','SmartSkins.view.Viewport'],
    xtype: 'mainview',
	id:'mainview',
    config: {
        fullscreen: true,
        tabBarPosition: 'top',
        layout: 'card',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            id: 'topNavBar',
            height: 60,
            //title: ' SenchaApp Name',
            items: [{
                cls: 'home',
                name: 'home',
                width: 160,
                height: 60,
                ui: 'plain'
            },
            {
                xtype: 'spacer'
            },
            {
                xtype: 'button',
                cls: 'menu',
                ui: 'normal',
                name: 'Menu',
                text: 'Menu'
            },
            {
                xtype: 'button',
                cls: 'signup',
                ui: 'normal',
                text: 'Sign up',
                name: 'signup',
            }]
        },
        {
            xtype: 'list',
            flex: 1,
            //scrollable: 'both',
            name: 'homepage',
            items: [{
                styleHtmlContent: true,
                html: '<div class="homeDiv"><h1>Smart Skins are...</h1><p class="quote">...people centric, we enjoy engaging as thought leaders at the cutting edge of popular culture.</p><div class="imageDiv"><img src="resources/images/homeimage.jpg" /></div><div class="textDiv"><p>Increasing conversational time and the need for your business to be "out there" requires marketing flexibility and transportable instant messaging. To deliver you one to one with your customers we devise compelling integrated marketing and social media strategies with leading website design and development.</p><p>Positioning you together with your brand identity as "close up and personal" makes your business accessible and free of time restraints which we know will increase your visibility.</p><p>Experience being liberated, be "upwardly mobile" invest in what is measurable whilst enjoying cost effective benefits and aim to place humanity and relationships back into your marketing mix.</p><p>Evolve your business with real time customer dialogue...</p><p class="yplayer"><a class="letsTalk" href="#letstalk"></a></p></div></div>'
            }]
        },{
            xtype: 'menu'
        },{
			xtype : 'signup'
		},{
			xtype : 'marketing'
		},{
			xtype : 'social'
		},{
			xtype : 'building'
		},{
			xtype : 'website'
		},{
			xtype : 'letstalk'
		},{
			xtype : 'privacy'
		},{
			xtype : 'viewport'
		}]
    }
});