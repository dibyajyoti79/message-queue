const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue");

async function init() {
  const res = await notificationQueue.add("email to dibya", {
    email: "test@gmail.com",
    subject: "test email notification",
    body: "this is a test body",
  });
  console.log("Job added to queue", res.id);
}

init();
