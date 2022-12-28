from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from .models import Curs, Lections
from django.contrib.auth.models import User
from .serialazers import CursSerializer, LectionsSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.

class CursView (viewsets.ModelViewSet):
    def get_queryset(self):
        user_name = self.request.query_params.get('username', None)
        if user_name:
            return Curs.objects.filter(members__username=user_name).order_by('-date')
        return Curs.objects.all()
    serializer_class = CursSerializer

class CursViewChange (APIView):
    # permission_classes = [IsAuthenticatedOrReadOnly]
    def post(self, request, format=None):
        body = request.data
        curs_code = body.get('curs_code')
        user_name = body.get('user_name')
        flag = body.get('flag')
        curs = Curs.objects.filter(code=curs_code).first()
        if curs==None:
            return Response(status = status.HTTP_400_BAD_REQUEST)
        if (flag):
            curs.members.add(User.objects.filter(username=user_name).first())
        else:
            curs.members.remove(User.objects.filter(username=user_name).first())
        
        return Response(status = status.HTTP_200_OK)
    


class LectionsView (viewsets.ModelViewSet):
    def get_queryset(self):
        curs_id = self.request.query_params.get('curs_id', None)
        print(curs_id)
        if curs_id:
            return Lections.objects.filter(curs__id=curs_id).order_by('-date')
        return Lections.objects.all()
    serializer_class = LectionsSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['name'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# class UsersView (viewsets.ModelViewSet):
#     def get_queryset(self):
#         user_login = self.request.query_params.get('user_login', None)
#         if user_login:
#             return Users.objects.filter(login=user_login)
#         return Users.objects.all()
#     serializer_class = UsersSerializer