local:
	heroku local -f Procfile.local

migrate:
	python manage.py makemigrations
	python manage.py migrate
