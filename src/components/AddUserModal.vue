<script setup>
import { useUserStore } from "@/stores/UserStore";
import { reactive } from "vue";

const userStore = useUserStore();

const state = reactive({
  user: {
    first_name: "",
    last_name: "",
    plan: "",
    company: "",
    email: "",
    phone_number: "",
  },
});

const handleSubmit = () => {
  userStore.addUser(state.user);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="first_name">First Name:</label>
      <input type="text" name="first_name" v-model="state.user.first_name" />
    </div>
    <div>
      <label for="last_name">Last Name:</label>
      <input type="text" name="last_name" v-model="state.user.last_name" />
    </div>
    <div>
      <label for="plan">Plan:</label>
      <select name="plan" v-model="state.user.plan">
        <option value="Free Plan">Free Plan</option>
        <option value="Pro Plan">Pro Plan</option>
        <option value="Trial">Trial</option>
      </select>
    </div>
    <div>
      <label for="company">Company:</label>
      <select name="company" v-model="state.user.company">
        <option value="Axiomworx">Axiomworx</option>
        <option value="Equinox Engineering">Equinox Engineering</option>
        <option value="Apple">Apple</option>
      </select>
    </div>
    <div>
      <label for="email">E-mail:</label>
      <input type="email" name="email" v-model="state.user.email" />
    </div>
    <div>
      <label for="phone_number">Phone #</label>
      <input type="tel" name="phone_number" v-model="state.user.phone_number" />
    </div>
    <button>Save</button>
  </form>
</template>
