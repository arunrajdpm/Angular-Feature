 (function() {
      'use strict';

        var app = angular.module('angularApp');


        app.config(function($mdThemingProvider) {
        	$mdThemingProvider.alwaysWatchTheme(true);
        	$mdThemingProvider.theme('zetta').primaryPalette('blue', {
        		'default' : "700",
        		'hue-1' : '900', // /bottom button colors
        		'hue-2' : '700',// toolbar color
        		'hue-3' : '100',// 2 icon below tool bar
        	}).warnPalette('orange', {

        		'hue-1' : '900',
        		'hue-2' : 'A100',
        		'hue-3' : 'A400',
        	}).accentPalette('deep-orange', {
        		'hue-1' : '900', // text heading
        		'hue-2' : 'A100',
        		'hue-3' : 'A400',
        	})
        });

        app.config(function($mdThemingProvider) {
        	$mdThemingProvider.alwaysWatchTheme(true);
        	$mdThemingProvider.theme('zetta1').primaryPalette('red', {
        		'default' : '900',
        		'hue-1' : '400',
        		'hue-2' : 'A100',
        		'hue-3' : '600',
        	}).warnPalette('red', {
        		'default' : '100',
        		'hue-1' : '900',
        		'hue-2' : 'A100',
        		'hue-3' : 'A400',
        	}).accentPalette('yellow', {
        		'hue-1' : '900',
        		'hue-2' : 'A100',
        		'hue-3' : 'A400',
        	})
        });

        app.config(function($mdThemingProvider) {
        	$mdThemingProvider.alwaysWatchTheme(true);
        	$mdThemingProvider.theme('zetta2').primaryPalette('green', {
        		'default' : '900',
        		'hue-1' : '500',
        		'hue-2' : 'A100',
        		'hue-3' : 'A400',
        	}).warnPalette('green', {
        		'default' : '100',
        		'hue-1' : '900',
        		'hue-2' : 'A100',
        		'hue-3' : 'A400',
        	}).accentPalette('blue', {
        		'hue-1' : '900',
        		'hue-2' : 'A100',
        		'hue-3' : 'A400',
        	})
        });

        var themeColors = [ 'ffebee', '#7FFFD4', 'ef9a9a', 'e57373', 'ef5350',
        		'f44336', '#00FFFF', '#FF6347', 'c62828', 'b71c1c', '#696969',
        		'#26A69A', 'ff1744', 'd50000' ];

        app.config(function($mdThemingProvider) {

        	$mdThemingProvider.definePalette('customPalette', {
        		'50' : themeColors[0],
        		'100' : themeColors[1],
        		'200' : themeColors[2],
        		'300' : themeColors[3],
        		'400' : themeColors[4],
        		'500' : themeColors[5],
        		'600' : themeColors[6],
        		'700' : themeColors[7],
        		'800' : themeColors[8],
        		'900' : themeColors[9],
        		'A100' : themeColors[10],
        		'A200' : themeColors[11],
        		'A400' : themeColors[12],
        		'A700' : themeColors[13],
        	});

        	$mdThemingProvider.theme('zetta3').primaryPalette('customPalette', {
        		'default' : "700",
        		'hue-1' : 'A100', // /bottom button colors
        		'hue-2' : '700',// toolbar color
        		'hue-3' : 'A400',
        	}).warnPalette('customPalette', {
        		'default' : '100',// 2 icon below tool bar
        		'hue-1' : '900',
        		'hue-2' : 'A100',
        		'hue-3' : 'A400',
        	}).accentPalette('customPalette', {
        		'hue-1' : '900', // text heading
        		'hue-2' : 'A100',
        		'hue-3' : 'A400',
        	});

        });
})();