/// <reference path="../models/checkout-models.js" />
var CategoryListView = Backbone.View.extend({
	//#region -- Backbone Objects --
	el: "#category-list",
	events: {
		"click .action .btn--primary": "actionPrimaryClicked",
		"click .action .btn--secondary": "actionSecondaryClicked"
	},
	appContext: null,
	template: DAT["category-list"],
	render: function (categories) {
		var view = this;
		view.$el.html(view.template(categories));
	},
	//#endregion -- Backbone Objects --
	actionPrimaryClicked: function (event) {
		var $this = $(event.target),
			origText = $this.text(),
			view = this;
		if (view.appContext && view.appContext.Functions && view.appContext.Data && view.appContext.Data.Hosts && view.appContext.Data.Categories) {
			$this.prop("disabled", true).text("Running...");
			view.appContext.Functions.ExecuteAjax(view.appContext.Data.Hosts[0].URL, $this.data("endpoint"), $this.data("verb"), $this.data("sample")).done(function (data) {
				if (data) {
					var node = new PrettyJSON.view.Node({
						el: $this.siblings("code"),
						data: data
					});
				}
				$this.prop("disabled", false).text(origText);
			});
		}
	},
	actionSecondaryClicked: function () {
		$(event.target).siblings("code").html("");
	}
});