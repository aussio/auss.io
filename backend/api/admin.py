from django.contrib import admin
from .models import BlogPost


class BlogPostAdmin(admin.ModelAdmin):
    # ~~~~~~~~~~~~~~~~~~~ #
    #  EDIT PAGE OPTIONS  #
    # ~~~~~~~~~~~~~~~~~~~ #
    fieldsets = [
        ('Date Information', {'fields': [
         'created_at', 'last_modified'], 'classes': ['collapse', 'wide']}),
        ('Blog Post', {'fields': [
         'title', 'slug', 'header_image_url', 'image_tag', 'is_draft', 'content'],
            'classes': ['wide']}),
    ]
    readonly_fields = ['created_at', 'last_modified', 'slug', 'image_tag']

    # ~~~~~~~~~~~~~~~~~~~ #
    #  LIST VIEW OPTIONS  #
    # ~~~~~~~~~~~~~~~~~~~ #
    # Show all of the following fields in the list view.
    list_display = ('last_modified', 'image_tag', 'title', 'slug', 'is_draft')

    # Add a search bar at the top of the list view that will search the following fields.
    search_fields = ['title', 'content']

    # Order the posts in the list view with most recently modified first.
    ordering = ['-last_modified']


admin.site.register(BlogPost, BlogPostAdmin)
