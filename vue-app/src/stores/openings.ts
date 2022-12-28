import type { Family } from "@/models/family.model";
import { defineStore } from "pinia";

export type RootState = {
  families: Family[];
  error: string;
  loading: boolean;
};

export const useOpeningsStore = defineStore({
  id: "openingStore",
  state: () =>
    ({
      families: [],
      error: "",
      loading: false,
    } as RootState),
  actions: {
    async fetchOpenings() {
      this.families = [];
      try {
        await fetch(
          "https://raw.githubusercontent.com/mharbuz/chess-openings-review/main/data/openings.json"
        )
          .then((response) => response.json())
          .then((data) => {
            this.families = data.families;
          });
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    /*async fetchOpening(id: string) {
      this.opening = null;
      this.loading = true;
      try {
        this.opening = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        ).then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },*/
  },
});
