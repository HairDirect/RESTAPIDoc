/// <reference path="../cookies.js" />
$(document).ready(function () {
	window.DocApp = {
		Models: {
		},
		Collections: {
			Categories: new Categories()
		},
		Views: {
			CategoryList: new CategoryListView()
		},
		Router: {},
		Data: null,
		Settings: {
		},
		Loaded: false,
		Boot: function () {
			/// <summary>Initializes the Checkout process.</summary>
			//Handlebars.logger.level = 0;
			DocApp.Views.CategoryList.appContext = DocApp;
			DocApp.Collections.Categories.fetch(DocApp).then(function (data) {
				if (data && data.Categories) {
					DocApp.Functions.ProcessCategories(data.Categories);
				}
			}); 
			//this.Models.OrderSummary.on("change", function () {
			//	/// <summary>Refreshes the values in the checkout cookie, and re-renders the order totals view whenever the OrderSummary model changes.</summary>
			//	Checkout.SetCheckoutCookie();
			//	Checkout.Views.OrderTotals.render();
			//	Checkout.Views.ReviewStep.render();
			//});
			//this.Collections.ShoppingCart.on("remove change", function () {
			//	if (app.Collections.ShoppingCart.length) {
			//		// Re-render the shopping cart view
			//		Checkout.Views.ReviewStep.Views.ShoppingCart.render();
			//	}
			//	else {
			//		// move customer back to cart page
			//		app.Views.Wrapper.showLoadingPanel("Shopping cart is empty...");
			//		window.location = Checkout.Settings.CartUrl;
			//	}
			//});
			//this.Router = new CheckoutRouter();
			//Backbone.history.start({ pushState: false, root: "/store/checkout/" });
		},
		Functions: {
			ProcessCategories: function (categories) {
				DocApp.Views.CategoryList.render(categories);
			},
			ExecuteAjax: function (host, endpoint, verb, data) {
				return jQuery.ajax({
					type: verb, //'POST',
					contentType: "application/json",
					url: host + endpoint, //"https://testservices.hairdirect.com/store/order.svc/integration-queue/get/check-batch-for-errors",
					dataType: "json",
					data: data ? JSON.stringify(data) : null
				});
			}
		}
	};
	DocApp.Boot();
});