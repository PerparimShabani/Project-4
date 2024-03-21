from django.db import models
from django.db.models.signals import post_migrate
from django.dispatch import receiver

class Restaurant(models.Model):
    total_seats=models.IntegerField(default=40)
    available_seats=models.IntegerField(default=40)

class Reservations(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    guests = models.IntegerField()
    id = models.AutoField(primary_key=True)
    
@receiver(post_migrate)
def create_restaurant(sender, **kwargs):
    if sender.name == 'your_app_name' and Restaurant.objects.count() == 0:
        Restaurant.objects.create(name="Restaurant")