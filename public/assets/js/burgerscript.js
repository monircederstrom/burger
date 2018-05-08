
    $(document).ready(function () {
        $("#eat").on("click", function(event) {
          event.preventDefault();
          var id = $(this).data("burgerid");
          console.log(id)
          // Send the DELETE request.
          $.ajax("/burgers/" + id, {
            type: "PUT",
            data: {
              devoured: true
            }
          }).then(
            function() {
              console.log("Burger eaten!");
              // Reload the page to get the updated list
              location.reload();
            });
        });
        $("#text-enter-button").on("click", function(event) {
          // Make sure to preventDefault on a submit event.
          event.preventDefault();
          var newBurger = $("#enter_text").val();
         
                    // Send the POST request.
                    $.ajax("/burgers/create", {
                      type: "POST",
                      data: newBurger
                    }).then(
                      function() {
                        console.log("added new burger");
                        // Reload the page to get the updated list
                        location.reload();
                      });
          });
        });
      