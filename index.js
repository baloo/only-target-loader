var loaderUtils = require('loader-utils');

function identity(content) {
	this.cacheable();
	return content;
}

function empty() {
	this.cacheable();
	return "// empty";
}

module.exports = function(content) {
	var loaderOptions = loaderUtils.parseQuery(this.query);

	if (!loaderOptions.target || loaderOptions.target === this.target) {
		return identity.call(this, content);
	}

	return empty.call(this);
};
