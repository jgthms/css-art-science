---
order: 3
layout: default
title: Au plaisir des yeux
subtitle: "Color, font, text, word"
permalink: /3-plaisir/
---

Vous me lisez, je vous écris. Vous m’observez, je vous intrigue. Vous m’applaudissez, je…  
Le **texte** est là, et ici même. Stylé déjà.  
Coloré, espacé, étiré, rapproché, chargé, changé.  
Le style commence ici.

### Color

Un air de déjà vu.

{% highlight css %}
p{ color: aliceBlue;}
{% endhighlight %}

Un bleu pâle. Grâce à un nom. Illisible, certes.
Un rouge orangé pour y remédier.

{% highlight css %}
p{ color: tomato;}
{% endhighlight %}

Très bien. Mais mon coeur penche pour le bleu marine. Je me jette :

{% highlight css %}
p{ color: bleuMarine;}
{% endhighlight %}

Argh. Inexistant. Comment faire ? Trouver le nom correct ? Parmi la centaine qui existe ? Laborieux et imprécis.

Il y a plus simple.

#### RGB

A l’écran, les couleurs se promènent par trio.  
Du rouge, du vert, du bleu. Plus ou moins chacune. Une coalition pour mieux nous servir.  
D’une échelle de 0 à 255 inclus, il faut choisir successivement la quantité de rouge, de vert puis de bleu.  
Revenons à mon bleu marine. Du rouge, du vert, mais surtout du bleu.

{% highlight css %}
p{ color: rgb(47, 58, 97);}
{% endhighlight %}

Comment le trouver ? Photoshop. Fireworks. Illustrator. Ou sur [Color Picker](http://www.colorpicker.com/) par exemple. Choisissez une couleur et trouvez les valeurs R, G et B à droite.

Rajoutez un “a” (pour alpha) et jouez sur l’opacité.

{% highlight css %}
p{ color: rgba(47, 58, 97, 0.7);}
{% endhighlight %}

Mon bleu marine à 70% d’opacité.

#### Hexadécimal

La syntaxe rgb est un peu longue, un peu lente. Pourquoi ne pas se restreindre à 7 caractères ?

{% highlight css %}
p{ color: #2F3A61;}
{% endhighlight %}

2F pour le rouge  
3A pour le vert  
61 pour le bleu

Pour chaque duo de lettres, 256 valeurs possibles aussi. On compte de 0 à 9, puis de A à F.  
Par exemple pour le rouge :

* 00 : 0/256, soit 0% de rouge
* 01 : 1/256 de rouge
* ..
* 09 : 10/256 de rouge
* 0A (et non pas 10) : 11/256 de rouge
* ..
* 0F : 16/256 de rouge
* 10 : 17/256 de rouge
* 11
* 12
* ..
* 1A
* ..
* 1F
* ..
* F1
* F2
* ..
* FF : 256/256, soit 100% de rouge

<aside>
  <img src="/images/Wondering.png" alt="Mmmmh...">
  <h4>Tourne à droite chéri</h4>
  <p>Si le code hexadécimal est composé de 3 duos, où chaque duo est le même caractère en double, alors on gagne 3 caractères.</p>
  <pre><code>#C33</code></pre>
  <p>est équivalent à</p>
  <pre><code>#CC3333</code></pre>
</aside>

Après le rouge, pareil pour le vert. Pareil pour le bleu.  
Un code hexa(6)décimal.  
Non, n’apprenez pas par coeur, mais comprenez et utilisez le.  
[Color Picker](http://www.colorpicker.com/) et copiez-collez.

#### HSL

Alternative : **H**(ue) **S**(aturation) **L**(ightness).

En langue de coq : **Teinte Saturation Lumière**. Et mon bleu marine :

{% highlight css %}
p{ color:hsl(227%, 52%, 38%);}
{% endhighlight %}

Pour faire simple :

* La teinte, c’est la couleur.
* La saturation, c’est la quantité de couleur.
* La lumière, c’est la quantité de blanc.

Pratique pour jouer sur une valeur sans changer les deux autres.

Comme pour le rgba, le hsla existe.

{% highlight css %}
p{ color:hsl(227%, 52%, 38%, .7);}
{% endhighlight %}

Le 0 est facultatif pour les décimales.

### (Ainsi) font

Font. (Police de caractère pour les sédentaires.)  
Les polices, il en existe depuis des siècles.  
Une police, c’est des caractères. Des lettres oui, mais aussi des chiffres, de la ponctuation, des caractères spéciaux.  
Une police, ça vit. Un “a” suivi d’un “p” ne réagit pas pareil si suivi d’un “i” ou d’un “w”.  
C’est [tout un art](http://ilovetypography.com/).  
Qu’en est-il pour nous, maigres intégrateurs ?  
Choisir la <span style="font-family: Georgia, serif;">police</span>, la <span style="font-size: 20px;">taille</span> des caractères, leur <span style="letter-spacing:.5em;">espacement</span>, leur <span style="font-style: italic;">style</span>, leur <span style="font-weight:bold;">graisse</span>.<br>
Sous les feux de la rampe, je demande Arial, <span style="font-family: Georgia, serif;">Georgia</span>, <span style="font-family:Verdana, sans-serif;">Verdana</span>, <span style="font-family:Courier, monospace;">Courier</span>, <span style="font-family:Times, serif;">Times</span>…

#### font-family

La famille d’une police, c’est l’ensemble de ses caractères.

{% highlight css %}
p{ font-family:Verdana;}
{% endhighlight %}

On annonce au navigateur d’aller chercher la police Verdana sur l’ordinateur de l’internaute et de l’appliquer à tous nos p.  
Au meilleur des cas, la police est là, elle est appliquée.  
Mais si elle venait à manquer ? Le navigateur prendra la police par défaut, en général Times New Roman. Damnation !

Palier au manque, c’est possible. On définit alors plusieurs polices.

{% highlight css %}
p{ font-family:Verdana, Calibri, Arial, sans-serif;}
{% endhighlight %}

Si Verdana prend la poudre d’escampette, Calibri viendra à la rescousse.  
Si Calibri suit Verdana, Arial sera là.

<figure class="image">
  <img height="150" src="/images/Why.png" alt="Pourquoi ???">
  <figcaption>"Et <strong style="font-family:'Comic Sans MS',sans-serif; font-weight:normal;">Comic Sans MS</strong> dans tout ça ?"</figcaption>
</figure>

Mais quelle est cette police de dernier recours ? sans-serif ? Quel nom peu commun !  
Je vous arrête : sans-serif n’est pas une police, mais un type de police, en l’occurence les polices sans empattement. Libre alors à l’ordinateur de choisir la police qu’il veut.  
Pratique ces types de police ! Voici d’autres options CSS :

<ul>
  <li><span style="font-family:serif;">serif</span> : avec empattement</li>
  <li><span style="font-family:monospace">monospace</span> : chaque caractère occupe la même largeur</li>
  <li><span style="font-family:cursive;">cursive</span></li>
  <li><span style="font-family:fantasy">fantasy</span></li>
</ul>

A utiliser en dernière option d’une liste de polices.

#### font-size

La famille choisie, va-t-on utiliser les petits ou les grands ?

{% highlight css %}
p{ font-size:12px;}
{% endhighlight %}

En pixels de préférence, car la CSS se lit sur écran. Chaque caractère fera à peu près 12px de haut.

D’autres options que le pixel :

* **pt** (point) : à éviter ! Le point est une unité d’imprimerie, donc non précise pour l’écran.
* **em** : une taille de police proportionnelle. S la taille de police du parent est de 16px et que l’on met p{ font-size: 1.2em;}, les p feront 16 x 1,2 = 19,2 pixels.  
Très pratique pour garder des proportions égales entre les différents blocs, tout en centralisant la valeur absolue de la taille en un seul lieu.  
Inconvénient : les calculs précis sont plus compliqués.
* **120%** : le pourcentage. Plutôt moche.
* **large/small/medium…** : valeurs arbitraires du navigateur. Inutilisables.

Le pixel est précis, le em est pratique. A vous de voir.

#### font-style

Du style dans du style.

{% highlight css %}
p{ font-style: italic;}
{% endhighlight %}

Un peu penché le texte.

{% highlight css %}
p{ font-style: oblique;}
{% endhighlight %}

Très penché le texte.

{% highlight css %}
p{ font-style: normal;}
{% endhighlight %}

Valeur par défaut qui a bon dos.

Requis : la police doit avoir dans sa famille les caractères en italique et/ou oblique pour que cela prenne effet.

#### font-weight

La graisse, la vraie.

{% highlight css %}
p{ font-weight: bold;}
{% endhighlight %}

Du gras.

{% highlight css %}
p{ font-weight: bolder;}
{% endhighlight %}

Encore plus gras.

{% highlight css %}
p{ font-weight: lighter;}
{% endhighlight %}

Top-model.

Ou par centaines : 100, 200, … 900.

{% highlight css %}
p{ font-weight: 100;}
{% endhighlight %}

Pas génial. Du tout.

{% highlight css %}
p{ font-weight: normal;}
{% endhighlight %}

Requis (bis) : la police doit contenir ses caractères en gras, faute de quoi…

#### font-variant

Une option :

{% highlight css %}
p{ font-variant: small-caps;}
{% endhighlight %}

Joli ? Parfois.

{% highlight css %}
p{ font-variant: normal;}
{% endhighlight %}

Retour à la normale.

#### line-height

Le font-size définit la taille des caractères.  
Le line-height définit l’espacement entre les lignes.

Le confort de lecture est le résultat de l’association des deux.

{% highlight css %}
p{ font-size: 12px; line-height: 16px;}
{% endhighlight %}

Un confort notable.

Le em peut s’avérer pratique ici.

{% highlight css %}
p{ font-size: 12px; line-height: 1.4em;}
{% endhighlight %}

Changez le font-size, le line-height restera proportionnellement supérieur.

Mais le line-height définit aussi la hauteur du block.  
Un `<p>` à 3 lignes avec un line-height de 16px fera 48px de haut.

Associez le line-height avec le height, et vous centrez verticalement le texte.

{% highlight css %}
.annonce{ font-size: 12px; height:40px; line-height: 40px;}
{% endhighlight %}

Un block de 40px de haut. Fixe. Une seule ligne de texte. Pour la centrer verticalement, mettre un line-height égal au height. Magique.

#### font

Tous ces font-, ce line-height... Quel bavardage ! Gagner du temps, c’est gagner du style.

{% highlight css %}
p{ font: italic bold 12px/16px Georgia, Times, serif;}
{% endhighlight %}

Du style, du gras, de la taille, de l’interlignage, et des polices. Compressé comme jamais.

#### text-align

A gauche, au centre, à droite.

{% highlight css %}
p{ text-align: center;}
{% endhighlight %}

Appliqué à un block, il centre le texte de ce block (et non pas le block lui-même).

#### text-transform

La prestidigitation s’invite dans les CSS.

{% highlight css %}
p{ text-transform: uppercase;} /* GE KIF LÉ MAJUSKUL */
p{ text-transform: lowercase;} /* pas moi */
p{ text-transform: capitalize;} /* Quel Mauvais Genre ! */
p{ text-transform: none;} /* Chut. */
{% endhighlight %}

Le code HTML peut être en majuscules, minuscules, peu importe. Le style agit là, pas dans le HTML.

#### text-decoration

Un trait, des clignotements.

{% highlight css %}
p{ text-decoration: overline;}
p{ text-decoration: line-through;}
p{ text-decoration: underline;}
p{ text-decoration: blink;}
p{ text-decoration: none;}
{% endhighlight %}

#### text-indent

Décaler la première ligne de texte, pour diriger l’oeil et apaiser la lecture.

{% highlight css %}
p{ text-indent: 20px;}
p{ text-indent: 3 em;}
{% endhighlight %}

Ou en négatif.

{% highlight css %}
p{ text-indent: -2px;}
{% endhighlight %}

#### text-shadow

A l’ombre, rien de nouveau. Une syntaxe :

{% highlight css %}
p{ text-shadow:[x], [y], [flou], [étendue] [couleur];}
{% endhighlight %}

Un duo [x] horizontal et [y] vertical pour la position de l’ombre. En pixels positif ou négatif. Le [flou] de l’ombre, en pixels. L’étendue (facultative), de 0 à 1. Puis la couleur : hexa, rgba, rgba, hsl, hsla, texte...

Pour mieux vous lire, un appui noir transparent :

{% highlight css %}
p{ text-shadow: 0, 2px, 2px, rgba( 0, 0, 0, .7);}
{% endhighlight %}

Sur fond foncé, une lumière vers le haut :

{% highlight css %}
p{ text-shadow: 0, -1px; 0, rgba( 255, 255, 255, .3);}
{% endhighlight %}

#### white-space

Le texte est fluide au départ. Arrivé au bout d’une ligne, la suite fait un retour à la ligne. Cette attitude peut être anéantie :

{% highlight css %}
p{ white-space: nowrap;}
{% endhighlight %}

Le texte restera sur une et une seule ligne, quitte à dépasser du paragraphe et/ou disparaître d’une l’écran, jusqu’à ce qu’il rencontre un éventuel `<br>`.

Le code HTML n’a habituellement aucun impact quant à la mise en forme textuelle, c’est à dire que les sauts de ligne, les tabulations et les espaces multiples dans le HTML ne s’affichent pas de le navigateur. Seul l’espace simple est conservé. Pour tenir compte de la mise en forme présente dans le code HTML, un outil existe :

{% highlight css %}
p{ white-space: pre;}
{% endhighlight %}

La balise `<pre>` agit de même.

#### letter-spacing

L’espacement des lettres. Toute une science. La parcimonie est de rigueur.

{% highlight css %}
p{ letter-spacing: 1px;} /* Espacement fixe, quelle que soit la taille de la police */
p{ letter-spacing: -.5em;} /* Espacement réduit et proportionnel, pratique */
{% endhighlight %}

Comme pour le font-size : px, em plutôt, et pas pt, cm, pourcentage...

#### word-spacing

Après les lettres, les mots.

{% highlight css %}
p{ word-spacing: 2em;}
p{ word-spacing: normal;}
{% endhighlight %}

#### word-wrap

Les chaînes de caractère sans espace (tel “Supercalifragilisticexpialidocious”) restent unies et ne passent jamais à la ligne, quitte à dépasser du block dans lequel il est.  
Pour forcer le retour à la ligne, en brisant le mot en deux :

{% highlight css %}
p{ word-wrap: break-word;}
{% endhighlight %}

Cruel destin.

Jouer avec les lettres, leur pluralité, et se restreindre à la forme. Les frontières s’effacent pour laisser place au goût très prononcé pour l’expérimentation typographique, tant mocharde que délicieuse. A l’horizon, s’éprendre pour une fresque et en broder le parcours.

Construisez donc un empire avec les armes que je vous laisse !

La victoire acquise, la [tâpisserie](/4-abime) vous attend.
