/* Logger module */

var Logger;

(function(logger) {

	Logger.log = function(string) {
		if (console && console.log) {
			console.log(string);
		};
	};

	Logger.error = function(string) {
		if (console && console.error) {
			console.error(string);
		};
	};

})(Logger || (Logger = {}));