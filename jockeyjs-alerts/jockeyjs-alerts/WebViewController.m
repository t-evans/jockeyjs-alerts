//
//  WebViewController.m
//  jockeyjs-alerts
//
//  Created by Troy Evans on 1/20/14.
//  Copyright (c) 2014 Nutrislice. All rights reserved.
//

#import "WebViewController.h"
#import "Jockey.h"

@interface WebViewController ()

@end

@implementation WebViewController

- (void)_loadExampleHtmlIntoWebView
{
    UIWebView *webView = [[UIWebView alloc] init];
    webView.scalesPageToFit = YES;
    webView.frame = self.view.frame;
    webView.delegate = self;
    [self.view addSubview:webView];
    
	NSString *htmlTemplateFile = [[NSBundle mainBundle] pathForResource:@"example" ofType:@"html"];
    NSString* htmlTemplate = [NSString stringWithContentsOfFile:htmlTemplateFile encoding:NSUTF8StringEncoding error:nil];
    
    NSURL* jqueryUrl = [[NSBundle mainBundle] URLForResource:@"jquery.min" withExtension:@"js"];
    NSURL* jockeyUrl = [[NSBundle mainBundle] URLForResource:@"jockey" withExtension:@"js"];
    NSURL* jockeyAlertsUrl = [[NSBundle mainBundle] URLForResource:@"jockey.alerts" withExtension:@"js"];
    NSString *htmlString = [NSString stringWithFormat:htmlTemplate, jqueryUrl, jockeyUrl, jockeyAlertsUrl];
    
    [webView loadHTMLString:htmlString baseURL:nil];
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    [self _loadExampleHtmlIntoWebView];
}

-(BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
    return [Jockey webView:webView withUrl:[request URL]];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
