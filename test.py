import requests
import json

def main():
    # set the apikey and limit
    apikey = "LIVDSRZULELA"  # test value
    lmt = 1

    # our test search
    search_term = "cat"

    # get the top 8 GIFs for the search term
    r = requests.get("https://g.tenor.com/v1/random?q={}&key={}&limit={}".format(search_term, apikey, lmt))
    if r.status_code == 200:
        # load the GIFs using the urls for the smaller GIF sizes
        top_8gifs = json.loads(r.content)
        return top_8gifs["results"][0]["media"][0]["gif"]["url"]
    else:
        top_8gifs = None

    # continue a similar pattern until the user makes a selection or starts a new search.

fichier = open("data.txt", "w")
fichier.write(main())
fichier.close()
print(main())