(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['category-list'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "<li id=\"category-"
    + this.escapeExpression((helpers.toLower || (depth0 && depth0.toLower) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.Name : depth0),{"name":"toLower","hash":{},"data":data}))
    + "\" class=\"category\">"
    + ((stack1 = this.invokePartial(partials['p-category'],depth0,{"name":"p-category","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</li>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "﻿"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['primary-navigation'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "        <li><a href=\"#category-"
    + alias2((helpers.toLower || (depth0 && depth0.toLower) || alias1).call(depth0,(depth0 != null ? depth0.Name : depth0),{"name":"toLower","hash":{},"data":data}))
    + "\">"
    + alias2(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "﻿<label for=\"toggle-menu\" class=\"toggle-menu\" data-show-text=\"Show Menu\" data-hide-text=\"Hide Menu\">Show Menu</label>\r\n<input type=\"checkbox\" id=\"toggle-menu\" role=\"button\">\r\n<nav id=\"primary-navigation\">\r\n    <ul id=\"menu\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</nav>";
},"useData":true});
})();