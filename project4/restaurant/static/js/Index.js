// script
async function makeBooking() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const allergies = document.getElementById("allergies").value;
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
  await fetch(`http://localhost:8000/book/${guests}/`)
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

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

//Function to cancel a booking 
async function cancelBooking() {
  const bookingId = document.getElementById("cancel-booking-id").value;

  try {
    await fetch(`http://localhost:8000/cancel/${bookingId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to cancel booking');
    }
    
    displayCancellationMessage('Booking cancelled successfully');
  } catch (error) {
    console.error('Error:', error);
    displayCancellationMessage('Unable to cancel booking - please try again later');
  }
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
  const cancellationMessageDiv = document.getElementById("cancellation-message");
  cancellationMessageDiv.textContent = message;


  setTimeout(() => {
    cancellationMessageDiv.textContent = "";
  }, 3000);
}
// post anrop med fetch och restaurant id som parameter
