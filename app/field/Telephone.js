Ext.define('SmartSkins.field.Telephone', {
    //extend: 'Ext.field.Text',
    xtype: 'telephone',
    alternateClassName: 'SmartSkins.form.Telephone',

    config: {
        /**
         * @cfg
         * @inheritdoc
         */
        component: {
            type: 'tel'
        },

        /**
         * @cfg
         * @inheritdoc
         */
        ui: 'tel'
    },

    proxyConfig: {
        /**
         * @cfg {Number} minValue The minimum value that this Number field can accept
         * @accessor
         */
        minValue: null,

        /**
         * @cfg {Number} maxValue The maximum value that this Number field can accept
         * @accessor
         */
        maxValue: null,

        /**
         * @cfg {Number} stepValue The amount by which the field is incremented or decremented each time the spinner is tapped.
         * Defaults to undefined, which means that the field goes up or down by 1 each time the spinner is tapped
         * @accessor
         */
        stepValue: null
    },

    applyValue: function(value) {
        var minValue = this.getMinValue(),
            maxValue = this.getMaxValue();

        if (Ext.isNumber(minValue)) {
            value = Math.max(value, minValue);
        }

        if (Ext.isNumber(maxValue)) {
            value = Math.min(value, maxValue);
        }

        return parseFloat(value);
    },

    getValue: function() {
        var value = this.callParent();
		console.log(parseFloat(value || 0));
        return parseFloat(value || 0);
    },

    doClearIconTap: function(me, e) {
        me.getComponent().setValue('');
        me.getValue();
        me.hideClearIcon();
    }
});