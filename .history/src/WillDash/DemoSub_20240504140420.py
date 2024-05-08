import paho.mqtt.client as mqtt
import json
import csv
from datetime import datetime

# Define MQTT broker and topic details
MQTT_BROKER = "broker.hivemq.com"
MQTT_TOPIC = "datos/uni/"

# Counter variable for header writing (explained later)
contador = 0

# Flag to control header writing (explained later)
bandera = True

# CSV header for data
header = ['Fecha', 'Humedad', 'Temperatura']

# Write header to CSV file only on the first run (initialization)
contador += 1
if contador == 1:
    with open("Datos_Streaming.csv", "a") as f:
        writer = csv.writer(f, delimiter=",")
        writer.writerow(header)
        bandera = False

# Function to handle connection events
def on_connect(client, userdata, flags, rc):
    print("Se conecto con mqtt " + str(MQTT_BROKER))  # Print connection confirmation
    client.subscribe(MQTT_TOPIC)  # Subscribe to the specified topic

# Function to handle incoming messages
def on_message(client, userdata, msg):
    if msg.topic == MQTT_TOPIC:  # Check if message matches subscribed topic
        print(f"Datos: {str(msg.payload)}")  # Print raw data

        # Convert JSON payload to a dictionary
        dato = json.loads(msg.payload)

        # Extract humidity and temperature values
        humidity = float(dato["Humedad"])
        temperature = float(dato["Temperatura"])

        # Get current date and time in a formatted string
        now = datetime.now()
        dt_string = now.strftime("%Y-%m-%d %H:%M:%S")

        # Print formatted data for debugging
        print(dt_string, humidity, temperature)

        # Write data to CSV file
        with open("Datos_Streaming.csv", "a") as f:
            writer = csv.writer(f, delimiter=",")
            writer.writerow([dt_string, humidity, temperature])

# Create an MQTT client instance
client = mqtt.Client()

# Assign callback functions for connection and message events
client.on_connect = on_connect
client.on_message = on_message

# Connect to the MQTT broker
client.connect(MQTT_BROKER, 1883, 60)  # Use port 1883 (default for MQTT)

# Keep the client running in a loop to process incoming messages
client.loop_forever()
