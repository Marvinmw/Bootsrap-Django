# app/urls.py

from django.conf.urls import url

from app import views

urlpatterns = [
  url(r'^imageprocess/$',views.imageprocess,name='imageprocess'),
  url(r'^dealimg/$',views.dealimg,name='dealimg'),

]