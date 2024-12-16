import { defineStore } from "pinia";

const API_BASE_URL = "https://retoolapi.dev/0PIjUI";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch(API_BASE_URL + "/users");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        this.users = json;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
