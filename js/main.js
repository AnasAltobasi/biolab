var lang = new Lang();

lang.dynamic('en', './js/Languages/js/langpack/en.json');
lang.dynamic('ar', './js/Languages/js/langpack/ar.json');


$(function () {
  
lang.init({
  defaultLang: 'en'
});
  // Mack All Input Disable
  const AllInput = $(":text");
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
  const Loading =document.getElementById("Loading");

  const Body = document.getElementsByTagName("body");
  const LANG = document.getElementsByTagName("body")[0];

  $(RTL).click(function () {
    $(Body).css("direction", "rtl");
    LANG.lang = "ar";
    window.lang.change('ar');return false;
    
  });

  $(LTR).click(function () {
    $(Body).css("direction", "ltr");
    LANG.lang = "en";
    window.lang.change('en');return false;
  });



  $(Loading).on("click",Loading,function(e){ 
    e.preventDefault(); // cancel click
    var url=$(Loading).attr("href");
    $(Body).load(url);
    
  });

  


});




function load(){
  $.ajax({
          success: function() {
            location.reload();
          }
      });
}
  


