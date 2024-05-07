from dash import Dash, html, dash_table, dcc
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

# Incorporate data
df = pd.read_csv('Datos_Streaming.csv')


# Initialize the app
app = Dash(__name__)

# App layout
app.layout = html.Div([
    html.Div(children='Datos Sensores'),
    dash_table.DataTable(data=df.to_dict('records'), page_size=10),
    dcc.Graph(figure=px.line(df, x='Fecha', y='Temperatura')),
    dcc.Graph(figure=px.line(df, x='Fecha', y='Humedad')),
    
    dcc.Graph(figure=go.Figure(go.Indicator(
        mode="gauge+number",
        value=df['Temperatura'].mean(),
        title={'text': "Temperatura "},
        gauge={'axis': {'range': [None, 40]},
               'bar': {'color': "darkblue"},
               'bgcolor': "white"}
    ))),
    
    dcc.Graph(figure=go.Figure(go.Indicator(
        mode="gauge+number",
        value=df['Humedad'].mean(),
        title={'text': "Humedad"},
        gauge={'axis': {'range': [None, 40]},
               'bar': {'color': "darkblue"},
               'bgcolor': "white"}
    )))
])

# Run the app
if __name__ == '__main__':
    app.run(debug=True)