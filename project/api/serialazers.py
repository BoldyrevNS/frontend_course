from rest_framework import serializers
from .models import Curs, Lections
from django.contrib.auth.models import User

class CursSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curs
        fields = '__all__'

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class LectionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lections
        fields = '__all__'