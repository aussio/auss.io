pipenv:
	-pipenv shell

local: pipenv
	heroku local -f Procfile.local

migrate: pipenv
	python manage.py makemigrations
	python manage.py migrate