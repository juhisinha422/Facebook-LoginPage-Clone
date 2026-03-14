# Facebook Login Page Clone with Docker Deployment

## Project Overview

This project is a **Facebook Login Page Clone** built using **HTML, Tailwind CSS, and Node.js**.
The application allows users to **create an account and login** using a simple backend API.
The entire application is **containerized using Docker and deployed on AWS EC2**.

This project demonstrates **basic full-stack development and DevOps practices** such as containerization and cloud deployment.

---

## Technologies Used

Frontend

* HTML
* Tailwind CSS

Backend

* Node.js
* Express.js

DevOps Tools

* Docker
* Git
* AWS EC2

---

## Project Architecture

User Browser
↓
EC2 Instance
↓
Docker Container
↓
Node.js Server
↓
Login / Signup API

---

## Project Structure

```
Facebook-LoginPage-Clone
│
├── index.html
├── signup.html
├── clone.css
├── Dockerfile
├── README.md
│
└── server
    ├── server.js
    └── package.json
```

---

## Features

* Responsive Facebook Login UI
* User Signup
* User Login
* Node.js backend API
* Docker container deployment
* Hosted on AWS EC2

---

## Clone Repository

```
git clone https://github.com/juhisinha422/Facebook-LoginPage-Clone.git
cd Facebook-LoginPage-Clone
```

---

## Run Application Without Docker

Install dependencies

```
cd server
npm install
```

Start server

```
node server.js
```

Open browser

```
http://localhost:3000
```

---

## Docker Setup

Build Docker image

```
docker build -t facebook-login-app .
```

Run container

```
docker run -d -p 3000:3000 facebook-login-app
```

Access application

```
http://localhost:3000
```

---

## AWS Deployment Steps

1. Launch EC2 instance (Amazon Linux)
2. Install Docker
3. Clone repository
4. Build Docker image
5. Run Docker container
6. Access using EC2 Public IP

Example:

```
http://EC2-PUBLIC-IP:3000
```

---

## Login Flow

User enters credentials
↓
Form sends request to `/login`
↓
Node.js server validates user
↓
Login success or failure message returned

---

## Future Improvements

* Add database integration
* Implement JWT authentication
* Deploy using Kubernetes
* Add CI/CD pipeline
* Store Docker images in container registry

---

## Author

Juhi Sinha
DevOps Engineer
