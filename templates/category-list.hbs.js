var category_list = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "        <li>\r\n";
  stack1 = this.invokePartial(partials['p-category'], '            ', 'p-category', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿<ul class=\"grid__item one-whole card\">\r\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"usePartial":true,"useData":true});