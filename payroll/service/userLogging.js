const fs = require("fs").promises;

async function logUserActivity(activity) {
  await fs.appendFile("userlog.txt", activity + "\n");
}

module.exports = logUserActivity;