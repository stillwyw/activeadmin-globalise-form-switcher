jQuery(function () {
    var form =  $("form");
    var klass = form.attr("class").split(" ")[1];
    var locales_object = {'en': 'English','cn': 'Chinese'};
    var locales = ['en', 'cn'];
    var fieldset = form.children("fieldset.inputs")[0];
    var current_path = window.location.pathname;
    var reg = /\/\D\D\//;

    var current_locale = 'en';
    var matched_locale = reg.exec(current_path)[0];
    console.log(matched_locale);
    if (matched_locale) {
      current_locale = matched_locale.replace("/",'').replace("/",'');
    }
    console.log(current_locale);
    var options = '';
    for (var i = 0; i < locales.length; i++) {
      locale = locales[i];
      if (locale == current_locale) {
        options = options + '<option value="' + locale + '" selected="selected" >' + locales_object[locale] + '</option>';
      }else{
        options = options + '<option value="' + locale + '">' + locales_object[locale] + '</option>';
      }
    }

    var the_switch = $("<ol><li><label>Editing</label><select id='locale-switch' name='"+ klass +"[locale]'>"+options+"<select><p class=\"inline-hints\">Notice: Some content can not be translated.</p></li></ol>");

    $(fieldset).prepend(the_switch);

    $("#locale-switch").on('change',function (e) {
      var switched_locale = $(this).val();
      var destination = window.location.pathname.replace(current_locale, '');
      
      destination = '/' + switched_locale + destination;
      
      console.log(destination);
      window.location.href = destination;
    });

});
