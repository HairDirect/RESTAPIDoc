$(document).ready(function () {
	window.DocApp = {
		Models: {
		},
		Collections: {
			"Categories": new Categories()
		},
		Views: {
			"CategoryList": new CategoryListView(),
			"Navigation": new NavigationView()
		},
		Router: {},
		Data: null,
		Settings: {
		},
		Loaded: false,
		Boot: function () {
			/// <summary>Initializes the Checkout process.</summary>
			DocApp.Views.CategoryList.appContext = DocApp;
			DocApp.Collections.Categories.fetch(DocApp).then(function (data) {
				if (data && data.Categories) {
					DocApp.Functions.ProcessCategories(data.Categories);
				}
			}); 
		},
		Functions: {
			ProcessCategories: function (categories) {
				DocApp.Views.Navigation.render(categories);
				DocApp.Views.CategoryList.render(categories);
			},
			ExecuteAjax: function (host, endpoint, verb, data) {
				return jQuery.ajax({
					type: verb,
					contentType: "application/json",
					url: host + endpoint,
					dataType: "json",
					data: data ? JSON.stringify(data) : null
				});
			}
		}
	};
	DocApp.Boot();
});