---
order: 7
layout: default
title: "La prise, l’emprise du désir"
subtitle: "Position : relative, absolute, fixed, static"
permalink: /7-prise/
---

Où l’affichage suit le code, le flux se plaît. Pas de surprise, pas d’accroc. Le bloc suivant un autre s’affiche en-desssous.  
La propriété ? Position.  
La valeur ? Static.

{% highlight css %}
p{ position: static;} /* Valeur par défaut. Flux normal */
{% endhighlight %}

Mais voilà. Les éléments grandissent et le flux n’est plus Maître. Ils se déplacent impunément, se positionnent au pixel près et s’affranchissent du scroll.

#### position: relative

Imaginez. Une page web chargée. Les éléments sont placés. Tout le texte est généré. Il n’y a plus qu’à attendre d’être lu.  
Alors que tous les soldats sont au garde-à-vous, immobiles et aveugles, un des leurs se trahit. Un espion ! Avec le recul, vous seul le voyez. Il se déplace sans que les autres le voient. Tout le monde le croît à sa place, alors que manifestement, il a bougé !

Prenez ces vers :

{% highlight html %}
<p>
  My long two-pointed ladder's sticking through a tree<br>
  Toward heaven still,<br>
  And there's a barrel that I didn't fill<br>
  Beside it, and there may be two or three<br>
  Apples I didn't pick upon some bough.<br>
  But I am done with apple-picking now.
</p>
<p>
  Essence of winter sleep is on the night,<br>
  The scent of apples: I am drowsing off.<br>
  I cannot rub the strangeness from my sight<br>
  I got from looking through a pane of glass<br>
  I skimmed this morning from the drinking trough<br>
  And held against the world of hoary grass.
</p>
<p>
  It melted, and I let it fall and break.<br>
  But I was well<br>
  Upon my way to sleep before it fell,<br>
  And I could tell<br>
  What form my dreaming was about to take.
</p>
{% endhighlight %}

{% highlight css %}
body {
    font: 11px/18px Georgia, serif;
}

p {
    background: OliveDrab;
    margin-bottom: 20px;
    padding: 10px;
    width: 400px;
}
{% endhighlight %}

Les voici qui se succèdent. Alignés. Equilibrés.

Mais le deuxième veut se faire la malle :

{% highlight html %}
<p style="position: relative; right: 10px; top: 5px;">
{% endhighlight %}

Un positionnement **relatif**. Relatif à quoi ? A son positionnement **normal**. Celui dans le flux.

* right: 10px. Il se déplace de 10px depuis la droite. Vers la gauche donc.
* top: 5px. Il se déplace de 5px depuis le haut. Vers le bas donc.

<figure class="image">
  <img height="150" src="/images/PokerFace.png" alt="...">
  <figcaption>"Non non, j'ai pas bougé"</figcaption>
</figure>

Lui se déplace. Les deux autres noms. Ni l’éventuel parent.  
Les autres l’**ignorent**, comme si il était resté à sa place d’origine. Dans le flux.  
Le deuxième se déplace en soliste, au nez et à la barbe de son entourage. Lui, sort du flux. Mais le flux général reste intact.

La valeur relative pour la propriété position, délaissée de ses options right/left et bottom/top, a une autre fonctionnalité : rendre l’élément auquel il s’applique **positionné**.  
Cette capacité permet à l’élément d’être le **référentiel** lors d’un positionnement absolu. Un quoi ?

#### position: absolute

Soit un rectangle. Le body. Immaculé.  
Arrive un compatriote. Un logo. Rectangulaire de surcroît. Il veut se placer précisément. Et c’est précisément un ordre.  
Qu’il en soit ainsi !

{% highlight css %}
.logo {
  left: 43px;
  position: absolute;
  top: 5px;
}
{% endhighlight %}

Un point de départ, ici : left top. A partir de là, le logo se déplace, vers la droite de 43px, vers le bas de 5px.
Inutile de vous préciser qu’il existe 3 autres points de départ :

* right top (l’Alsace)
* left bottom (le Béarn)
* right bottom (le Rocher)

Quatre coins, soit, mais de **quel** élément ?
Un élément en position absolute se place par rapport au **premier ancêtre positionné**.

<aside>
  Qu’est-ce qu’un parent positionné ?<br>
  <img height="100" style="float:right;" src="/images/SeriouslyChan.png" alt="WTF">
  Au choix : position relative, position absolute ou position fixed. Si l’on applique l’une de ces 3 valeurs, alors l’élément est positionné. Juste <strong>positionné</strong>.<br>
  Cet ancêtre devient alors l’élément auquel son descendant auquel on applique le position absolute va se référer.
</aside>

Un lieu de rencontre, un déplacement exact. Au final, rien de plus simple. La précision chirurgicale.  
Pourquoi alors modérer son utilisation ? Parce qu’un élément positionné sort du flux. Pour toujours.

Tenez, une mise en situation :

{% highlight html %}
<div>
  <p class="logo"></p>
  <p>
    Les esprits extraordinaires tiennent grand compte
    des choses communes et familières, et les esprits
    communs n'aiment et ne cherchent  que les choses
    extraordinaires.
  </p>
<div>
{% endhighlight %}

{% highlight css %}
body {
  font: 14px/22px Georgia, serif;
}

div {
  background: LightSeaGreen;
  width: 600px;
}

.logo {
  background: #F60;
  height: 100px;
  width: 100px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/un-logo.png" alt="Un logo">
</figure>

Un carré unicolore, suivi d’un texte, dans une zone à largeur définie.  
Les deux compères se suivent.

Mais il en faut pour que le logo veuille faire prévaloir son statut fraichement acquis ! Une place de choix, en haut à droite :

{% highlight css %}
.logo {
  position: absolute;
  right: 10px;
  top: 10px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/logo-soliste.png" alt="Logo soliste">
</figure>

Fichtre ! Il s’est fait la malle le bougre ! Il sort de la div et vient se placer à 10px du coin haut/droit... du body !  
Rien de plus normal. La div n’est **pas** positionnée (pas de position relative, absolute ou fixed). Le p s’en va alors se positionner par rapport au body, le parent de **tous** les éléments, qui même en n’étant pas positionné, reste le référent ultime pour le positionnement absolu.

Autre détail : la div verte a bien rétrécie, comme si le logo avait disparu. Quelque part, la div l’a déshérité : le logo est sorti du flux. La div ne tient plus compte de lui dans sa hauteur. Reste celle du paragraphe suivant, qui se confond alors avec son parent.

Variation :

{% highlight css %}
div{ position: relative;}
{% endhighlight %}

<figure class="image">
  <img src="/images/logo-revenu.png" alt="Logo revenu">
</figure>

La div se positionne, et le logo revient mais semble bien bancal. En jockey. A cheval. Bien placé, certes, mais bien mal intégré aussi. Il n’est toujours pas revenu dans la flux.  
Et il n’y reviendra pas, quelles que soient nos manoeuvres.

Le paragraphe suivant voit d’un mauvais oeil ce retour inopiné : le logo lui masque une bonne partie du contenu !  
Un élément positionné en absolu se place par défaut **par-dessus** tout le monde. Ainsi, le paragraphe suivant, resté dans le flux, passe en-dessous du logo absolu, comme si ce dernier n’était même pas là...

#### z-index

Si plusieurs éléments se positionnent en absolu, qui prend le dessus ?  
Celui qui arrive en dernier dans le code.  
Mais si votre code effarouché n’ose pas se voir altéré, un recours vertical peut venir vous sauver :

{% highlight css %}
.alpha{ z-index: 3000;}
.omega{ z-index: 2000;}
{% endhighlight %}

Pour ces deux éléments positionnés en absolu, l’alpha se placera par-dessus l’omega, quelles que soient leurs positions dans le code HTML.  
Les valeurs de z-index vont de 1 à 9999 et sont **relatives** : mettre 8000 à alpha ne changera rien en l’occurence.

#### position: fixed

L’objet du position fixed est de combattre le scroll. Ajoutez du contenu pour faire apparaître la barre de scroll vertical.

{% highlight css %}
.logo{ position: fixed;}
{% endhighlight %}

Appliquez cette valeur toute seule, sans right/left ou bottom/top, et l’élément se place en **absolu** en haut à gauche. Défilez le site : le logo ne bouge pas.  
Le position fixed est comme un position absolute, à la différence près qu’il ne **scrolle** pas.

#### position static

Le flux, l’unique. Revenir dans le droit chemin. C'est la valeur par défaut.

{% highlight css %}
.logo{ position: static;}
{% endhighlight %}

Les right/left et bottom/top s’en trouveront anéantis.

La science digérée, ou du moins entamée, il est temps de s'adonner à [la pratique](/8-base/).
