import http from "@/api/interseptors";

const product = {
  get: (params) => http.get("/products", { params }),
};
export default product;


