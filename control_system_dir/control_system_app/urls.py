from django.urls import path

from . import views
from django.conf.urls import url
from django.conf import settings
from django.views.static import serve
import os
from django.views.generic.base import RedirectView
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt

favicon_view = RedirectView.as_view(url=os.path.join(settings.STATIC_URL, 'favicon.ico'), permanent=True)


urlpatterns = [
    path('favicon.ico', favicon_view),

    path('', views.index, name='login'),
    path('about', views.index),

    # GraphQL
    url(r'^graphql', csrf_exempt(GraphQLView.as_view(graphiql=True))),

    # DJANGO folders
    url(r'^static/(?P<path>.*)$', serve,
        {'document_root': settings.STATIC_ROOT}),
    url(r'^media/(?P<path>.*)$', serve,
        {'document_root': settings.MEDIA_ROOT}),

    # Vue.js folders
    url(r'^media/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'media')}),
    url(r'^img/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'img')}),
    url(r'^js/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'js')}),
    url(r'^css/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'css')}),
    url(r'^fonts/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'fonts')}),
]
