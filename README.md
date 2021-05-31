## API Clima - (console).

Este enfoque de consola consume servicios de apis externas como:

>Referencia: [link Geolocation](https://developers.google.com/maps/documentation?hl=es_419).
>Referencia: [link Map Weather](https://openweathermap.org/).

**Comandos**
-Para obtener el clima por lugar: `node index.js -a "Arequipa, Peru"`. 
-Para obtener el clima ya sea por grados Celcius, Fahrenheit  o Kelvin: `node index.js -a "Arequipa, Peru" -u far|cel|kel`.

*Nota*:Por defecto arrojara `El clima de la direccion AREQUIPA, PERU es de 292.42` mostrando un mensaje de la direccion y ademas los grados en *Kelvin*
