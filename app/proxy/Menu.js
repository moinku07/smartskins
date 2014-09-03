Ext.define('SmartSkins.proxy.Menu', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.menu',
    config: {
        url: 'json/Menu.json',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        autoLoad: true
    }
});