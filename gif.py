import requests
import json
import sys

def main():
    # set the apikey and limit
    apikey = "LIVDSRZULELA"  # test value
    lmt = 1

    # our test search
    search_term = sys.argv[1:]

    # get the top 8 GIFs for the search term
    r = requests.get("https://g.tenor.com/v1/random?q={}&key={}&limit={}".format(search_term, apikey, lmt))
    if r.status_code == 200:
        # load the GIFs using the urls for the smaller GIF sizes
        top_8gifs = json.loads(r.content)
        return top_8gifs["results"][0]["media"][0]["gif"]["url"]
    else:
        top_8gifs = None
        print('Pas de GIF ???')

    # continuer un modèle similaire jusqu'à ce que l'utilisateur effectue une sélection ou lance une nouvelle recherche.

fichier = open("data.txt", "w")
TEXT = main()
fichier.write(TEXT)
fichier.close()

print(TEXT)
print("\nArgument -> ",sys.argv[1:])