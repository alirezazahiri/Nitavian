# Generated by Django 3.2.3 on 2021-06-10 07:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_auto_20210610_1133'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notifications',
            name='owner',
        ),
        migrations.AddField(
            model_name='notifications',
            name='user_id',
            field=models.IntegerField(default=0),
        ),
    ]
