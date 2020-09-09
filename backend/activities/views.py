from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Activity
from .serializer import ActivitySerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects \
        .order_by('-created_at')
    serializer_class = ActivitySerializer
    lookup_field = 'slug'
