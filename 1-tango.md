---
order: 1
layout: default
title: Un tango se danse à deux
subtitle: "HTML & CSS, sémantique, attributs, flux"
permalink: /1-tango/
---

D’un côté, le HTML.  
Du contenu, des balises, de la structure.  
Du fond, du froid, du sens.  
La raison d’être d’une page web. La source, celle qu’on peut voir. Des règles, des contraintes. Une sémantique à respecter. Des attributs, des parents, des enfants.  
Il faut l’écrire, le réfléchir, l’ordonner.

Son partenaire, le CSS.  
Un langage, des formes. Une syntaxe, des propriétés. Une vision, des solutions.

Le HTML est inerte. Le CSS est vivant.  
Le HTML est monochrome. Le CSS est coloré.  
Le HTML est mécanique. Le CSS est romantique.

Pour ériger une statue, il faut poser un socle.

### HTML : nerf de la guerre

Ouvrez le bloc-notes. Tapez donc :

{% highlight html %}
<p>En entrant dans la chambre, Roubaud posa sur la table le pain d'une livre,
le pâté et la bouteille de vin blanc.</p>
{% endhighlight %}

Enregistrez “index.html”. Ouvrez dans [Chrome](http://www.google.com/chrome) (Ctrl+Alt+Shift+R).  
Une balise s’est ouverte, du texte a été entré, la balise s’est fermée.  
Le HTML est comme ça : encadrer c’est ordonner.  
Les balises sont dans la source mais ne s’affichent pas à l’écran.

<aside>
  Le code HTML est un code très <strong>bavard</strong> : le rapport entre la longueur du code et la longueur du texte qui s'affiche à l'écran est généralement assez grand. Il faut beaucoup écrire pour afficher peu. C'est la syntaxe basée sur des balises et des paramètres qui en est la cause.
</aside>

Un soldat peut se la jouer solo :

{% highlight html %}
<p>En entrant dans la chambre,
Roubaud posa sur la table le pain d'une livre,<br>
le pâté<br>
et la bouteille de vin blanc.</p>
{% endhighlight %}

<figure class="image">
  <img src="/images/ForeverAloneExcited.png" alt="Yeah!">
  <figcaption>
    Une balise auto-fermante
  </figcaption>
</figure>

La balise br effectue un retour à la ligne. Elle ne contient pas de texte. Elle s’ouvre et se referme aussitôt. Elle est auto-fermante.

L’imbrication est possible.

{% highlight html %}
<div>
  <ul>
    <li>Pain</li>
    <li>Pâté</li>
    <li>Vin blanc</li>
  </ul>
</div>
{% endhighlight %}

L’ordre se respecte : la `<div>` s’ouvre avant le `<ul>`. Il faut d’abord fermer le `</ul>`, puis la `</div>`. Une famille est née :

* `<div>` est le parent de `<ul>` et un ancêtre des `</li>`
* `<ul>` est l’enfant de `<div>` et le parent des `<li>`
* les `<li>` sont les enfants du `<ul>` et des descendants de `<div>`

### En bloc, en ligne

Mâle / femelle. Raison / passion. Photoshop / Fireworks. Et block / inline.

* balises **block** :`<p>`, `<div>`, `<h1>`, `<ul>`…
  * Un bloc(k). Visuellement, un rectangle qui prend toute la largeur possible et la hauteur du texte qu’il contient. On peut néanmoins en définir une hauteur et/ou largeur fixes.
  * Une balise block peut contenir des balises inline et certaines balises block.
* balises **inline** : `<a>`, `<span>`, `<strong>`, `<em>`…
  * Un lien dans un paragraphe ? `<a>`voilà ton lien`</a>`
  * Un mot plus important que les autres ? `<strong>`le voici`</strong>`
  * Une balise inline permet de différencier une partie du texte, de lui donner une fonction et un sens supplémentaires, mais n’est visuellement pas un rectangle. C’est juste un ou plusieurs mots tout seuls.

A chaque règle ses exceptions. Par exemple :

* `<li>` sont des balises **list-item**. Comme des blocks, mais avec une puce en plus.
* `<td>` sont des balises **table-cell** (cellule d’un tableau). Proche d’un block aussi, mais aux largeur et hauteurs difficiles à fixer.

### Super-pouvoirs

{% highlight html %}
<p title="introduction">
  En entrant dans la chambre, Roubaud posa sur la table le pain d'une livre,<br>
  le pâté<br>et la bouteille de vin blanc.
</p>
{% endhighlight %}

Des options, en veux-tu, en voilà. Un attribut (title) et une valeur (introduction), pour agrémenter la balise d’informations supplémentaires. Le “title” est facultatif. D’autres non :

{% highlight html %}
<img src="img/saint-tropez.jpg" alt="La décadence parisienne">
{% endhighlight %}

Une image. Une balise auto-fermante. Il faut expliquer à la page HTML où trouver cette fameuse image de décadence parisienne (la description alternative qui s’affichera si l’image est introuvable) : dans le sous-dossier img, le fichier indiqué.

En 2 mots :

{% highlight html %}
<balise attribut="valeur">Texte HTML</balise>
{% endhighlight %}

ou

{% highlight html %}
<baliseautofermante>
{% endhighlight %}

### Soldats, au rapport !

Une revue des troupes, pour avoir un aperçu global de ce qu'il est possible d'accomplir.

{% highlight html %}
<h1>Demain, dès l'aube…</h1>
<p>A l'heure où <em>blanchit</em> la <a>campagne</a>,<br>
Je <strong>partirai</strong>. Vois-tu, je sais que tu m'attends.</p>
<ul>
  <li>Je marcherai</li>
  <li>les yeux fixés sur mes pensées</li>
  <li>sans rien voir au dehors</li>
  <li>sans entendre >aucun bruit</li>
</ul>
<h2>L’or du soir qui tombe</h2>
<h3>…</h3>
<h4>…</h5>
<h5>…</h5>
<h6>Un bouquet de houx vert et de bruyère en fleur.</h6>
<ol>
  <li>A André Chénier</li>
  <li>Bêtise de la guerre</li>
  <li>Ce qui se passait aux Feuillantines vers 1813</li>
  <li>Du haut de la muraille de Paris</li>
  <li>Elle était pâle, et pourtant rose…</li>
</ol>
{% endhighlight %}

### Je sème antique

Toutes les balises ci-dessus ont un sens.
Un `<p>paragraphe</p>`, un `<h1>titre de premier niveau</h1>`, une `<ul><li>`liste non ordonnée`</li></ul>`, un `<a>lien</a>`, une `<em>emphase</em>`, une `<dl>liste de définitions</dl>`.

Mais voici deux anonymes, deux saltimbanques, deux tire-au-flanc.

* la `<div>` (block) : pour diviser, structurer un bloc/des blocs.
* le `<span>` (inline) : pour différencier, agrémenter un mot/des mots.

Pour donner du style, sans donner du sens.

### Le flux, mon colonel

Sans CSS, le HTML vit déjà un peu.

Selon l’ordre des balises et selon leur imbrication, le HTML s’affiche dans le navigateur selon les valeurs par défaut de ce dernier et selon quelques règles :

* **primeur** : une balise qui s’affiche avant dans le code s’affichera avant dans le navigateur.
* **obésité** : si le texte d’une balise s’allonge, il pousse la suivante plus bas.
* **étages** : une balise imbriquée dans une autre s’affiche par-dessus cette dernière. Exemple : le `<li>` est par-dessus son parent le `<ul>`.

La CSS viendra ensuite jouer avec ces principes et parfois même les bouleverser.

### Aux armes !

Les balises, ces soldats de l’ombre, doivent être encadrés pour mieux régner.

* une **Doctype**  
  De quel type est le document ? Dans quelle version ? Définir une page HTML, c’est expliquer au navigateur comment la lire.
  La norme aujourd’hui est au HTML5. Sa définition est rudimentaire. Rajoutez en haut de votre document HTML la ligne suivante :
{% highlight html %}
<!DOCTYPE html>
{% endhighlight %}
* `<html>`  
  La balise élémentaire, qui encadre toutes les autres.
* `<head>`  
  Dans une page web, il y a ce qui s’affiche. Pour tout le reste, il y a le <head>. Des données. Des méta-données. Comme :
{% highlight html %}
<title>le titre de la page</title>
<link type="text/css" rel="stylesheet" href="le-lien-vers-le-fichier.css">
<script type="text/javascript" href="appeler-des-fichiers-de-scripts.js">
{% endhighlight %}
* `<body>`  
  Le corps de la page, celui qui s’affiche, se montre, dans toute sa splendeur.

En somme, voici un document HTML correct :

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Les Sentiers de la Gloire</title>
    <link rel="stylesheet" href="style.css" type="text/css">
  </head>
  <body>
    <p>En entrant dans la chambre, Roubaud posa sur la table le pain d'une livre,<br>
    le pâté<br>et la bouteille de vin blanc.</p>
  </body>
</html>
{% endhighlight %}

<figure class="image">
  <img src="/images/Happy.png" alt=":D">
  <figcaption>"Mon code est valide !"</figcaption>
</figure>

Un type de document, des informations globales (encodage des caractères, titre de la page, lien vers un futur fichier CSS), du contenu qui s’affiche. Votre **première page HTML**. Sauvegardez-la, vous allez en avoir besoin.  
Ajoutez du contenu, puis modifiez-le, dupliquer-le, ébranlez-le, sauvegardez-le, [validez-le](http://validator.w3.org/check "Validateur W3C") !

Exprimez-vous librement. En listes. En titres. En paragraphes. Je veux du relief, du dynamisme, du suspense !  
Il faut savoir poser des fondations solides (HTML) avant de venir les troubler, les [émouvoir](/2-pinceau/ "Un monde à repeindre") (CSS).
