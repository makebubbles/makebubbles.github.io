$(function() {

});

$(document).ready(function(){
    i18n.init({
            defaultValue: 'en',
            fallbackLng: 'en',
            load: 'unspecific',
            supportedLngs: ['en', 'sr']
        }, function () {
	       $('#app').i18n(); // Run translation
    });

    var language = i18n.detectLanguage();
    if( language != 'en' && language != 'sr'){
        language = i18n.setLng('en');
    }
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
