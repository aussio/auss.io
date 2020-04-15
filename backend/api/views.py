from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import BlogPost
from .serializer import BlogPostSerializer


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects \
        .filter(is_draft=False) \
        .order_by('-last_modified')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'

    def retrieve(self, request, slug=''):
        ''' Return BlogPost regardless of Draft state. If you know the URL, you can read the draft.
        '''
        queryset = BlogPost.objects.all()
        post = get_object_or_404(queryset, slug=slug)
        serializer = BlogPostSerializer(post, context={'request': request})
        return Response(serializer.data)
