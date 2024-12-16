<script setup>
import { useUserStore } from "./stores/UserStore";
import AddUserModal from "./components/AddUserModal.vue";

const userStore = useUserStore();

// retrieve users via API
userStore.fetchUsers();
</script>

<template>
  <div class="user-list">
    <ul>
      <li v-for="user in userStore.$state.users" :key="user.id">
        {{ user.first_name + " " + Array.from(user.last_name)[0] }}
      </li>
    </ul>
  </div>
  <div>
    <div>Edit Pane</div>
  </div>
  <AddUserModal></AddUserModal>
</template>
