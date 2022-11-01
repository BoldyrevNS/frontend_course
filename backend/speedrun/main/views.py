from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from main.models import Game, Run
from main.serializers import GameSerializer, RunSerializer, RunFullSerializer


class GameViewSet(viewsets.ModelViewSet):
    serializer_class = GameSerializer
    queryset = Game.objects.all()


class RunViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        is_home = self.request.query_params.get('home', None)
        if is_home:
            return Run.objects.all().order_by('data')
        return Run.objects.all()
    
    def get_serializer_class(self):
        is_home = self.request.query_params.get('home', None)
        if is_home:
            return RunFullSerializer
        return RunSerializer

    
