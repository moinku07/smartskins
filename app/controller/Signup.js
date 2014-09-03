Ext.define('SmartSkins.controller.Signup', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            signupview: 'signup',
            signupform: 'signup formpanel[name=signupform]',
            namefield: 'textfield[name=name]',
            emailfield: 'textfield[name=email]',
            telephonefield: 'textfield[name=telephone]',
            signupbutton: 'button[name=signupbutton]'
        },
        control: {
            namefield: {
                change: 'checkname'
            },
            emailfield: {
                change: 'checkemail'
            },
            /*telephonefield: {
                change: 'checknumber'
            },*/
            signupbutton: {
                tap: 'submitForm'
            }
        }
    },
    checkname: function() {
        var output = '',
        nameRegex = /^[A-Za-z\s\'\-]{2,30}$/;
        if (nameRegex.test(this.getSignupform().getValues().name)) {
            this.getNamefield().removeCls('validationerror');
            output = 'ok';
        } else {
            this.getNamefield().addCls('validationerror');
            output = 'no';
        }
        return output;
    },
    checkemail: function() {
        var output = '',
        emailRegex = /^[A-Za-z0-9\-\_]{2,30}@[A-Za-z]{2,20}\.[A-Za-z]{2,20}/;
        if (emailRegex.test(this.getSignupform().getValues().email)) {
            this.getEmailfield().removeCls('validationerror');
            output = 'ok';
        } else {
            this.getEmailfield().addCls('validationerror');
            output = 'no';
        }
        return output;
    },
    checknumber: function() {
        var output = '',
        telRegex = /^((\+?)(44)( |\s?))?([0-9]{10,11}|([0-9]{4}( |\s)[0-9]{6})|([0-9]{3}( |\s?)[0-9]{3}( |\s?)[0-9]{4,5})|([0-9]{4}( |\s?)[0-9]{3}( |\s?)[0-9]{3,4}))$/;
       /* telRegex = /^(((\+44\s?|0044\s?)?|(\(?0))((2[03489]\)?\s?\d{4}\s?\d{4})|(1[23456789]1\)?\s?\d{3}\s?\d{4})|(1[23456789][234578][0234679]\)?\s?\d{6})|(1[2579][0245][0467]\)?\s?\d{5})|(11[345678]\)?\s?\d{3}\s?\d{4})|(1[35679][234689]\s?[46789][234567]\)?\s?\d{4,5})|([389]\d{2}\s?\d{3}\s?\d{4})|([57][0-9]\s?\d{4}\s?\d{4})|(500\s?\d{6})|(7[456789]\d{2}\s?\d{6})))$/;*/
		if (telRegex.test(this.getSignupform().getValues().telephone)) {
            this.getTelephonefield().removeCls('validationerror');
            output = 'ok';
        } else {
            this.getTelephonefield().addCls('validationerror');
            output = 'no';
        }
        return output;
    },
    submitForm: function() {
        var Form = this.getSignupform().getValues(),
        signupView = this.getSignupview();
		if (this.checkname() == 'ok' && this.checkemail() == 'ok' /*&& this.checknumber() == 'ok'*/) {
            /*var URL = window.location.href.match(/(.*)\/\#(.*)$/)[1]+'/signup.php';*/
            signupView.setMasked({
                xtype: 'loadmask',
                message: 'Loading...'
            });
            Ext.Ajax.request({
                url: 'signup.php',
                method: 'POST',
                params: {
                    name: Form.name,
                    email: Form.email,
                    telephone: Form.telephone
                },
                success: function(response) {
                    signupView.unmask();
                    var resStatus = JSON.parse(response.responseText).status;
                    if (resStatus == 'ok') {
                        Ext.Msg.alert('Thank you.');
                    } else {
                        Ext.Msg.alert('Signup failed. Please try again later.');
                    }
                },
                failure: function(response) {
                    signupView.unmask();
                    Ext.Msg.alert('Signup failed. Please try again later.');
                },
                /* callback: function(response) {
                    console.log(response.status);
                }*/
            });
        } else {
            Ext.Msg.alert('Please fill the form carefully.');
        }
    }
});