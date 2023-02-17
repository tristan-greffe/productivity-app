<template>
  <div class="user">
    <img class="card-img-top" :src="user.avatar" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ user.lastName }} {{ user.firstName }}</h5>
      <p class="card-text">{{ user.job }}</p>
      <a :href="'mailto:' + user.email" class="btn btn-primary">Send email</a>
      <a :href="'tel:' + user.phone" class="btn btn-primary mx-2">Call</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-card',
  props: {
    user: Object,
  },
};
</script>
