<template>
  <div class="wrapper">
    <div
      v-if="isActive"
      class="px-6 py-3 lg:px-12 md:w-full mx-auto fixed overflow-x-hidden overflow-y-hidden inset-0 flex justify-center items-center z-50"
    >
      <div class="absolute inset-0 z-60 opacity-25 bg-blackColor"></div>
      <div class="relative mx-auto w-screen md:w-2/3 lg:w-1/2">
        <div class="bg-whiteColor w-full p-4 rounded">
          <div class="flex justify-end">
            <a @click.prevent="closeForm()" class="block mb-4 mr-0"
              ><img src="/images/close.png" alt="close-icon"
            /></a>
          </div>
          <div class="flex justify-center my-3 text-lg sm:text-4xl font-semibold">
            <h1 class="mb-5 text-center">Parašyk mums</h1>
          </div>
          <form :model="form" @submit.prevent="submitForm" ref="contactForm">
            <div class="grid gap-4 grid-cols-1">
              <div class="justify-center">
                <label class="text-xs sm:text-sm block mb-3" for="email"
                  >El. paštas</label
                >
                <input
                  class="w-full text-xs sm:text-sm text-left bg-darkerWhite p-3 sm:p-4 block rounded-md focus:outline-none"
                  :class="{ invalid: !email.isValid }"
                  type="email"
                  v-model.trim="email.val"
                  @keyup="clearValidity('email')"
                />
                <p class="invalid-msg" v-if="!email.isValid">
                  Elektroninio pašto adresas yra privalomas.
                </p>
              </div>
              <div class="">
                <label class="text-xs sm:text-sm block mb-3" for="email">Vardas</label>
                <input
                  class="w-full text-xs sm:text-sm text-left bg-darkerWhite p-3 sm:p-4 block rounded-md focus:outline-none"
                  :class="{ invalid: !name.isValid }"
                  type="text"
                  v-model.trim="name.val"
                  @keyup="clearValidity('name')"
                />
                <p class="invalid-msg" v-if="!name.isValid">Vardas yra privalomas.</p>
              </div>
              <div class="">
                <label class="text-xs sm:text-sm text-left block mb-3" for="msg"
                  >Žinutė</label
                >
                <textarea
                  class="w-full text-xs sm:text-sm h-24 bg-darkerWhite p-3 sm:p-4 block rounded-md focus:outline-none"
                  :class="{ invalid: !msg.isValid }"
                  type="text"
                  name="msg"
                  v-model.trim="msg.val"
                  @keyup="clearValidity('msg')"
                ></textarea>
                <p class="invalid-msg" v-if="!msg.isValid">
                  Užklausa negali būti tuščia.
                </p>
              </div>
              <div class="w-full r-align">
                <vue-recaptcha
                  class="g-recaptcha flex justify-center"
                  style="
                    transform: scale(0.77);
                    -webkit-transform: scale(0.77);
                    transform-origin: 0 0;
                    -webkit-transform-origin: 0 0;
                  "
                  ref="recaptcha"
                  @verify="onVerify"
                  sitekey="6Le-WUQaAAAAAP_FYZLjh7TxebYdZe1K3-4GR6-3"
                ></vue-recaptcha>
                <p class="invalid-msg">
                  {{ form.tickWarning }}
                </p>
              </div>
              <div class="flex justify-center items-center">
                <button
                  class="py-3 mt-4 mx-auto w-full rounded-4xl focus:outline-none bg-gradient-to-r from-red-600 to-yellow-500 font-bold text-blackColor transition duration-500 ease-in-out hover:bg-blackLighter hover:text-whiteColor"
                  type="submit"
                  name="button"
                  v-if="!loading"
                >
                  Siųsti
                </button>
                <LoadingBar v-if="loading" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { bus } from "../app";
import VueRecaptcha from "vue-recaptcha";
import LoadingBar from "./LoadingBar.vue";

export default {
  components: { VueRecaptcha, LoadingBar },
  data() {
    return {
      form: {
        robot: false,
        tickWarning: "",
      },
      email: {
        val: "",
        isValid: true,
      },
      name: {
        val: "",
        isValid: true,
      },
      msg: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      isActive: false,
      isActiveSuccessModal: false,
      loading: false,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.email.val === "" || !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.msg.val === "") {
        this.msg.isValid = false;
        this.formIsValid = false;
      }
      if (!this.form.robot) {
        this.form.tickWarning = "Prašome patvirtinti.";
        this.formIsValid = false;
      }
    },
    async submitForm(e) {
      this.validateForm();

      let formData = {
        name: this.name.val,
        email: this.email.val,
        message: this.msg.val,
      };
      e.preventDefault();
      // let currentObj = this;
      if (this.form.robot) {
        this.loading = true;
        await axios
          .post("/submitForm", formData)
          .then((response) => {
            // currentObj.output = response.data;
            this.openSuccessModal();
            this.email.val = "";
            this.name.val = "";
            this.msg.val = "";
            console.log("Message sent");
            this.form.robot = false;
            this.loading = false;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    onVerify(response) {
      if (response) {
        this.form.tickWarning = "";
        this.form.robot = true;
      } else {
        return;
      }
    },
    openSuccessModal() {
      this.isActive = false;
      this.isActiveSuccessModal = true;
      bus.$emit("isActiveSuccessModal", true);
    },
    closeForm() {
      this.email.isValid = true;
      this.name.isValid = true;
      this.msg.isValid = true;
      this.isActive = false;
    },
  },
  created() {
    bus.$on("ContactFormIsActive", (data) => {
      this.isActive = data;
    });
  },
};
</script>

<style type="css" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.wrapper {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.invalid {
  color: red;
  border: 1px red solid;
}

.invalid-msg {
  color: red;
  font-size: 10px;
  margin-top: 1em;
}

.r-align {
  text-align: left;
}

.g-recaptcha {
  display: inline-block;
}
</style>
