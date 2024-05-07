# Import packages
from dash import Dash, html, dash_table, dcc
import pandas as pd
import plotly.express as px

# Incorporate data
#df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv')
df = pd.read_csv('Datos_Streaming.csv')
# Initialize the app
app = Dash(__name__)

# App layout
app.layout = html.Div([
    html.Div(children='Datos Sensores'),
    dash_table.DataTable(data=df.to_dict('records'), page_size=10),
    dcc.Graph(figure=px.histogram(df, x='Fecha', y='Temperatura', histfunc='avg')),
    dcc.Graph(figure=px.line(df,x='Fecha', y='Temperatura')),
    dcc.Graph(figure=px.line(df,x='Fecha', y='Humedad')),
    
    
])

# Run the app
if __name__ == '__main__':
    app.run(debug=True)