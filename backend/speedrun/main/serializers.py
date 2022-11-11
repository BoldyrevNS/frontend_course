from rest_framework import serializers
from main.models import Game, Run, News


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'


class RunSerializer(serializers.ModelSerializer):
    class Meta:
        model = Run
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'


class RunFullSerializer(serializers.ModelSerializer):
    game_id = serializers.IntegerField(source='game.id')
    game_name = serializers.CharField(source='game.name')
    img = serializers.CharField(source='game.img')
    class Meta:
        model = Run
        fields = ['id', 'hours', 'minutes', 'seconds', 'userName', 'game_id', 'game_name', 'img', 'video']
