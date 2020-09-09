from rest_framework import serializers
from .models import Activity


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
