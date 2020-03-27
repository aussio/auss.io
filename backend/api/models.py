import datetime
from django.db import models
from django.utils import timezone
from django.utils.html import mark_safe


class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    header_image_url = models.URLField()
    content = models.TextField()
    is_draft = models.BooleanField(default=True)
    created_at = models.DateTimeField(editable=False)
    last_modified = models.DateTimeField()

    def __str__(self):
        return self.title

    def is_recently_published(self):
        return not self.is_draft and \
            self.updated_at >= timezone.now() - datetime.timedelta(days=7)

    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created_at = timezone.now()
        self.last_modified = timezone.now()
        return super(BlogPost, self).save(*args, **kwargs)

    def image_tag(self):
        return mark_safe(f'<img src="{self.header_image_url}" width="150" height="150" />')
