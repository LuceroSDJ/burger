
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

    $("#submit").on("click", function(event) {
        // preventDefault on a submit event.
        event.preventDefault();

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
    });
});

