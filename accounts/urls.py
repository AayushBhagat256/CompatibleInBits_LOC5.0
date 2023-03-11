from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from rest_framework_simplejwt import views as jwt_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('register/', views.UserRegistration.as_view(), name='register'),
    path('login/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/',views.ProfileView.as_view(), name='profile'),
    path('domain/',views.DomainView.as_view(), name='domain'),
    path('images/',views.ImageAlbumView.as_view(), name='domain'),
    path('domainspecific/<str:name>/',views.ParticularDomainView.as_view(), name='specificdomain'),
    path('reviews/',views.Reviewview.as_view(), name='review'),
]


urlpatterns = format_suffix_patterns(urlpatterns)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)