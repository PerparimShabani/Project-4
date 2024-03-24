// script
async function makeBooking() {
  const guests = document.getElementById("guests").value;
  const availableSeats = document.getElementById("available-seats").value;

  // Check if the number of guests is withing the resaurant's capacity
  // Make booking
  const restaurantCapacity = parseInt(availableSeats);
  if (parseInt(guests) > restaurantCapacity) {
    displayReservationMessage(
      "Sorry, we don't have that many seats available. Try again later or another time of day."
    );
    return;
  }
  const url = `/book/${guests}/`;
  const data = {};
  const response = await fetch(`http://localhost:8000/book/${guests}/`)
    .then((response) => response.text())
    .then((data) => {
        console.log(data);
        return data; // Return data if needed
    })
    .catch((error) => console.error("Error:", error));
    console.log(response)

  //Display booking information
  displayReservationMessage(
    response
  );

  console.log("Booking information:");
  console.log("Number of guests: ${guests}");
  console.log("Backend calls would be made to store this booking information.");
}

//Function to cancel a booking
async function cancelBooking() {
  const id = document.getElementById("cancel-guests").value;

  const data = {};
  await fetch(`http://localhost:8000/unbook/${id}/`)
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  //Display booking information
  displayCancellationMessage(
    "Your reservation has been cancelled. Thank you for choosing our restaurant."
  );

  console.log("Booking information:");
  console.log("Number of guests: ${guests}");
  console.log("Backend calls would be made to store this booking information.");
}
function displayReservationMessage(message) {
  const reservationMessageDiv = document.getElementById("reservation-message");
  reservationMessageDiv.textContent = message;

  // Clear the message after 3 seconds
  setTimeout(() => {
    reservationMessageDiv.textContent = "";
  }, 3000);
}

function displayCancellationMessage(message) {
  const cancellationMessageDiv = document.getElementById(
    "cancellation-message"
  );
  cancellationMessageDiv.textContent = message;

  setTimeout(() => {
    cancellationMessageDiv.textContent = "";
  }, 3000);
}

