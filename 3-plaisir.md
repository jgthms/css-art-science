---
order: 3
layout: default
title: Au plaisir des yeux
subtitle: "Color, font, text, word"
permalink: /3-plaisir/
---

Vous me lisez, je vous écris. Vous m’observez, je vous intrigue. Vous m’applaudissez, je…  
Le texte est là, et ici même. Stylé déjà.  
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
