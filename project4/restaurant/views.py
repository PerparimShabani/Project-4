from django.shortcuts import render, redirect
from .models import Restaurant, Reservations
from django.http import HttpResponse

def home(request):
    restaurants = Restaurant.objects.all()
    context = {'restaurants': restaurants}
   
    return render(request,'index.html',context)

 
def book_table(request, guests):
    restaurant = Restaurant.objects.first()

    if restaurant:
        if restaurant.available_seats >= guests:
            # Decrease available seats and save the restaurant
            restaurant.available_seats -= guests
            restaurant.save()

            # Create reservation
            reservation = Reservations.objects.create(restaurant=restaurant, guests=guests)

            print("Table booked for", guests, "guests")
            # Return the ID of the newly created reservation
            return HttpResponse(f"Table booked for {guests} guests. Reservation ID: {reservation.id}")
        else:
            print("Not enough available seats")
            return HttpResponse("Not enough available seats")
    else:
        print("No restaurant found")
        return HttpResponse("No restaurant found")

    # Redirect to home regardless of the outcome
    return redirect('home')

def unbook_table(request, id):
    restaurant = Restaurant.objects.first()
    try:
        # Retrieve the reservation by ID
        reservation = Reservations.objects.get(id=id)

        # Increase available seats in the restaurant
        restaurant = reservation.restaurant
        restaurant.available_seats += reservation.guests
        restaurant.save()
        reservation.delete() 
        print("Reservation canceled successfully")
        return HttpResponse("Reservation canceled successfully")
    except Reservations.DoesNotExist:
        print("Reservation not found")
        return HttpResponse("Reservation not found")
    except Exception as e:
        print("Error:", e)
        return HttpResponse("An error occurred while canceling the reservation")
        # Delete the reservation
    return redirect('home')
