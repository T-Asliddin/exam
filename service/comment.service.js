import http from "@/api/interseptors";

const comment = {
  get: (params) => http.get("/product-comments", { params }),
  post: (data) => http.post("/comment",  data ),

};
export default comment;


