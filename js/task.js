var lang = new Lang();
lang.dynamic('en', './js/Languages/js/langpack/en.json');
lang.dynamic('ar', './js/Languages/js/langpack/ar.json');
lang.init({
    defaultLang: 'en'
});
const RTL = document.getElementById("AR");
const LTR = document.getElementById("EN");

const Body = document.getElementsByTagName("body");
const LANG = document.getElementsByTagName("body")[0];

const Section = document.getElementById("Section");
const Enable = document.getElementById("Enable");


$(function () {
    $(Section).css("display", "none");
    $(Enable).attr("disabled", "disabled");

    $(Enable).click(function () {
        $(Section).toggle()
        // $(Section).css("display", "flex");
    });

    document.getElementById("TextInput").addEventListener("keyup", function () {
        var nameInput = document.getElementById('TextInput').value;
        if (nameInput != "") {
            document.getElementById('Enable').removeAttribute("disabled");
        } else {
            document.getElementById('Enable').setAttribute("disabled", "disabled");
            $(Section).css("display", "none");
        }

    });

    $(RTL).click(function () {
        $(Body).css("direction", "rtl");
        document.cookie = "Dir=rtl";
        LANG.lang = "ar";
        window.lang.change('ar');
        return false;
    });

    $(LTR).click(function () {
        $(Body).css("direction", "ltr");
        document.cookie = "Dir=ltr";
        LANG.lang = "en";
        window.lang.change('en');
        return false;
    });
});