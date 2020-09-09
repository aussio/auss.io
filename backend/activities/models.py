from django.db import models
from django.utils.html import mark_safe
from django.conf import settings
from django.utils import timezone
from django.utils.text import slugify

from martor.models import MartorField
from martor.utils import markdownify


class Activity(models.Model):
    title = models.CharField(max_length=50, blank=False)
    image_url = models.URLField()
    description = MartorField()
    html_description = models.TextField(default="")
    created_at = models.DateTimeField(editable=False)
    slug = models.SlugField(unique=True, blank=True, editable=False)

    class Meta:
        verbose_name_plural = "Activities"


    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)

        if not self.id:
            self.created_at = timezone.now()
        # These are in separate fields intentionally.
        # `description` is the raw content of the activity and what is used in the admin's preview.
        # `html_description` is what is used on the frontend. This keeps the frontend and backend Markdown flavors in sync.
        # This is great since the django-markdown-editor supports lots of markdown plugins and react-markdown does not.
        self.html_description = markdownify(self.description)
        return super(Activity, self).save(*args, **kwargs)

    def image_tag(self):
        return mark_safe(f'<img src="{self.image_url}" width="150" height="150" />')

    def preview_link(self):
        return mark_safe(f'<a href="{settings.HOSTNAME}/blog/{self.slug}">{settings.HOSTNAME}/blog/{self.slug}<a/>')
