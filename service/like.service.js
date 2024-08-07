import http from "@/api/interseptors";
const like = {
  post: (id) => http.post(`/like/${id}`),
  get: (params) => http.get(`/wishlist`,{params}),
};
export default like;


