const axios = require("axios");

// Configuration
const TARGET_URL = "http://127.0.0.1:8000/api/module-activity/store"; // Replace with your target URL
const INTERVAL = 20000; // Interval in milliseconds (5000ms = 5 seconds)

async function sendHit() {
  const srNos = ["CMR5345UREI434", "MEWRE43452345OPER", "KLER530245PORE"];
  const ele = Math.floor(Math.random() * srNos.length);

  try {
    const response = await axios.post(TARGET_URL, {
      sr_no: srNos[ele],
      temprature: Math.floor(Math.random() * 40) + 1,
      timestamp: (new Date().getTime() / 1000),
    });

    console.log(`Hit sent: ${response.status} - ${response.statusText}`);
  } catch (error) {
    console.error(`Error sending hit: ${error.message}`);
  }
}

// Run the function at regular intervals
setInterval(sendHit, INTERVAL);

console.log(`Sending hits to ${TARGET_URL} every ${INTERVAL / 1000} seconds...`);
