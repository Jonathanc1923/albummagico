# Usa una imagen base de PHP con Apache
FROM php:8.1-apache

# Copia los archivos de tu proyecto al directorio de Apache
COPY . /var/www/html/

# Establece los permisos correctos
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expon el puerto 80 para el tráfico web
EXPOSE 80

# Habilita módulos adicionales si es necesario
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
