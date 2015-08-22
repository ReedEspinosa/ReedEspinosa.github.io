function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function(){ 
  var pageId = getParameterByName('page');
  if (!pageId || 0 === pageId.length) {
    pageId = "pages/article.html";
  }
  $.get(pageId, function(data) {
    $("#articleInsert").html(data);
  });
}); 
