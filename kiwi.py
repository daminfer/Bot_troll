import sys
import requests
import datetime
from textwrap import fill
from PIL import Image, ImageDraw, ImageFont
# Piste d'amélioration:
# - Modifier le programme pour prendre en compte les autres formats que PNG.


### INFORMATION DE LA CARTE: ###

# Génération des dates: 
date = datetime.date.today()
date1 = "{}/{}/{}".format(date.day, date.month, date.year)
date2 = "{}/{}/{}".format(date.day-1, date.month, date.year+1)

# List: Nom Prénom:
Info = [sys.argv[1], sys.argv[2]]

# Image photo:

# Création de la photo Kiwi:
f = open("photo_kiwi.png",'wb')
response = requests.get(sys.argv[3])
f.write(response.content)
f.close()

Image_profil = Image.open('./photo_kiwi.png')
Image_profil = Image_profil.resize((230,300))
#print("Redimension Image profil: ",Image_profil.size)

#################################

### MODIFICATION DE LA CARTE: ###

# Modification Image sur Image:

img = Image.open('./image/carte.png')
img.paste(Image_profil, (535,85))

# Modification Text sur Image:

d1 = ImageDraw.Draw(img)
front = ImageFont.truetype("./arial.ttf",30)

# NOM ET PRENOM: 40 caractère Max !
d1.text((120,440), Info[0] + ' ' + Info[1], fill = (0,0,0), font = front)

# DATE 1:
d1.text((380,392), date1, fill= (0,0,0), font = front)

# DATE 2:
d1.text((593,392), date2, fill= (0,0,0), font = front)

img.save("kiwi.png")
print("Sauvegarde Terminer pour la parti IMAGE de: 'kiwi.png'")

#################################
