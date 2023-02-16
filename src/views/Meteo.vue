<template>
  <div class="meteo-page">
    <h1 class="title">Meteo</h1>
    <div>
      <h2>2.2. Page météo</h2>

<p>Cet exercice est un bonus pour les plus avancés d'entre vous.</p>

<p>Pour consolider ce que tu viens d'apprendre sur l'utilisation d'API, je te propose d'afficher une page météo en utilisant <a href="https://www.weatherbit.io/api" rel="nofollow" target="_blank">cette API</a>. À toi de choisir la ville dont tu veux la météo. Voici à quoi ta page devrait ressembler (n'hésite pas à la faire plus jolie) :</p>

<p><img class="img-fluid" src="https://i.imgur.com/vdJ2ubW.png" alt="test"></p>

<p>Si tu te sens vraiment en forme, tu peux faire en sorte que l'on puisse être géolocalisé pour afficher la météo de sa ville. Pour cela, <a href="https://developer.mozilla.org/fr/docs/Web/API/Geolocation_API" rel="nofollow" target="_blank">cette documentation</a> te sera utile. Ou alors, tu peux fournir un moyen de changer la ville dynamiquement via un champ de texte !</p>

<h3>Pour les plus avancés</h3>

<p>Si jamais tu as réussi très facilement, n'hésite pas à afficher un seul arrêt de Velib, et utiliser l'API de Leaflet pour afficher une carte qui montre où se trouve l'emplacement de Velib.</p>

<ul>
<li><a href="https://leafletjs.com/" rel="nofollow" target="_blank">Lien vers l'API de Leaflet</a>.</li>
</ul>

<p>Tu peux également t'amuser à utiliser des API que tu aurais pu coder en Rails !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meteo-page',
};
</script>
