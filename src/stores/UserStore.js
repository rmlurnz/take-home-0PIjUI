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
    async addUser(newUser) {
      try {
        const response = await fetch(API_BASE_URL + "/users", {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        // grab DB insertion ID from response and add to local state
        newUser.id = json.id;
        this.users.push(newUser);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
