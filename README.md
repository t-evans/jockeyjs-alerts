jockeyjs-alerts
===============

A Javascript library for sending native-style alerts (without the current URL as the title) from 
a web app/site running in a mobile app's WebView. This also adds a confirm-style alert with multiple
configurable buttons.

This extends the functionality of Tim Coulter's JockeyJS lib (https://github.com/tcoulter/jockeyjs) by
adding alert() and confirm() functions to the Jockey JS object. However, currently, it requires a fork
of that lib that has one small change (https://github.com/t-evans/jockeyjs).


**Javascript/webapp Setup:**

 1. Copy the jockey.alerts.js and jockey.js files to your web app (you can obtain the latest jockey.js file from https://github.com/t-evans/jockeyjs).

 For Javascript usage, see html/example.html.

**iOS Setup:**
 1. Download and install the Jockeyjs library using the link above
 2. Set up Jockey to listen to web URLs (taken from the jockeyjs setup instructions):
 
         -(BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
        {
            return [Jockey webView:webView withUrl:[request URL]];
        }

 3. Copy the JockeyjsAlerts.h and .m files into your Xcode project
 4. At some point in your app, ask the JockeyjsAlerts class to start listening for events from UIWebViews.

         [JockeyjsAlerts listen];

 

<br><br>

**Android Setup:**

 (not supported yet but should be available soon)
