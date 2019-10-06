$(document).ready(function () {

    // Initial array of water animals
    var waterAnimals = ["Fish", "Shark", "Whale", "Dolphin", "Squid", "Octopus", "Crab", "Sting Ray", "Star Fish", "Sea Horse", "Sea Turtle", "Lobster", "Otter", "Sea Lion", "Walrus", "Coral", "Frog", "Sea Cucumber", "Eel", "Penguins", "Shrimp", "Clams"];

    // displaywaterAnimalInfo function re-renders the HTML to display the appropriate content
    function displaywaterAnimalsInfo() {

        var topics = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=bKRakmKXT6210rxtpqBRT0Qi7xZgBdLE&limit=10";

        // Creating an AJAX call for the specific waterAnimals button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);

            var result = response.data;
            $("#animals").empty();
            for (var i = 0; i < result.length; i++) {
                var animalDiv = $("<div>");

                var p = $("<p>");
                var rating = result[i].rating;
                p.text("Rating: " + rating);
                animalDiv.append(p);

                var seaAnimalImages = $("<img>");
                var animated = result[i].images.fixed_height.url;
                var still = result[i].images.fixed_height_still.url;
                seaAnimalImages.addClass("waterAnimal-Images");
                seaAnimalImages.attr("src", still);
                seaAnimalImages.attr("data-still", still);
                seaAnimalImages.attr("data-animate", animated);
                seaAnimalImages.attr("data-state", "still");
                animalDiv.append(seaAnimalImages);
                $("#animals").append(animalDiv);

                // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                $(".waterAnimal-Images").on("click", function () {

                    var state = $(this).attr("data-state");
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    }
                });
            }
        });
    }


    // Function for displaying water animal data
    function renderButtons() {
        $("#animal_buttons").empty();
        for (i = 0; i < waterAnimals.length; i++) {
            var animalButtons = $("<button>");
            animalButtons.addClass("animal-buttons");
            animalButtons.attr("data-name", waterAnimals[i]);
            animalButtons.text(waterAnimals[i]);
            $("#animal_buttons").append(animalButtons);
        }
    }

    // This function handles events when submit button is clicked
    $("#add_animal").on("click", function (event) {

        event.preventDefault();

        // This line will grab the text from the input box
        var userInput = $("#animal_input").val().trim();
        // The movie from the textbox is then added to our array
        waterAnimals.push(userInput);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
    });

    $(document).on("click", ".animal-buttons", displaywaterAnimalsInfo);

    renderButtons();
});