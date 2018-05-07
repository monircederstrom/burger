
    $(document).ready(function () {
        $(".eat").on("click", function(event) {
          event.preventDefault();
          var burger_id = $(this).children(".burger_id").val();
          console.log(burger_id)
          // Send the DELETE request.
          $.ajax(
            method: "PUT",
            url: "/burgers/" + burger_id
          }).then(
            function(data) {
              console.log("Burger eaten!");
              // Reload the page to get the updated list
              location.reload();
            });
        });
        $("#text-enter-button").on("click", function(event) {
          // Make sure to preventDefault on a submit event.
          event.preventDefault();
          var newBurger = {
            burger: $("#text-enter-button [name=burger]").val().trim()
          };
          // Send the POST request.
          $.ajax("/burgers/", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("added new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });
        });
