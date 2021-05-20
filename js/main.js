
var lang = new Lang();
lang.dynamic('en', './js/Languages/js/langpack/en.json');
lang.dynamic('ar', './js/Languages/js/langpack/ar.json');
lang.init({
  defaultLang: 'en'
});


$(function () {
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


// Filter Data Table For Tests Page
var myArray = [
  { "Code": "5HIA2", "Name": "safsdggdfdhgdsdsf", "Price": "4752" },
  { "Code": "sde4", "Name": "mhmu", "Price": "932" },
  { "Code": "nhjj8", "Name": "regrt", "Price": "782" },
  { "Code": "5HItrhA2", "Name": "qqw", "Price": "2786953" },
  { "Code": "5HIgrrtA2", "Name": "[olpoi", "Price": "983" },
  { "Code": "345346", "Name": "safsdggdfdhgdsdsf", "Price": "632" },
  { "Code": "fdgr", "Name": "dsfs", "Price": "89" },
  { "Code": "fdsgr", "Name": "mite", "Price": "5683" },
  { "Code": "hgfhgfh", "Name": "qwbn", "Price": "2553" }
]


$("#InputSearch").on('keyup', function () {
  var value = $(this).val();
  console.log("Value:", value);
  var data = searchTable(value, myArray);
  buildTable(data);


})

buildTable(myArray)

function searchTable(value, data) {
  var filteredData = [];

  for (var i = 0; i < data.length; i++) {
    value = value.toLowerCase()
    var Name = data[i].Name.toLowerCase();
    var Code = data[i].Code;


    if (Name.includes(value) || Code.includes(value)) {
      filteredData.push(data[i]);
    }
  }
  return filteredData;
}

$('th').on('click', function(){
   var column = $(this).data('colname')
   var order = $(this).data('order')
   var text = $(this).html()
   text = text.substring(0, text.length - 1);
   
   
   
   if (order == 'desc'){
      myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
      $(this).data("order","asc");
      text += '&#9660'
   }else{
      myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
      $(this).data("order","desc");
      text += '&#9650'
   }

  $(this).html(text)

  buildTable(myArray)
  })


 

  
function buildTable(data){
  var table = document.getElementById('myTable')
  table.innerHTML = ''
  for (var i = 0; i < data.length; i++){
      var Code = `Code-${i}`
      var Name = `Name-${i}`
      var Price = `Price-${i}`

      var row = `<tr>
                      <td>${data[i].Code}</td>
                      <td>${data[i].Name}</td>
                      <td>${data[i].Price}</td>
                 </tr>`
      table.innerHTML += row
  }
}
























