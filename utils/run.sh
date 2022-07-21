#!/bin/sh

python manage.py collectstatic --noinput
python manage.py migrate
python manage.py update_index

gunicorn base.wsgi --bind=0.0.0.0:80 --timeout 10000 --workers 3
