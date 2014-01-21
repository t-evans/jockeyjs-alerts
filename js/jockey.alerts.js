//
// JockeyJS Alerts
//
// Extends Jockey to add alert() and confirm() actions.
//
// Copyright (c) 2014, Troy Evans
//
//  Permission is hereby granted, free of charge, to any person obtaining
//  a copy of this software and associated documentation files (the
//  "Software"), to deal in the Software without restriction, including
//  without limitation the rights to use, copy, modify, merge, publish,
//  distribute, sublicense, and/or sell copies of the Software, and to
//  permit persons to whom the Software is furnished to do so, subject to
//  the following conditions:
//
//  The above copyright notice and this permission notice shall be
//  included in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
//  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
//  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
//  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

;(function(Jockey, $) {
    Jockey.alert = function(title, message, buttonLabel, onAlertDismiss) {
        Jockey.send("alert", {
            title: title,
            msg: message,
            buttonLabel: buttonLabel
        }, function() {
            if (onAlertDismiss)
                onAlertDismiss();
        });
    };

    var _confirmDefaults = {
        title: '',
        message: '',

        // If provided, this will override 'confirmBtnText' and 'cancelBtnText'.
        // You must also specify buttonCallbacks.
        buttonLabels: ['OK', 'Cancel'],

        // If provided, this will override onConfirm and onCancel
        buttonCallbacks: null
    }
    Jockey.confirm = function(options) {
        options = $.extend({}, _confirmDefaults, options);
        Jockey.on('confirm-callback', function(payload) {
            var selectedButtonIndex = payload.buttonIndex;
            if (options.buttonCallbacks != null && selectedButtonIndex < options.buttonCallbacks.length)
                options.buttonCallbacks[selectedButtonIndex](options);

            // Unregister the temp callback
            Jockey.off('confirm-callback');
        });
        Jockey.send("confirm", {
            title: options.title,
            msg: options.message,
            buttonLabels: options.buttonLabels
        });
    };
})(Jockey, jQuery);