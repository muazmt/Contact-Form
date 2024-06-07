let contactForm = $("#contact-form");
contactForm.on("submit", submitChecker);
let success = $("#success");

function submitChecker(e) {
  e.preventDefault();

  let errors = $(".errorsDisplay");
  errors.text(""); 
  
  let firstName = $("#first-name").val();
  let lastName = $("#last-name").val();
  let formEmail = $("#email").val();
  let query = $('input[name="query"]:checked');
  let message = $("#message").val();
  let formCheckbox = $("#checkbox").is(":checked");

  if (!firstName) {
    $("#error1").text("This field is required");
    $("#first-name").css({border:"1px solid var(--Red)"}); 
  } 

  if (!lastName) {
    $("#error2").text("This field is required");
    $("#last-name").css({border: "1px solid var(--Red)"});
  } 

  if (!formEmail || !formEmail.includes("@")) {
    $("#error3").text("Please enter a valid email address");
    $("#email").css({border: "1px solid var(--Red)"});
  } 

  if (!query.length) {
    $("#error4").text("Please select a query type");
  }

  if (!message) {
    $("#error5").text("This field is required");
    $("#message").css({border:"1px solid var(--Red)"});
  } 

  if (!formCheckbox) {
    $("#error6").text("To submit this form, please consent to being contacted");
  }

  if ($(".errorsDisplay:empty").length === 6) {
    success.css("display", "block");
    contactForm.submit(); 
  }

  
}



























// let contactForm = document.getElementById('contact-form');
// let success= document.getElementById('success');
// let submit=  document.getElementById('submit');

// submit.addEventListener("click", function(e) {
//     e.preventDefault(); 
  
//     let formElements = contactForm.elements;
//     let allFilled = true;
//     for (i = 0; i < formElements.length; i++) {
//       if (formElements[i].value === "") {
//         allFilled = false;
//         break;
//       }
//     }
//     if (allFilled) {
//         success.style.display = "block";
//       } 
//     });

    

    // submit.addEventListener("click", function(e) {
    //   e.preventDefault();

    //   success.style.display = "block";
    // });

      



