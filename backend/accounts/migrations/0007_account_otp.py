# Generated by Django 4.1.3 on 2023-01-09 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_recruiterprofile_profile_picture'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='otp',
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]
