export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // For Spring Boot back-end
     return { token: "Bearer " + user.accessToken };
 
  } else {
    return {};
  }
}
