# Generated by Django 3.2.13 on 2022-06-01 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='test',
            field=models.IntegerField(default=0),
        ),
    ]
