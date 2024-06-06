# Message Queue Project

This project demonstrates the use of a message queue for handling email notifications using BullMQ and Redis. 

## Prerequisites

- Docker
- Node.js
- npm (Node Package Manager)

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/dibyajyoti79/message-queue.git
cd message-queue
```


### Step 2: Run Redis Server

First, you need to run a Redis server. You can do this using Docker:

```sh
docker run -itd -p 6379:6379 redis
```
### Step 3: Install Dependencies

Navigate to your project directory and install the required npm packages:

```sh
npm install
```
### Step 4: Run the Producer

To add a job to the queue, run the producer script:

```sh
node producer.js
```
### Step 5: Monitor the Worker

Once the worker script is running, it will continuously process jobs from the queue. You can monitor the worker's output in the terminal to see the processing of jobs and any logs or messages generated during the process.

```sh
node worker.js
```
