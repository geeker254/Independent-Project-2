// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

var male = new Object();

male.Sunday = "Kwasi"
male.Monday = "Kwadwo";
male.Tuesday = "Kwabena";
male.Wednesday = "Kwaku";
male.Thursday = "Yaw";
male.Friday = "Kofi";
male.Saturday = "Kwame";


var female = new Object();

female.Sunday = "Akosua";
female.Monday = "Adwoa";
female.Tuesday = "Abenaa";
female.Wednesday = "Akua";
female.Thursday = "Yaa";
female.Friday = "Afua";
female.Saturday = "Ama";

var male = document.getElementById("validationCustom04");
var female = document.getElementById("validationCustom04");

