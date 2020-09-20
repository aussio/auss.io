import datetime
from django.db import models
from django.utils import timezone
from django.utils.html import mark_safe
from django.utils.text import slugify
from django.conf import settings

from martor.models import MartorField
from martor.utils import markdownify


class Tweet(models.Model):
    image_url = models.URLField(blank=True)
    content = MartorField(max_length=500, blank=False)
    html_content = models.TextField(default="")
    created_at = models.DateTimeField(editable=False)
    last_modified = models.DateTimeField(editable=False)
    slug = models.SlugField(unique=True, blank=False)

    def __str__(self):
        return self.slug

    def is_recently_published(self):
        return not self.is_draft and \
            self.updated_at >= timezone.now() - datetime.timedelta(days=7)

    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''

        if not self.id:
            self.created_at = timezone.now()
        self.last_modified = timezone.now()

        # These are in separate fields intentionally.
        # `content` is the raw content of the post and what is used in the admin's preview.
        # `html_content` is what is used on the frontend. This keeps the frontend and backend Markdown flavors in sync.
        # This is great since the django-markdown-editor supports lots of markdown plugins and react-markdown does not.
        self.html_content = markdownify(self.content)

        return super(Tweet, self).save(*args, **kwargs)

    def image_tag(self):
        return mark_safe(f'<img src="{self.image_url}" width="150" height="150" />')

    def preview_link(self):
        return mark_safe(f'<a href="{settings.HOSTNAME}/tweets/{self.slug}">{settings.HOSTNAME}/tweets/{self.slug}<a/>')
