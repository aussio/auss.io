# Generated by Django 3.0.4 on 2020-04-01 21:56

from django.db import migrations
import martor.models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20200331_0046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='content',
            field=martor.models.MartorField(),
        ),
    ]
