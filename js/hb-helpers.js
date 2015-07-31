Handlebars.registerHelper('stringifyJSON', function (value, options) {
	/// <summary>Stringifys JSON data</summary>
	/// <param name="value" type="String">The json data to stringify.</param>
	/// <param name="options" type="Object">Handlebars options</param>
	return new Handlebars.SafeString(JSON.stringify(value));
});

Handlebars.registerHelper('toLower', function (value, options) {
	/// <summary>Stringifys JSON data</summary>
	/// <param name="value" type="String">The json data to stringify.</param>
	/// <param name="options" type="Object">Handlebars options</param>
	return new Handlebars.SafeString(value.toLowerCase());
});

Handlebars.registerHelper('prettifyJSON', function (value, options) {
	/// <summary>Formats JSON into collapsible markup.</summary>
	/// <param name="value" type="String">The json data to prettify.</param>
	/// <param name="options" type="Object">Handlebars options</param>
	//var node = new PrettyJSON.view.Node({
	//	data: value
	//});
	//node.expandAll();
	//return new Handlebars.SafeString(node.el.innerHTML);
	//return new Handlebars.SafeString(JSON.stringify(value, null, '\t'));
	return new Handlebars.SafeString(JSON.stringify(value, null, 1));
});