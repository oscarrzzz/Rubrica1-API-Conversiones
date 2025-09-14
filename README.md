API de Conversiones
Esta API permite realizar conversiones entre diferentes unidades usando Node.js y Express.js.  

Endpoints disponibles

- Celsius → Fahrenheit 
  `GET /convert/celsius-to-fahrenheit/:valor`  
  Ejemplo: `/convert/celsius-to-fahrenheit/30` → `{ "celsius": 30, "fahrenheit": 86 }`

- Fahrenheit → Celsius 
  `GET /convert/fahrenheit-to-celsius/:valor`  
  Ejemplo: `/convert/fahrenheit-to-celsius/86` → `{ "fahrenheit": 86, "celsius": 30 }`

- Kilómetros → Millas
  `GET /convert/km-to-miles/:valor`  
  Ejemplo: `/convert/km-to-miles/10` → `{ "km": 10, "millas": 6.21371 }`
