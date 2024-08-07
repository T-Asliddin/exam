import http from "@/api/interseptors";
const auth = {
  sigIn: (data) => http.post("/login", data),
};
export default auth;


