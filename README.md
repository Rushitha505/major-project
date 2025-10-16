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

## Conclusion
The project demonstrates a fully functional AWS Elastic Beanstalk deployment with integrated cloud services, showcasing automated scaling, monitoring, and secure infrastructure setup.
