# Generated by Django 4.1.3 on 2023-01-06 04:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recruiter', '0007_jobapplication'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobapplication',
            name='status',
            field=models.CharField(default='PENDING', max_length=30),
        ),
    ]