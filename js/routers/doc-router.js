/// <reference path="../services-library.js" />
/// <reference path="../cookies.js" />
var CheckoutRouter = Backbone.Router.extend({
	routes: {
		"": "init_doc",
		"category/:name": "init_category", // ex.) #category/account & #category/address
	},
	init_doc: function () {
	},
	init_category: function () {
	},
});