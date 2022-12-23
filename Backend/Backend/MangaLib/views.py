from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
from MangaLib.models import Manga, UserMangas
from MangaLib.serializers import (MangaSerializer, UserMangaSerializer)
from rest_framework.decorators import action


class MangaViewSet(viewsets.ModelViewSet):
    serializer_class = MangaSerializer
    queryset = Manga.objects.all()

class UserMangaViewSet(viewsets.ModelViewSet):
    serializer_class = UserMangaSerializer
    queryset = UserMangas.objects.all()

    def get_queryset(self):
        user = self.request.query_params.get("user", None)
        if user is not None:
            return UserMangas.objects.filter(user_id = user)
        return UserMangas.objects.all()

    @action(detail=False, methods=['get'])
    def check_manga(self, request):
        user_id = request.query_params.get('user_id', None) 
        manga_id = request.query_params.get('manga_id', None) 
        if UserMangas.objects.filter(user_id = user_id, manga_id = manga_id).count() == 0:
            return Response({'res':False}) 
        return Response({'res':True})
    
    @action(detail=False, methods=['get'])
    def get_mangas(self, request):
        user_id = request.query_params.get('user_id', None) 
        manga_id_list = UserMangas.objects.filter(user_id = user_id).values_list('manga_id')
        mangas = Manga.objects.filter(id__in = manga_id_list)
        return Response(MangaSerializer(mangas, many = True).data)