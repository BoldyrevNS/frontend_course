from django.db import models
from django.utils import timezone

today = timezone.now

class Game(models.Model):
    name = models.CharField(max_length=255)
    img = models.URLField(max_length=500)
    publisher = models.CharField(max_length=255)
    developer = models.CharField(max_length=255)
    rule = models.TextField()

class Run(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE, default=1)
    data = models.DateField(default=today)
    hours = models.PositiveIntegerField(default=0)
    minutes = models.PositiveIntegerField(default=0)
    seconds = models.PositiveIntegerField(default=0)
    video = models.CharField(max_length=500)
    userName = models.CharField(max_length=100)

class News(models.Model):
    header = models.CharField(max_length=100)
    preview = models.CharField(max_length=255)
    img = models.URLField(max_length=500, null=True)
    text = models.TextField()
    date = models.DateField(default=today)
