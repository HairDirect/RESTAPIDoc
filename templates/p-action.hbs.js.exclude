var p_action = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "            <tr>\r\n";
  stack1 = this.invokePartial(partials['p-payload'], '                ', 'p-payload', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿<div class=\"action\">\r\n    <h3>"
    + escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Name","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <span>Description: "
    + escapeExpression(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Description","hash":{},"data":data}) : helper)))
    + "</span><br />\r\n    <span>Endpoint: "
    + escapeExpression(((helper = (helper = helpers.Endpoint || (depth0 != null ? depth0.Endpoint : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Endpoint","hash":{},"data":data}) : helper)))
    + "</span><br />\r\n    <span>Verb: "
    + escapeExpression(((helper = (helper = helpers.Verb || (depth0 != null ? depth0.Verb : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Verb","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <h4>Payload</h4>\r\n    <table class=\"table--bordered table--striped table--data\">\r\n        <thead>\r\n            <tr><td>Name</td><td>Type</td><td>Notes</td></tr>\r\n        </thead>\r\n        <tbody>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Payload : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </tbody>\r\n    </table>\r\n    <h4>Response</h4>\r\n    <table class=\"table--bordered table--striped table--data\">\r\n        <thead>\r\n            <tr><td>Name</td><td>Type</td><td>Notes</td></tr>\r\n        </thead>\r\n        <tbody>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Payload : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </tbody>\r\n    </table>\r\n    <h4>Test it</h4>\r\n    <button class=\"btn btn--gamma btn--secondary\">Clear</button>\r\n    <button class=\"btn btn--gamma btn--positive btn--primary\" data-endpoint=\""
    + escapeExpression(((helper = (helper = helpers.Endpoint || (depth0 != null ? depth0.Endpoint : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Endpoint","hash":{},"data":data}) : helper)))
    + "\" data-verb=\""
    + escapeExpression(((helper = (helper = helpers.Verb || (depth0 != null ? depth0.Verb : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Verb","hash":{},"data":data}) : helper)))
    + "\" data-sample='"
    + escapeExpression(((helpers.stringifyJSON || (depth0 && depth0.stringifyJSON) || helperMissing).call(depth0, (depth0 != null ? depth0.SampleCall : depth0), {"name":"stringifyJSON","hash":{},"data":data})))
    + "'>Execute</button>\r\n    <h5>Result</h5>\r\n    <code></code>\r\n</div>";
},"usePartial":true,"useData":true});