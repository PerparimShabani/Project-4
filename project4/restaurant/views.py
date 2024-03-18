from django.shortcuts import render, redirect
from .models import Restaurant 


def home(request):
    restaurants = Restaurant.objects.all()
    context = {'restaurants': restaurants}
   
    return render(request,'restaurant/index.html',context)

def book_table(request, guests):
    restaurant = Restaurant.objects.first()
    if restaurant:
        if restaurant.available_seats >= guests:
            restaurant.available_seats -= guests
            restaurant.save()
    print ("Table booked for", guests, "guests")
    return redirect('home')

def unbook_table(request, guests):
    restaurant = Restaurant.objects.first()
    if restaurant:
        if restaurant.available_seats >= guests:
            restaurant.available_seats += guests
            restaurant.save()
    print ("Table unbooked for", guests, "guests")
    return redirect('home')
