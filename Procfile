release: python manage.py migrate --settings=backend.settings.production
web: gunicorn --env DJANGO_SETTINGS_MODULE=backend.settings.production backend.wsgi --log-file -