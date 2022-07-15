#Initial configuration
LoadModule headers_module modules/mod_headers.so
LoadModule rewrite_module modules/mod_rewrite.so
variáveis de ambiente path C:\Sistemas\instantclient;C:\Program Files\VertrigoServ\Php;
liberar permissão de acesso à pasta { Todos: permissão total }

--

#Install Composer
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

--

#Require JWT vendor
php composer.phar require firebase/php-jwt

--

#Certificate for the CA (Certification authority) -> cacert.pem

#Generating an RSA Private Key Using OpenSSL
openssl genrsa -out private-key.pem 3072

#Creating an RSA Public Key from a Private Key Using OpenSSL
openssl rsa -in private-key.pem -pubout -out public-key.pem

#Optional Creating an RSA Self-Signed Certificate Using OpenSSL
openssl req -new -x509 -key private-key.pem -out cacert.pem -days 360

#Creating a password for the PFX file
openssl pkcs12 -export -inkey private-key.pem -in cacert.pem -out cacert.pfx

--

#Set variables
-src/logic/Authorization.php->$_JWT_ACCESS_KEY;
-src/logic/JWT.php->$publicKey;
-src/logic/JWT.php->$privateKey;