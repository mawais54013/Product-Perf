import axios from "axios";

export default {
    getgameData: function (query) {
        return axios.get("/api/getGames");
    },
    getPopularGame: function (query) {
        return axios.get("/api/getPopular")
    },
    getUpcoming: function (query) {
        return axios.get("/api/getComingSoon")
    }
};
