---
order: 9
layout: default
title: "Bonnes pratiques CSS"
subtitle: "Le grand bassin"
permalink: /9-bonnes-pratiques/
---

On reconnaît l'excellence d'un code à son efficacité, à sa logique, à sa beauté. Un long chemin à parcourir, certes, mais en voici quelques étapes :

* Utiliser une CSS de base
* Ecrire les propriétés CSS sur une seule ligne et les classer par ordre alphabétique
* Regrouper les propriétés communes à différents sélecteurs
* Ne pas styler la balise `<form>`
* Utiliser uniquement des classes et pas d’id
* Songer à la disparition éventuelle d'un élément
* Ne pas utiliser le `line-height` comme des marges

Un souhait en particulier ? et il se peut que je vous l'accorde.

### Utiliser une CSS de base

Il faut toujours un point de départ à une intégration. C'est d'ailleurs souvent le même, alors pourquoi ne pas établir dès à présent une CSS de base qui regroupe l'essentiel des styles communément utilisés à travers plusieurs sites ?

#### Le reset

Indispensable pour assurer une certaine compatibilité entre les navigateurs, le reset réduit à néant les styles par défaut inclus dans chaque navigateur. Ça concerne les marges (internes et externes), les tailles de police, leur style etc. Une jachère dont j'ai [déjà parlé](/2-pinceau/#reset-css).  
Cependant, j'ai tendance à supprimer du reset les `<em>` et `<strong>` qui perdent leur style particulier. Je préfère garder leur style par défaut qui est très pratique pour les WYSIWYG. 
En somme, voici mon reset :

{% highlight css %}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
address,
caption,
cite,
code,
dfn,
var {
  font-style: normal;
  font-weight: normal;
}
ol,
ul {
  list-style: none;
}
caption,
th {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
q:before,
q:after {
  content: '';
}
abbr,
acronym {
  border: 0;
}
{% endhighlight %}

#### Le socle commun

Le `<body>` est le premier élément à styler. La plupart des propriétés qui lui sont appliquées sont transmises à ses descendants, c'est-à-dire toutes les balises visibles. La taille et couleur du texte sont généralement établies ici.  
Par contre, certaines balises n'héritent pas du body. Il faut alors redéfinir ces mêmes valeurs pour d'autres sélecteurs. Le CSS étant pratique, il est bien évidemment possible de regrouper plusieurs sélecteurs pour un même groupe de propriétés :

{% highlight css %}
body,
button,
input,
select,
textarea {
  color: #333;
  font-family: Arial, Verdana, sans-serif;
  font-size: 12px;
  line-height: 16px;
}
{% endhighlight %}

#### Les liens

<p>La base du http. Mais leur <span style="color:#00f; text-decoration:underline;" title="N'est-ce pas ?">couleur</span> laisse parfois à désirer.</p>

{% highlight css %}
a { color: #0072bc; cursor: pointer; text-decoration: none;}
/* Le cursor: pointer est utile pour les cas où il ne s'affiche plus */

  a:visited { color: #8e599f;}
  /* Pas indispensable (pour les menus notamment) mais peut s'avérer pratique */

  a:hover { text-decoration: underline;}
{% endhighlight %}

Mon indentation n'est pas anodine : le `a` est le style **principal**, les `a:visited` et `a:hover` sont des **variations** du style principal, ou des compléments. Ces derniers ne se baladent jamais seuls.

#### Des classes utilisées à foison

{% highlight css %}
.wrap {
  margin: 0 auto;
  position: relative;
  width: 980px;
}
.cl,
.cr,
.cb {
  display: block !important;
  float: none !important;
  height: 0 !important;
}
.cl {
  clear: left;
}
.cr {
  clear: right;
}
.cb {
  clear: both;
}
{% endhighlight %}

Le wrap permet une chose : centrer un bloc.  
Lorsque vous avez un design dont le background prend toute la largeur, mais que le contenu reste centré, cette classe sera utilisée plusieurs fois.

{% highlight html %}
<div class="header">
  <!-- Background qui prend toute la largeur -->
  <div class="wrap">
    <!-- Contenu centré -->
  </div>
</div>
<div class="main">
  <!-- Background qui prend toute la largeur -->
  <div class="wrap">
    <!-- Contenu centré -->
  </div>
</div>
<div class="footer">
  <!-- Background qui prend toute la largeur -->
  <div class="wrap">
    <!-- Contenu centré -->
  </div>
</div>
{% endhighlight %}

En ce qui concerne les classes "cl", "cr" et "cb" (respectivement clear left, right et both), mon **expérience** vous suggère de les utiliser.  
La propriété clear a un rôle très simple et très ciblé : annuler un float, ce qui place l'élément avec le clear après un élément à float.  
Bien évidemment, le clear peut être appliqué ponctuellement lorsqu'il ne s'applique que sur un élément dans un contexte particulier. 
Mais imaginons un design à 2 colonnes :

{% highlight html %}
<div class="main">
  <div class="lead"></div><!-- En float left -->
  <div class="side"></div><!-- En float right -->
</div>
{% endhighlight %}

<aside>
Pour les <code>li</code>, il vaut mieux éviter de leur appliquer un "cb" car ils sont souvent fortement stylés. Dans ce cas, mettre un float au <code>ul</code> et un clear après.
</aside>

En l'état, le "main" fait 0px de haut, tous ses enfants étant flottants. Deux solutions :

* Appliquer un float au "main", mais ça ne ferait que déplacer le problème
* Ajouter un clear:both dans le "main", à la suite des 2 colonnes

Et c'est là que vous rajoutez `<div class="cb"></div>`. Votre développeur attitré vous remerciera, croyez-moi.

### Ecrire les propriétés CSS sur une seule ligne, par ordre alphabétique

Une CSS peut rapidement s'agrandir. Si vous prenez 1 ligne par sélecteur et 1 par propriété (voir par accolade aussi), au bout de 100 lignes vous aurez stylé 5% de votre site.

Je veux bien croire qu'un débutant veuille lister les propriétés CSS sur plusieurs lignes parce qu'il ne les connaît pas assez bien. Mais cette période d'apprentissage est vite dépassée. Au lieu de visualiser verticalement les **propriétés**, il est beaucoup plus intéressant de visualiser les **sélecteurs**.

<figure class="image">
  <img src="/images/css-format-long.png" alt="Une CSS bien longue">
  <figcaption>Avant : 42 lignes. Rallongé.</figcaption>
</figure>

<figure class="image">
  <img src="/images/css-format-optimal.png" alt="Une CSS optimale">
  <figcaption>Après : 7 lignes. Optimisé.</figcaption>
</figure>

La lecture des sélecteurs adjacents et/ou successifs devient limpide. La structure du site se dévoile à travers le classement des sélecteurs, et vous pouvez utiliser l'indentation comme marqueurs des variations.

#### Classer les propriétés par ordre alphabétique

Maintenant que vous placez toutes vos propriétés sur une seule ligne, comment s'y retrouver ? Il est facile de dépasser rapidement la douzaine de propriétés, qui, associées à leurs valeurs respectives, produisent des lignes plutôt denses.  
Quoi de plus logique que de s'appuyer sur une organisation simple et aussi évidente que l'ordre alphabétique ? Pour :

* Eviter de **répéter** 2 fois la même propriété (et ne pas comprendre pourquoi la valeur que vous mettez ne s'applique pas)
* **Retrouver** facilement une propriété ("width" à la fin, "background" et "border" au début, "font-size" vers le milieu avant "height")
* Retenir **mécaniquement** le nom des propriétés, et leur fréquence d'utilisation (background, font-size, margin, padding très utilisés. Cursor, text-decoration, word-spacing, font-variant beaucoup moins).

### Regrouper les propriétés communes à différents sélecteurs

Quitte à optimiser notre code, autant commencer par l'essentiel : **ne pas se répéter**. DRY code, comme diraient certains [chauffeurs de train](https://twitter.com/holinnn "Le bougre").  
En ce qui nous concerne, il s'agit principalement d'éviter la répétition de propriétés qui sont partagées par plusieurs sélecteurs. Un exemple est sur ce site même :

{% highlight css %}
.twitter,.google,.facebook{ float:left;}
.facebook{ left:15px; position:relative; top:-2px;}
{% endhighlight %}

Les trois boutons de partage partagent une même propriété : le float left. Mais l'élément facebook a un style particulier supplémentaire.

Ce partage des propriétés aurait pû être décliné en une **classe à part entière** :

{% highlight css %}
.share-button{ float:left;}
.facebook{ left:15px; position:relative; top:-2px;}
{% endhighlight %}

Mais dans ce cas, mon code HTML aurait été plus long :

{% highlight html %}
<!-- Avant -->
<div class="twitter"></div>
<div class="google"></div>
<div class="facebook"></div>

<!-- Après -->
<div class="twitter share-button"></div>
<div class="google share-button"></div>
<div class="facebook share-button"></div>
{% endhighlight %}

Dans ce cas précis, cette alternative n'est pas abhérente étant donné qu'il n'y a que 3 éléments à styler. Mais elle le deviendra dès que le nombre de classes à ajouter dépassera les 10 (voire les 5 déjà).

Ça me rappelle un sprite géant de 196 icônes déclinées en 3 tailles où la seule différence entre les icônes était le `background-position` :

{% highlight css %}
/* Ligne commune */

.icon {
  background: url(icon.png) no-repeat top left;
  float: left;
  height: 64px;
  margin: -15px 5px 5px -5px;
  position: relative;
  width: 64px;
}
/* Distinction des 196 icônes */

.sprite-20-AC {
  background-position: 0 0;
}
.sprite-20-AC {
  background-position: -30px 0;
}
.sprite-20-DC {
  background-position: -60px 0;
}
.sprite-20-DC {
  background-position: -90px 0;
}
.sprite-20-FC {
  background-position: -120px 0;
}
.sprite-20-FC {
  background-position: -150px 0;
}
.sprite-20-MC {
  background-position: -180px 0;
}
.sprite-20-MC {
  background-position: -210px 0;
}
.sprite-20-Sign_1 {
  background-position: -240px 0;
}
.sprite-20-Sign_10 {
  background-position: -270px 0;
}
.sprite-20-Sign_11 {
  background-position: -300px 0;
}
.sprite-20-Sign_12 {
  background-position: -330px 0;
}
.sprite-20-Sign_2 {
  background-position: -360px 0;
}
.sprite-20-Sign_3 {
  background-position: -390px 0;
}
.sprite-20-Sign_4 {
  background-position: -420px 0;
}
.sprite-20-Sign_5 {
  background-position: -450px 0;
}
.sprite-20-Sign_6 {
  background-position: -480px 0;
}
.sprite-20-Sign_7 {
  background-position: -510px 0;
}
.sprite-20-Sign_8 {
  background-position: -540px 0;
}
.sprite-20-Sign_9 {
  background-position: -570px 0;
}
/* Etc. sur 588 lignes. Un régal. */
{% endhighlight %}

Rassurez-vous : le sprite (l'image) et sa CSS associée avaient été générés avec cet [excellent outil](http://spritegen.website-performance.org/).

### Ne pas styler la balise <form>

La balise `<form>` joue un rôle bien précis, défini par les éléments qui la constitue ainsi que son paramètre "action" qui définit la cible de sa soumission. En somme, un formulaire est **fonctionnel** avant tout. Les données qu'il peut utiliser sont celles qui sont à l'**intérieur** de lui.  
C'est pourquoi un développeur est amené à **déplacer** la balise `<form>` où bon lui semble, de sorte à inclure toutes les informations dont le formulaire a besoin. J'ai déjà vu un `<form>` ouvert juste après le `<body>` et qui englobait donc tout le site ! C'est dire si les contraintes d'un site peuvent amener à un code curieux... 
Pour éviter que votre développeur préféré anéantisse votre design en bougeant uniquement la balise `<form>`, utilisez une simple `<div>` :

{% highlight html %}
<div class="form">
  <form action="/">
    <!-- Elements du formulaire -->
  </form>
</div>
{% endhighlight %}

{% highlight css %}
.form{ /* Votre style */}
form{ /* Rien du tout */}
{% endhighlight %}

### Utiliser uniquement des classes et pas d’id

Une bonne pratique controversée mais qui a fait ses preuves.  
Je ne suggère pas de bannir les id, mais d'éviter au maximum de les utiliser. Déjà, il faut connaître ses rôles multiples :

* Ancre d'un élément  
Un élément `<div id="conclusion">` pourra être accédé via l'URL en ajoutant à la fin de cette dernière "#conclusion".
* Associer un label à un input/textarea 
L'attribut "for" d'un `<label>` l'associe à l'élément dont l'id est identique.  
Ainsi, en cliquant sur `<label for="nom">`, le curseur se placera dans l'<input id="nom" type="text">
* Identifiant unique  
Permet d'identifier un élément pour qu'il soit sélectionné en CSS (#element) ou en JS (document.getElementById()).

Oui, un id peut être utilisé comme sélecteur CSS. Mais il pose des soucis de priorité.

#### Comprendre la priorité en CSS

Utilisons des nombres. En CSS :

* id vaut 100
* une classe 10
* un sélecteur générique 1

{% highlight html %}
<div class="menu">
  <ul>
    <li>
      <a class="item" id="home">Accueil</a>
    </li>
  </ul>
</div>
{% endhighlight %}

{% highlight css %}
.list ul li a.item {
  color: orange;
}
/* Score 023 */

#home {
  color: green;
}
/* Score 100 */
{% endhighlight %}

<p>
  Le lien est <span style="color:green;">vert</span> alors que la 1ère ligne est nettement plus <strong>spécifique</strong> mais utilise des sélecteurs moins puissants.
  <br>
  Cette domination de l'id peut poser des soucis lorsque l'on n'est pas habitué à ces règles de conduite entre sélecteurs.
</p>

C'est pourquoi il est préférable de s'affranchir des #id en CSS.  
Un `<div class="header">` est tout aussi facile à utiliser qu'un `<div id="header">`, quand bien même ce header n'apparaît qu'une seule fois dans la page !  
Un des arguments souvent utilisés en faveur des id est, qu'étant utilisable qu'une seule fois par page HTML (sous peine de ne pas passer la validation W3C), qu'il s'applique sur des éléments **uniques**. En vérité, ce faux argument est une contrainte **auto-imposée**, qui oblige l'intégrateur à ne pas placer 2 headers dans la même page.  
Entre vous et moi, le fait d'utiliser `<div class="header">` n'empêche en **aucun cas** de se restreindre à 1 seul header par page ! La rigueur certaine que vous appliquerez à votre code HTML est suffisante pour ne pas commettre ce genre d'erreur.

En somme : l'utilisation d'une classe à la place d'un id **n'empêche pas** de ne l'utiliser qu'une seule fois.

### Songer à la disparition éventuelle d'un élément

Les éléments HTML arrivent et repartent à souhait, au bon gré du développeur qui fabrique ses pages à l'aide des éléments à sa disposition.  
L'intégrateur, qui souvent se "restreint" à la création de **templates** uniques, ne voit pas toujours une page vivre sous l'impulsion du dynamisme d'un langage de programmation.  
En d'autres termes, il arrive régulièrement qu'un intégrateur réalise des templates très riches, mais au final, ne voit son oeuvre que sous l'angle d'une disposition **unique** et particulière. Il place _tous_ ses blocs et style parfaitement leur graphisme et leurs **jonctions**, mais oublie souvent l'éventuelle possibilité de la disparition de l'un d'entre eux.

Prenons 3 blocs :

{% highlight html %}
<div class="post">
  <h1 class="post-title">
    L'étranger
  </h1>
  <p class="post-info">
    Publié le 15 septembre 1942 dans <a>Romans</a>
  </p>
  <div class="post-content">
    <p>
      J'ai pris le tram pour aller à l'établissement de bains du port. Là, j'ai plongé dans la passe. Il y avait beaucoup de jeunes gens. J'ai retrouvé dans l'eau Marie Cardona, une ancienne dactylo de mon bureau dont j'avais eu envie à l'époque. Elle aussi, je crois. Mais elle est partie peu après et nous n'avons pas eu le temps. Je l'ai aidée à monter sur une bouée et, dans ce mouvement, j'ai effleuré ses seins.
    </p>
  </div>
</div>
{% endhighlight %}

{% highlight css %}
.post {
  background: #fafafa;
  border: 1px solid #eee;
  font-size: 14px;
  line-height: 20px;
  margin: 40px;
  padding: 40px;
  width: 480px;
}

.post-title {
  font-family: Georgia, serif;
  font-size: 24px;
  line-height: 24px;
}

.post-info {
  font-size: 12px;
  margin-bottom: 20px;
}

.post-info,
.post-info a {
  color: #aaa;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/l-etranger.png" alt="L'étranger">
</figure>

Les marges, les espacements entre les blocs sont bien respectés. Les billets de blog sont souvent agencés de la sorte. 
Notez l'espace entre les infos et le contenu du billet. Il se trouve dans la CSS au niveau de `.post-info` en `margin-bottom`.

Cependant, imaginez une page fixe, telle la page "A propos" du blog. La ligne "post-info" disparaît :

<figure class="image">
  <img src="/images/a-propos.png" alt="A propos d'Albert Camus">
</figure>

La marge disparaît parce que l'élément à laquelle elle s'appliquait a disparu.  
Le code CSS ci-dessus n'a pas songé à cette éventualité là. Le design s'en trouve dégradé.  
Il aurait fallu se poser la question : est-ce que le titre est toujours présent ? Est-ce que le contenu est toujours présent ? Où est-il plus judicieux de placer cette marge ?

* Ajouter une `<div>` pour englober post-title et post-info

{% highlight html %}
<div class="post-heading">
  <h1 class="post-title">
    L'étranger
  </h1>
  <p class="post-info">
    Publié le 15 septembre 1942 dans <a>Romans</a>
  </p>
</div>
{% endhighlight %}

Le post-info peut disparaître sans souci si l'on applique la marge au post-heading

* Ou bien appliquer un margin-top au `post-content`, sous réserve que le `post-title` soit toujours présent 

{% highlight css %}
.post-info {
  font-size: 12px;
}

.post-content {
  margin-top: 20px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/a-propos-correct.png" alt="A propos d'Albert Camus">
</figure>

### Ne pas utliliser le line-height en guise de marges

Le line-height est une propriété souvent mal maîtrisée. Elle définit la hauteur d'**une** ligne, et non pas l'espacement entre les lignes.  
Ainsi, un paragraphe de 3 lignes ayant un font-size:12px et un line-height:16px aura un height _effectif_ de **48px**.

L'action d'un line-height est facilement visible sur des longs paragraphes, ou dans un textarea, où l'on se retrouve souvent avec plusieurs lignes.  
Les erreurs d'utilisation du line-height proviennent principalement des blocs ayant **1 seule ligne**. Pas exclusivement 1 seule ligne, mais la grande majorité du temps.

#### Une deuxième ligne oubliée

Prenons un titre et un paragraphe :

{% highlight html %}
<div class="book">
  <h1 class="title">
    La Peau de chagrin
  </h1>
  <p class="content">
    Si tu me possèdes, tu posséderas tout. Mais ta vie m'appartiendra. Dieu l'a voulu ainsi. Désire, et tes désirs seront accomplis. Mais règle tes souhaits sur ta vie. Elle est là. A chaque vouloir je décroîtrai comme tes jours. Me veux-tu ?
  </p>
</div>
{% endhighlight %}

{% highlight css %}
.book {
  background: #f2f5f6;
  line-height: 20px;
  padding: 40px;
  width: 440px;
}

.title {
  color: #656d70;
  font-size: 32px;
  margin-bottom: 30px;
}

.content {
  color: #bec3c5;
  font-size: 16px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/la-peau-de-chagrin.png" alt="La Peau de chagrin">
</figure>

Pas d'erreur en vue. Le line-height n'est défini qu'une seul fois, pour le bloc entier. 
Changeons le titre :

<figure class="image">
  <img src="/images/splendeurs-et-miseres.png" alt="Splendeurs et misères des courtisanes">
</figure>

La 2nde ligne est bien mal placée, bien trop près. Le titre a effectivement un font-size:32px mais un line-height:20px; hérité de son parent.  
Un souci qui n'en était pas un lorsqu'il n'y avait qu'une seule ligne.

#### Un line-height pour espacer le titre

Reprenons le même code HTML mais changeons la CSS :

{% highlight css %}
.book {
  background: #f2f5f6;
  line-height: 20px;
  padding: 0 40px;
  width: 440px;
}

.title {
  color: #656d70;
  font-size: 32px;
  line-height: 85px;
}

.content {
  color: #bec3c5;
  font-size: 16px;
  padding-bottom: 40px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/illusions-perdues.png" alt="Illusions perdues">
</figure>

Le titre se décale du bord du dessus ainsi que du contenu qui le suit grâce au line-height de 85px (!).  
Au premier abord, encore une fois, le résultat semble correct. Mais qu'advient-il lorsque le titre passe sur deux lignes ?

<figure class="image">
  <img src="/images/secrets-princesse.png" alt="Les Secrets de la princesse de Cadignan">
</figure>

Le résultat est éloquent : le line-height n'est **pas** fait pour espacer des éléments entre eux !  
Les margin et padding sont là pour ça. Le line-height définit la hauteur de chaque ligne, et il faut toujours considérer l'apparition d'une deuxième ligne.

#### Un line-height pour espacer des <li>

Cette erreur d'appréciation du line-height se retrouve souvent lors de création de petits menus, sur les côtés des blogs notamment.  
Prenons comme base celui d'ALA :

{% highlight html %}
<div class="topics">
  <h3>
    Topics
  </h3>
  <ul>
    <li>
      <a href="#code" title="Code">Code</a>
    </li>
    <li>
      <a href="#content" title="Content">Content</a>
    </li>
    <li>
      <a href="#culture" title="Culture">Culture</a>
    </li>
    <li>
      <a href="#design" title="Design">Design</a>
    </li>
    <li>
      <a href="#mobile" title="Mobile">Mobile</a>
    </li>
    <li>
      <a href="#process" title="Process">Process</a>
    </li>
    <li>
      <a href="#userscience" title="User Science">User Science</a>
    </li>
  </ul>
</div>
{% endhighlight %}

{% highlight css %}
.topics {
  border: 1px solid #eee;
  font-size: 12px;
  line-height: 12px;
  margin: 40px;
  padding: 20px 35px;
  width: 110px
}

.topics ul {
  list-style-type: disc;
}

.topics h3 {
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 12px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.topics li {
  line-height: 28px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/topics-bis.png" alt="Menu CSS">
</figure>

Encore une fois, rien à signaler. Mais le line-height a ici été (mal) utilisé pour espacer les `<li>` entre eux.  
Si "Design" devient "User Interface Design" :

<figure class="image">
  <img src="/images/topics-bis-bad.png" alt="Menu CSS">
</figure>

Le problème vient de la zone cliquable : avec un line-height pareil, il y a un espace "mort" entre "User Interface" et "Design" alors qu'il s'agit de la **même** et donc du même lien.  
Rajoutons un fond jaune aux liens pour bien situer la zone cliquable :

<figure class="image">
  <img src="/images/topics-bis-yellow.png" alt="Menu CSS">
</figure>

Pour remédier à ça, il faudrait une line-height _maximum_ de **15px**.

La question est : comment garder **exactement** le même design pour 1 ligne sans pour autant compromettre le design lorsqu'une deuxième ligne apparaît ?  
Calculons les dimensions lorsqu'il n'y a qu'**une seule ligne** :

* Chaque `<li>` fait 28px de haut
* **Cependant**, nous voulons un line-height de 15px.
* Nous allons compenser la diminution du line-height en ajoutant du **padding**
* 28px - 15px = 13px de padding vertical
* Il est préférable de le partager en deux. On aura donc un padding-top de 6px et un padding-bottom de 7px.

{% highlight css %}
.topics li{ line-height:15px; padding:6px 7px;}
{% endhighlight %}

<figure class="image">
  <img src="/images/good-topics-1.png" alt="Menu CSS">
  <figcaption>1 ligne : identique à celui du départ</figcaption>
</figure>

<figure class="image">
  <img src="/images/good-topics-2.png" alt="Menu CSS">
  <figcaption>2 lignes : pas de zone "morte" dans un même lien</figcaption>
</figure>

Libre à vous maintenant d'exercer votre Art et de maîtriser la Science à travers la rédaction de votre code, même si ce dernier restera invisible pour la majorité des visiteurs.  
Mais ne vous en faites pas pour si peu, car il n'y a, quoiqu'il en soit, pas d'éternité dans le regard de l'homme.

*[ALA]: A List Apart
*[DRY]: Don't Repeat Yourself
*[WYSIWYG]: What You See Is What You Get
