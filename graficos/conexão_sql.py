from sqlalchemy import create_engine
import pandas as pd
from urllib.parse import quote

# Configuração do banco de dados
# Substitua os valores abaixo pelas informações do seu banco de dados
DATABASE_DIALECT = "postgresql+psycopg2"  # Dialeto do banco (PostgreSQL, MySQL, etc.)
USERNAME = "postgres"  # Seu nome de usuário do banco
PASSWORD = quote ("Mepf@2002")  # Sua senha do banco
HOST = "localhost"  # Endereço do servidor (localhost, IP ou domínio)
PORT = "5432"  # Porta do banco (5432 é a padrão do PostgreSQL)
DATABASE_NAME = "postgres"  # Nome do banco de dados

# Criando a string de conexão
connection_string = f"postgresql+psycopg2://{USERNAME}:{PASSWORD}@{HOST}:{PORT}/{DATABASE_NAME}?client_encoding=utf8"
engine = create_engine(connection_string)

# Query para buscar os dados
# Substitua "tabela_exemplo", "categoria" e "valor" pelos nomes reais das suas tabelas e colunas
query = "SELECT cpf, ticket_medio FROM clientes where ticket_medio is not null LIMIT 5"
df = pd.read_sql(query, engine)

# Visualize os dados para garantir que a conexão funcionou
print(df.head())

import plotly.express as px
import pandas as pd

# Gráfico de Pizza
fig_pizza = px.pie(df, names='cpf', values='ticket_medio', title="Gráfico de Pizza")
fig_pizza.write_html("grafico_pizza.html")

# Gráfico de Barras
fig_barras = px.bar(df, x='cpf', y='ticket_medio', title="Gráfico de Barras")
fig_barras.write_html("grafico_barras.html")

# Gráfico de Linhas
fig_linhas = px.line(df, x='cpf', y='ticket_medio', title="Gráfico de Linhas")
fig_linhas.write_html("grafico_linhas.html")  
