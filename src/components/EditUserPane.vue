<script setup>
import { onBeforeUpdate, reactive } from "vue";

const props = defineProps(["user"]);

let clone = { ...props.user };

const state = reactive({
  user: clone,
});

console.log(state.user);

onBeforeUpdate(() => {
  clone = { ...props.user };
  state.user = clone;
});
</script>

<template>
  <div class="edit-pane-container">
    <div class="edit-pane-content">
      <div class="avatar-container">
        <div class="avatar">Avatar</div>
      </div>
      <div class="form-container">
        <h3>{{ state.user.first_name + " " + state.user.last_name }}</h3>
        <p>User Details</p>
        <form>
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
            <input
              type="text"
              name="last_name"
              v-model="state.user.last_name"
            />
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
          <!-- @todo - need to figure out reactivity of state from copied state
          object, then hook up save button to new UserStore action to send PUT /
          PATCH request to server -->
          <!-- <div class="modal-button-container">
            <div @click="closeModal" class="close-modal-button">Cancel</div>
            <button class="save-modal-button">
              <i class="pi pi-save"></i>Save
            </button>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.edit-pane-container {
  background-color: #d9d9d9;
}

.edit-pane-content {
  background-color: white;
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  height: 90%;
}

.avatar-container {
  background-color: #d9ebff;
  display: flex;
}

.avatar {
  background-color: white;
  margin: 20px;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  padding: 20px;
}
</style>
