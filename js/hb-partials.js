Handlebars.registerPartial("p-category", Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<a class=\"loz\" href=\"#action-"
    + alias2((helpers.toLower || (depth0 && depth0.toLower) || alias1).call(depth0,(depths[1] != null ? depths[1].Name : depths[1]),{"name":"toLower","hash":{},"data":data}))
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</a>";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "        <li class=\"grid__item one-whole action\">\r\n"
    + ((stack1 = this.invokePartial(partials['p-action'],depth0,{"name":"p-action","hash":{"Category":depths[1]},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div>\r\n    <h2>"
    + alias3(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n    <span>"
    + alias3(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <div>Actions: "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Actions : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n    <ul class=\"grid action-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Actions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>";
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("p-action", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <tr>\r\n"
    + ((stack1 = this.invokePartial(partials['p-payload'],depth0,{"name":"p-payload","data":data,"indent":"                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                </tr>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <tr>\r\n"
    + ((stack1 = this.invokePartial(partials['p-response'],depth0,{"name":"p-response","data":data,"indent":"                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<div class=\"card\" id=\"action-"
    + alias2((helpers.toLower || (depth0 && depth0.toLower) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.Category : depth0)) != null ? stack1.Name : stack1),{"name":"toLower","hash":{},"data":data}))
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n    <h3>"
    + alias2(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <span>Description: "
    + alias2(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</span><br />\r\n    <span>Endpoint: "
    + alias2(((helper = (helper = helpers.Endpoint || (depth0 != null ? depth0.Endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Endpoint","hash":{},"data":data}) : helper)))
    + "</span><br />\r\n    <span>Verb: "
    + alias2(((helper = (helper = helpers.Verb || (depth0 != null ? depth0.Verb : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Verb","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <h4>Payload</h4>\r\n    <div class=\"table-wrapper\">\r\n        <table class=\"table--bordered table--striped table--data\">\r\n            <thead>\r\n                <tr><th>Name</th><th>Type</th><th>Notes</th></tr>\r\n            </thead>\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Payload : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n    <h4>Response</h4>\r\n    <div class=\"table-wrapper\">\r\n        <table class=\"table--bordered table--striped table--data\">\r\n            <thead>\r\n                <tr><th>Name</th><th>Type</th><th>Notes</th></tr>\r\n            </thead>\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Response : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n    <!--<h4>Test it</h4>\r\n    <button class=\"btn btn--gamma btn--secondary\">Clear</button>\r\n    <button class=\"btn btn--gamma btn--positive btn--primary\" data-endpoint=\""
    + alias2(((helper = (helper = helpers.Endpoint || (depth0 != null ? depth0.Endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Endpoint","hash":{},"data":data}) : helper)))
    + "\" data-verb=\""
    + alias2(((helper = (helper = helpers.Verb || (depth0 != null ? depth0.Verb : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Verb","hash":{},"data":data}) : helper)))
    + "\" data-sample='"
    + alias2((helpers.stringifyJSON || (depth0 && depth0.stringifyJSON) || alias1).call(depth0,(depth0 != null ? depth0.SampleCall : depth0),{"name":"stringifyJSON","hash":{},"data":data}))
    + "'>Execute</button>\r\n    <h5>Result</h5>\r\n    <code></code>-->\r\n    <div class=\"sample-response\">\r\n        <h4>Sample Response</h4>\r\n        <div class=\"onoff\">\r\n            <input type=\"checkbox\" id=\"switch-"
    + alias2((helpers.toLower || (depth0 && depth0.toLower) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.Category : depth0)) != null ? stack1.Name : stack1),{"name":"toLower","hash":{},"data":data}))
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n            <label for=\"switch-"
    + alias2((helpers.toLower || (depth0 && depth0.toLower) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.Category : depth0)) != null ? stack1.Name : stack1),{"name":"toLower","hash":{},"data":data}))
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n                <span class=\"inner\"></span>\r\n                <span class=\"switch\"></span>\r\n            </label>\r\n        </div>\r\n        <pre style=\"display: none;\"><code>"
    + alias2((helpers.prettifyJSON || (depth0 && depth0.prettifyJSON) || alias1).call(depth0,(depth0 != null ? depth0.SampleResponse : depth0),{"name":"prettifyJSON","hash":{},"data":data}))
    + "</code></pre>\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("p-payload", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " required";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td data-label=\"Name\" class=\"name"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Required : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><code>"
    + alias3(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</code></td>\r\n<td data-label=\"Type\" class=\"type\"><code>"
    + alias3(((helper = (helper = helpers.Type || (depth0 != null ? depth0.Type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Type","hash":{},"data":data}) : helper)))
    + "</code></td>\r\n<td data-label=\"Notes\" class=\"notes\">"
    + alias3(((helper = (helper = helpers.Notes || (depth0 != null ? depth0.Notes : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Notes","hash":{},"data":data}) : helper)))
    + "</td>";
},"useData":true}));

Handlebars.registerPartial("p-response", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td data-label=\"Name\"><code>"
    + alias3(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</code></td>\r\n<td data-label=\"Type\"><code>"
    + alias3(((helper = (helper = helpers.Type || (depth0 != null ? depth0.Type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Type","hash":{},"data":data}) : helper)))
    + "</code></td>\r\n<td data-label=\"Notes\"><code>"
    + alias3(((helper = (helper = helpers.Notes || (depth0 != null ? depth0.Notes : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Notes","hash":{},"data":data}) : helper)))
    + "</code></td>";
},"useData":true}));