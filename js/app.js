$(function() {
    // i18n.init({ load: 'unspecific' });
    i18n.init(function(err, t) {
        $("#app").i18n();
        var appName = t("app.name");

        load:'unspecific'
    });
});
