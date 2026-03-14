# Facebook Login Page Clone with Docker Deployment

## Project Overview

This project is a **Facebook Login Page Clone** built using **HTML, Tailwind CSS, and Node.js**.
It allows users to **create an account and login** through a simple backend API.

The application is **containerized using Docker and deployed on AWS EC2**, demonstrating basic **Full Stack and DevOps practices**.

---

## Technologies Used

### Frontend

* HTML
* Tailwind CSS (CDN)

### Backend

* Node.js
* Express.js

### DevOps Tools

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
* User Signup functionality
* User Login validation
* Node.js backend API
* Docker containerized application
* Deployment on AWS EC2

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

Run Docker container

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
3. Clone the repository
4. Build Docker image
5. Run Docker container
6. Access application using EC2 Public IP

Example:

```
http://EC2-PUBLIC-IP:3000
```

---

## User Flow

Login Page → Create Account → Account Created → Login Success

---

## Screenshots

### 1. Facebook Login Page

<img width="1863" height="902" alt="Facebook Login Page" src="https://github.com/user-attachments/assets/e13b56c8-571e-4cd8-87cc-b3387b463b45" />

---

### 2. Create Account Page

<img width="1435" height="732" alt="Create Account Page" src="https://github.com/user-attachments/assets/c6a8c63b-93f1-4e1e-85d9-c786c5793324" />

---

### 3. Account Created Successfully

<img width="1003" height="355" alt="Account Created" src="https://github.com/user-attachments/assets/0a4c2948-1407-47a7-b513-994b124e5f03" />

---

### 4. Login Successful

<img width="737" height="242" alt="Login Success" src="https://github.com/user-attachments/assets/541c773a-9c07-4dbc-ab76-c6516fc7f0d2" />

---

## Future Improvements

* Add database integration
* Implement authentication using JWT
* Add CI/CD pipeline
* Deploy using Kubernetes
* Push Docker images to container registry

---

## Author

Juhi Sinha
DevOps Engineer
