Ext.define('SmartSkins.view.Menu', {
    extend: 'Ext.Panel',
    xtype: 'menu',
    //requires: [],
    config: {
        title: 'Menu',
		id:'menuPage',
        layout: 'card',
        items: [/*{
            xtype: 'toolbar',
			title: 'Menu',
            name: 'menutoolbar',
            ui: 'light',
            docked: 'top',
        },*/
        {
            xtype: 'list',
            name: 'menuList',
            flex: 1,
            itemTpl: '<div class="right-arrow"></div><div class="menu-items"><p>{name}</p></div>',
            store: 'Menus',
        }]
    }
});