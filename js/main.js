var APIData = {
	"Settings": {
		"json_path": "data.json"
	},
	"Variables": {
		"data": null
	},
	"Functions": {
		"getJSONData": function () {
			if (!APIData.Variables.data) {
				return $.getJSON(APIData.Settings.json_path, function (data) {
					APIData.Variables.data = data;
				});
			}
			else {
				return $.Deferred();
			}
		},
		"processJSONData": function (data) {
			APIData.Functions.bindCategories(data.Categories);
		},
		"bindCategories": function(categories) {
			$("body").append(APIData.UITemplates.categoryList(categories));
		}
	},
	"UITemplates": {
		"categoryList": Handlebars.templates["category-list"]
	}
}

$(document).ready(function () {
	APIData.Functions.getJSONData().then(APIData.Functions.processJSONData);
});