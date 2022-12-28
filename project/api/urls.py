
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import CursView, LectionsView, CursViewChange

router = DefaultRouter()

router.register(r'curs', CursView, basename='curs')
router.register(r'lections', LectionsView, basename='lections')


urlpatterns = [
    path(r'', include(router.urls)),
    path('cursset/', CursViewChange.as_view(), name='cursset')
]