import { api } from "../libs";

export const productRepo = {
  getProducts() {
    return api.api_get("/products");
  },
};
