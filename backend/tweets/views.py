from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Tweet
from .serializer import TweetSerializer


class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects \
        .order_by('-created_at')
    serializer_class = TweetSerializer
    lookup_field = 'slug'
