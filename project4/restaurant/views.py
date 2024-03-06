from django.shortcuts import render, redirect
from .models import Restaurant 


def home(request):
    restaurants = Restaurant.objects.all()
    context = {'restaurants': restaurants}
   
    return render(request,'restaurant/home.html',context)

def book_table(request, restaurant_id, guests):
    restaurant = Restaurant.objects.get(id=restaurant_id)
    if restaurant.available_seats >= guests:
        restaurant.available_seats -= guests
        restaurant.save()
    return redirect('home')

        
