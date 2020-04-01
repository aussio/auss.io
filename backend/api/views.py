from rest_framework import viewsets
from .models import BlogPost
from .serializer import BlogPostSerializer


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects \
        .filter(is_draft=False) \
        .order_by('-last_modified')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
