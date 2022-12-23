import django
from django.db import models
from django.utils import timezone
import django.contrib.auth.models
from django.db import models

today = timezone.now

class Manga(models.Model):
    img = models.URLField(max_length=500)
    name_ru = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)
    info = models.TextField()
    type = models.CharField(max_length=255)
    release_format = models.CharField(max_length=255)
    release_year = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    publishing = models.CharField(max_length=255)

class UserMangas(models.Model):
    user_id = models.ForeignKey(django.contrib.auth.models.User, on_delete=models.CASCADE)
    manga_id = models.ForeignKey(Manga, on_delete=models.CASCADE, null = True)