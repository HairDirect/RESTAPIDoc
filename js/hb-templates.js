(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['category-list'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <li>\r\n"
    + ((stack1 = this.invokePartial(partials['p-category'],depth0,{"name":"p-category","data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "﻿<ul class=\"card\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"usePartial":true,"useData":true});
})();