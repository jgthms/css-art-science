---
order: 4
layout: default
title: L'âbime
subtitle: "Background, sprite"
permalink: /4-abime/
---

Le fond se fond dans la forme. Mais le jeu des formes se joue aussi dans son fond. Celui qui se colore, se répète, se positionne, se fixe.

Ce block, ce rectangle, se la joue grand luxe. Fond transparent mais bien présent. Seul le <body> se dote par défaut d’un fond blanc.  
Quel ennui !  
Une image, une couleur, est si vite appréciée.

#### background-color

Revoici nos trublions : hexa, rgba, hsla...

{% highlight css %}
body{ background-color: #CCC;} /* Raccourci de #CCCCCC, soit un gris clair */body{ background-color: yellowGreen;}
{% endhighlight %}

La couleur remplit tout et dévoile le block.

Mais les blocks n’ont pas le monopole du fond.

{% highlight css %}
a{ background-color: wheat;}
{% endhighlight %}

Les éléments inline peuvent avoir un background aussi. Le résultat est bien plus petit, certes, mais bien présent.

#### background-image

Un aplat est plaisant. Une image est jouissive.

{% highlight css %}
body{ background-image: url(img/panorama.jpg);}
{% endhighlight %}

L’image se place en haut à gauche du block, et se repète horizontalement et verticalement.  
Gif, png, bmp (argh), tout est permis.

#### background-position

Placer le point de départ, textuellement, et tout peut changer. Horizontal, vertical.

{% highlight css %}
body{ background-position: left top;} /* La Normandie */
body{ background-position: right bottom;} /* La Corse */
body{ background-position: center center;} /* No Man’s Land */
{% endhighlight %}

Plus précisément, en pixels.

{% highlight css %}
body{ background-position: 10px 20px;} /* 10px à gauche, 20px vers le bas, en partant du coin haut à gauche */
{% endhighlight %}

Le combiné nordique :

{% highlight css %}
body{ background-position: right 5px;} /* Calé tout à droite, à 5px du haut */
{% endhighlight %}

#### background-repeat

A partir de son point de départ, le background se répète. Pour occuper tout l’espace. Sans remord, ni pitié.

{% highlight css %}
body{ background-repeat: repeat;} /* Par défaut */
{% endhighlight %}

Mais le voici contraint de ne se répéter qu’horizontalement :

{% highlight css %}
body{ background-repeat: repeat-x;} /* Répétition horizontale mais pas verticale */
{% endhighlight %}

Ou verticalement.

{% highlight css %}
body{ background-repeat: repeat-y;} /* Répétition verticale mais pas horizontale */
{% endhighlight %}

Ou de ne point se répéter.

{% highlight css %}
body{ background-repeat: no-repeat;} /* Ne s’affiche qu’une seule et unique fois */
{% endhighlight %}

#### background-attachment

Comme le coeur de la femme qui s’attache parce qu’il donne, le background s’attache à l’élément auquel il s’applique.  
Lors du défilé défilement, il s’accroche bec et ongles :

{% highlight css %}
body{ backround-attachment: scroll;} /* Par défaut, lorsqu’on scrolle, le background suit */
{% endhighlight %}

Mais la rebellion est si proche...

{% highlight css %}
body{ background-attachment: fixed;} /* Le contenu défile mais le background ne bouge pas */
{% endhighlight %}

L’effet est étonnant, voire déroutant. Il surprend l’internaute et le dévie de l’objet de son voyage.  
Utile autant que la magie.

#### background

L’heure est tardive, l’ennemi se rapproche. Il faut agir. Et vite !Abrégez donc vos décisions :

{% highlight css %}
body{ background: url(img/la-falaise.png) repeat-x fixed right top #eee;}
{% endhighlight %}

Une image, une répétition, un attachement, une position (right top) et une couleur qui passera en-dessous du background-image, et comblera donc le vide restant.

<figure class="image">
  <img height="120" src="/images/Milk.png" alt="Whaou">
  <figcaption>"Ce background blanc est magnifique"</figcaption>
</figure>

La pierre angulaire des designs riches est là. Le background s’applique sur tout, et se démultiplie surtout. Chaque élément peut se vanter d’en posséder un.  
N’oubliez pas le **flux** ! Un élément imbriqué dans un autre se retrouve par dessus ce dernier, et appliquer un background au premier masquera celui du second.  
L’image d’un background, si plus grande que l’élément auquel il s’applique, n’agrandira pas ce dernier. L’image est secondaire, elle remplit ce qu’elle peut mais ne s’impose pas.  
Une image semi-transparente associée à une couleur est un jeu bien dangereux mais tout à fait maîtrisable, voire enrichissant.

### Le sprite, sans citron

Appliquer un background-image, c’est envoyer un messager traverser les structures binaires de votre serveur pour en rapatrier les pixels qui formeront la tâpisserie de votre élément !  
Chaque messager a un coût. Se restreindre à une dizaine de requêtes serveur pour récupérer tous vos background-image est raisonnable. Mais dupliquez ce nombre et le risque de faire fuir votre visiteur face à l’absence d’embellissement monte en flèche !

Je désire des drapeaux. Une flopée de drapeaux. Une tonne de drapeaux. Que dis-je : un [monde de drapeaux](http://www.famfamfam.com/lab/icons/flags/) !  
Tous aussi rectangulaires qu’ils soient, faites qu’ils viennent à moi. J’ai une annonce à leur faire. Un à un ? Comment osez-vous mépriser avec autant de naïveté la salive de mes discours ? Amenez-les tous ! En une seule fois. Rassemblés pour mieux obéir.

<figure class="image">
  <img src="/images/drapeaux.png" alt="Drapeaux, drapeaux !">
  <figcaption>4 drapeaux en 1 seule image</figcaption>
</figure>

Les voilà rassemblés. Mais je ne les afficherai qu’au compte-gouttes ! Un à un !Utilisons des `<span>` à hauteur et largeur fixes. Assez grands pour afficher un drapeau en entier, assez petits pour ne pas en afficher deux.Voici le premier :

{% highlight html %}
<div>
  <p><span class="flag en"></p></span> : Albion.</p>
</div>
{% endhighlight %}

{% highlight css %}
.flag{ background: url(drapeaux.png); display: inline-block; height: 11px; width: 16px;}
{% endhighlight %}

Mais les autres ? La même image, oui ! Mais un positionnement différent.

{% highlight html %}
<div>
  <p><span class="flag en"></span> : Albion.</p>
  <p><span class="flag ly"></span> : l'État des masses.</p>
  <p><span class="flag ee"></span> : le Tigre de la Baltique.</p>
  <p><span class="flag ls"></span> : le royaume dans les nuages.</p>
</div>
{% endhighlight %}

{% highlight css %}
.ly{ background-position: -20px 0;}
.ee{ background-position: -40px 0;}
.ls{ background-position: -60px 0;}
{% endhighlight %}

<figure class="image">
  <img src="/images/pays.png" alt="Pays, pays !">
  <figcaption>1 seule image utilisée 4 fois</figcaption>
</figure>

Non je ne redéfinis pas **toutes** les propriétés. Je ne définis uniquement celles qui _changent_...  
Tous les `.flag` partagent un background-image, un display, un height et un width **communs**.  
Seul le background-position est _spécifique_ à chaque drapeau.  
L’efficacité est là. Pour [mieux régner](/5-dimension).
