# Generated by Django 4.1.3 on 2022-12-28 20:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=50, unique=True)),
                ('email', models.CharField(max_length=50, unique=True)),
                ('phone_number', models.CharField(max_length=50)),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
                ('last_login', models.DateTimeField(auto_now_add=True)),
                ('is_recruiter', models.BooleanField(default=False)),
                ('is_seeker', models.BooleanField(default=False)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=False)),
                ('is_superadmin', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=30, null=True)),
                ('profile_picture', models.ImageField(blank=True, upload_to='userprofile')),
                ('bio', models.TextField(blank=True, max_length=500, null=True)),
                ('resume', models.FileField(blank=True, null=True, upload_to='resume')),
                ('skill', models.CharField(blank=True, max_length=30, null=True)),
                ('desired_job', models.CharField(blank=True, max_length=30, null=True)),
                ('desired_location', models.CharField(blank=True, max_length=30, null=True)),
                ('degree', models.CharField(blank=True, max_length=30, null=True)),
                ('college', models.CharField(blank=True, max_length=50, null=True)),
                ('joining_year', models.IntegerField(blank=True, null=True)),
                ('passout_year', models.IntegerField(blank=True, null=True)),
                ('designation', models.CharField(blank=True, max_length=30, null=True)),
                ('company', models.CharField(blank=True, max_length=30, null=True)),
                ('start', models.IntegerField(blank=True, null=True)),
                ('end', models.IntegerField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('percentage', models.IntegerField(blank=True, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RecruiterProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.CharField(max_length=30)),
                ('recruiter_bio', models.TextField(max_length=255)),
                ('location', models.CharField(max_length=30)),
                ('company_name', models.CharField(max_length=30)),
                ('company_website', models.CharField(max_length=30)),
                ('company_email', models.EmailField(max_length=30, unique=True)),
                ('company_mobile', models.CharField(max_length=10, unique=True)),
                ('company_address_line1', models.CharField(max_length=30)),
                ('company_address_line2', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
