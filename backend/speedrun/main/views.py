from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
from main.models import Game, Run, News
from main.serializers import (GameSerializer, RunSerializer, 
                                RunFullSerializer, NewsSerializer)


class GameViewSet(viewsets.ModelViewSet):
    serializer_class = GameSerializer
    queryset = Game.objects.all()


class RunViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        game_id = self.request.query_params.get('game_id', None)
        if game_id:
            return Run.objects.filter(game__id=game_id).order_by('hours', 'minutes', 'seconds')
        return Run.objects.all()
    
    def get_serializer_class(self):
        return RunSerializer

class HomeView(APIView):
    def get(self, request, format=None):
        qs = Run.objects.all().order_by('-data')
        if len(qs) > 18:
            return Response(RunFullSerializer(qs[:18], many=True).data)
        return Response(RunFullSerializer(qs, many=True).data)

class NewsViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return News.objects.all()
    def get_serializer_class(self):
        return NewsSerializer

    
