# Generated by Django 5.0.3 on 2024-03-21 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_reservations'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservations',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
