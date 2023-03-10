# Generated by Django 4.1.3 on 2023-01-02 12:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0006_recruiterprofile_profile_picture'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=30)),
                ('vacancies', models.IntegerField(blank=True, null=True)),
                ('location', models.CharField(max_length=30)),
                ('recruiter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.recruiterprofile', unique=True)),
            ],
        ),
    ]
