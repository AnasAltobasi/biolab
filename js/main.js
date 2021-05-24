
var lang = new Lang();
lang.dynamic('en', './js/Languages/js/langpack/en.json');
lang.dynamic('ar', './js/Languages/js/langpack/ar.json');
lang.init({
  defaultLang: 'en'
});


$(function () {

  $("#panel-admin").css("display", "none");

  $('.open').click(function() {
      $("#panel-admin").animate({ width: 'toggle' }, 100);
  });

  


  

  // Mack All Input Disable
  const AllInput = $(".InputIndex");
  const AllCheckBox = $(":checkbox");
  const AllInputArray = [];
  const AllCheckArray = [];

  for (i = 0; i < AllInput.length; i++) {
    AllInputArray.push(AllInput[i]);
    AllCheckArray.push(AllCheckBox[i]);
    AllInputArray[i].disabled = "true";
  }

  $("#PatientChackWhatsapp").click(function () {
    if ($(this).prop("checked") == true) {
      $("#PatientInputWhatsapp").removeAttr("disabled");
    } else if ($(this).prop("checked") == false) {
      $("#PatientInputWhatsapp").attr("disabled", "disabled");
    }

  });
  $("#ConsultantChackWhatsapp").click(function () {
    if ($(this).prop("checked") == true) {
      $("#ConsultantInputWhatsapp").removeAttr("disabled");
    } else if ($(this).prop("checked") == false) {
      $("#ConsultantInputWhatsapp").attr("disabled", "disabled");
    }
  });
  $("#ReferralChackWhatsapp").click(function () {
    if ($(this).prop("checked") == true) {
      $("#ReferralInputWhatsapp").removeAttr("disabled");
    } else if ($(this).prop("checked") == false) {
      $("#ReferralInputWhatsapp").attr("disabled", "disabled");
    }
  });
  $("#CorporateChackWhatsapp").click(function () {
    if ($(this).prop("checked") == true) {
      $("#CorporateInputWhatsapp").removeAttr("disabled");
    } else if ($(this).prop("checked") == false) {
      $("#CorporateInputWhatsapp").attr("disabled", "disabled");
    }
  });
  $("#PatientChackEmail").click(function () {
    if ($(this).prop("checked") == true) {
      $("#PatientInputEmail").removeAttr("disabled");
    } else if ($(this).prop("checked") == false) {
      $("#PatientInputEmail").attr("disabled", "disabled");
    }
  });
  $("#ConsultantChackEmail").click(function () {
    if ($(this).prop("checked") == true) {
      $("#ConsultantInputEmail").removeAttr("disabled");
    } else if ($(this).prop("checked") == false) {
      $("#ConsultantInputEmail").attr("disabled", "disabled");
    }
  });
  $("#ReferralChackEmail").click(function () {
    if ($(this).prop("checked") == true) {
      $("#ReferralInputEmail").removeAttr("disabled");
    } else if ($(this).prop("checked") == false) {
      $("#ReferralInputEmail").attr("disabled", "disabled");
    }
  });
  $("#CorporateChackEmail").click(function () {
    if ($(this).prop("checked") == true) {
      $("#CorporateInputEmail").removeAttr("disabled");
    } else if ($(this).prop("checked") == false) {
      $("#CorporateInputEmail").attr("disabled", "disabled");
    }
  });
  $("#TempChackEmail").click(function () {
    if ($(this).prop("checked") == true) {
      $("#TempinputEmail").removeAttr("disabled");
    } else if ($(this).prop("checked") == false) {
      $("#TempinputEmail").attr("disabled", "disabled");
    }
  });


  // ***********************************************************************************

  const RTL = document.getElementById("AR");
  const LTR = document.getElementById("EN");

  const Body = document.getElementsByTagName("body");
  const LANG = document.getElementsByTagName("body")[0];

  const Section = document.getElementById("Section");
  const Enable = document.getElementById("Enable");

  $(Section).css("display", "none");
  $(Enable).attr("disabled", "disabled");


  $(RTL).click(function () {
    $(Body).css("direction", "rtl");
    document.cookie = "Dir=rtl";
    LANG.lang = "ar";
    window.lang.change('ar');
    $("#panel-admin").css("display", "none");
    return false;
  });

  $(LTR).click(function () {
    $(Body).css("direction", "ltr");
    document.cookie = "Dir=ltr";
    LANG.lang = "en";
    window.lang.change('en');
    $("#panel-admin").css("display", "none");
    return false;
  });


  $(Enable).click(function () {
    // $(Section).toggle()
    $(Section).css("display", "flex");
    document.getElementById('Enable').setAttribute("disabled", "disabled");
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
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}



























