require('dotenv').config();
const axios = require('axios');

(async () => {
  try {
    const res = await axios.get("https://api.spoon.dev/v1/example", {
      headers: {
        Authorization: `Bearer ${process.env.SPOON_API_KEY}`
      }
    });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
})();