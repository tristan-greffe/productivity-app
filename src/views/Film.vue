<template>
  <div class="film-page">
    <h1 class="title">Film</h1>
    <div class="card-body">
<h1>Afficher une liste de films</h1>

<h2>1. Introduction</h2>

<p>Peut-être que tu as déjà entendu parler de l'API <a href="http://www.omdbapi.com/" rel="nofollow" target="_blank"><code class="prettyprint">The Open Movie Database</code></a>. Celle-ci permet d'afficher des informations sur des films recherchés. Nous allons créer une page qui permettra d'afficher la liste de films correspondants à la recherche de l'utilisateur. On affichera également les informations sur un film si l'utilisateur clique dessus.</p>

<h2>2. Le projet</h2>

<p>Pour commencer, il faudra t'inscrire sur leur API afin de récupérer une clef de développement. Tu pourras t'inscrire <a href="http://www.omdbapi.com/apikey.aspx" rel="nofollow" target="_blank">ici</a>! Ne perds surtout pas ton token, il est très important ! Effectivement, les développeurs d'API ont régulièrement besoin de tracker comment tu te serviras de leur API afin d'améliorer leur service, ou de vérifier si tu n'en fais pas une utilisation malveillante ou encore si tu n'en abuses pas.</p>

<p>Ensuite, il te faudra créer un formulaire où l'utilisateur pourra entrer le nom du film qu'il cherche. Au submit, tu iras taper dans l'API pour récupérer la liste des films contenant les mots clefs que l'utilisateur a cherchée. Tu devras par la suite créer une fonction pour afficher la liste des films proposés.</p>

<p>Tu devras montrer :</p>

<ul>
<li>L'affiche du film</li>
<li>Le nom du film</li>
<li>Sa date de sortie.</li>
<li>Un CTA ("Call To Action") représenté par un bouton "Read more" dont on parlera plus tard</li>
</ul>

<p>Tout cela devra bien entendu être fait en utilisant l'asynchrone. Tu utiliseras également l'Intersection Observer afin d'afficher les résultats petit à petit, lors du scroll.</p>

<p>Initialement, tes blocs contenant les informations du film seront en opacité 0 et sur le côté de l'écran. Lorsque tu scroll, les films s'afficheront petit à petit. Voici <a href="https://michalsnik.github.io/aos/" rel="nofollow" target="_blank">un exemple</a>. Au clic sur le CTA dans un des blocs contenant les informations sur le film, une popup s'affichera, contenant davantage d'information sur le film cliqué, avec par exemple le résumé du film. Tu peux faire ta modal via bootstrap, ou alors utiliser <a href="https://www.w3schools.com/howto/howto_css_modals.asp" rel="nofollow" target="_blank">ce tuto</a> de W3Schools.</p>

<p>Voici quelques users stories afin de comprendre parfaitement la demande :</p>

<ul>
<li>L'utilisateur peut chercher une liste de films/séries grâce à des mots clefs</li>
<li>L'utilisateur verra les films/séries apparaître sous forme de blocs, contenant le nom du film, la date de parution et une image ainsi qu'un CTA "Read More".</li>
<li>L'utilisateur peut cliquer sur le CTA "Read More" afin d'afficher la description complète du film, ainsi que sa date de parution dans une popup.</li>
<li>Les films/séries apparaissent petit à petit, au fur et à mesure du scroll.</li>
</ul>

<p>Voici un exemple :</p>

<p><img class="img-fluid" src="https://i.imgur.com/0uiPpdp.png" alt=""></p>

<p>Au clic sur le premier Read More :</p>

<p><img class="img-fluid" src="https://i.imgur.com/QRUSmba.png" alt=""></p>

<h3>3. Le rendu</h3>

<p>Ne t'attarde pas sur les animations CSS, il faut juste que cela fonctionne. Également, tu intégreras Bootstrap afin de ne pas te prendre la tête sur le design, le but ici étant de s'exercer au maximum sur l'utilisation d'API et sur l'asynchrone.</p>

<p>Enfin, tu mettras ton rendu en ligne sur un Github Pages ou tout autre moyen de déploiement.</p>

<h3>4. Bonus</h3>

<p>Si tu as du temps de libre, tu peux t'amuser à faire des <a href="https://www.w3schools.com/css/css3_animations.asp" rel="nofollow" target="_blank">animations</a> pour rendre l'apparition de tes films plus sexy lors du scrolling ! Tu peux également mettre en place du Lazy Loading, <a href="https://blog.bitsrc.io/lazy-loading-images-using-the-intersection-observer-api-5a913ee226d" rel="nofollow" target="_blank">cet article</a> pourra t'aider.</p>

</div>
  </div>
</template>

<script>
export default {
  name: 'film-page',
};
</script>
