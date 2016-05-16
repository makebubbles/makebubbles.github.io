$(function() {

});

// get param value
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

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
    
    // check for mail send parameter
    
    var mailStatus = getUrlParameter('mailSend');
    if( mailStatus.length > 0){
        $('.contact-form').fadeOut(300);
        $('.message-box').addClass('visible');
        
        window.setTimeout(function() {
            window.location.href = 'makebubbles.github.io';
        }, 4000);
    }
});
