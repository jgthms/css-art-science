---
order: 6
layout: default
title: Au vent favorable
subtitle: "Float, clear"
permalink: /6-vent/
---

Que les marins d’eau douce soient avertis : la clémence du courant ne doit jamais être acquise. Il faut savoir faire face aux mouvements incertains des ondes maritimes et en appréhender l’ardeur sous-jacente !

Jusqu’à présent, les éléments se suivent. De haut en bas. Une seule direction. Une ligne verticale que tous les blocks sont tenus de traverser.  
La révolte sonne, et largue les amarres. Embarquer pour mieux se déplacer. Seul, face au flux.

<figure class="image">
  <img height="150" src="/images/SweetJesusFace.png" alt="Aaaaaaaaaaaaahhh...">
  <figcaption>"Aaaaaah des float..."</figcaption>
</figure>

### Float

Derrière ce mot, un océan de possibilités.  
Le flottement d’un élément est l’action qui, parmi toutes les actions de positionnement que l’on puisse appliquer, influence le plus les éléments adjacents. Comprenez : appliquer un float modifie non seulement l’élément auquel il est appliqué mais aussi les éléments voisins (notamment les suivants et le parent).  
Ce float n’est donc pas un acte solitaire et égoïste qui saurait s’affranchir de conséquences désastreuses ! Le minutie est de mise.

{% highlight html %}
<div>
  <h1>L'éducation sentimentale</h1>
  <p>Un jeune homme de dix-huit ans, à longs cheveux et qui tenait un album sous son bras,restait auprès du gouvernail, immobile. A travers le brouillard, il contemplait des clochers,des édifices dont il ne savait pas les noms ; puis il embrassa, dans un dernier coup d'oeil,l'île Saint-Louis, la Cité, Notre-Dame ; et bientôt, Paris disparaissant,il poussa un grand soupir.</p>
  <p>M. Frédéric Moreau, nouvellement reçu bachelier, s'en retournait à Nogent-sur-Seine,où il devait languir pendant deux mois, avant d'aller _ faire son droit _ . Sa mère, avec lasomme indispensable, l'avait envoyé au Havre voir un oncle, dont elle espérait, pour lui,l'héritage ; il en était revenu la veille seulement ; et il se dédommageait de ne pouvoirséjourner dans la capitale, en regagnant sa province par la route la plus longue. </p>
  <p>Le tumulte s'apaisait ; tous avaient pris leur place ; quelques-uns, debout,se chauffaient autour de la machine, et la cheminée crachait avec un râle lent et rythmiqueson panache de fumée noire ; des gouttelettes de rosée coulaient sur les cuivres ; le ponttremblait sous une petite vibration intérieure, et les deux roues,tournant rapidement, battaient l'eau.</p>
</div>
{% endhighlight %}

{% highlight css %}
body {
  font: 16px/22px Georgia, serif;
}

div {
  background: beige;
  color: #333;
  padding: 20px;
  width: 400px;
}

h1 {
  background: FireBrick;
  color: white;
  float: left;
  font-size: 18px;
  margin-right: 10px;
  padding: 20px;
  width: 100px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/education.png" alt="L'éducation">
</figure>

Un conteneur : la div, en beige.  
Un titre : le h1. Et des paragraphes qui suivent.  
Le h1 est flottant. A gauche. Et il a une largeur fixe, un background et du padding. Puis un margin-right, pour le décoller du texte à sa droite.

A sa droite ? Comment est-ce possible ? Comment le `<p>` qui suit le `<h1>` se retrouve au côté de ce dernier ? C’est tout l’art du float.

* le float sur le h1 le fait caler à gauche. Le plus à gauche possible compte tenu de son conteneur, son parent la div qui a un padding 20px.
* le p suivant, voyant le h1 se languir sur le côté gauche, ne se laisse pas prier pour occuper l’espace restant ! L’espace à droite du h1 est vide. Pourquoi le p s’en priverait-t-il ?

Jouons un peu.  
Que serait ce h1 et ce p sans le float left du premier ?

{% highlight css %}
h1 {
  background: FireBrick;
  color: white;
  font-size: 18px;
  margin-right: 10px;
  padding: 20px;
  width: 100px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/sans-education.png" alt="Sans éducation">
</figure>

Comme d’habitude : l’un à la suite de l’autre. L’un en-dessous de l’autre.

Autre option : enlever la largeur fixe mais garder le float.

{% highlight css %}
h1 {
  background: FireBrick;
  color: white;
  float: left;
  font-size: 18px;
  margin-right: 10px;
  padding: 20px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/education-minimale.png" alt="Education minimale">
</figure>

Oui, il reste de l’espace à droite, mais il en reste moins.
A vrai dire, le float rend le h1 **efficace**. Le h1 utilise l’espace _minimum_ nécessaire pour que son contenu rentre.

La largeur d’un élément flottant est au minimum celle du texte qu’il contient.  
Et au maximum ? Celle de son conteneur. Ou comme si il n’y avait pas de float, ni de largeur définie.

#### Perdu de vue

Un parent, un enfant.  
Le parent beige, l’enfant rouge. Ce dernier se rebelle et se met à flotter en solitaire, à la dérive.  
Le parent le perd de vue. Il panique. Et sa hauteur s’en voit disparaître.

{% highlight html %}
<div class="dix-dix-huit">
  <h1>L'éducation sentimentale</h1>
</div>
{% endhighlight %}

{% highlight css %}
body {
  font: 16px/22px Georgia, serif;
}

.dix-dix-huit {
  background: beige;
  color: #333;
  padding: 20px;
  width: 400px;
}

h1 {
  background: FireBrick;
  color: white;
  float:left;
  font-size: 18px;
  margin-right: 10px;
  padding: 20px;
  width: 100px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/enfant-perdu.png" alt="L'enfant perdu">
</figure>

<figure class="image">
  <img src="/images/mesures-enfant-perdu.png" alt="Mesures de l'enfant perdu">
</figure>

Le résultat est surprenant. Mais logique.  
Lorsqu’un élément se met à flotter, il sort du **flux**. Quelle que soit sa hauteur, elle n’agit plus sur celle des autres directement. C’est pourquoi la div fait 0px de hauteur. La zone beige que l’on voit correspond aux 40px de padding (en hauteur).

Le détective se met à poser des questions :

**1.** Pourquoi la div avec les paragraphes ne réagissait pas comme ça ?  
Justement parce que les paragraphes étaient là. La hauteur de la div correspondait à celle des paragraphes (qui étaient non flottants).

<figure class="image">
  <img src="/images/enfant-retrouve.png" alt="L'enfant retrouvé">
</figure>

**2.** Comment faire en sorte que la div tienne compte de la hauteur du h1 flottant ?  
Il faut pour cela faire re-rentrer le h1 dans le flux  
Avec un clear: left à la suite du h1

{% highlight html %}
<div class="dix-dix-huit">
  <h1>L'éducation sentimentale</h1>
  <div style="clear: left;"></div>
</div>
{% endhighlight %}

La div en clear left n’a pas de hauteur, ni de largeur, parce qu’elle n’a aucun contenu. Son rôle est uniquement de réinsérer le h1 dans le flux. Un rôle ingrat mais primordial.

Alternative : appliquer un float au parent :

{% highlight css %}
.dix-dix-huit{ float: left;}
{% endhighlight %}

**3.** Mais si le parent est en float, il sort du flux aussi ?  
Oui, et l’histoire recommence. Pour le remettre sur le droit chemin, il faut appliquer un float au parent ou bien ajouter un clear à la suite...  
Par expérience, il est préférable d’utiliser **exclusivement** la propriété clear pour réinsérer un élément précédent dans le flux. Pourquoi ? Parce que c’est son rôle. Unique !

Quitte à insérer des div dédiées à cette tâche :

{% highlight css %}
.cl,
.cr,
.cb {
  display:block !important;
  float:none !important;
  height:0 !important;
}

.cl {
  clear:left;
}

.cr {
  clear:right;
}

.cb {
  clear:both;
}
{% endhighlight %}

Votre développeur vous remerciera.

### Un flottement, des rives

Un float ça va. Plusieurs... et l’océan gronde.

{% highlight html %}
<p>Damoiselle Belette, au corps long et flouet,</p>
<p>Entra dans un grenier par un trou fort étroit :</p>
<p>Elle sortait de maladie.</p>
<p>Là, vivant à discrétion,</p>
<p>La galande fit chère lie,</p>
<p>Mangea, rongea : Dieu sait la vie,</p>
<p>Et le lard qui périt en cette occasion !</p>
{% endhighlight %}

{% highlight css %}
body {
  font: 16px/22px Georgia, serif;
}

p {
  background: PaleVioletRed;
  border-right: 1px solid Maroon;
  float: left;
  padding: 10px;
  width: 100px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/floats-au-grenier.png" alt="Float au grenier">
</figure>

Les éléments se suivent. Horizontalement. Ils se collent les uns à la suite des autres, tant qu’il y a de la place sur les côtés.  
Otez cette largeur fixe ! Redimensionnez votre fenêtre ! Allongez les textes ! Le float se comprend d’autant plus que l’on le fait vivre. Il faut bouleverser son environnement, son espace vital, et il se déformerera indéfiniment pour mieux occuper l’espace qu’on lui réserve.  
Imaginez un aimant attiré par le côté haut/gauche, qui tentera coûte que coûte de s’approcher de ce point de ralliement.  
Le coin est au float ce que le Soleil est à Icare !

### Empire State

Une seule alternative au left : le float right.  
Une simple réflexion ? Une douce symétrie axiale ? Je dirais oui.

Un détail qui n’en est pas un : pour plusieurs éléments en float right successifs, le 1er dans le code sera le 1er collé tout à droite. Pour nous, français, cantonnés à l’alphabet latin et sa lecture unidirectionnelle, il va falloir ouvrir notre esprit et accepter cette logique.

En position flottante, les éléments partis à la dérive arrivent au bout de leur voyage. Sans flotter, ils prennent néanmoins position. La statique ne leur sied plus. Ils sont dans l’absolu, le relatif, et se [fixent](/7-prise).
