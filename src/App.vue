<script setup>
import { ref } from "vue";
import { useUserStore } from "./stores/UserStore";
import AddUserModal from "./components/AddUserModal.vue";

const userStore = useUserStore();

// retrieve users via API
userStore.fetchUsers();

// "Create New User" Modal
const isUserCreateModalOpen = ref(false);
const openUserCreateModal = () => {
  isUserCreateModalOpen.value = true;
};
const closeUserCreateModal = () => {
  isUserCreateModalOpen.value = false;
};
</script>

<template>
  <div class="user-list">
    <ul>
      <li v-for="user in userStore.$state.users" :key="user.id">
        {{ user.first_name + " " + Array.from(user.last_name)[0] }}
      </li>
    </ul>
    <button @click="openUserCreateModal">Add New User</button>
  </div>
  <div>
    <div>Edit Pane</div>
  </div>
  <AddUserModal
    v-if="isUserCreateModalOpen"
    @closeModal="closeUserCreateModal"
  ></AddUserModal>
</template>
