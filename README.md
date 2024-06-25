
# Teachers App

This project is a web application for viewing and interacting with a database of teachers, implemented using Firebase and React.

## Features

1. **Authentication and Registration**
   - Users can register, log in, get current user data, and log out using Firebase Authentication.
   - Registration and login forms are implemented using `react-hook-form` and `yup` for minimal field validation.
   - The modal window with forms closes on click of a “cross” button, on backdrop click, or on pressing the Esc key.

2. **Real-time Database of Teachers**
   - Uses Firebase Realtime Database to store a collection of teachers with fields: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience.
   - The collection is populated using the `teachers.json` file.

3. **Teacher Cards**
   - A card with teacher characteristics is implemented according to the layout.
   - The "Teachers" page displays 4 cards with the ability to load more by clicking the "Load more" button.
   - Users can add teachers to favorites using a “heart” button.
   - Authorized users can save favorite teachers to Firebase or localStorage.

4. **Interactivity**
   - The list of favorite teachers is retained when the page is refreshed for authorized users.
   - A card can be removed from favorites by clicking the “heart” button again.
   - Clicking the "Read more" button opens detailed information about the teacher.
   - Clicking the "Book trial lesson" button opens a modal window with a form for booking a trial lesson.

5. **Private “Favorites” Page**
   - Authorized users can view all added favorite teacher cards on the private “Favorites” page.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/teachers-app.git
Navigate to the project directory:


2. Install dependencies:
   npm install

3. Create a .env file in the root directory and add Firebase configuration:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

4. Start the project: 

npm run dev



# Technologies Used



