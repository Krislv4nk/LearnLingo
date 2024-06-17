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

2. 
привіт , дай будь ласкв приклад гарного редмі на гіт хаб для такого проекту За допомогою firebase_DB додати до застосунку можливість авторизації (реєстрація, логінізація, отримання даних про поточного користувача, логаут).
2. Форму для реєстрації/авторизації та мінімальну валідацію її полів потрібно реалізувати за допомогою react-hook-form & yup. Всі поля є обовʼязковими до заповнення. Модальне вікно з формою повинно закриватись по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop або натисканню на клавішу Esc.
3. В Realtime Database (by firebase) створіть колекцію викладачів з наступними полями: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience (див. скріншот нижче)

Для наповнення колекції можна використовувати teachers.json

Відповідно до макету реалізувати картку з описом характеристик викладача.
На сторінці “Teachers” має рендеритися 4 картки, а їх решту можна завантажити по кліку на кнопку Load more, після якого має виконатись запит до бази даних для відображення нової порції карток.
У разі кліку по кнопці у вигляді “серця”:
НЕавторизованим користувачем - має зʼявлятись модальне вікно або пуш-повідомлення про те, що даний функціонал доступний лише для авторизованих користувачів
Авторизованим користувачем - картка має додаватися до списку обраних (за допомогою localStorage або за допомогою роботи з колекцією users - by firebase), а колір кнопки - “серця” змінюватися.
При оновленні сторінки авторизованим користувачем має фіксуватись кінцевий результат дій користувача. Тобто, якщо додати картку з інформацією про викладача в обрані та оновити сторінку - то кнопка все одно залишається в стані “обраної” із відповідним кольором.
У разі повторного кліку по кнопці у вигляді “серця” картка повинна бути видалена зі списку обраних, а колір кнопки змінитись до початкового стану.
У разі кліку по кнопці Read more картка має розкриватись з більш детальною інформацією про викладача та відгуками від його учнів.
У разі кліку по кнопці Book trial lesson має відкриватись модальне вікно з формою для бронювання пробного заняття. Форму та мінімальну валідацію її полів потрібно реалізувати за допомогою react-hook-form & yup. Всі поля обовʼязкові до заповнення.
Модальне вікно повинно закриватись по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop або натисканню на клавішу Esc.
Для авторизованого користувача доступна приватна сторінка “Favorites”, при переході на яку користувач має можливість переглянути усі картки викладачів, які були додані ним в “обрані”. За стилізацією сторінка має бути аналогічною сторінці “Teachers”.
"@emotion/react": "^11.11.4",
"@emotion/styled": "^11.11.5",
"@fontsource/roboto": "^5.0.13",
"@mui/material": "^5.15.20",
"@vitejs/plugin-react-swc": "^3.3.2",
"formik": "^2.4.6",
"modern-normalize": "^2.0.0",
"normalize.css": "^8.0.1",
"react": "^18.2.0",
"react-css-modules": "^4.7.11",
"react-dom": "^18.2.0",
"react-loader-spinner": "^6.1.6",
"react-router-dom": "^6.15.0",
"react-toastify": "^10.0.5",
"vite-plugin-svgr": "^3.2.0",
"yup": "^1
ChatGPT
Ось приклад README.md файлу для описаного проекту:

markdown
Копировать код
# Teachers App

Цей проект є веб-застосунком для перегляду та взаємодії з базою даних викладачів, реалізований з використанням Firebase та React.

## Функціональні можливості

1. **Авторизація та реєстрація**
   - За допомогою Firebase Authentication користувачі можуть реєструватись, логінуватись, отримувати дані про поточного користувача та логаутитись.
   - Форми для реєстрації та авторизації реалізовані з використанням `react-hook-form` та `yup` для мінімальної валідації полів.
   - Модальне вікно з формами закривається по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop або натисканню на клавішу Esc.

2. **Реальна база даних викладачів**
   - Використовується Firebase Realtime Database для збереження колекції викладачів з полями: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience.
   - Для наповнення бази використовується файл `teachers.json`.

3. **Картки викладачів**
   - Реалізовано картку з описом характеристик викладача відповідно до макету.
   - На сторінці "Teachers" відображаються 4 картки з можливістю завантаження додаткових по кліку на кнопку "Load more".
   - Користувач може додавати викладачів до списку обраних за допомогою кнопки у вигляді “серця”.
   - Авторизовані користувачі можуть зберігати обраних викладачів у Firebase або localStorage.

4. **Інтерактивність**
   - Список обраних викладачів зберігається при оновленні сторінки для авторизованих користувачів.
   - Картка може бути видалена зі списку обраних при повторному кліку на кнопку “серця”.
   - Клік на кнопку "Read more" відкриває детальну інформацію про викладача.
   - Клік на кнопку "Book trial lesson" відкриває модальне вікно з формою для бронювання пробного заняття.

5. **Приватна сторінка “Favorites”**
   - Авторизовані користувачі можуть переглядати усі додані до обраних картки викладачів на приватній сторінці “Favorites”.

## Встановлення

1. Клонувати репозиторій:
   ```bash
   git clone https://github.com/your-username/teachers-app.git
Перейти до директорії проекту:

bash
Копировать код
cd teachers-app
Встановити залежності:

bash
Копировать код
npm install
Створити файл .env у кореневій директорії та додати Firebase конфігурацію:

env
Копировать код
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
Запустити проект:

bash
Копировать код
npm run dev
Використані технології
React
Firebase Authentication
Firebase Realtime Database
React Router
react-hook-form
yup
Material-UI
Структура проекту
src/components: Компоненти застосунку
src/pages: Сторінки застосунку
src/context: Контексти для глобального стану
src/utils: Утиліти та допоміжні функції
Ліцензія
Цей проект ліцензовано під ліцензією MIT. Детальніше дивіться у файлі LICENSE.

Автори
Ім'я Прізвище – @your-github-username
Копировать код

Цей приклад README.md файлу містить всі основні розділи, необхідні для опису проекту, включаючи функціональні можливості, інструкції з встановлення, використовувані технології, структуру проекту, ліцензію та авторів. Ви можете адаптувати цей шаблон відповідно до конкретних вимог вашого проекту.
переклади будбласка на англ мову і дай все одним файлом

ChatGPT
Here's the translated and consolidated README.md file in English:

markdown
Копировать код
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



