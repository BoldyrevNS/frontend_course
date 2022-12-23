from django.urls import include, path
from rest_framework.routers import DefaultRouter

from MangaLib.views import MangaViewSet, UserMangaViewSet


router = DefaultRouter()

router.register(r'manga', MangaViewSet, basename='Manga')
router.register(r'userManga', UserMangaViewSet, basename='UserManga')

urlpatterns = [
    path(r'', include(router.urls)),
]