from rest_framework import serializers
from .models import Tweet


class TweetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tweet
        fields = '__all__'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }