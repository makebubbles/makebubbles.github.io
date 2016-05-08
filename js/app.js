$(function() {

});

$(document).ready(function(){
    i18n.init({
            fallbackLng: 'en',
            load: 'unspecific'
        }, function () {
	       $('#app').i18n(); // Run translation
    });

    $("#app").i18n();

    var language = i18n.detectLanguage();
    $('.language-switcher > span').text(language);

    var links = document.getElementsByClassName("lang-link");
    for(var i=0; i < links.length; i++)
    {
        if(links[i].dataset.locale == language)
        {
            links[i].style.display = "none";
        }
    }
});
