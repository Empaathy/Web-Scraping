# Web Scraping

Exercice de web scraping demandé par Click2Buy

## Environnement de développement

### Pré-requis

- NodeJS
- npm
- MySQL


### Lancer l'environnement de développement

Effectuez cette liste de commandes :
```bash
git clone git@github.com:Empaathy/Web-Scraping.git
cd Web-Scraping
npm i
```


## Lancer le scraping

Dans le fichier index.js, renseignez vos identifiants MySQL (ligne 3)

```bash
const con = mysql.createConnection({
  host: 'localhost',
  user: 'mysql username',
  password: 'mysql password',
});
```

Vous pouvez alors lancer le bot par l'une de ces commandes :

```bash
node index.js
npm start
```