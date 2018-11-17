const axios = require("axios");
const router = require("express").Router();
const cheerio = require("cheerio");
const request = require("request");

router.get("/getGames", (req, res) => {
    axios.get("https://api-endpoint.igdb.com/games/1942?fields=*", {
    headers: {
      "user-key": "b2ea4c0b9c1646c644d68c09d43c0405",
      // Accept: "application/json"
    }
  })
  .then(response => {
    // Do work here
    console.log(response.data);
    return res.json(response.data);
  })
  .catch(e => {
    console.log("error", e);
  });
  // /games/?fields=name,popularity&order=popularity:desc
});
router.get("/getPopular", (req, res) => {
    axios.get("https://api-endpoint.igdb.com/games/?fields=name,popularity&order=popularity:desc", {
    headers: {
      "user-key": "b2ea4c0b9c1646c644d68c09d43c0405",
      // Accept: "application/json"
    }
  })
  .then(response => {
    // Do work here
    console.log(response.data);
    return res.json(response.data);
  })
  .catch(e => {
    console.log("error", e);
  });
});

router.get("/getComingSoon", (req, res) => {
  axios.get("https://api-endpoint.igdb.com/release_dates/?fields=*&filter[platform][eq]=48&order=date:asc&filter[date][gt]=1500619813000&expand=game", {
    headers: {
      "user-key": "b2ea4c0b9c1646c644d68c09d43c0405",
    }
  })
  .then(response => {
    console.log(response.data);
    return res.json(response.data);
  });
});

module.exports = router;
