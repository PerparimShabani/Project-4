from . import views
from django.urls import path
from .views import book_table, unbook_table, home

urlpatterns = [
    path("", home, name="home"),
    path('book/<int:guests>/', book_table, name='book_table'),
    path('unbook/<int:guests>/', unbook_table, name='unbook_table'),
]

