Ext.define('SmartSkins.store.Menus',{
	extend: 'Ext.data.Store',
	requires: ['SmartSkins.model.Menu'],
	config: {
		model: 'SmartSkins.model.Menu',
		autoLoad: true
	}
});