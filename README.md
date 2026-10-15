
# Dev Stack Builder

Dev Stack Builder is a responsive React application that helps developers explore modern technologies and create their own development stack.

Users can browse technologies, view important details, add their favorites to a stack, and remove technologies whenever needed.

## Technologies Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React-Toastify
- React Icons
- JSON

## Key Features

### 1. Explore Technologies
Browse 12 modern development technologies with their icons, categories, descriptions, ratings, difficulty levels, and badges.

### 2. Build Your Stack
Add technologies to your personal stack, prevent duplicate selections, remove individual items, or clear the entire stack.

### 3. Responsive and Interactive UI
Enjoy a responsive layout with a mobile navigation menu, loading spinner, gradient styling, and toast notifications.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to create and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State stores data inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

The useState hook allows React components to store and update data. I used it to manage selected technologies, loading state, errors, and the mobile navigation menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs side effects in React components. I used it to fetch technology data from the local JSON file when the application loads.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It allows React to update the correct elements when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements based on a condition. I used it in the Your Stack section to display an empty message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child communicates with the parent by calling a callback function received through props.

In this project, TechnologyCard receives technology data and an onAdd function from its parent.

## How to Run Locally

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the localhost URL shown in the terminal.

## Author

Developed as part of Programming Hero Assignment 5.
