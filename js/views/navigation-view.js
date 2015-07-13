var NavigationView = Backbone.View.extend({
	//#region -- Backbone Objects --
	el: "#primary-navigation-container",
	events: {
		"click #toggle-menu": "toggleMenuClicked"
	},
	appContext: null,
	template: Handlebars.templates["primary-navigation"],
	render: function (categories) {
		var view = this;
		view.$el.html(view.template(categories));
	},
	//#endregion -- Backbone Objects --
	toggleMenuClicked: function (event) {
		var $this = $(event.target),
			$label = $this.prev();
		if ($label.text() === $label.data("show-text")) {
			$label.text($label.data("hide-text"));
		}
		else {
			$label.text($label.data("show-text"));
		}
	}
});