# MealConnect

MealConnect is a platform that bridges the gap between restaurants with surplus food and local food banks/shelters, helping reduce food waste while addressing food insecurity in communities.

## 🎯 Project Overview

MealConnect facilitates the efficient distribution of surplus food from restaurants to food banks and shelters through a user-friendly platform that manages the entire donation process.

Figma File Link: https://www.figma.com/proto/wB0zwxBO5UgJGcJwopv7GQ/meal-connect-project?page-id=0%3A1&node-id=20-36&node-type=canvas&viewport=-1198%2C285%2C0.79&t=kTIL0liyZ1c7lSWA-1&scaling=min-zoom&content-scaling=fixed

### Key Features

- **Real-time Food Donation Management**
  - Restaurants can log surplus food inventory
  - Food banks receive immediate notifications about available donations
  - Live tracking of delivery partners

- **Smart Location Matching**
  - Automatic matching of restaurants with nearby food banks
  - Optimized routing for food pickup and delivery
  - Google Maps integration for real-time location tracking

- **Dual Dashboard System**
  - Restaurant Dashboard:
    - Log surplus food details
    - Track donation history
    - Manage restaurant profile
    - Monitor delivery status
  
  - Food Bank Dashboard:
    - View available donations
    - Track received donations
    - Manage food bank profile
    - Coordinate pickups

## 🛠️ Tech Stack

### Frontend

#### Web Application 
- **Framework:** React.js
- **Language:** JavaScript/TypeScript
- **Styling:** CSS
- **UI Components:** Material-UI
- **Maps Integration:** Google Maps API
- **Data Visualization:** D3.js, Chart.js

### Backend

- **Framework:** Node.js with Express.js
- **Databases:**
  - MongoDB (NoSQL) - Primary database
  - PostgreSQL/MySQL - Relational data
- **Authentication:** Firebase Authentication
- **APIs:** 
  - Google Maps API
  - Google Maps Distance Matrix API

### Analytics & Reporting
- **Data Processing:**
  - Apache Spark
  - Google Analytics
- **Dashboard Visualization:**
  - D3.js
  - Chart.js
  - Tableau integration

### Communication & Notifications
- **Push Notifications:** Firebase Cloud Messaging
- **Email Services:** 
  - SendGrid
  - Amazon SES

## 💻 Technical Architecture

### Database Structure

#### Restaurant Data
- Restaurant name
- Food items (surplus inventory)
- Food quantity
- Expiry dates
- Location
- Contact details

#### Food Bank Data
- Food bank/shelter name
- Location
- Contact details
- Capacity
- Required food amounts

### Backend Workflow
1. Restaurants input surplus food information
2. System notifies nearby food banks
3. Food banks can claim available donations
4. Delivery partners are dispatched for pickup
5. Real-time tracking of delivery progress
6. Confirmation of successful donation

## 📱 User Interface

### Login System
- Separate login portals for:
  - Restaurants
  - Food Banks/Shelters
- Role-based access control
- Secure authentication

### Restaurant Interface
- Dashboard displaying:
  1. Surplus food inventory
  2. Name of food items
  3. Quantity tracking
  4. Expiry date management
  5. Location settings
  6. Contact information

### Food Bank Interface
- Dashboard showing:
  1. Available donations
  2. Donor restaurant details
  3. Food quantities
  4. Collection scheduling
  5. Donation history
  6. Impact metrics

## 📊 Analytics & Reporting

### Final Dashboard Features
1. Date-wise donation tracking
2. Restaurant donation details
3. Quantity metrics
4. Food item categorization
5. Daily donation summaries
6. Cumulative donation statistics

## 🔒 Security & Privacy

- Secure user authentication
- Encrypted data transmission
- Protected user information
- Role-based access control
- Regular security audits

## Team Members
- 1.Anish Rimil Barla (Lead) - Backend
- 2.Mohit Raj - Frontend
- 3.Ayansh Singh - Frontend
- 4.Akash Verma - Backend
- 5.Tarkeshwar Uraun- Backend
- 6.Rishav Kindo - UI/UX Design

## 📄 License

This project is licensed under the [MIT License](LICENSE).




