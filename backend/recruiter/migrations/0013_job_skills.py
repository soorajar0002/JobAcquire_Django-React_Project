# Generated by Django 4.1.4 on 2023-01-22 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recruiter', '0012_alter_jobapplication_recruiter'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='skills',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]