Ext.define('SmartSkins.model.Menu', {
    extend: 'Ext.data.Model',
    requires: 'SmartSkins.proxy.Menu',
    config: {
        fields: [{
			name : 'id',
			type: 'int'
		},{
            name: 'name',
            type: 'string'
        },{
			name: 'content',
			type: 'string'
		}],
        proxy: {
            type: 'menu'
        }
    }
});