function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function(){ 
    var postDir = "posts/";
    var pageID = getParameterByName('page');
    if (!pageID || 0 === pageID.length) {
        pageID = "article.html";
    }
    var postPath = postDir.concat(pageID);
    $.get(postPath, function(data) {
        $("#articleInsert").html(data);
    });
}); 
