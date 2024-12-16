<script setup>
import { useUserStore } from "@/stores/UserStore";
import { reactive } from "vue";

const userStore = useUserStore();
const emit = defineEmits(["closeModal"]);

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
  state.user = {};
  closeModal();
};

const closeModal = () => {
  emit("closeModal");
};
</script>

<template>
  <div class="modal-container" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h3>Creating New User</h3>
      <p>User Details</p>
      <form @submit.prevent="handleSubmit">
        <!-- @todo - abstract input cards to new component -->
        <div class="user-data-input">
          <label for="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            v-model="state.user.first_name"
          />
        </div>
        <div class="user-data-input">
          <label for="last_name">Last Name:</label>
          <input type="text" name="last_name" v-model="state.user.last_name" />
        </div>
        <div class="user-data-input">
          <label for="plan">Plan:</label>
          <select name="plan" v-model="state.user.plan">
            <option value="Free Plan">Free Plan</option>
            <option value="Pro Plan">Pro Plan</option>
            <option value="Trial">Trial</option>
          </select>
        </div>
        <div class="user-data-input">
          <label for="company">Company:</label>
          <select name="company" v-model="state.user.company">
            <option value="Axiomworx">Axiomworx</option>
            <option value="Equinox Engineering">Equinox Engineering</option>
            <option value="Apple">Apple</option>
          </select>
        </div>
        <div class="user-data-input">
          <label for="email">E-mail:</label>
          <input type="email" name="email" v-model="state.user.email" />
        </div>
        <div class="user-data-input">
          <label for="phone_number">Phone #</label>
          <input
            type="tel"
            name="phone_number"
            v-model="state.user.phone_number"
          />
        </div>
        <div class="modal-button-container">
          <div @click="closeModal" class="close-modal-button">Cancel</div>
          <button class="save-modal-button">
            <i class="pi pi-save"></i>Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
}

.modal-content {
  background-color: white;
  margin: auto auto;
  padding: 30px;
  width: 80%;
  max-width: 1000px;
  border-radius: 10px;
}

.modal-button-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
}

.close-modal-button {
  padding: 10px;
  margin: 0 10px;
}

.save-modal-button {
  font-size: 1em;
  padding: 5px;
  margin: 0 10px;
  background-color: #0958d9;
  color: white;
  border: none;
  width: 50%;
  border-radius: 5px;
}

.save-modal-button i {
  margin-right: 10px;
}

.close-modal-button {
  padding: 5px;
}

.save-modal-button:hover,
.close-modal-button:hover {
  cursor: pointer;
}
</style>
