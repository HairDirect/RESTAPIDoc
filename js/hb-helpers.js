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