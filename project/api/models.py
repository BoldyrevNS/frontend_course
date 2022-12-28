from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import string
import random

today = timezone.now

def generate_code():
    length = 8

    while True:
        ucode = "".join(random.choices(string.ascii_uppercase, k=length))
        if Curs.objects.filter(code = ucode).count() == 0:
            break
    return ucode

# Create your models here.

class Curs(models.Model):
    code = models.CharField(max_length=8, unique=True, null=False)
    name = models.CharField(max_length=100, default="name")
    descr = models.TextField()
    members = models.ManyToManyField(User, related_name='curs_members')
    author = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username', default='admin', related_name='curs_author')
    preview_img = models.URLField(max_length=500, default='https://img.lovepik.com/original_origin_pic/19/01/08/5016ef557fa043da01371d7a86300fa3.png_wh860.png')
    main_img = models.URLField(max_length=500, default='https://thumbs.dreamstime.com/b/programaci%C3%B3n-codificaci%C3%B3n-de-concepto-plano-54998068.jpg')
    date = models.DateField(null=False, auto_now_add=True)


class Lections(models.Model):
    name = models.CharField(max_length=100, default="name")
    text = models.TextField()
    date = models.DateField(null=False, auto_now_add=True)
    curs = models.ForeignKey(Curs, on_delete=models.CASCADE, to_field='code', default='AAAAAAAA')



