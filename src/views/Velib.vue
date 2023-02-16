<template>
  <div class="velib-page">
    <h1 class="title">Velib</h1>
    <div class="card-body">
<div class="card-body">
<h1>Mission : trouver un Velib disponible depuis chez toi</h1>

<h2>1. Introduction</h2>

<p>En tant que développeur front, tu auras <strong>très</strong> souvent besoin de communiquer avec des API afin de récupérer de nombreuses données que ton site devra afficher. Aujourd'hui tu vas utiliser des API assez simples pour pouvoir récupérer des vraies datas à afficher sur ton site !</p>

<h2>2.1. Les velibs disponibles</h2>

<p>Il existe une API pour voir en temps réel la liste des stations de Velib de Paris, le nombre de Velib restants, et d'autres détails plus ou moins utiles. Notre objectif aujourd'hui sera de créer une petite page HTML qui nous permettra de consulter ces informations d'une façon plus esthétique qu'un JSON.</p>

<p>Le premier exercice peut être un peu long : fais petit à petit, commence par afficher un seul arrêt, puis l'actualiser chaque minute, puis enfin en afficher plusieurs, et afficher la map avec leaflet si vraiment tu as tout réussi !</p>

<ul>
<li><a href="https://opendata.paris.fr/explore/dataset/velib-disponibilite-en-temps-reel/api/?rows=100" rel="nofollow" target="_blank">Voir l'API</a><br></li>
<li><a href="https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&amp;q=Mairie+du+11%C3%A8me&amp;facet=station_state&amp;facet=kioskstate&amp;facet=creditcard&amp;facet=overflowactivation&amp;facet=nbbike" rel="nofollow" target="_blank">Exemple de JSON généré</a></li>
</ul>

<p>Extrait de ce JSON :</p>

<pre class="language-json" tabindex="0"><code class="prettyprint language-json">{
  "records": [
    {
      "datasetid": "velib-disponibilite-en-temps-reel",
      "recordid": "d41bfedf9c39110491c8590bc3e1eeac885e71d6",
      "fields": {
        "name": "Mairie du 11ème",
        "stationcode": "11024",
        "ebike": 4,
        "mechanical": 5,
        "coordonnees_geo": [48.858925, 2.3789759],
        "duedate": "2022-01-14T19:01:26+00:00",
        "numbikesavailable": 9,
        "numdocksavailable": 37,
        "capacity": 51,
        "is_renting": "OUI",
        "is_installed": "OUI",
        "nom_arrondissement_communes": "Paris",
        "is_returning": "OUI"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [2.3789759, 48.858925]
        },
      "record_timestamp": "2022-01-14T19:15:05.000000+00:00"
    }
  ]
}
</code></pre>

<p>Là dedans, on peut trouver plusieurs informations qui sont importantes pour nous :</p>

<ul>
<li>Le nom de la station</li>
<li>Le nombre de docks pour poser des vélos</li>
<li>Le nombre de vélos classiques</li>
<li>Le nombre de vélos électriques</li>
<li>Le nombre de docks libres (notez qu'on aurait pu le calculer nous-mêmes)</li>
<li>Les coordonnées GPS</li>
</ul>

<p>Ton objectif sera, en prenant le bout de code ci-dessous, d'afficher la liste des X (au choix) premiers arrêts de Velib. L'API se met à jour chaque minute. Je t'invite donc à utiliser <code class="prettyprint">setInterval()</code> pour aller taper dedans chaque minute, afin d'avoir les informations en temps réel !</p>

<p>Tu peux utiliser cette fonction pour afficher une station dans un élément HTML de ta page :</p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token keyword">const</span> <span class="token function-variable function">showVelibStation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> name<span class="token punctuation">,</span> mechanicals<span class="token punctuation">,</span> ebikes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;div&gt;
            &lt;h2&gt;Station : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h2&gt;
            &lt;p&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mechanicals<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> classical Velibs&lt;/p&gt;
            &lt;p&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ebikes<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> electric Velibs&lt;/p&gt;
        &lt;/div&gt;
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>

</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'velib-page',
};
</script>
