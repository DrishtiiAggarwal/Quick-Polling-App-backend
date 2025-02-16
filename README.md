# Quick Polling App

## Description
A simple polling app where users can:
- Create a poll with a question and multiple options.
- Vote on a poll.
- View poll results in real-time (auto-refresh every 5 seconds).

## Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Deployment**: Render

## Features
- User authentication (Signup/Login)
- Create polls with multiple options
- Vote on polls
- Real-time poll result updates

## API Endpoints

### Authentication
#### **User Signup**
**Endpoint:** `POST /signup``

#### **User Login**
**Endpoint:** `POST /login`

### Polls
#### **Create Poll**
**Endpoint:** `POST /api/polls/createpoll`

#### **Fetch Polls**
**Endpoint:** `GET /api/polls/fetchpoll`

#### **General Polls Endpoint**
**Endpoint:** `GET /api/polls/`

#### **Add Vote**
**Endpoint:** `POST /api/polls/addvote`

## How to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/quick-polling-app.git
   cd quick-polling-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (`.env`):
   ```sh
   DATABASE_URL=your_postgresql_url
   JWT_SECRET=your_secret_key
   ```
4. Start the backend:
   ```sh
   npm run dev
   ```
5. Start the frontend:
   ```sh
   cd frontend
   npm run dev
   ```
6. Open your browser and go to `http://localhost:3000`

