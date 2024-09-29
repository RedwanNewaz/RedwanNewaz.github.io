$(function() {
    $("#Fontselector").on("change",function() {
      var font = $("#Fontselector option:selected").text();
      console.log(font);

      $('.title.fonters').each(function() {
          $(this).css("font-family",font);
      });
    });
  });
  function reset() {
      $("select").each(function () {
        localStorage.setItem($(this).attr("id"),"");
        $(this).val("");
      });
      $("#searchbar").val("");
      $("#searchbar").trigger('change');
  }
  function resetOtherFilters(changedId) {
$("select").each(function() {
if ($(this).attr("id") !== changedId) {
$(this).val("");
}
});
$("#searchbar").val("");
}

$("#authorselectfirst, #authorselect").on("change", function() {
resetOtherFilters($(this).attr("id"));
$(this).trigger('change');
});