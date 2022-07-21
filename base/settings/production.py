from .base import *

try:
    from .local import *
except ImportError:
    pass

SECRET_KEY = os.getenv('CR_SECRET_KEY', ImproperlyConfigured('CR_SECRET_KEY not set'))

hosts = os.getenv('CR_HOSTS', ImproperlyConfigured('CR_HOSTS not set'))
try:
    ALLOWED_HOSTS = str(hosts).split(',')
except Exception as e:
    raise ImproperlyConfigured('CR_HOSTS could not be parsed. {}'.format(e))


# Production security settings
SECURE_BROWSER_XSS_FILTER = True
X_FRAME_OPTIONS = 'DENY'
SECURE_SSL_REDIRECT = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_REFERRER_POLICY = 'same-origin'
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
