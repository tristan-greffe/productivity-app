<template>
  <div class="user-page">
    <h1 class="title">User</h1>
    <div class="card-body">
<div class="card-body">
<h1>Afficher une centaine de profils utilisateurs en quelques lignes</h1>

<h2>1. Introduction</h2>

<p>Comme vu précédemment, React nous permet d'afficher facilement un composant autant de fois qu'on le souhaite, avec pour chaque instance du composant, des données qui lui sont propres, grâce à des "props".</p>

<p>L'objectif de ce projet est d'aider un commerçant fictif qui souhaite afficher l'ensemble de ses clients sur un écran, car il aimerait les appeler afin de les remercier, car ce sont vraiment des super clients. Il souhaiterait donc avoir un écran regroupant tous ses clients, puis, au clic sur un client, afficher les détails de ce client.</p>

<p>📚 Notre commerçant ne suit pas vraiment la réglementation RGPD, donc faisons comme si cette législation n'existait pas. <strong>MAIS</strong>, durant ta carrière, tu devras strictement respecter cette législation. Lorsque tu as du temps, je t'invite donc à te renseigner sur ce (vaste) sujet, car tu pourras être attaqué si tu ne la respectes pas. Voici <a href="https://www.cnil.fr/fr/comprendre-le-rgpd" rel="nofollow" target="_blank">un lien vers la réglementation officielle</a>.</p>

<h2>2. Présentation de Faker.js</h2>

<p>Faker.js est une petite lib JavaScript qui nous permet de créer un ensemble de fausses informations aléatoires&nbsp;: des noms, des emails, des domaines de travail, en passant par des avatars ou des adresses...</p>

<p>Tu peux aller voir <a href="https://github.com/faker-js/faker" rel="nofollow" target="_blank">l'API et la documentation de FakerJS</a>, nous reviendrons plus tard sur son utilisation.</p>

<h2>3. L'objectif</h2>

<p>Sur son interface, il souhaite avoir accès aux informations suivantes de chaque client&nbsp;:</p>

<ul>
<li>Nom</li>
<li>Prénom</li>
<li>Téléphone</li>
<li>Adresse mail (créée en fonction du nom, prénom, auxquels on ajoutera "@gmail.com")</li>
<li>Photo</li>
<li>Métier</li>
</ul>

<p>Sur la card de preview, seront affichés uniquement le prénom, le nom, et la photo. Cette carte contiendra 3 CTA (call-to-action, c'est-à-dire un bouton)&nbsp;: "Envoyer un Mail", "Appeler", et "Afficher les détails".</p>

<h2>4. L'exercice, pas à pas</h2>

<h3>4.1.1 Initialiser notre projet React</h3>

<p>Pour créer notre application, dans notre terminal, on utilisera <code class="prettyprint">npx create-react-app merchant-contact</code></p>

<ul>
<li>On supprime le dossier <code class="prettyprint">src</code>, et on en crée un nouveau, vide.</li>
<li>On a créé un fichier <code class="prettyprint">index.js</code> à l'intérieur, contenant notre application comme suit&nbsp;:</li>
</ul>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>

<ul>
<li>On rentre dans le dossier de notre application, puis on lance l'application&nbsp;:</li>
</ul>

<pre class="language-shell" tabindex="0"><code class="prettyprint language-shell">$ cd merchant-contact &amp;&amp; npm start
</code></pre>

<ul>
<li>L'ensemble de nos composants seront stockés dans un dossier <code class="prettyprint">src/components/</code>.</li>
<li>On y créera un composant <code class="prettyprint">Customers</code>. Je te laisse le faire, puis l'instancier dans notre <code class="prettyprint">App</code>.</li>
</ul>

<h3>4.1.2 Installer Faker.js</h3>

<p><img class="img-fluid" src="https://i.imgur.com/yYmnSG9.png" alt="test"></p>

<p>Faker.js est un <a href="https://www.npmjs.com/package/@faker-js/faker" rel="nofollow" target="_blank">package NPM</a>, qu'on initialisera dans notre composant <code class="prettyprint">Customers</code>, qui contiendra donc l'ensemble des données clients. Mais d'abord, il faut l'installer&nbsp;:</p>

<pre class="language-shell" tabindex="0"><code class="prettyprint language-shell">$ npm i @faker-js/faker
</code></pre>

<h3>4.1.2 Utiliser Faker.js</h3>

<p>Avant tout, il faut bien sûr l'importer dans ton fichier 😃  </p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token keyword">import</span> faker <span class="token keyword">from</span> <span class="token string">'@faker-js/faker'</span><span class="token punctuation">;</span>
</code></pre>

<p>Ensuite, on pourra l'utiliser comme ceci dans notre composant <code class="prettyprint">Customers</code>, par exemple&nbsp;:</p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token keyword">const</span> name <span class="token operator">=</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">firstName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>

<p>Ainsi, à chaque rechargement de la page, un nom aléatoire différent sera utilisé&nbsp;!</p>

<h3>4.1.3 Créer nos clients</h3>

<p>On peut ensuite initialiser un Array de clients vides (que j'ai nommé <code class="prettyprint">customersList</code> de mon côté) dans le render, au-dessus de notre return. Si l'on souhaite avoir 100 clients, on peut utiliser la méthode <code class="prettyprint">from()</code> de l'objet Array, en lui passant un objet avec le nombre d'entrées qu'on veut générer, suivi d'une fonction à exécuter pour chacune de ces entrées. Ici cette dernière retournera un objet avec les infos de nos clients&nbsp;:</p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token keyword">const</span> customersList <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">firstName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">lastName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>

<p>Tu peux faire un <code class="prettyprint">console.log()</code> de ton Array <code class="prettyprint">customersList</code>, et normalement, tu devrais te retrouver avec un tableau affiché dans la console web, contenant une centaine de clients et leurs informations&nbsp;!</p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> faker <span class="token keyword">from</span> <span class="token string">'faker'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Customers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> customersList <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">firstName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">lastName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>customersList<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>customersList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>firstName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Customers<span class="token punctuation">;</span>
</code></pre>

<h3>4.1.4 Afficher un client</h3>

<p>Tu peux créer un autre composant <code class="prettyprint">Customer</code> qui récupérera et affichera des infos qui lui seront envoyées en props. Tu n'es pas obligé de faire comme moi, mais je sais que j'aimerai instancier chacun de mes clients de la manière suivante&nbsp;:</p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token operator">&lt;</span>Customer data<span class="token operator">=</span><span class="token punctuation">{</span>customerData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre>

<p>Ainsi, cela m'évite de lui envoyer 5 ou 6 props pour chacune des informations du client, mais plutôt une seule prop <code class="prettyprint">data</code>, qui contient un objet avec toutes ces infos.</p>

<p>Maintenant, mon composant <code class="prettyprint">Customer</code> peut récupérer les informations comme ceci&nbsp;:</p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token keyword">const</span> <span class="token function-variable function">Customer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">.</span>data<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>firstName<span class="token punctuation">}</span> <span class="token punctuation">{</span>lastName<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>

<p>Mon composant <code class="prettyprint">Customers</code> ressemblera donc à ceci&nbsp;:</p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> faker <span class="token keyword">from</span> <span class="token string">'faker'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Customer <span class="token keyword">from</span> <span class="token string">'components/Customer'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Customers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> customersList <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>random<span class="token punctuation">.</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">firstName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">lastName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>customersList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">customerData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Customer data<span class="token operator">=</span><span class="token punctuation">{</span>customerData<span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token punctuation">{</span>customerData<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Customers<span class="token punctuation">;</span>
</code></pre>

<p>Si tu as bien tout suivi, tu devrais voir s'afficher une liste de 100 noms et prénoms dans ton navigateur&nbsp;!</p>

<h3>4.1.5 Ajouter toutes les infos dans un client</h3>

<p>Maintenant, c'est à ton tour de chercher dans la documentation de FakerJS comment récupérer les autres données demandées dans l'énoncé&nbsp;! Je te laisse également les afficher&nbsp;!</p>

<h3>4.1.6 L'email</h3>

<p>Pour ce qui est de l'email, on va faire un composant <code class="prettyprint">Email</code> qui prend en props un prénom et un nom, et qui retourne une balise <code class="prettyprint">&lt;a href="mailto:the-email"&gt;</code>, qui suit ce modèle&nbsp;:</p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mailto:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">@gmail.com</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>Envoyer un message<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
</code></pre>

<p>N'oublie pas d'enlever les majuscules&nbsp;! La méthode <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLowerCase" rel="nofollow" target="_blank">.toLowerCase()</a> est toute prête pour ça.</p>

<p><strong>Exemple</strong>&nbsp;:</p>

<ul>
<li>Prénom&nbsp;: "Jean-Jacques"</li>
<li>Nom&nbsp;: "Goldman"</li>
</ul>

<p>Deviendra&nbsp;: <a href="mailto:jean-jacques.goldman@gmail.com" rel="nofollow" target="_blank">jean-jacques.goldman@gmail.com</a></p>

<h3>4.1.7 Le téléphone</h3>

<p>Pour le téléphone, on fera pareil que pour l'email, dans un composant <code class="prettyprint">Phone</code>, qui renverra un lien <code class="prettyprint">&lt;a href="tel:thephonenumber"&gt;</code>, mais cette fois en utilisant Faker pour le générer.</p>

<h2>5 Un peu de style ?</h2>

<h3>5.1 Importer et utiliser Bootstrap</h3>

<p>Maintenant, on va afficher nos clients sous forme de cards, grâce à Bootstrap et la lib <a href="https://react-bootstrap.github.io/getting-started/introduction/" rel="nofollow" target="_blank"><code class="prettyprint">react-bootstrap</code></a>.</p>

<p>Pour l'installer, c'est assez simple, il suffit de lancer&nbsp;:</p>

<pre class="language-shell" tabindex="0"><code class="prettyprint language-shell">$ npm install react-bootstrap bootstrap
</code></pre>

<p>Puis d'introduire le css dans notre appli en ajoutant cette ligne en haut de notre fichier <code class="prettyprint">src/index.jsx</code>&nbsp;:</p>

<pre class="language-js" tabindex="0"><code class="prettyprint language-js"><span class="token keyword">import</span> <span class="token string">'bootstrap/dist/css/bootstrap.min.css'</span><span class="token punctuation">;</span>
</code></pre>

<p>Tu as déjà utilisé Bootstrap, je te laisse donc faire (et chercher <a href="https://react-bootstrap.github.io/layout/grid/" rel="nofollow" target="_blank">dans la doc</a>) une grille Flexbox en row, qui fait retourner à la ligne les éléments s'il n'y a pas assez de place dans la colonne&nbsp;!</p>

<p>Le résultat attendu pour une carte est celui-ci&nbsp;:</p>

<p><img class="img-fluid" src="https://i.imgur.com/qkGSQw7.png" alt="test"></p>

<h2>Conclusion</h2>

<p>Et voila&nbsp;! Tu as fait ta première page utile en React&nbsp;! Ensemble, on a découvert le JSX, les props, la création de composants, l'import-export de composants et de modules NPM, mais aussi revoir les objets en JS, les arrays et la méthode <code class="prettyprint">map()</code>, et les template-strings&nbsp;!</p>

</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'user-page',
};
</script>
