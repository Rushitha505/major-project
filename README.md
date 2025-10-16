# AWS Cloud Infrastructure Project: Elastic Beanstalk Sample App

## Project Overview
This project demonstrates deploying a **Node.js application** on AWS Elastic Beanstalk, implementing core AWS services to showcase cloud infrastructure best practices.

**Services Used:** IAM, VPC (Public & Private Subnets), EC2, ELB, Auto Scaling, CloudWatch, S3

---

## AWS Infrastructure

- **IAM:** Service role `aws-elasticbeanstalk-service-role`, EC2 profile `aws-elasticbeanstalk-ec2-role`  
- **VPC:** `vpc-0411a7291e0ef8da4` with 1 Public & 1 Private Subnet  
- **EC2 Instances:** `t3.micro` & `t3.small`, `x86_64`, secured via `sg-06139c3ba6b388d19`  
- **Elastic Load Balancer:** Public access for single-instance environment  
- **Auto Scaling:** On-Demand instances, cooldown 360s  
- **CloudWatch:** Enhanced health monitoring, log streaming enabled  
- **S3:** Stores environment data and application versions

---

## Application Details

- **Name:** MajorProjectApp  
- **Environment:** major-project-env  
- **Platform:** Node.js 22 on 64bit Amazon Linux 2023  
- **Deployment:** Successfully live at [major-project-env.eba-z2eehpkh.eu-north-1.elasticbeanstalk.com](http://major-project-env.eba-z2eehpkh.eu-north-1.elasticbeanstalk.com)

---

## Repository
[GitHub: Rushitha505/major-project](https://github.com/Rushitha505/major-project)

Includes application code, Elastic Beanstalk configuration, and `.gitignore`.

---

## Screenshots

**Dashboard (Elastic Beanstalk)**  
<img width="1920" height="1020" alt="Screenshot 2025-10-16 233902" src="https://github.com/user-attachments/assets/067426ef-7589-4585-93ee-be052b6befbd" />

  

**Output Page**  
<img width="1920" height="1020" alt="Screenshot 2025-10-16 234014" src="https://github.com/user-attachments/assets/2e82e83b-b9a6-4a28-9e85-24d019ff58d4" />

**Flowchart**
<img width="1024" height="1024" alt="flowchart (2)" src="https://github.com/user-attachments/assets/d78ff1dd-9beb-4270-b3be-d0dba49d6756" />



---

## Features

- Deployment on **AWS Elastic Beanstalk** for easy management  
- **Auto Scaling** ensures availability under varying load  
- **Elastic Load Balancer (ELB)** for handling incoming requests  
- **CloudWatch** monitoring for logs and application health  
- **S3 Integration** for storing application versions and environment data  
- Secure access using **IAM roles** and **Security Groups**

---

## Installation & Setup

To run locally (optional):
git clone https://github.com/Rushitha505/major-project.git
cd major-project
npm install
npm start



**Usage**

Open your browser and navigate to the live URL: major-project-env.eba-z2eehpkh.eu-north-1.elasticbeanstalk.com
Interact with the application as per its workflow
Refer to the Dashboard and Output screenshots above

**Future Enhancements**

Multi-region deployment for better redundancy and performance
Notification system (email/SMS) integration
Advanced analytics and reporting features
AI-powered recommendations for users

**Conclusion**

The project demonstrates a fully functional AWS Elastic Beanstalk deployment with integrated cloud services, showcasing automated scaling, monitoring, secure infrastructure setup, and a complete cloud-based application workflow.

