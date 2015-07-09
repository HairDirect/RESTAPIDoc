var switched = false;

function splitTable(original) {
	original.wrap("<div class='table-wrapper' />");
	var copy = original.clone();
	copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
	copy.removeClass("responsive");
	original.closest(".table-wrapper").append(copy);
	copy.wrap("<div class='pinned' />");
	original.wrap("<div class='scrollable' />");
}
function unsplitTable(original) {
	original.closest(".table-wrapper").find(".pinned").remove();
	original.unwrap();
	original.unwrap();
}

updateTables = function () {
	var $responsiveTables = $("table.responsive");
	if ($responsiveTables && $responsiveTables.length > 0) {
		if (($(window).width() < 800) && !switched) {
			switched = true;
			$("table.responsive").each(function (i, element) {
				splitTable($(element));
			});
			return true;
		}
		else if (switched && ($(window).width() > 800)) {
			switched = false;
			$("table.responsive").each(function (i, element) {
				unsplitTable($(element));
			});
		}
	}
};

$(document).ready(function () {	
	$(window).load(updateTables);
	$(window).bind("resize", updateTables);
	
});
