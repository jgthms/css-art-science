---
order: 8
layout: default
title: "Pratiques de base"
subtitle: "Le petit bassin"
permalink: /8-base/
---

Toute théorie reste infondée sans une pratique intensive. Ou l'inverse...  
Les propriétés sont connues, la plupart de leurs valeurs associées aussi. Mais qu'en faire ? Que souhaitez-vous faire ?  
Mettre cet objet à droite. Décaler cet élément. Agrandir ce texte. Espacer ces titres. Décorer ce bloc.  
Du mouvement, de la fluidité, de l'entrain !

### Centrer un élément

C'est une obsession très répandue que de vouloir centrer un site web. Moins répandue : celle de centrer du texte.  
La distinction n'est pas anodine, que ce soit visuellement ou syntaxiquement.

#### Centrer un élément inline

Et par inline, je parle surtout et avant tout de **texte**. Une seule propriété : text-align.

{% highlight html %}
<p>On se croit naturellement bien plus capable d'arriver au centre des choses que d'embrasser leur circonférence.</p>
{% endhighlight %}

{% highlight css %}
p{ text-align: center;}
{% endhighlight %}

Notez bien que le text-align s'applique à un **bloc**, mais que c'est le contenu inline de ce dernier qui sera centré.

#### Centrer un bloc

C'est un désir primaire que de vouloir centrer un bloc, voire _le_ bloc principal, le site lui-même !  
Par défaut, un bloc prend toute la largeur possible. Le centrer (horizontalement) correspond visuellement à avoir une marge _identique_ de part et d'autre de ce bloc.  
Encore faut-il savoir si ce dernier possède une largeur fixe ou non.

* **bloc à largeur variable**

{% highlight html %}
<p>On se croit naturellement bien plus capable d'arriver au centre des choses que d'embrasser leur circonférence.</p>
{% endhighlight %}

{% highlight css %}
p{ margin: 0 100px;}
{% endhighlight %}

La largeur reste variable mais le bloc s'écarte des bords.

* **bloc à largeur fixe**  
Ou bien la véritable définition du centrage d'un bloc. Une largeur fixe. Comment centrer alors ? Si l'on regarde l'exemple précédent, les marges sont fixes mais la largeur variable. Cette dernière s'ajuste _automatiquement_.  
Si ici la largeur est fixe, alors ce sont les marges qui doivent s'adapter _automatiquement_. La solution est dans le mot même :

{% highlight html %}
<p>On se croit naturellement bien plus capable d'arriver au centre des choses que d'embrasser leur circonférence.</p>
{% endhighlight %}

{% highlight css %}
p{ margin: 0 auto; width: 400px;}
{% endhighlight %}

Puisque le conteneur principal (le body) a une largeur variable (selon la résolution de l'écran généralement) et le `<p>` une fixe, ce sont les marges qui vont arbitrer le positionnement central du bloc. Avec la valeur "auto" appliquées aux **deux** côtés, les margin-left et margin-right seront toujours **égaux** et s'ajusteront simultanément.

### Deux colonnes côte à côte

C'est une configuration très répandue et très désirée (car désirable), surtout depuis l'avènement des blogs en tout genre. En général, la largeur des deux colonnes n'est pas identique, l'une d'elle servant avant de subordonnée de l'autre.

{% highlight html %}
<div class="main">
  <div class="lead">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt tincidunt elit, ac imperdiet risus accumsan eget. Praesent et sapien arcu, at lobortis purus. Donec eu velit eget elit fringilla fermentum id sit amet eros. Curabitur sit amet diam a sem vulputate lobortis eu at felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sem ligula, tempor sed dignissim non, hendrerit ut erat. Pellentesque congue euismod arcu, non tempor turpis volutpat eu. Donec sagittis auctor arcu, quis lobortis elit euismod non.
    </p>
    <p>
      Duis dolor augue, ornare et accumsan quis, faucibus sit amet risus. Fusce egestas adipiscing turpis non lobortis. Donec eleifend sollicitudin aliquet. Integer eget enim mauris. Phasellus lorem felis, suscipit id porta vitae, suscipit quis ante. Praesent et metus massa, et blandit urna. Nullam ultricies rhoncus leo at blandit. Morbi egestas, enim in sagittis rutrum, est nibh pulvinar mauris, nec suscipit dolor lectus et lacus. Ut vel justo sit amet arcu ullamcorper ultricies a a diam. In ultricies, risus laoreet convallis consectetur, mauris libero consectetur lacus, eget sagittis lacus orci quis dui. Donec sed tortor nibh.
    </p>
    <p>
      Integer sed odio dui. Vivamus quam neque, ultrices at suscipit non, tristique fermentum sapien. Nullam diam lectus, luctus sed semper vel, elementum et massa. Morbi venenatis tortor eu mauris sagittis tincidunt. Proin non urna at enim venenatis feugiat eu ut felis. Etiam auctor posuere lorem iaculis dictum. Duis venenatis urna non lectus accumsan mollis. Integer gravida dapibus enim, et porttitor eros vulputate quis. Praesent eget leo neque. Praesent pharetra velit sit amet purus tempor semper. Sed odio sem, faucibus quis ullamcorper ac, varius in quam. Donec quis ante non metus egestas consectetur. Aenean rhoncus pretium rhoncus. Nam sollicitudin sem quis risus placerat aliquam.
    </p>
  </div>
  <div class="side">
    <p>
      La modestie doit être la réaction naturelle de l'homme qui reçoit les acclamations que lui ont valu le sang versé par ses subordonnés et le sacrifice de ses amis.
    </p>
  </div>
  <div style="clear:both;"></div>
</div>
{% endhighlight %}

{% highlight css %}
.main {
  margin: 0 auto;
  width: 980px;
}

.lead,
.side {
  padding: 20px;
}

.lead {
  background: #e2e9ec;
  float: left;
  width: 680px;
}

.side {
  background: #b7c9d1;
  float: right;
  width: 220px;
}
{% endhighlight %}

<figure class="image">
  <img src="/images/2-colonnes-css.png" alt="2 colonnes en CSS">
  <figcaption>Résultat : deux colonnes en CSS</figcaption>
</figure>

Tout d'abord un mot sur le **nom des classes**.  
Pourquoi "main", "lead" et "side" ?  
Pourquoi pas "main", "left" et "right" ?  
Quelle horreur !  
Imaginez que vous vouliez échanger l'emplacement des deux colonnes, soit les échanger, soit les mettre à la suite. Il faudra dans ce cas aussi modifier le nom des classes dans le HTML qui ne seront plus du tout pertinentes !  
C'est pourquoi il faut généralement donner à une classe le nom de la **fonction de la balise à laquelle elle s'applique**.  
Le "lead" est le contenu principal. Le "side" est le contenu _bis_. Libre à vous d'en modifier les noms, tant qu'il ne s'agit pas d'un nom lié au style qui lui est appliqué.

<p>Deuxième chose : dominus domini domino.<br>Du latin en guise de contenu principal ? Ce latin là, qui ne veut absolument rien dire, est bien connu des éditeurs. Il s'agit de <a href="http://fr.wikipedia.org/wiki/Faux-texte" title="Faux-Texte">faux-texte</a>. Des lignes de mots variés mais incompréhensibles, qui sont là pour leur <em>forme</em> et non pour leur <em>fond</em> (qui est d'ailleurs inexistant).<br>Bien plus intéressant qu'un mot unique répété répété répété répété répété répété répété répété une infinité de fois.<br>Bien plus efficace que du français pur jus car le <span style="text-decoration:line-through">lecteur</span> spectateur oublie le contenu pour ne se concentrer uniquement sur la mise en page.</p>

<aside>
  <p>
    Un rappel des dimensions.
  </p>
  <ul>
    <li>La <code>&lt;div class="main"&gt;</code> fait 980px de large.
    </li>
    <li>La <code>&lt;div class="lead"&gt;</code> fait 720px de large (680 en width, 40 en padding).
    </li>
    <li>La <code>&lt;div class="side"&gt;</code> fait 260px de large (220 en width, 40 en padding).
    </li>
  </ul>
  <p>
    Le compte y est.
  </p>
</aside>

Troisième chose : pourquoi le side est à droite alors qu'un `float: left` lui est appliqué ?  
A vrai dire, le "lead" étant calé à gauche, le "side" (qui est second dans le code) se cale à gauche autant que possible, dans l'espace que le "lead" lui laisse.  
Essayez par exemple de réduire la largeur du "lead" et vous verrez le "side" se déplacer vers la gauche, toujours **collé** au "lead".

Pourquoi ne pas appliquer un `float: right` au "side" alors ?  
A vrai dire, c'est même **mieux** si vous souhaitez coller le "side" à droite en toutes circonstances. De ce fait, une réduction de la largeur du "lead" résultera en un espace blanc entre les deux colonnes (et non plus à droite du "side").  
Autre avantage : avec un `float: right`, le "side" ne sera plus dépendant de sa position dans le code HTML. Il peut être placé _avant_ le "lead" sans pour autant modifier la mise en page.

### Trois colonnes côte à côte

Pourquoi s'arrêter en si bon chemin ?

{% highlight html %}
<div class="main">
  <div class="lead">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt tincidunt elit, ac imperdiet risus accumsan eget. Praesent et sapien arcu, at lobortis purus. Donec eu velit eget elit fringilla fermentum id sit amet eros. Curabitur sit amet diam a sem vulputate lobortis eu at felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sem ligula, tempor sed dignissim non, hendrerit ut erat. Pellentesque congue euismod arcu, non tempor turpis volutpat eu. Donec sagittis auctor arcu, quis lobortis elit euismod non.
    </p>
    <p>
      Duis dolor augue, ornare et accumsan quis, faucibus sit amet risus. Fusce egestas adipiscing turpis non lobortis. Donec eleifend sollicitudin aliquet. Integer eget enim mauris. Phasellus lorem felis, suscipit id porta vitae, suscipit quis ante. Praesent et metus massa, et blandit urna. Nullam ultricies rhoncus leo at blandit. Morbi egestas, enim in sagittis rutrum, est nibh pulvinar mauris, nec suscipit dolor lectus et lacus. Ut vel justo sit amet arcu ullamcorper ultricies a a diam. In ultricies, risus laoreet convallis consectetur, mauris libero consectetur lacus, eget sagittis lacus orci quis dui. Donec sed tortor nibh.
    </p>
    <p>
      Integer sed odio dui. Vivamus quam neque, ultrices at suscipit non, tristique fermentum sapien. Nullam diam lectus, luctus sed semper vel, elementum et massa. Morbi venenatis tortor eu mauris sagittis tincidunt. Proin non urna at enim venenatis feugiat eu ut felis. Etiam auctor posuere lorem iaculis dictum. Duis venenatis urna non lectus accumsan mollis. Integer gravida dapibus enim, et porttitor eros vulputate quis. Praesent eget leo neque. Praesent pharetra velit sit amet purus tempor semper. Sed odio sem, faucibus quis ullamcorper ac, varius in quam. Donec quis ante non metus egestas consectetur. Aenean rhoncus pretium rhoncus. Nam sollicitudin sem quis risus placerat aliquam.
    </p>
  </div>
  <div class="bis">
    <p>
      Tout homme est le centre d'un cercle dont il ne peut franchir la circonférence.
    </p>
  </div>
  <div class="ter">
    <p>
      La modestie doit être la réaction naturelle de l'homme qui reçoit les acclamations que lui ont valu le sang versé par ses subordonnés et le sacrifice de ses amis.
    </p>
  </div>
  <div style="clear:both;"></div>
</div>
{% endhighlight %}

{% highlight css %}
.main {
  margin: 0 auto;
  width: 980px;
}

.lead {
  background: #e2e9ec;
  float: left;
  padding: 30px;
  width: 500px;
}

.bis,
.ter {
  float: left;
  font-size: 14px;
  line-height: 20px;
  padding: 20px;
  width: 170px;
}

.bis {
  background: #b7c9d1;
}

.ter {
  background: #8ba9b6;
}

{% endhighlight %}

<figure class="image">
  <img src="/images/3-colonnes-css.png" alt="3 colonnes en CSS">
  <figcaption>Résultat : trois colonnes en CSS</figcaption>
</figure>

Premier constat : les 3 colonnes étant en `float:left`, leur ordre dans le HTML est primordial. "De haut en bas" dans le code HTML équivaut à "de gauche à droite" à l'affichage.

Aussi, pour intervertir les colonnes "bis" et "ter", rien de plus simple. Il suffit de leur appliquer un `float:right`.  
Comment ça marche ? Le `float:right` place le 1er élément dans le code ("bis") à droite, puis le 2ème ("ter") à sa gauche.

### Un tableau HTML

Décriés à tord par certains intégrateurs peu scrupuleux (et peu clairvoyants, n'est-ce pas), les tableaux sont un passage obligé car très utiles pour ceux qu'ils sont sensés mettre en forme : des données tabulaires. Un croisement d'informations absolument pratique.  
Un des soucis du code HTML d'un tableau est que ce code est extrêmement **bavard**. Enormément de balises pour un affichage minimal. Jugez vous-même :

{% highlight html %}
<table>
  <tr>
    <td>
      La peur de la mort est l'unique source des religions.
    </td>
  </tr>
</table>
{% endhighlight %}

Le code HTML ci-dessus est le code minimum nécessaire pour construire un tableau valide :

* `<table>`  
Elle entoure l'ensemble du tableau.
* `<tr>`  
Une ligne (tr = **t**able **r**ow).
* `<td>`  
Une cellule d'un tableau. (td = **t**able cell **d**elimiter).  
Elle doit forcément être directement enfant d'une balise `<tr>`
* `<th>`  
Identique au `<td>` mise à part qu'il s'agit d'un **titre** dans un tableau. (th = **t**able **h**eader cell ).

Quel est le lien entre l'**ordre** des balises dans le code HTML et l'affichage du tableau ?  
D'abord de de gauche à droite _puis_ de haut en bas.  
Cela vient du fait que le `<td>` est imbriqué dans le `<tr>`, et non pas l'inverse.

{% highlight html %}
<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tr>
</table>
{% endhighlight %}

{% highlight css %}
td{ background:#fafafa; border:1px solid #eee; color:#777; padding:2px 10px;}
{% endhighlight %}

<figure class="image">
  <img src="/images/ordre-cellules-tableau.png" alt="Ordre des cellules d'un tableau HTML">
  <figcaption>Ordre des cellules d'un tableau HTML</figcaption>
</figure>

Si votre résultat est différent, c'est que vous n'utilisez pas le [Reset CSS](/2-pinceau.html#reset-css). Ce dernier applique un style de base très utile aux tableaux :

{% highlight css %}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
{% endhighlight %}

Le `border-collapse` permet aux bordures des cellules d'être **confondues**. Ainsi, entre deux cellules adjacentes, la bordure a une épaisseur de 1 pixel. Le résultat est beaucoup plus sobre et pratique.  
En ce qui concerne le `border-spacing`, il s'agit de l'espacement _entre_ les cellules. Une sorte de `margin` particulier.

#### tbody, thead, tfoot : un tableau de la tête aux pieds

Déjà très morcelé, le tableau peut se dôter d'un corps en 3 parties :

{% highlight html %}
<table>
  <thead>
    <tr>
      <th>Titre</th>
      <th>Année</th>
      <th>Minutes</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Titre</th>
      <th>Année</th>
      <th>Minutes</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Day of the Fight</td>
      <td>1951</td>
      <td>16</td>
    </tr>
    <tr>
      <td>Flying Padre</td>
      <td>1951</td>
      <td>9</td>
    </tr>
    <tr>
      <td>The Seafarers</td>
      <td>1953</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

<figure class="image">
  <img src="/images/tableau-html-thead-tfoot-tbody.png" alt="Tableau HTML en 3 parties">
  <figcaption>Un tableau HTML en 3 parties</figcaption>
</figure>

Tout ceci n'est qu'une question de **sémantique**.  
Vous noterez que le `<tfoot>`, malgré qu'il soit avant le `<tbody>` dans le code HTML, se retrouve _à la fin_ à l'affichage.  
Cette particularité est une obligation. Le W3C le justifie par le fait que le `<tfoot>` doit être généré avant que les données (parfois très nombreuses) du `<tbody>` arrivent.

### Styler un formulaire

L'interactivité avec le serveur. Je demande, tu renvoies.  
Les formulaires sont omniprésents sur la toile, mais bien trop souvent pourvus d'un graphisme douteux. Pour cause : les formulaires sont difficiles à styler. Ils répondent différemment aux styles qu'on leur appliquent. Par exemple, le line-height est partiellement, voire totalement, inefficace sur les champs de texte.  
De plus, chaque navigateur possède à la base sa propre flopée de styles pour les éléments des formulaires. Alors quand il s'agit de réappliquer un style par-dessus, commun à tous, l'exercice s'avère tendu.  
En même temps, les formulaires sont là pour être utilisés avant d'être observés. Ils ont un rôle bien défini.

Malgré tout, un formulaire a le droit et la possibilité de se voir embelli par nos soins. Il suffit de bien apréhender les contraintes posées pour mieux les embrasser. Il y en a même qui écrivent des articles plutôt intéressants sur [comment réaliser un bon formulaire HTML](http://bbxdesign.com/2009/04/21/comment-realiser-un-bon-formulaire-html). C'est dire.

#### form

La balise `<form>` est celle qui englobe tous les éléments d'un formulaire.  
Ce formulaire a un rôle **unique**. Comprenez : tous les éléments inclus (champ texte, boutons radio, checkbox, menu select...) sont **associés**. C'est leur **combinaison** qui va définir ce que le formulaire va nous renvoyer par la suite.

{% highlight html %}
<form action="resultat.php"><!-- Eléments du formulaire --></form>
{% endhighlight %}

L'attribut "action" est obligatoire. Il définit où se trouve le fichier qui renverra le résultat de la soumission du formulaire.

#### input

Derrière cette balise, un grand nombre de possibilités selon la valeur de l'attribut "type" :

<table>
  <tbody>
    <tr>
      <th>
        Type
      </th>
      <th>
        Apparence
      </th>
      <th>
        Stylable ?
      </th>
    </tr>
    <tr>
      <td>
        <code>&lt;input type="text"&gt;</code>
      </td>
      <td>
        <input type="text" value="Un champ texte">
      </td>
      <td>
        Oui
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;input type="password"&gt;</code>
      </td>
      <td>
        <input type="password" value="123456789">
      </td>
      <td>
        Oui
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;input type="checkbox"&gt;</code>
      </td>
      <td>
        <input type="checkbox">
      </td>
      <td>
        Non
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;input type="radio"&gt;</code>
      </td>
      <td>
        <input type="radio">
      </td>
      <td>
        Non
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;input type="file"&gt;</code>
      </td>
      <td>
        <input type="file">
      </td>
      <td>
        Non (pas du tout même)
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;input type="submit"&gt;</code> ou <code>&lt;input type="button"&gt;</code>
      </td>
      <td>
        <input type="button" value="Soumettre le formulaire">
      </td>
      <td>
        Oui mais...
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;input type="reset"&gt;</code>
      </td>
      <td>
        <input type="reset">
      </td>
      <td>
        Oui mais...
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;input type="image" alt="Description"&gt;</code>
      </td>
      <td>
        <input type="image" src="input-type-image.png" alt="Une image pour soumission">
      </td>
      <td>
        Non
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;input type="hidden"&gt;</code>
      </td>
      <td>
        <input type="hidden" value="Une donnée utile">Invisible mais utilisé pour transmettre des données sans les afficher
      </td>
      <td>
        ...
      </td>
    </tr>
  </tbody>
</table>

#### textarea

Lorsqu'une seule ligne ne suffit plus...

<textarea style="height:140px; line-height:20px; max-width:550px; padding:10px; width:550px;" cols="100" rows="8">Le train, maintenant, roulait à toute vitesse, sur le plateau qui va de Bolbec à Sotteville. Il devait filer d'un trait à Paris, sans arrêt aucun, sauf aux points marqués pour prendre de l'eau. L'énorme masse, les dix-huit wagons, chargés, bondés de bétail humain, traversaient la campagne noire, dans un grondement continu. Et ces hommes qu'on charriait au massacre, chantaient, chantaient à tue-tête, d'une clameur si haute, qu'elle dominait le bruit des roues.</textarea>

Les attributs "cols" et "rows" ne sont plus obligatoires mais il est préférable de les garder pour d'antiques navigateurs.  
Le textarea répond aux indications de dimensions :

{% highlight css %}
textarea{ height:140px; line-height:20px; padding:10px; width:550px;}
{% endhighlight %}

Cependant, la réaction selon les navigateurs peut varier, notamment en ce qui concerne l'apparence de la scrollbar lorsque celle-ci apparaît.

Aussi, il faut désormais tenir compte de la tendance des navigateurs à offrir la possibilité à l'internaute de redimensionner à souhait les textarea, ce qui, en soit, est un net avantage pour l'internaute mais parfois un souci pour l'intégrité du design.  
Même si cette feature est contournable grâce à la propriété `textarea{ resize:none;}` (qui empêche le **redimensionnement du textarea**), je ne la conseille pas.  
Dans ce cas, il est préférable de bloquer uniquement le redimensionnement horizontal qui est souvent celui qui pose souci.

{% highlight css %}
textarea{ max-width:550px;}
{% endhighlight %}

<aside>Firefox 4 permet, comme Chrome, de redimensionner les textarea. Cependant, Firefox le fait bien mal. Alors que Chrome utilise les valeurs "height" et "width" aussi comme valeurs <em>minmales</em> du textarea, Firefox laisse la possibilité de redimensionner jusqu'à 0x0 pixel, ce qui est une bêtise totale. C'est pourquoi il faut doubler les valeurs height/width avec leurs compères min-height/min-width.</aside>

#### label

Le label ne fait rien en soi. Il est surtout là pour décrire les input auxquels il est associé.

{% highlight html %}
<label for="nom">Nom</label><br><input id="nom" type="text">
{% endhighlight %}

<figure class="image">
  <img src="/images/label-et-input-text.png" alt="Label et Input text">
  <figcaption>Un label et un input text, what else?</figcaption>
</figure>

L'attribut "for" est plutôt pratique : en cliquant sur le label "Nom", le focus est réalisé sur l'input text à l'id "nom".  
Vous me direz "Pourquoi ne pas cliquer directement dans l'input text ?". En l'occurence, oui. Le champ de texte est assez vaste pour être facilement cliquable.

<p>L'intérêt de la balise <code>&lt;label&gt;</code> se trouve lorsqu'elle est associée à des boutons radio <input type="radio"> ou des checkbox <input type="checkbox">. Comme vous pouvez le constater, la zone cliquable de ces boutons est plutôt restreinte. Voici comment y remédier :</p>

{% highlight html %}
<input id="oui" type="radio" name="question" value="oui">
<label for="oui">Oui</label>
<br>
<input id="non" type="radio" name="question" value="non">
<label for="non">Non</label>
{% endhighlight %}

<p class="image">
  <img src="img/boutons-et-label.png" alt="Boutons radio et label">
  <span>Les mots "Oui" et "Non" sont cliquables</span>
</p>

L'attribut "for" associe à nouveau chaque label à un bouton radio.  
L'attribut "name" quant à lui associe les boutons radio entre eux : cliquez sur l'un, ça désactive tous les autres. Logique : le choix est exclusif au sein des boutons radio. La zone cliquable s'est bien agrandie.

Mais oubliez cette syntaxe lorsqu'il en existe une plus légère et tout aussi efficace :

{% highlight html %}
<label>
  <input type="radio" name="question" value="oui"> Oui
</label>
<br>
<label>
  <input type="radio" name="question" value="non"> Non
</label>
{% endhighlight %}

Les input radio (et checkbox) peuvent être **imbriqués** dans un `<label>`. Résultat : on s'affranchit de l'utilisation des attributs for (pour le label) et id (pour les input). Une notation bien plus simple pour une zone cliquable tout aussi, voire légèrement plus grande.

#### Un formulaire CSS simple, valide et flexible

Avec un minimum de classes et de classe, on peut déjà arriver à un résultat intéressant.

{% highlight html %}
<div class="form">
  <form action="/">
    <p>
      <label>Name</label><br>
      <input type="text">
    </p>
    <p>
      <label>Email</label><br>
      <input type="text">
    </p>
    <p>
      <label>You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?</label><br>
      <label class="radio"><input name="punk" type="radio"> Yes</label><br>
      <label class="radio"><input name="punk" type="radio"> No</label>
    </p>
    <p>
      <label>Why's that?</label><br>
      <textarea></textarea>
    </p>
    <p>
      <input type="submit" value="Go ahead, make my day">
    </p>
  </form>
</div>
{% endhighlight %}

<div class="form">
  <form action="/">
    <p>
      <label>Name</label><br>
      <input type="text">
    </p>
    <p>
      <label>Email</label><br>
      <input type="text">
    </p>
    <p>
      <label>You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?</label><br>
      <label class="radio"><input name="punk" type="radio"> Yes</label><br>
      <label class="radio"><input name="punk" type="radio"> No</label>
    </p>
    <p>
      <label>Why's that?</label><br>
      <textarea></textarea>
    </p>
    <p>
      <input type="submit" value="Go ahead, make my day">
    </p>
  </form>
</div>

{% highlight css %}
.form {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 24px;
  padding: 20px;
  width: 600px;
}

.form input[type=text],
.form textarea {
  border: 2px solid #ddd;
}

.form input[type=text] {
  padding: 4px;
  width: 260px;
}

.form input[type=text]:focus,
.form textarea:focus {
  border-color: #e64135;
}

.form textarea {
  height: 120px;
  max-width: 578px;
  padding: 10px;
  width: 578px;
}

.form label {
  font-weight: bold;
}

.form .radio {
  cursor: pointer;
  font-weight: normal;
}
{% endhighlight %}

{% highlight css %}
/* Le bouton submit */

.form input[type=submit] {
  background: #f3f3f3;
  background: -webkit-gradient(linear, 0% 40%, 0% 70%, from(#F5F5F5), to(#F1F1F1));
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  color: #6e6e6e;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  padding: 7px 12px;
  position: relative;
  text-shadow: 0 1px 0 #fff;
  transition: border-color .218s;
}

.form input[type=submit]:hover {
  border-color: #999;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  color: #333;
}

.form input[type=submit]:active {
  border-color: #444;
  color: #000;
}
{% endhighlight %}

Les `<input type="text">` comprennent très mal, voire pas du tout, le `line-height`. Pour centrer le texte verticalement, il faut uniquement s'appuyer sur les `padding` : ici, 4px en haut et en bas.

Pratique cette page. En voilà des [bonnes](/9-bonnes-pratiques), d'ailleurs.
