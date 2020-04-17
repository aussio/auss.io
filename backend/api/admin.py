from django.contrib import admin
from django.db import models
from martor.widgets import AdminMartorWidget

from .models import BlogPost


class BlogPostAdmin(admin.ModelAdmin):
    # Make all TextFields Markdown Fields
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget},
    }
    # ~~~~~~~~~~~~~~~~~~~ #
    #  EDIT PAGE OPTIONS  #
    # ~~~~~~~~~~~~~~~~~~~ #
    fieldsets = [
        ('Date Information', {'fields': [
         'created_at', 'last_modified'], 'classes': ['collapse', 'wide']}),
        ('Blog Post', {'fields': [
         'title', 'preview_link',
         'header_image_url', 'header_image_tag',
         'header_image_url_wide', 'header_image_tag_wide',
         'is_draft', 'content'],
            'classes': ['wide']}),
    ]
    readonly_fields = ['created_at',
                       'last_modified',
                       'preview_link',
                       'header_image_tag',
                       'header_image_tag_wide']

    # ~~~~~~~~~~~~~~~~~~~ #
    #  LIST VIEW OPTIONS  #
    # ~~~~~~~~~~~~~~~~~~~ #
    # Show all of the following fields in the list view.
    list_display = ('last_modified', 'header_image_tag',
                    'title', 'preview_link', 'is_draft')

    # Add a search bar at the top of the list view that will search the following fields.
    search_fields = ['title', 'content']

    # Order the posts in the list view with most recently modified first.
    ordering = ['-last_modified']


admin.site.register(BlogPost, BlogPostAdmin)
