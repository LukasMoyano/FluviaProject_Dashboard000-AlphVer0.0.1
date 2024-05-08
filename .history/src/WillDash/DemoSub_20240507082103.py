# Importa la librería cliente MQTT de paho-mqtt
import paho.mqtt.client as mqtt

# Importa librerías para trabajar con JSON y CSV
import json
import csv

# Importa la librería datetime para trabajar con fechas y horas
from datetime import datetime

# Define el broker MQTT y el tema y la subsicripcion
MQTT_BROKER = "broker.hivemq.com"
MQTT_TOPIC = "datos/uni/"

# Variable contador para escribir el encabezado del CSV 
contador = 0

# Bandera para controlar la escritura del encabezado
bandera = True

# Encabezado CSV para los datos
header = ['Fecha', 'Humedad', 'Temperatura']

# Escribe el encabezado al archivo CSV solo en la primera ejecución (inicialización)
contador += 1
if contador == 1:
    with open("Datos_Streaming.csv", "a") as f:  # Abre el archivo en modo append
        writer = csv.writer(f, delimiter=",")
        writer.writerow(header)  # Escribe el encabezado
        bandera = False  # Indica que ya se escribió el encabezado

# Función para manejar eventos de conexión
def on_connect(client, userdata, flags, rc):
    print("Se conecto con mqtt " + str(MQTT_BROKER))  # Imprime confirmación de conexión
    client.subscribe(MQTT_TOPIC)  # Se suscribe al tema especificado

# Función para manejar mensajes entrantes
def on_message(client, userdata, msg):
    if msg.topic == MQTT_TOPIC:  # Comprueba si el tema del mensaje coincide con el suscrito
        print(f"Datos: {str(msg.payload)}")  # Imprime los datos en bruto

        # Convierte la carga útil JSON a un diccionario
        dato = json.loads(msg.payload)

        # Extrae los valores de humedad y temperatura
        humidity = float(dato["Humedad"])
        temperature = float(dato["Temperatura"])

        # Obtiene la fecha y hora actual en una cadena formateada
        now = datetime.now()
        dt_string = now.strftime("%Y-%m-%d %H:%M:%S")

        # Imprime datos formateados para depuración
        print(dt_string, humidity, temperature)

        # Escribe los datos al archivo CSV
        with open("Datos_Streaming.csv", "a") as f:  # Abre el archivo en modo append
            writer = csv.writer(f, delimiter=",")
            writer.writerow([dt_string, humidity, temperature])  # Escribe los datos a una fila

# Crea una instancia del cliente MQTT
client = mqtt.Client()

# Asigna funciones de callback para eventos de conexión y mensaje
client.on_connect = on_connect
client.on_message = on_message

# Conecta al broker MQTT (ajustar puerto si es necesario)
client.connect(MQTT_BROKER, 1883, 60)  # Puerto 1883 es el predeterminado para MQTT

# Mantén el cliente en ejecución en un bucle para procesar mensajes entrantes
client.loop_forever()