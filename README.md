# Healthcare Management API

## Features
- User authentication with JWT (Register & Login)
- CRUD operations for managing patient appointments
- Secure routes with token authentication
- MongoDB database integration
- Error handling 
- Input validation to ensure data integrity, including future-dated appointment scheduling

## Installation

### Prerequisites
- Node.js installed
- MongoDB instance running (local or cloud)

### Setup Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/mdarmancse/heatlhcare.git
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and configure environment variables:
   ```env
   PORT=9000
   MONGO_URI=mongodb+srv://mdarmancse:x8HZHQ8dijSSAdQ3@cluster0.1q6wp.mongodb.net/
   JWT_SECRET=sUp3rS3cr3t!@#R4nd0mK3y$%^
   ```

4. Start the server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm start
   ```

## Documentation
For detailed API documentation, refer to:
https://documenter.getpostman.com/view/31446687/2sAYX6pMSJ

---
Developed with ❤️ using Express.js & MongoDB.

