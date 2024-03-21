from django.db import models

class Restaurant(models.Model):
    total_seats=models.IntegerField(default=40)
    available_seats=models.IntegerField(default=40)

class Reservations(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    guests = models.IntegerField()
    id = models.AutoField(primary_key=True)