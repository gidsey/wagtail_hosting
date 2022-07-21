# Use an official Python runtime based on Debian 10 "buster" as a parent image.
FROM python:3.10-slim-buster

# Create and set the directory where the source code is stored.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Set environment variables. Note language set to en-GB.
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV LANG en_GB.UTF-8
ENV PYTHONIOENCODING utf_8

# Install system packages required by Wagtail, Django and Psycopg2.
RUN apt-get update --yes --quiet && apt-get install --yes --quiet --no-install-recommends \
    build-essential \
    libpq-dev \
    libmariadbclient-dev \
    libjpeg62-turbo-dev \
    zlib1g-dev \
    libwebp-dev \
    python-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy the source code and install dependencies
COPY Pipfile Pipfile.lock /usr/src/app/
RUN pip install --upgrade pip
RUN pip install pipenv && pipenv install --system
