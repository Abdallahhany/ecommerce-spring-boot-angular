# E-commerce Spring Boot and Angular Application

## Overview
This project is a full-stack e-commerce application built using Spring Boot for the backend and Angular for the frontend. It provides a platform for users to browse products, add them to their cart, and make purchases. The application also includes features for user authentication, order management, and payment processing.

## Features
- User Registration and Authentication
- Product Listing and Search
- Shopping Cart Management
- Order Processing
- Payment Integration
- Admin Dashboard for Product and Order Management

## Technologies Used
### Backend
- Java
- Spring Boot
- Spring Security
- Hibernate
- MySQL

### Frontend
- Angular
- TypeScript
- Bootstrap

## Getting Started

### Prerequisites
- Java 11 or higher
- Maven
- Node.js and npm
- Angular CLI
- MySQL

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/abdallahhany/ecommerce-spring-boot-angular.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ecommerce-spring-boot-angular
    ```
3. Configure the MySQL database in `src/main/resources/application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    ```
4. Build the backend project:
    ```bash
    mvn clean install
    ```
5. Run the backend application:
    ```bash
    mvn spring-boot:run
    ```
6. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
7. Install frontend dependencies:
    ```bash
    npm install
    ```
8. Run the frontend application:
    ```bash
    npm start
    ```

## Usage
- Access the application at `https://localhost:4200`
- Register a new user or log in with existing credentials
- Browse products and add them to your cart
- Proceed to checkout and complete the payment

## Summary
This project demonstrates the development of a full-stack e-commerce application using Spring Boot and Angular. It covers a wide range of features including user authentication, product management, order processing, and payment integration. The application can be further extended with additional functionality and improved user experience.