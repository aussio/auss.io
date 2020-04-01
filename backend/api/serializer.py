from rest_framework import serializers
from .models import BlogPost


class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
