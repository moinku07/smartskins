var mainIntervalID = '';
function setMain() {
    clearInterval(mainIntervalID);
	Ext.getCmp('topNavBar').show();
    window.location.hash = '#home';
}
Ext.Loader.setConfig({
    paths: {
        'smartskins': 'app'
    }
});
Ext.application({
    name: 'SmartSkins',
    views: ['Main'],
    controllers: ['Main', 'Signup'],
    models: ['Menu'],
    stores: ['Menus'],
    viewport: {
        autoMaximize: Ext.os.is.Phone ? true: false
    },
    launch: function() {
		document.getElementById("loaderoverlay").parentNode.removeChild(document.getElementById("loaderoverlay"));
        Ext.create('SmartSkins.view.Main');
		if(!window.location.hash){
			Ext.getCmp('topNavBar').hide();
			Ext.getCmp('mainview').setActiveItem(9);
			mainIntervalID = setInterval("setMain()", 5000);
		}
    }
});