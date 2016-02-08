/*
	Infinite image scroller with images from unsplash.it
*/
/* Infinite scroller using images from unsplash */

'use strict';

var UnsplashScroller;

(function(unsplashScroller, logger) {

	var SCROLLABLE_EXTRA = 1000;
	var loadMoreImagesHeight = window.innerHeight + SCROLLABLE_EXTRA;

	unsplashScroller.container = null;

	/* Init function */
	unsplashScroller.init = function(selector) {
		if (!selector) {
			logger.error('UnsplashScroller init(): selector argument missing');
			return;
		};

		this.container = this.getContainer(selector);

		while (this.container.offsetHeight < loadMoreImagesHeight) {
			this.addImage(this.container);
		}

		window.addEventListener('optimizedScroll', function(event) {
		    var body = document.querySelector('body');
		    while (this.container.offsetHeight - body.scrollTop < loadMoreImagesHeight) {
				this.addImage(this.container);
			}
		}.bind(this));
	};

	/* Get the container DOM node */
	unsplashScroller.getContainer = function(selector) {
		return document.querySelector(selector)
			|| Logger.error('Container \'' + selector + '\' element not found');
	};

	/* Adds a random image to the toNode */
	unsplashScroller.addImage = function(toNode) {
		var width = toNode.offsetWidth;
		var height = calculateImageHeightFromWidth(width);
		toNode.appendChild(this.getImageElement(width, height));

		/* Get a widescreen image's height from a certain width */
		function calculateImageHeightFromWidth(width) {
			return Math.floor((9/16) * width);
		}
	};

	/* Get a random image element */
	unsplashScroller.getImageElement = function(width, height) {
		var randomNum = Math.floor(Math.random() * 1000000);
		var elem = document.createElement('img');
		elem.style.height = height+'px';
		elem.src = 'https://unsplash.it/' + width + '/' + height + '/?random&' + randomNum;
		if (elem.classList) {
			elem.classList.add('unsplash-image');
		} else {
			elem.className = 'unsplash-image';
		};
		return elem;
	};

})(UnsplashScroller || (UnsplashScroller = {}), Logger);