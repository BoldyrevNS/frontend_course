from rest_framework import serializers
from MangaLib.models import Manga, UserMangas

class MangaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manga
        fields = '__all__'

class UserMangaSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMangas
        fields = '__all__'
    