Ext.define('SmartSkins.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'home': 'gohome',
            'marketing': 'gomarketing',
            'social': 'gosocial',
            'building': 'gobuilding',
            'website': 'gowebsite',
            'menu': 'gomenu',
            'signup': 'gosignup',
            'letstalk': 'goletstalk',
			'privacy': 'goprivacy'
        },
        refs: {
			viewport: 'viewport',
            mainview: 'mainview',
            homebutton: 'button[name=home]',
            menubutton: 'button[name=Menu]',
            signupbutton: 'button[name=signup]',
            menutoolbar: 'toolbar[name=menutoolbar]',
            menulist: 'menu list[name=menuList]'
        },
        control: {
			viewport: {
				tap : 'gohome'
			},
            homebutton: {
                tap: 'navigatehome'
            },
            menubutton: {
                tap: 'menunavigate'
            },
            signupbutton: {
                tap: 'signuppage'
            },
            menulist: {
                itemtap: 'navigate'
            }
        }
    },
    navigatehome: function() {
        window.location.hash = '#home';
    },
    menunavigate: function() {
		if(window.location.hash != '#menu'){
			previousPage.push(window.location.hash);
			window.location.hash = '#menu';
		}else if(previousPage.length){
			window.location.hash = previousPage[previousPage.length-1];
			previousPage = [];
		}
		
		//alert(previousPage);
        //window.location.hash = '#menu';
    },
    signuppage: function() {
       if(window.location.hash != '#signup'){
			previousPage.push(window.location.hash);
			window.location.hash = '#signup';
		}else if(previousPage.length){
			window.location.hash = previousPage[previousPage.length-1];
			previousPage = [];
		}
    },
    navigate: function(view, index, target, record, e) {
		if (index == 0) {
            document.location.hash = '#home';
        }else if (index == 1) {
            document.location.hash = '#marketing';
        } else if (index == 2) {
            document.location.hash = '#social';
        } else if (index == 3) {
            document.location.hash = '#building';
        } else if (index == 4) {
            document.location.hash = '#website';
        } else if (index == 5) {
            document.location.hash = '#letstalk';
        }else if (index == 6) {
            document.location.hash = '#privacy';
        }  
    },
    gohome: function() {
		if(mainIntervalID){
			clearInterval(mainIntervalID);
		}
        var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'up',
        });
        Mainview.setActiveItem(0);
    },
    gomenu: function() {
        var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'down',
            //reverse: ActiveIndex == 2 ? true : false
        });
        Mainview.setActiveItem(1);
    },
	gosignup:function(){
		var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'down',
            //reverse: ActiveIndex == 1 ? true : false
        });
        Mainview.setActiveItem(2);
	},
    gomarketing: function() {
        var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'up',
            //reverse: ActiveIndex == 1 ? true : false
        });
        Mainview.setActiveItem(3);
    },gosocial: function() {
        var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'up',
            //reverse: ActiveIndex == 1 ? true : false
        });
        Mainview.setActiveItem(4);
    },gomarketing: function() {
        var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'up',
            //reverse: ActiveIndex == 1 ? true : false
        });
        Mainview.setActiveItem(3);
    },gobuilding: function() {
        var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'up',
            //reverse: ActiveIndex == 1 ? true : false
        });
        Mainview.setActiveItem(5);
    },gowebsite: function() {
        var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'up',
            //reverse: ActiveIndex == 1 ? true : false
        });
        Mainview.setActiveItem(6);
    },goletstalk: function() {
        var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'down',
            //reverse: ActiveIndex == 1 ? true : false
        });
        Mainview.setActiveItem(7);
    },goprivacy: function() {
        var Mainview = this.getMainview();
        var ActiveIndex = Mainview.indexOf(Mainview.getActiveItem()) - 1;
        Mainview.getLayout().setAnimation({
            type: 'slide',
            direction: 'down',
            //reverse: ActiveIndex == 1 ? true : false
        });
        Mainview.setActiveItem(8);
    }
});