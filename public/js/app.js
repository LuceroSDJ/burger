
$(function() {
    $("#updateBoolean").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured false to true", newDevourState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


    /* ====================== NOTES ==================================
    "User-submitted data should also always be verified using a secure server-side script. 
    Otherwise a browser with JavaScript disabled, or a hacker trying to compromise your site, 
    can easily by-pass client-side validation."
    ==================================================================
    */
// when user confirms she/he is ready for the survey, make sure user provided name and gender
// $("#confirm").on("click", function(event) {
//   var validateInputName = $("#name").val().trim();
//   var validateImgSelect = $("#photoLink").val();
//   // for security purposes only alphanumeric characters and spaces must be accepted
//   var regular = /^[\w ]+$/;
//   // validation will fail if any of the input fields is left blank
//   if(validateInputName === "" || validateImgSelect ==="") {
//   alert("Please add required identifying information in order to proceed. Thank you.");
//   return false;
//   }
//   // validation will fail if unauthorized characters are entered by the user in the imput field 'name'
//   else if(!regular.test(validateInputName)) {
//   alert("Name input field contains invalid characters!");
//   return false;
//   }
//   else {
//       return true;
//   };   
// });

    $("#submit").on("click", function(event) {
        // preventDefault on a submit event.
        event.preventDefault();

        // Validation Test
        var validateBurgerName = $("#orderBurgerInput").val().trim();
        // for security purposes only alphanumeric characters and spaces must be accepted
        var regular = /^[\w ]+$/;
        // validation will fail if any of the input fields is left blank
        if(validateBurgerName === "") {
          alert("Burger Name is required in order to proceed. Thank you.");
          return false;
          }
          // validation will fail if unauthorized characters are entered by the user in the imput field 'name'
          else if(!regular.test(validateBurgerName)) {
            alert("Name input field contains invalid characters!");
            return false;
            }
            else {
                // return true;
            


        var newBurger = {
        name: $("#orderBurgerInput").val().trim(),
        };
        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
            }
        );
      }; 
    });
});

