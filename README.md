# Bot_troll
Voici un bot qui a pour objectif de troll un peu nos camarades. Chaque fois qu'un de nos noms est utilisé le bot envoie une image/citation/gif relative à la personne.
J'ai également ajouté des commandes pour les amateurs de spam et de gif de chat ❤️

# Installation:

**LISTE DES OUTILS NECESSAIRE:**

- [node.js](https://nodejs.org/en/)
- [discord.js](https://discord.js.org/) => ``` npm install discord.js ```
- [Python-shell](https://www.npmjs.com/package/python-shell) => ``` npm install python-shell ```
- [Python Module requests](https://fr.python-requests.org/en/latest/user/install.html) => ``` pip install requests ```
- [Pillow(PIL)](https://pillow.readthedocs.io/en/stable/installation.html) => ``` python3 -m pip install --upgrade pip ``` et ``` python3 -m pip install --upgrade Pillow ```

Avant de lancer le bot, initialiser un dossier de projet:
```
npm init
```

⚠️ATTENTION: Le fichier config.json doit être remplie par vos soin:

```
{
    "PREFIX": "Vous pouvez choisir le caractère de votre choix, le préfixe sert a reconnaitre l'execution d'une commande ex: PREFIXcat => la commande cat est interpréter",
    "clientId":"ID de votre bot",
    "guildId":"ID du serveur dans lequel vous envoyer bot",
    "token":"TOKEN secret de votre bot"
}
```

# Utilisation:

Pour lancer le bot, on tape dans le terminal:
```
node index.js
```
Le terminal continuera d'afficher des informations, lors de l'execution des commandes ...


**LISTE DE TOUTES LES COMMANDES:**

- !help => La commande help renvoie la liste de toute les commandes avec une petite description
- !cat => Répond avec un gif de chat aléatoire
- !gif Paramètre1 Paramètre2 ... ParamètreN => Répond avec un gif rechercher aléatoirement, on peut avec les paramètres orienté la recherche
- !kiwi NOM PRENOM IMAGE => Renvoie une image carte kiwi, ne pas oublier d'uplod une image (3ème argument)
- !kiwiception Nom Prenom Nb IMAGE => Baser sur le model de !kiwi, rèpete le motife de la carte dans l'emplacement photo un nombre Nb de fois


**LISTE DES ACTIONS DU BOT:**

- "Touati" => Renvoie une image.png du dossier image
- "Celine" => Renvoie un mp4
- "Kounalis" => Renvoie une image.png du dossier image
- "+1" => Renvoie une image.png du dossier image
- "Windows => Renvoie un gif
- "Ambre" => Renvoie un message et un gif 😉
- "Fanny" => Renvoie une [vidéo youtube](https://www.youtube.com/watch?v=wyU4Oa7t6SE)
- "Nico" =>  Renvoie une [vidéo youtube](https://www.youtube.com/watch?v=OtF9c4dZyR0)
- "Matthieu" => Renvoie un gif 😏
- "Damin" => j'en parle pas ... 😒
- "Tchou" => Envoie 10 messages composer de deux gif qui ont peut-être un rapport avec la sncf
