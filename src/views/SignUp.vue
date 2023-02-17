<template>
  <div class="signup-page">
    <section class="vh-100">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <div class="alert alert-danger" v-show="errorName" role="alert">
                            Name must be at least 3 letters !
                          </div>
                          <label class="form-label" for="form3Example1c">Your Name</label>
                          <input type="text" id="form3Example1c" class="form-control" @focus="this.errorName = false" ref="name"/>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <div class="alert alert-danger" v-show="errorEmail" role="alert">
                            Please enter a valid email address !
                          </div>
                          <label class="form-label" for="form3Example3c">Your Email</label>
                          <input type="email" id="form3Example3c" class="form-control" @focus="this.errorEmail = false" ref="email" />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <div class="alert alert-danger" v-show="errorPassword" role="alert">
                            Password must contain at least 6 characters !
                          </div>
                          <label class="form-label" for="form3Example4c">Password</label>
                          <input type="password" id="form3Example4c" class="form-control"  @focus="this.errorPassword = false" ref="password" />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <div class="alert alert-danger" v-show="errorPasswordConfirmation" role="alert">
                            Password and password confirmation doesn't match !
                          </div>
                          <label class="form-label" for="form3Example4cd">Repeat your password</label>
                          <input type="password" id="form3Example4cd" class="form-control" @focus="this.errorPasswordConfirmation = false" ref="passwordConfirmation" />
                        </div>
                      </div>
                      <div class="alert alert-danger" v-show="errorTerm" role="alert">
                        You must accept the terms !
                      </div>
                      <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" ref="term" value="" @focus="this.errorTerm = false" id="form2Example3c" />
                        <label class="form-check-label" for="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-primary btn-lg" @click="submit">Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'signup-page',
  data() {
    return {
      errorName: false,
      errorEmail: false,
      errorPassword: false,
      errorPasswordConfirmation: false,
      errorTerm: false,
      checker: false,
    };
  },
  methods: {
    submit() {
      if (this.verifForm()) {
        this.$router.push('/');
      }
    },
    verifForm() {
      this.checker = true;
      this.verifName();
      this.verifEmail();
      this.verifPassword();
      this.verifPasswordConfirmation();
      this.verifTerm();
      return this.checker;
    },
    verifName() {
      if (this.$refs.name.value.length < 3) {
        this.errorName = true;
        this.checker = false;
      }
    },
    verifEmail() {
      // eslint-disable-next-line no-useless-escape
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.$refs.email.value)) {
        this.errorEmail = true;
        this.checker = false;
      }
    },
    verifPassword() {
      if (this.$refs.password.value.length < 5) {
        this.errorPassword = true;
        this.checker = false;
      }
    },
    verifPasswordConfirmation() {
      if (this.$refs.password.value !== this.$refs.passwordConfirmation.value) {
        this.errorPasswordConfirmation = true;
        this.checker = false;
      }
    },
    verifTerm() {
      if (!this.$refs.term.value) {
        this.errorTerm = true;
        this.checker = false;
      }
    },
  },
};
</script>
