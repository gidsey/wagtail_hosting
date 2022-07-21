#!/bin/sh

echo 'Starting server'
python manage.py runserver 0.0.0.0:80 --settings="$DJANGO_SETTINGS_MODULE"
