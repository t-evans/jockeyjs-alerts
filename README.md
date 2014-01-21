jockeyjs-alerts
===============

Adds alert() and confirm() functions to the Jockey (https://github.com/tcoulter/jockeyjs) object.


iOS Setup:
 1. Download and install the Jockeyjs library using the link above
 2. Set up Jockey to listen to web URLs (taken from the jockeyjs setup instructions):
 
         -(BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
        {
            return [Jockey webView:webView withUrl:[request URL]];
        }

 3. Copy the jockey.alerts.js file to your web app.
 4. Copy the JockeyjsAlerts.h and .m files into your Xcode project
 5. At some point in your app, ask the JockeyjsAlerts class to start listening for events from UIWebViews.

         [JockeyjsAlerts listen];

 6. For Javascript usage, see example.html.
 


Android Setup:
 (not implemented yet)