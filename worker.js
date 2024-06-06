const { Worker } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis({
  maxRetriesPerRequest: null,
});
const sendEmail = () =>
  new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Message received id :${job.id}`);
    console.log("Processing message...");
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail();
    console.log("Email Sent");
  },
  { connection }
);
