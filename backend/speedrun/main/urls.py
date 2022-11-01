from django.urls import include, path
from rest_framework.routers import DefaultRouter

from main.views import GameViewSet, RunViewSet


router = DefaultRouter()

router.register(r'games', GameViewSet, basename='Game')
router.register(r'runs', RunViewSet, basename='Run')


urlpatterns = [
    path(r'', include(router.urls)),
]
