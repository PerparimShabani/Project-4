from django.db import models

class Restaurant(models.Model):
    total_seats=models.IntegerField(default=40)
    available_seats=models.IntegerField(default=40)
