var app;

(function(app, UnsplashScroller, Logger) {

	var selector = '.image-container';

	app.infScroller = Object.create(UnsplashScroller);
	app.infScroller.init(selector);

})(app || (app = {}), UnsplashScroller, Logger);