Categories = Backbone.Collection.extend({
	model: Category,
	fetch: function (app) {
		var collection = this;
		if (app) {
			if (!app.Data) {
				return $.getJSON(collection.data_path, function (json_data) {
					app.Data = json_data;
					collection.set(json_data);
				});
			}
			else {
				return $.Deferred();
			}
		}
	},
	data_path: "data.json"
});