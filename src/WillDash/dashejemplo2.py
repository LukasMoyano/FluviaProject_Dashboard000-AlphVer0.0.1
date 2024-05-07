from dash import Dash, html, dash_table
import pandas as pd

# Incorporate data
#df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv')
df = pd.read_csv('Datos_Streaming.csv')
# Initialize the app
app = Dash(__name__)

# App layout
app.layout = html.Div([
    html.Div(children='Sistema de Monitoreo'),
    dash_table.DataTable(data=df.to_dict('records'), page_size=8)
])

# Run the app
if __name__ == '__main__':
    app.run(debug=True)