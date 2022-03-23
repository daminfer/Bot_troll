import sys
import requests
import datetime
from PIL import Image, ImageDraw, ImageFont

### INFORMATION DE LA CARTE: ###

# Génération des dates: 
date = datetime.date.today()
date1 = "{}/{}/{}".format(date.day, date.month, date.year)
date2 = "{}/{}/{}".format(date.day-1, date.month, date.year+1)

# Importation photo:
def new_photo():
    f = open("photo_importer.png",'wb')
    response = requests.get(sys.argv[3])
    f.write(response.content)
    f.close()

def conv(nom,prenom, photoAjoue):
    
    Image_profil = Image.open(photoAjoue)
    Image_profil = Image_profil.resize((230,300))

    photoBase = Image.open('./image/carte.png')
    photoBase.paste(Image_profil, (535,85))

    # Modification Text sur Image:

    d1 = ImageDraw.Draw(photoBase)
    front = ImageFont.truetype("./arial.ttf",30)

    # NOM ET PRENOM: 40 caractère Max !
    d1.text((120,440), nom + ' ' + prenom , fill = (0,0,0), font = front)

    # DATE 1:
    d1.text((380,392), date1, fill= (0,0,0), font = front)

    # DATE 2:
    d1.text((593,392), date2, fill= (0,0,0), font = front)

    photoBase.save("kiwi.png")
    print("Sauvegarde Terminer pour la parti IMAGE de: 'kiwi.png'")

#################################

def main():
    if sys.argv[1] == "kiwiception":
        print( "reconnue kiwiception")
        conv(sys.argv[2], sys.argv[4], "./photo_importer.png")
        for i in range(int(sys.argv[5])- 1):
            conv( sys.argv[2], sys.argv[4], "./kiwi.png")
    else:
        conv(sys.argv[1], sys.argv[2], "./photo_importer.png")
    print('PYTHON>> FIN DU CODE')
    
new_photo()
main()