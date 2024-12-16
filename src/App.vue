<script setup>
import { ref } from "vue";
import { useUserStore } from "./stores/UserStore";
import AddUserModal from "./components/AddUserModal.vue";
import EditUserPane from "./components/EditUserPane.vue";

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

const selectedUser = ref(null);
const handleUserSelection = (user) => {
  selectedUser.value = user;
};
</script>

<template>
  <div class="user-list-container">
    <div class="filter"><i class="pi pi-filter"></i> Filter Users</div>
    <ul class="user-list">
      <li
        v-for="user in userStore.$state.users"
        :key="user.id"
        class="user"
        :class="{ active: selectedUser === user }"
        @click="handleUserSelection(user)"
      >
        {{ user.first_name + " " + Array.from(user.last_name)[0] }}
      </li>
    </ul>
    <div class="add-new-user-container">
      <button class="add-new-user" @click="openUserCreateModal">
        <i class="pi pi-plus"></i>
        Create New User
      </button>
    </div>
  </div>
  <EditUserPane v-if="selectedUser" :user="selectedUser"></EditUserPane>
  <AddUserModal
    v-if="isUserCreateModalOpen"
    @closeModal="closeUserCreateModal"
  ></AddUserModal>
</template>

<style scoped>
.user-list-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-height: 100vh;
}

.filter {
  background-color: #0958d9;
  color: white;
  padding: 13px;
  border-radius: 10px;
  margin: 2px 5px;
}

.filter i {
  margin: 0 10px 0 20px;
}

.user-list {
  list-style-type: none;
  overflow-y: scroll;
}

.user {
  padding: 15px 0 15px 40px;
}

.user:hover {
  cursor: pointer;
  background-color: #e6f4ff;
}

.active {
  color: #0958d9;
  background-color: #e6f4ff;
}

.add-new-user-container {
  background-color: #dfe6ec;
  display: flex;
  flex: column;
  justify-content: center;
  align-items: center;
}

.add-new-user {
  background-color: #0958d9;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 20px;
  border-radius: 10px;
  font-size: 1em;
}

.add-new-user i {
  margin-right: 7px;
}

.add-new-user:hover {
  cursor: pointer;
}
</style>
