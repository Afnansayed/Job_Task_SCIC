# Product Search & Filter Frontend

## Overview
This project is a part of a Fullstack functionality-based single-page website. The frontend is built with React.js and focuses on implementing user-friendly features such as searching, filtering, categorizing, sorting, and pagination of products.

## Features
- **Search**: Users can search for products by name.
- **Filter**: Products can be filtered by Brand, Category, and Price Range. Users can apply multiple filters simultaneously.
- **Sort**: Products can be sorted by Price (Low to High, High to Low) and by Date Added (Newest first).
- **Pagination**: Efficiently loads products with pagination and provides Next/Previous navigation.
- **Authentication**: Google Authentication and Email/Password Authentication using Firebase.
- **Responsive Design**: Fully responsive with a mobile-first approach.
- **Product Cards**: Fixed-size product cards displaying product information concisely.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS for styling
- **Authentication**: Firebase Authentication (Google and Email/Password)
- **Routing**: React Router DOM

## Project Setup

### Prerequisites
- Node.js and npm installed on your machine.
- Firebase project setup for Authentication.

### Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/yourusername/product-search-filter-frontend.git](https://github.com/Afnansayed/Job_Task_SCIC.git)
   cd job_Task_SCIC

   ### Installation

1. **Install dependencies**:

    ```bash
    npm install
    ```

2. **Create a `.env` file** in the root directory and add your Firebase configuration:

    ```bash
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

### Running the Project

After starting the development server, the project will be available at `http://localhost:5000`. You can browse the products, use search and filtering functionalities, and test the authentication features.



- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
