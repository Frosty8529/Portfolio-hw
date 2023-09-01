$(function(){
    var $select = $(".dropdown-day-1-31");
    for (i=1;i<=31;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

$(function(){
    var $select = $(".dropdown-month-1-12");
    for (i=1;i<=12;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

$(function(){
    var $select = $(".dropdown-year-1980-2005");
    for (i=1980;i<=2005;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});


document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener("click", function () {

    location.reload();
  });

  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function () {

    location.reload();
  });

  var submitEmailPasswordButton = document.querySelector('input[type="submit"]');
  submitEmailPasswordButton.addEventListener("click", function (event) {
    var emailValue = document.querySelector('input[name="Email"]').value;
    var confirmEmailValue = document.querySelector('input[name="Confirm Email"]').value;

    if (emailValue !== confirmEmailValue) {
      event.preventDefault();

      alert("Email and Confirm Email do not match.");
    }
  });

  var submitPasswordButton = document.querySelector('input[type="submit"]');
  submitPasswordButton.addEventListener("click", function (event) {
    var passwordValue = document.querySelector('input[name="Password"]').value;
    var confirmPasswordValue = document.querySelector('input[name="Confirm Password"]').value;

    if (passwordValue !== confirmPasswordValue) {
      event.preventDefault();

      alert("Password and Confirm Password do not match.");
    }
  });
});
