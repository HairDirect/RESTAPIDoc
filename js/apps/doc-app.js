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
			"amountScrolled": 300,
			"scrollDuration": 1000
		},
		Loaded: false,
		Boot: function () {
			/// <summary>Initializes the doc app.</summary>
			DocApp.Views.CategoryList.appContext = DocApp;
			DocApp.Functions.InitScrollToTop();
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
				DocApp.Functions.InitSmoothScroll();
			},
			ExecuteAjax: function (host, endpoint, verb, data) {
				return jQuery.ajax({
					type: verb,
					contentType: "application/json",
					url: host + endpoint,
					dataType: "json",
					data: data ? JSON.stringify(data) : null
				});
			},
			InitScrollToTop: function () {
				// Bind scroll event to toggle the "back-to-top" button
				var $btt = $('a.back-to-top');
				$(window).scroll(function () {
					if ($(window).scrollTop() > DocApp.Settings.amountScrolled) {
						$btt.fadeIn(DocApp.Settings.scrollDuration);
					} else {
						$btt.fadeOut(DocApp.Settings.scrollDuration);
					}
				});

				$btt.click(function () {
					$('html,body').animate({
						scrollTop: 0
					}, DocApp.Settings.scrollDuration);
					return false;
				});
			},
			InitSmoothScroll: function () {
				$('a[href*=#]:not([href=#modal])').click(function () {
					var target = $(this.hash);
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, DocApp.Settings.scrollDuration);
						return false;
					}
				});
			}
		}
	};
	DocApp.Boot();
});