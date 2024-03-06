// script
function makeBooking() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const allergies = document.getElementById("allergies").value;

  // Check if the number of guests is withing the resaurant's capacity
  const restaurantCapacity = 40;
  if (parseInt(guests) > restaurantCapacity) {
    displayReservationMessage(
      "Sorry, we don't have that many seats available. Try again later or another time of day."
    );
    return;
  }

  //Display booking information
  displayReservationMessage(
    "Your reservation has been made. Thank you for choosing our restaurant."
  );

  console.log("Booking information:");
  console.log("Date: ${date}");
  console.log("Time: ${time}");
  console.log("Number of guests: ${guests}");
  console.log("Allergies: ${allergies}");

  console.log("Backend calls would be made to store this booking information.");
}

function displayReservationMessage(message) {
    const reservationMessageDiv = document.getElementById("reservation-message");
    reservationMessageDiv.textContent = message;

    // Clear the message after 3 seconds 
    setTimeout(() => {
        reservationMessageDiv.textContent = '';
    }, 3000);
}

// post anrop med fetch och restaurant id som parameter