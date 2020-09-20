from django.contrib import admin
from django.db import models
from martor.widgets import AdminMartorWidget

from .models import Tweet


class TweetAdmin(admin.ModelAdmin):
    # Make all TextFields Markdown Fields
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget},
    }
    # ~~~~~~~~~~~~~~~~~~~ #
    #  EDIT PAGE OPTIONS  #
    # ~~~~~~~~~~~~~~~~~~~ #
    fieldsets = [
        ('Date Information', {'fields': [
         'created_at'], 'classes': ['collapse', 'wide']}),
        ('Tweet',
            {'fields':
                [
                'content', 'preview_link',
                'image_url', 'image_tag', 'slug'
                ]
            }),
    ]
    readonly_fields = ['created_at',
                       'preview_link',
                       'image_tag']

    # ~~~~~~~~~~~~~~~~~~~ #
    #  LIST VIEW OPTIONS  #
    # ~~~~~~~~~~~~~~~~~~~ #
    # Show all of the following fields in the list view.
    list_display = ('created_at', 'image_tag',
                    'content', 'preview_link')

    # Add a search bar at the top of the list view that will search the following fields.
    search_fields = ['content', 'slug']

    # Order the posts in the list view with most recently modified first.
    ordering = ['-created_at']


admin.site.register(Tweet, TweetAdmin)