import paho.mqtt.client as mqtt

client = mqtt.Client()
client.connect("broker.hivemq.com", 1883, 60)


while True:
    client.publish("dato/hugo", "99")
