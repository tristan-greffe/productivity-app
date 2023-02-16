<template>
  <div class="signup-page">
    <h1 class="title">SignUp</h1>
    <div class="container">
      <button type="button" class="btn btn-primary">Primary</button>

<h1>L'indémodable vérificateur de formulaire</h1>

<p>Dans ce projet, tu vas faire un vérificateur de formulaire.</p>

<h2>1. Introduction</h2>

<p>Tout site qui se respecte se doit d'avoir un vérificateur de formulaire côté front-end. Pourquoi ? Imagine qu'un utilisateur passe 15 minutes à remplir un formulaire d'inscription. Il clique sur "submit" puis le site lui renvoie un message d'erreur en mode "lol il manque un caractère dans tel champ allez refais tout". En termes d'UX on est plus sur la gentillesse d'un manque d'élément pour dossier administratif (TMTC les visas) que la douceur de Airbnb qui t'envoie de l'amour et te dit en temps réel que tel élément ne va pas.</p>

<p>Ton objectif sera de créer un formulaire complet. Celui-ci, lors du submit, vérifiera la validité de chacun des champs. Si un ou plusieurs des champs sont mauvais, le formulaire ne sera <strong>pas</strong> envoyé, et un message d'erreur devra être écrit en rouge sous chacun des champs nécessitant d'être modifié afin que l'utilisateur puisse savoir ce qui n'est pas bon.</p>

<p>Dès que l'utilisateur clique sur un input pour le modifier, le message d'erreur associé devra disparaître.</p>

<p>Une fois que tous les champs sont bons, alors l'utilisateur est renvoyé sur une page lui indiquant qu'il a tout bien rempli.</p>

<h2>2. Le contenu du formulaire</h2>

<p>Le formulaire devra contenir :</p>

<ul>
<li>un nom</li>
<li>un prénom</li>
<li>un âge</li>
<li>un email</li>
<li>une confirmation de l'email</li>
<li>un password</li>
<li>une confirmation de password</li>
<li>Un sélecteur (checkbox, radio...) permettant d'accepter les CGU.</li>
</ul>

<h3>2.1. <strong>Quelques règles</strong></h3>

<ul>
<li>Aucun des champs ne devra être vide.</li>
<li>Le prénom doit faire au minimum 3 lettres</li>
<li>L'email et sa confirmation doivent être les mêmes</li>
<li>Le password et sa confirmation également</li>
<li>L'âge doit être supérieur à 18</li>
<li>Le password doit contenir au moins 6 caractères (stp, ne mets JAMAIS d'autres règles pour les mots de passe)</li>
<li>L'email doit avoir le format classique d'un email</li>
<li>Les CGU doivent être acceptées</li>
</ul>

<p>Pour certains éléments, tu devras te servir des Regex ;)</p>

<h2>3. Rendu attendu</h2>

<p>Le rendu attendu est un ensemble de fichiers HTML et JavaScript (tu peux y ajouter du CSS si tu veux rendre le tout joli).</p>

<p>Si l'ensemble du formulaire est valide, une fois le formulaire envoyé, l'utilisateur est redirigé vers une autre page HTML lui confirmant que sa demande a bien été prise en compte.</p>

<p>S'il y a une erreur ou plus, elle(s) est/sont indiquée(s) à l'utilisateur et le formulaire n'est pas envoyé.</p>

</div>
  </div>
</template>

<script>
export default {
  name: 'signup-page',
};
</script>
