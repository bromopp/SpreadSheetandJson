import gspread
import json
from oauth2client.service_account import ServiceAccountCredentials
scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']

credentials = ServiceAccountCredentials.from_json_keyfile_name('TableJsonTest-0c7a0c96ed47.json', scope)

gc = gspread.authorize(credentials)

#La variable gsname indica el nombre del archivo de googlesheets 
gsname = 'Copy of Ejercicio obtener datos y convertir a json'

#La varibale sheet indica la tabla 
sheet = 'Datos'

#Se utiliza gspread para abrir la tabla
wks = gc.open(gsname).worksheet(sheet)

#Se obtienen los datos de la tabla en una lista de diccionarios
table = wks.get_all_records()

#Se crea el objeto a transformar en json
result ={
     sheet: table 
    }
#Convierte el objeto result en un archivo .json 
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=4)