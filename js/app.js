$(function() {
    // i18n.init({ load: 'unspecific' });
    i18n.init(function(err, t) {
        $("#app").i18n();
        var appName = t("app.name");
        load:'en'
    });
});

$(document).ready(function(){
    var language = i18n.detectLanguage();

    var links = document.getElementsByClassName("lang-link");
    for(var i=0; i < links.length; i++)
    {
        if(links[i].dataset.locale == language)
        {
            links[i].style.display = "none";
        }
    }
});
