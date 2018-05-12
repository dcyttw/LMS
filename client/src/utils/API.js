import axios from "axios";

export default {
  // Creates a session to the database
  createSession: function(sessionData) {
    return axios.post("/api/sessions", sessionData);
  },
  // Gets all sessions
  getSessions: function() {
    return axios.get("/api/sessions");
  },
  // Gets a session with the given id
  getSession: function(id) {
    return axios.get("/api/sessions/" + id);
  },
  //Updates a session
  updateSession: function(id, sessionData){
    return axios.put("/api/sessions/" + id, sessionData);
  },
  // Deletes a session with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/sessions/" + id);
  }
};