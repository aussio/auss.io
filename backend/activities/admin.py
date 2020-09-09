from django.contrib import admin
from django.db import models
from martor.widgets import AdminMartorWidget

from .models import Activity


class ActivityAdmin(admin.ModelAdmin):
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
        ('Activity', {'fields': [
         'title', 'preview_link',
         'image_url', 'image_tag',
         'description'],
            'classes': ['wide']}),
    ]
    readonly_fields = ['created_at',
                       'preview_link',
                       'image_tag']

    # ~~~~~~~~~~~~~~~~~~~ #
    #  LIST VIEW OPTIONS  #
    # ~~~~~~~~~~~~~~~~~~~ #
    # Show all of the following fields in the list view.
    list_display = ('created_at', 'image_tag',
                    'title', 'preview_link')

    # Add a search bar at the top of the list view that will search the following fields.
    search_fields = ['title', 'description']

    # Order the posts in the list view with most recently modified first.
    ordering = ['-created_at']


admin.site.register(Activity, ActivityAdmin)
