---
order: 2
layout: default
title: Le pinceau
subtitle: "CSS : syntaxe, sélecteurs, héritage"
permalink: /2-pinceau/
---

Il y a peu de science en CSS.  
Des propriétés par dizaines. Des valeurs par douzaines. Des lignes de conduite.  
Tout l’art en CSS consiste à manier l’indépendance des éléments, la concision du code et l’efficacité des sélecteurs.

Pour commencer :
Fichier -> Nouveau document

{% highlight css %}
p{ color: magenta;}
{% endhighlight %}

Sauvegarder -> style.css  
Ouvrez index.html et rechargez la page.  
La beauté incontestable de cette page vous laisse sans voix.

<figure class="image">
  <img src="/images/Well.png" alt="Euuuh...">
  <figcaption>"C'est... joli"</figcaption>
</figure>

La syntaxe est là :

{% highlight css %}
selecteur{ propriété: valeur;}
{% endhighlight %}

Le `<p>` du HTML est stylé grâce au p en CSS. En vérité, tous les `<p>` sont stylés comme tel.

Mais voilà, on ne veut pas forcément styler tous les `<p>` mais seulement certains, voire un seul.  
On peut alors sélectionner certains `<p>` en leur ajoutant l’attribut “class”.

{% highlight html %}
<p class="introduction">Les roses sont rouges.</p>
{% endhighlight %}

Une classe en HTML correspond à un point “.” en CSS.

{% highlight css %}
.introduction{ color: pink;}
{% endhighlight %}

Cette classe est réutilisable autant de fois que vous le voulez, et peut s’appliquer à d’autres balises aussi.

Si vous ne voulez styler qu’un seul élément, utilisez l’identifiant :

{% highlight html %}
<p id="introduction">Les violettes sont bleues.</p>
{% endhighlight %}

Un id en HTML correspond à un dièse “#” en CSS.

{% highlight css %}
#introduction{ color: purple;}
{% endhighlight %}

L’inconvénient de l’id est qu’il n’est utilisable qu’une seule fois par page HTML. Je le déconseille.

Un tableau vaut mieux que mille mots.

<table>
  <thead>
    <tr>
      <th>HTML</th>
      <th>Sélecteurs CSS possibles</th>
      <th>Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><pre>&lt;p&gt;&lt;/p&gt;</pre></td>
      <td>p</td>
      <td>Tous les &lt;p&gt;</td>
    </tr>
    <tr>
      <td><pre>&lt;div class="global"&gt;&lt;/div&gt;</pre></td>
      <td>div<br>
      .global<br>
      div.global</td>
      <td>Toutes les &lt;div&gt;<br>
      Tous les éléments avec class=”global”<br>
      Toutes les &lt;div&gt; ayant class=”global”</td>
    </tr>
    <tr>
      <td><pre>&lt;ul id="menu"&gt;</pre></td>
      <td>#menu<br>
      ul#menu</td>
      <td>L’élément qui a id=”menu”<br>
      Le &lt;ul&gt; qui a id=”menu”</td>
    </tr>
    <tr>
      <td><pre>&lt;ol class="dico"&gt;
  &lt;li&gt;Un cobaye&lt;/li&gt;
  &lt;li&gt;Des cobaux&lt;/li&gt;
&lt;/ol&gt;</pre></td>
      <td>li<br>
      ol li<br>
      .dico li</td>
      <td>Tous les &lt;li&gt;<br>
      Tous les &lt;li&gt; ayant un &lt;ol&gt; comme ancêtre<br>
      Tous les &lt;li&gt; ayant un élément class="dico" comme ancêtre</td>
  </tr></tbody>
</table>

Il y a pléthore de sélecteurs CSS possibles, du plus spécifique au plus global.

Il est d'ailleurs possible de regrouper plusieurs sélecteurs pour un même groupe de propriétés, et ainsi éviter de répéter les mêmes valeurs plusieurs fois inutilement. Il suffit de séparer les sélecteurs par des virgules :

{% highlight css %}
/* Avant */
.one{ color:blue; font-size:12px; font-weight:bold; line-height:14px;}
.two{ color:green; font-size:12px; font-weight:bold; line-height:14px;}
.three{ color:magenta; font-size:12px; font-weight:bold; line-height:14px;}
/* Après */
.one,.two,.three{ font-size:12px; font-weight:bold; line-height:14px;}
.one{ color:blue;}
.two{ color:green;}
.three{ color:magenta;}
{% endhighlight %}

Cette pratique est très utile lorsque vous voudrez modifier ultérieurement vos valeurs car ces dernières seront regroupées en un seul point.  
Elle s'avère indispensable lorsqu'il s'agit de modifier uniquement le `background-position` de plusieurs éléments partageant le même `background-image`.

### Chez le notaire

Il est possible qu’un ancêtre style un descendant. Prenez comme exemple :

{% highlight css %}
body{ color:red;}
{% endhighlight %}

Toutes les balises étant enfants/descendants de `<body>`, tout le texte sera rouge.

Enfin… Certaines balises ne se laissent pas dominer par leurs ancêtres. Les `<a>` par exemple resteront bleus.  
De même, certaines propriétés ne se propagent pas aux enfants :

{% highlight css %}
body{ border:2px solid orange;}
{% endhighlight %}

Une seule grosse bordure sera visible, pour le `<body>`, mais par pour ses descendants.

### Internal affairs

Jusqu’à présent je vous ai fait mettre le CSS dans un fichier à part.  
Il existe néanmoins deux approches alternatives de l’ennemi en passant directement par le HTML :

**1.** **balises** de style

{% highlight html %}
<style type="text/css">
p{ color: green;}
</style>
<p>Heureux qui comme Ulysse…</p>
{% endhighlight %}

**2.** **attribut** HTML

{% highlight html %}
<p style="color: green;">A fait un beau voyage…</p>
{% endhighlight %}

Le souci du 1 est d’avoir à répéter le code CSS autant de fois qu’il y a de pages.  
Le souci du 2 est d’avoir à répéter le code CSS autant de fois qu’il y a d’éléments à styler.  
Ces deux approches sont donc utilisées ponctuellement, pour styler au cas par cas, car elles sont prioritaires face au fichier CSS externe.

### En file d'attente

{% highlight html %}
<div>
  <p>Par les champs et les grèves</p>
</div>
{% endhighlight %}

Cet élément `<p>` se retrouve face à un dilemme. Une partie de la CSS lui dit d’être vert, une autre d’être orange.

{% highlight css %}
div{ color: green;}
p{ color: orange;}
{% endhighlight %}

Le p, qui le cible directement, vaincra, quel que soit l’ordre :

{% highlight css %}
p{ color: orange;} /* Vainqueur */
div{ color: green;}
{% endhighlight %}

Une **classe** est plus forte.

{% highlight html %}
<div>
  <p class="nenuphar">Par les champs et les grèves</p>
</div>
{% endhighlight %}

{% highlight css %}
div{ color: green;}
p{ color: orange;}
.nenuphar{ color: blue;} /* Vainqueur */
{% endhighlight %}

Néanmoins la classe est terrassée par l’**identifiant**.

{% highlight html %}
<div>
  <p id="magnolia" class="nenuphar">Par les champs et les grèves</p>
</div>
{% endhighlight %}

{% highlight css %}
div{ color: green;}
p{ color: orange;}
.nenuphar{ color: blue;}
#magnolia{ color:red;} /* Vainqueur */
{% endhighlight %}

Classement de la compétition de priorité, avec l’exemple précédent, du moins au plus spécifique :

<table>
  <tbody>
    <tr>
      <td>*</td>
      <td>Toutes les balises (à éviter)</td>
    </tr>
    <tr>
      <td>body</td>
      <td>Un ancêtre</td>
    </tr>
    <tr>
      <td>div</td>
      <td>Un ancêtre plus proche (le parent)</td>
    </tr>
    <tr>
      <td>body p</td>
      <td>Un p dans un body (grâce à l’espace)</td>
    </tr>
    <tr>
      <td>div p</td>
      <td>Un p dans une div</td>
    </tr>
    <tr>
      <td>div &gt; p</td>
      <td>Un p directement précédé d’une div</td>
    </tr>
    <tr>
      <td>body div p</td>
      <td>p dans div dans body</td>
    </tr>
    <tr>
      <td>.nenuphar</td>
      <td>La classe</td>
    </tr>
    <tr>
      <td>#magnolia</td>
      <td>L’identifiant</td>
    </tr>
    <tr>
      <td>&lt;p style="…"&gt;</td>
      <td>Directement sur la balise : très puissant</td>
    </tr>
    <tr>
      <td>!important</td>
      <td>Imbattable (à utiliser en dernier recours)</td>
    </tr>
  </tbody>
</table>

Un mot sur le grand vainqueur : **!important**.

{% highlight css %}
p{ color: red !important;}
{% endhighlight %}

Absolument à éviter, car difficile à contourner. L’utiliser, c’est comme si tout repartait de zéro :

{% highlight css %}
div p{ color: blue !important;} /* Vainqueur */
p{ color: red !important;}
{% endhighlight %}

Comment savoir qui gagne exactement ?
Google Chrome / Safari : Ctrl + Shift + C
Ou Firefox + Firebug.

<figure class="image">
  <img src="/images/mon-paragraphe-ma-bataille.png" alt="Mon paragraphe, ma bataille">
  <figcaption>Le sélecteur vainqueur : ici la balise HTML "style"</figcaption>
</figure>

### La jachère

Reprenons. Supprimez tout. Jetez votre code CSS, tel un caillou évasif.  
Gardez le HTML. Observez.  
Cette couleur. Ces marges. Cette police.  
Oui, votre page est déjà stylée. Un minimum. Un strict minimum.  
Le coupable est là ! Devant vous. Depuis le début. Il vous observe autant que vous l’observez. Votre navigateur.

Livré avec une CSS système. Des valeurs par défaut, légèrement différentes selon le navigateur. Comment s’en débarasser (de la CSS, pas du navigateur) ?  
Impossible de ne pas appeler la CSS système. Il faut l’overrider. La quoi ? L’overrider ! Hein ? L’OVERRIDER. Aaaaaaaah. L’overrider.

Réduire à néant. Partir de rien pour devenir tout. Au courage.  
Mais réduire quoi ? Et comment ?  
Rassurez-vous. Quelqu’un l’a fait : <a href="http://developer.yahoo.com/yui/reset/">Yahoo Reset CSS</a>.

{% highlight css %}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {
  margin:0;
  padding:0;
}
table {
  border-collapse:collapse;
  border-spacing:0;
}
fieldset,img {
  border:0;
}
address,caption,cite,code,dfn,em,strong,th,var {
  font-style:normal;
  font-weight:normal;
}
ol,ul {
  list-style:none;
}
caption,th {
  text-align:left;
}
h1,h2,h3,h4,h5,h6 {
  font-size:100%;
  font-weight:normal;
}
q:before,q:after {
  content:'';
}
abbr,acronym { border:0;
}
{% endhighlight %}

Collez-le en haut de votre CSS.  
A bas les marges, bordure, tailles du body, des p, des input !  
Place à vous, à votre style…

Votre pinceau ne se brisera plus de désespoir. Le vif sera <a href="/3-plaisir/">tranché</a>.
