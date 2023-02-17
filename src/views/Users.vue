<template>
  <div class="user-page">
    <h1 class="title">Users</h1>
    <div class="container d-flex flex-wrap justify-content-center">
      <div class="card m-2" style="width: 18rem;" v-for="user in usersList" :key="user.firstName">
        <User :user="user"/>
      </div>
    </div>
  </div>
</template>

<script>
import { faker } from '@faker-js/faker';
import User from '../components/User.vue';

export default {
  name: 'user-page',
  components: {
    User,
  },
  data() {
    return {
      usersList: [],
    };
  },
  created() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      this.usersList.push(
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          telephone: faker.phone.phoneNumber('+336 ## ## ## ##'),
          email: faker.internet.email(),
          job: faker.name.jobTitle(),
          avatar: faker.image.avatar(),
        },
      );
    }
  },
};
</script>
