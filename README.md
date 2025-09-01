# 🚀 Hire-Wire - Job Portal


**Hire-Wire** is a full-stack job portal built using the **MERN** stack, designed to streamline the hiring process by connecting job seekers with employers. It features real-time dashboards, role-based access, and secure authentication for a seamless experience.



## 📘 Project Overview
 
Hire-Wire enables recruiters to post job listings, view applications, and manage postings through a dedicated dashboard. Simultaneously, job seekers can browse jobs, apply, and track their application status in real-time through a user-friendly interface.


We chose the **MERN stack (MongoDB, Express.js, React.js, Node.js)** for its end-to-end JavaScript environment, scalability, and active ecosystem. React with Redux ensures smooth UI rendering and state management, while Node and Express provide a robust backend API structure. MongoDB’s flexibility makes it ideal for dynamic data like user profiles and job listings.


---


## Features


### Recruiters
-  Post job listings with role, location, and description  
-  View and manage applications in real-time  
-  Review resumes and applicant profiles  
-  Edit or delete existing job posts from the dashboard  


###  Job Seekers
- Browse available job opportunities  
- Apply to jobs with resume upload  
- Track application status in real-time  
- Personalized dashboard with application history  


---


##  Key Highlights


- 🔐 **Secure Auth**: JWT-based authentication with HTTP-only cookies  
- ⚙️ **Role-Based Dashboards**: Different interfaces for recruiters and job seekers  
- 🧠 **State Management**: Efficient data handling using Redux Toolkit  
- 📦 **RESTful APIs**: Modular API routes for scalability  
- 📱 **Responsive UI**: Optimized for desktop and mobile use  


---


## 🛠️ Tech Stack


| Category            | Tools / Frameworks                            |
|---------------------|-----------------------------------------------|
| **Frontend**        | React.js, Redux, CSS, JavaScript              |
| **Backend**         | Node.js, Express.js                           |
| **Database**        | MongoDB with Mongoose ODM                     |
| **Authentication**  | JWT, HTTP-only Cookies                        |
| **State Management**| Redux Toolkit                                 |
| **API Testing**     | Postman                                       |
| **Version Control** | Git, GitHub                                   |
| **Deployment**      | Render (Backend & Frontend)  |






## 🚀 Getting Started Locally


1. **Clone the Repository**
```bash
git clone https://github.com/your-username/hire-wire.git
cd Hire-Wire
```


2. **Install Backend Dependencies**
``` bash


cd Backend
npm install
```


3. **Set Environment Variables**


- Create a .env file inside /backend:


```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=your_jwt_expiry
COOKIE_EXPIRE=your_cookie_expiry
CLOUDINARAY_API_SECRET=your_cloudinary_api_secret
CLOUDINARAY_CLOUD_NAME=your_cloudinary_cloud_name
SMTP_SERVICE=your_email_service
SMTP_HOST=your_smtp_host
SMTP_PASSWORD=your_email_password
SMTP_MAIL=your_email_address
SMTP_PORT=your_smtp_port
```


- Create a .env file inside /frontend:
```bash
VITE_BACKEND_URL=your_backend_url
```


4. Start the Backend


```bash
npm run dev
```


5. Install Frontend Dependencies


```bash
cd ../frontend
npm install
```


6. Start the Frontend
```bash
npm start
```




#  Authors


- [Pravallika Sesha Sai Nunna](https://www.linkedin.com/in/pravallika-nunna)
- [Thrishitha Perabathula](https://www.linkedin.com/in/thrishitha-perabathula-bb0427259/)


---


# 🌐 Live Demo


🔗 [Hire-Wire Live](https://hire-wire-frontend.onrender.com)
