from django.urls import include, path
from rest_framework.routers import DefaultRouter

from main.views import GameViewSet, RunViewSet, HomeView, NewsViewSet


router = DefaultRouter()

router.register(r'games', GameViewSet, basename='Game')
router.register(r'runs', RunViewSet, basename='Run')
router.register(r'news', NewsViewSet, basename='News')


urlpatterns = [
    path(r'', include(router.urls)),
    path('home/', HomeView.as_view(), name='Home')
]
