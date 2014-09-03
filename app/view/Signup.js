Ext.define('SmartSkins.view.Signup', {
    extend: 'Ext.Panel',
    xtype: 'signup',
    config: {
        title: 'Sign Up',
        layout: 'hbox',
        items: [{
            xtype: 'formpanel',
            name: 'signupform',
            flex: 1,
            items: [{
                styleHtmlContent: true,
                html: '<div class="signUp"><h1>Register Your Details</h1><p>Keep up to date with news and information from Smart Skins by registering your details here:</p></div>',
            },
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '40%'
                },
                items: [{
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Name',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true,
                    placeHolder: 'Victor Harrison'
                },
                {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email',
                    autoCapitalize: false,
                    required: true,
                    clearIcon: true,
                    placeHolder: 'vic_harrison@gmail.com'
                },
                {
                    xtype: 'textfield',
                    component: {
                        type: 'tel'
                    },
                    id: 'telephoneField',
                    name: 'telephone',
                    label: 'Telephone',
                    autoCapitalize: true,
                    //required: true,
                    clearIcon: true,
                    placeHolder: '447980811313'
                }]
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                },
                style: {
                    backgroundColor: '#0F1E3D'
                },
                defaults: {
                    xtype: 'button',
                    style: {
                        margin: '0 17px 10px 17px'
                    },
                    flex: 1,
                },
                items: [{
                    text: 'Sign Up',
                    name: 'signupbutton'
                }]
            }]
        }]
    }
});