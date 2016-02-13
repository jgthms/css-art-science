---
order: 5
layout: default
title: La dimension de nos espérances
subtitle: "Height, width, margin, padding, border"
permalink: /5-dimension/
---

Jusqu’à présent, le texte était Maître. Sa longueur, sa taille, son interlignage, son étirement, son style, son gras, définissaient la hauteur et largeur de son élément. Le block se pliait aux exigences aléatoires et pernicieuses du texte qu’il contenait.  
Il était temps d’agir. De rédéfinir les règles en définissant les dimensions.

<figure class="image" style="background: black;">
  <img height="150" src="/images/Stare.png" alt="Grrrr">
  <figcaption>"Finie la rigolade"</figcaption>
</figure>

#### width

Un élément block peut voir sa largeur fixée.

{% highlight css %}
.info{ width: 400px;}
{% endhighlight %}

Le block fera 400px de large, quelle que soit la longueur du texte. C’est la hauteur (height) qui s’étendra à souhait.

Par défaut, un block prend toute la largeur possible.

{% highlight css %}
.info{ width: auto;}
{% endhighlight %}

Mais quel est le domaine du possible ?  
Pour le body, le possible équivaut à la largeur de la fenêtre du navigateur.  
Pour tous les autres éléments, le possible correspond à la largeur de son parent, ou, si elle n’est pas définie, celle d’un ancêtre.

{% highlight html %}
<body>
  <div style="width: 400px;">
    <p>
      L'intelligence de la vie...
      Ce mélange si particulier de respect des convenances
      et de largeur d'esprit, cette faculté de comprendre
      avant de savoir.
    </p>
  </div>
</body>
{% endhighlight %}

Le `body` prendra toute la largeur de la fenêtre, la `div` fera 400px de large, et le `p` aussi, car étant contenu dans la `div`.

Le **pourcentage** est une option.

{% highlight css %}
p{ width: 40%;}
{% endhighlight %}

40% oui, mais de quoi ? Du possible.  
Dans l’exemple précédent, cela donne au `<p>` : 40% x 400px = 160px. Un dessert.

#### height

<figure class="image">
  <img height="150" src="/images/Naive.png" alt=":)">
  <figcaption>"Héron, héron !"</figcaption>
</figure>

Non petit, un block ne prend pas toute la hauteur possible ! Pas tapon ! Comment pourrait-il ?  
Une page web vit dans sa hauteur, s’étend à perte de scroll !  
La hauteur d’un block est celle du texte qu’il contient (et celle des éléments qu’il contient).  
Mais cette hauteur si flexible, peut se voir bloquée par ces quelques mots :

{% highlight css %}
.obelisque{ background: blanchedAlmond; height: 20px;}
{% endhighlight %}

Non block obelisque, tu ne dépasseras pas 20px de hauteur, même si ton texte ne tient pas à l’intérieur de tes frontières.  
Le texte, face à cet affront, ne baisse point les bras, et franchit ces barrières sans scrupule.

Le background par contre, peureux comme un âne, ne suit pas.

{% highlight html %}
<div class="obelisque">
  La hauteur nous attire, mais non les degrés qui y mènent ;
  les yeux fixés sur la lune, nous cheminons volontiers dans la plaine.
</div>
{% endhighlight %}

A quoi bon définir la hauteur si le texte la dépasse ?  
Comprenez bien : le texte empiète sur la suite, mais le block en lui-même fait 20px de hauteur (le background le prouve). Ce n’est donc qu’une bavure visuelle, mais le flux des éléments est respecté.

#### overflow

Notre code se dépense, mais notre texte ici dépasse.  
Gérer le surplus, la barbille, l’overflow. Oui, je te parle à toi ô texte qui défit mes lois.

{% highlight css %}
.obelisque{ background: blanchedAlmond; height: 20px; overflow: hidden;}
{% endhighlight %}

Hide, hid, hidden. Cacher, cacha, caché. Texte de pacotille, te voici ôté de tes écarts !  
Le block a fait taire tout ceux qui dépassaient ses frontières, en l’occurence les 20px de hauteur.

Le texte baveux, sans gêne et sans manière, accepte le compromis.

{% highlight css %}
.obelisque{ background: blanchedAlmond; height: 20px; overflow: scroll;}
{% endhighlight %}

Les caractères hors frontière resteront accessibles grâce au scroll que l’obelisque leur met à disposition.

{% highlight css %}
.obelisque{ overflow: visible;} /* Retour à la normale */
.obelisque{ overflow: auto;} /* Parfois scroll, parfois visible */
{% endhighlight %}

Un axe, un seul.

{% highlight css %}
.obelisque{ overflow-x: hidden;} /* Masquer ce qui dépasse horizontalement,telle une chaîne de caractères sans espace */
.obelisque{ overflow-y: hidden;} /* Masque le surplus d’en bas */
{% endhighlight %}

#### padding

Reprenons un texte, flexible, dans un block sans contrainte de hauteur mais avec du un fond.

{% highlight css %}
.odyssee{ background: skyBlue; font: 14px/20px Georgia, serif; padding: 20px; width: 400px;}
{% endhighlight %}

{% highlight html %}
<p class="odyssee">
  Je réponds ordinairement à  ceux qui me demandent raison de mes voyages : que je sais bien ce que je fuis,  et non pas ce que je cherche.
</p>
{% endhighlight %}

Ce bleu si tendre semble bien opressé par ce texte si beau. Il suffoque, il gémit. Aidons-le avant qu’il ne cède !

{% highlight css %}
.odyssee{ padding: 20px;}
{% endhighlight %}

De l’air ! Le contenu du block se voit éloigné des bords ! 20px de tous les côtés !  
Une marge intérieure, et les frontières sont repoussées.

Mais quelle est la hauteur et largeur effectives de notres bloc ?  

* **Largeur**: width 400px + padding-left 20px + padding-right 20px = 440px de bleu.
* **Hauteur**: texte de 3 lignes en line-height 20px, soit 60px + padding-top 20px + padding-bottom 20px = 100px de bleu.

Huissier svp :  
Les valeurs du padding se rajoutent à celles du height et du width, si ces dernières sont définies.  
Par contre, si le width est en auto, et que le parent de l’élément a, lui, un width défini, le width s’ajustera et le padding restera.

{% highlight html %}
<div style="width: 400px;">
  <p style="padding-left: 20px; padding-right: 20px;">
    Je réponds ordinairement à ceux qui me demandent raison de mes voyages :
    que je sais bien ce que je fuis, et non pas ce que je cherche.
  </p>
</div>
{% endhighlight %}

<figure class="image">
  <img src="/images/aux-dimensions-bleues.png" alt="Aux dimensions bleues">
  <figcaption>Les dimensions effectives de la zone bleue : 440px de large sur 100px de haut.</figcaption>
</figure>

La `<div>` fera 400px quoiqu’il en soit. Son enfant le `<p>` n’a aucune autorité sur lui !  
Le `<p>` qui a un padding de 20px de chaque côté, aura un width effectif de 400 - 2*20 = 360px.  
La fluidité à l’état pur.

### Cardinalité

Séparément : padding-top, padding-right, padding-bottom et padding-left.  
Simultanément : padding. De 1 à 4 valeurs.

* 1 valeur -> padding: 20px;
* Les padding top, right, bottom et left seront à 20px.
* 2 valeurs -> padding: 20px 10px;
* Padding top et bottom à 20px, right et left à 10px.
* 3 valeurs -> padding 20px 10px 30px;
* Padding top à 20px, right et left à 10px, bottom à 30px.
* 4 valeurs -> padding: 20px 10px 30px 0;
* Padding top à 20px, right à 10px, bottom à 30px et left à zéro.

Concentration ! Retenez l’ordre : **top, right, bottom, left**.  
On commence en haut et on tourne dans le sens des aiguilles (d’une montre).

<figure class="image">
  <img height="150" src="/images/Drunk.png" alt="Burp">
  <figcaption>"Top, left, bottom... Non attends..."</figcaption>
</figure>

Comment se rappeler comment agissent 2 ou 3 valeurs ? Laquelle va où ?  
L’astuce est de s’appuyer sur les “points cardinaux” dont les valeurs n’ont **pas** été définies :

* à 2 valeurs (padding: 20px 10px;), c’est comme définir uniquement **top** et **right**. Il reste alors à bottom et left de se trouver une valeur. Mais laquelle des deux ?  
Très logiquement, bottom prendra celle de top (20px) et left de right (10px).
* à 3 valeurs (padding: 20px 10px 30px;) on définit top, right et bottom.  
Que va faire **left** ? Prendre celle de **right** (10px) plutôt qu’une des deux autres.

Ce jeu des points cardinaux est valable pour les margin (marges extérieures) et les border-width (épaisseur des bordures).

#### border

Pourquoi parler de bordure lorsqu’on peut parler de marge extérieure ?  
Parce que la bordure, comme le padding et le width, s’ajoute à la largeur effective d’un élément.

{% highlight html %}
<div style="width: 400px;">
  <p style="border: 3px solid orange; padding-left: 20px; padding-right: 20px;">
    Je réponds ordinairement à ceux qui me demandent raison de mes voyages :
    que je sais bien ce que je fuis, et non pas ce que je cherche.
  </p>
</div>
{% endhighlight %}

La bordure : une épaisseur, un style, une couleur.  
Largeur du `<p>` : 400px (le parent) - 3px à gauche - 20px de padding à gauche - 20px de padding à droite - 3px (bordure droite) = 354px

Vous êtes introduit au raccourci border. Ai-je besoin de préciser la route plus longue ?

* border-color : hexa, rgb, hsl... as usual
* border-style : solid (plein), dotted (pointillé), dashed (des tirets)
* border-width: en pixel, selon le jeu des points cardinaux.

Les quatre bordures, tels des mousquetaires sans cission.  
Mais tout est possible :

* border-top : le raccourci du Nord
* border-top-color
* border-top-style
* border-top-width
* border-bottom
* border-bottom-color...

Le (off-)road trip.

#### margin

L’enfer, c’est les autres.

* Le padding éloigne le contenu des bords.
* Le margin éloigne l’élément de ses voisins.

{% highlight html %}
<p>
  Tandis qu'à leurs oeuvres perverses<br>
  Les hommes courent haletants,<br>
  Mars qui rit, malgré les averses,<br>
  Prépare en secret le printemps.
</p>

<p>
  Pour les petites pâquerettes,<br>
  Sournoisement lorsque tout dort,<br>
  Il repasse des collerettes<br>
  Et cisèle des boutons d'or.
</p>
{% endhighlight %}

{% highlight css %}
p {
  background: seaGreen;
  border-bottom: 2px solid darkSlateGrey;
  color: white;
  font: 16px/22px Georgia, serif;
  padding: 20px;
   width: 400px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/le-printemps.png" alt="Le Printemps">
  <figcaption>Deux blocs de printemps</figcaption>
</figure>

Ce printemps, déjà vert en négatif. Ces paragraphes, démarqués par une pleine bordure, mais encore trop proches l’un de l’autre. Séparons-les :

{% highlight css %}
p{ margin-bottom: 10px;}
{% endhighlight %}

Les voici légèrement éloignés. Notez que la séparation s’effectue en dehors des paragraphes. C’est pourquoi le background ne suit pas.  
Le background que l’on aperçoit est celui du parent (transparent), voire du body (blanc).

Substituons ce margin-bottom avec un margin tout court (qui couvre donc les 4 côtés des paragraphes) :

{% highlight css %}
p{ margin: 10px;}
{% endhighlight %}

Les paragraphes s’éloignent des deux côtés (margin-left et margin-right). Le 1er paragraphe s’éloigne du haut (margin-top) et le 2nd du bas (margin-bottom).  
Par contre, entre les deux, un problème survient. Enfin, un problème... Une particularité.

<figure class="image">
  <img height="200" src="/images/YUNO.png" alt="Y U NO">
  <figcaption>"Margins, Y U NO add yourselves?"</figcaption>
</figure>

Le margin-bottom 10px du 1er paragraphe devrait s’ajouter au margin-top 10px du 2nd paragraphe pour donner un espace total de 20px ! Mais contrairement au padding qui n’appartient qu’au block qui le détient, le margin est une **marge partagée**. Une propriété sociale, démocratique, qui se définit entre deux éléments et non pas uniquement sur un seul et unique élément. C’est un médiateur, qui tient compte des deux partis, et établit une valeur commune qui sied aux deux.  
Ici, le margin-bottom et margin-top de 10px **se confondent**. Ils ne font plus qu’un, car ils sont égaux.

Léger changement :

{% highlight css %}
p{ margin: 10px 0 20px;}
{% endhighlight %}

Le margin-bottom 20px au 1er, associé au margin-top 10px du second donneront un no man’s land de... 20px. La loi du plus grand, du plus fort. Oeil pour oeil, margin pour margin.

L'espace est l'ordre des choses qui coexistent. Dilué, fusionné, calculé, il rythme le parcours de l’oeil et en assure le confort.  
Mais quel espace plus grand que celui des océans, où face à l’hostilité des vents et marées, les éléments errants s’amusent à [flotter](/6-vent)...
