# **Mudet Real Solution: Empowering Wellness & Wealth** 🌿

## Overview
Mudet Real Solution is a dynamic React frontend application designed to showcase premium wellness products and introduce a robust referral system for achieving financial independence. Built with React, Vite, and Tailwind CSS, this project delivers an intuitive and high-performance user experience, bridging the gap between natural living and entrepreneurial opportunity.

## Features
-   **Comprehensive Product Showcase**: Explore detailed information about the Cinnamon Herbal Extract, highlighting its natural benefits and uses.
-   **Transparent Compensation Plan**: Understand the various ways to earn profits through direct sales, referral bonuses, and other incentives.
-   **Secure User Authentication**: A dedicated login interface for members to access their personalized dashboards.
-   **Interactive Contact & Newsletter Forms**: Easily get in touch with the Mudet team or subscribe to receive the latest updates.
-   **Dynamic Testimonials**: Read authentic feedback from satisfied customers, dynamically fetched and displayed.
-   **Responsive & Modern UI**: Enjoy a seamless and aesthetically pleasing experience across all devices, crafted with Tailwind CSS.
-   **Optimized Performance**: Benefit from fast loading times and smooth interactions thanks to Vite's powerful tooling.

## Getting Started

### Environment Variables
To run this project locally, you will need to set up the following environment variables. Create a `.env` file in the root directory of the project based on the `.env.example` (if provided, otherwise create one from scratch):

-   `VITE_API_BASE_URL`: The base URL for the backend API interactions (e.g., for contact form, newsletter, login, testimonials).
    *   Example: `VITE_API_BASE_URL=https://api.yourdomain.com`
-   `VITE_ENCRYPT_HELPER_SECRET_KEY`: A secret key used for encrypting user tokens for secure client-side storage.
    *   Example: `VITE_ENCRYPT_HELPER_SECRET_KEY=supersecretkeyforencryption`
-   `VITE_STORAGE_BASE_URL`: The base URL for fetching static assets or images from your storage service (e.g., for testimonial images).
    *   Example: `VITE_STORAGE_BASE_URL=https://cdn.yourdomain.com/storage`

## Usage
The Mudet Real Solution application provides a straightforward user journey, from exploring products to member login.

### Navigating the Application
*   **Home (`/`)**: Discover the core values, features, earning opportunities, and testimonials of Mudet Real Solution.
*   **About Us (`/about`)**: Learn about the company's mission, vision, core values, and the dedicated team behind Mudet.
*   **Products (`/product`)**: Dive deep into the benefits and features of the Cinnamon Herbal Extract.
*   **Compensation Plan (`/plan`)**: Understand the various ways to earn profits and grow with Mudet's business model.
*   **Contact Us (`/contact`)**: Fill out a form to send inquiries or feedback directly to the Mudet team.
*   **Member Login (`/login`)**: Access the secure login page for registered members.

### Submitting the Contact Form
1.  Navigate to the `/contact` page.
2.  Fill in your `First Name`, `Last Name`, `Phone Number`, `Email`, and `Message` in the respective fields.
3.  Ensure all required fields are accurately completed.
4.  Click the "Submit" button to send your message to the Mudet team. You will receive an alert confirming the submission or indicating an error.

### Subscribing to the Newsletter
1.  Scroll down to the footer section of any page.
2.  Enter your `email` address in the "Enter your email" field.
3.  Click the "Submit" button next to the email input.
4.  A toast notification will confirm your subscription or inform you of any issues.

### Member Login
1.  Navigate to the `/login` page.
2.  Enter your registered `username` and `password` into the input fields.
3.  Optionally, check the "Remember me" box.
4.  Click the "Login" button.
5.  Upon successful login, you will see a success toast and then be redirected to your respective dashboard (e.g., admin or user panel) on `app.mudetrealsolution.com` with an encrypted token and role.

## Technologies Used
| Technology         | Description                                                        | Link                                                            |
| :----------------- | :----------------------------------------------------------------- | :-------------------------------------------------------------- |
| **React**          | A JavaScript library for building user interfaces.                 | [React](https://react.dev/)                                     |
| **Vite**           | A fast development build tool for modern web projects.             | [Vite](https://vitejs.dev/)                                     |
| **Tailwind CSS**   | A utility-first CSS framework for rapid UI development.            | [Tailwind CSS](https://tailwindcss.com/)                      |
| **React Router DOM**| Declarative routing for React applications.                        | [React Router](https://reactrouter.com/en/main)                 |
| **Formik**         | A popular library for building and managing forms in React.        | [Formik](https://formik.org/)                                   |
| **Yup**            | A JavaScript schema builder for value parsing and validation.      | [Yup](https://github.com/jquense/yup)                           |
| **Axios**          | A promise-based HTTP client for making API requests.               | [Axios](https://axios-http.com/)                                |
| **Sonner**         | An accessible and customizable toast component for React.          | [Sonner](https://sonner.emilkowalski.com/)                      |
| **Crypto-JS**      | A JavaScript library of cryptographic standards.                   | [Crypto-JS](https://github.com/brix/crypto-js)                  |

## Author Info
Developed by a passionate team focused on delivering intuitive and impactful web experiences. Connect with us on social media:

*   **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
*   **Twitter**: [Your Twitter Profile](https://twitter.com/yourusername)
*   **Website**: [Your Personal Website](https://yourwebsite.com)

---
[![Built with React](https://img.shields.io/badge/React-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Built with Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?style=for-the-badge)](package.json)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)](https://github.com/yourusername/yourrepo/actions)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)