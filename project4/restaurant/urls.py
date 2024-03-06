from . import views
from django.urls import path
from .views import book_table

urlpatterns = [
    path("", views.home, name="home"),
    path('book/<int:restaurant_id>/<int:guests>/', book_table, name='book_table'),
]

