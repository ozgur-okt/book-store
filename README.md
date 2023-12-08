# Book Store React App
The Book Store React App is a full-stack application developed using React on the client-side and Express.js/Node.js on the server-side. It provides a straightforward interface for managing a book store, with features including book listing, detailed book information, a shopping cart, and responsive design.

## Features

### React App
The frontend is built using React, employing components for efficient UI development and state management.

The application functions as a book store, allowing users to interact with a catalog, view individual book details, and manage a shopping cart.

### Redux State Management
Redux is integrated for managing the application's state, providing a predictable and centralized state container.

### Pages
* Book List: Renders a list of available books.

* Book Details: Displays detailed information about a selected book.

* Cart: Manages the shopping cart, facilitating the addition of books and displaying the total price.

### Shopping Cart Functionality
Users can add books to the shopping cart from the book list. The cart page reflects the accumulated total price.

### Search Bar
Implemented search functionality enables users to locate specific books based on title or relevant information.

### Form Validation
Cart checkout form input fields are validated according to length criterias.

### Responsive Design
The application is designed with responsiveness in mind, ensuring optimal user experience across various devices and screen sizes.

### Full-Stack Architecture
Utilizes a client-server architecture with the server implemented using Express.js and Node.js.

### Data Storage
Book data is stored in a server-side JavaScript file within the server folder, providing a simple, file-based data storage solution.

## Run App on Local
To run the application locally, follow these steps:

Clone the repository:

```git clone https://github.com/ozgur-okt/book-store```

Navigate to the server folder, install dependencies, and start the server:

```cd server```

```npm install```

```node index```

In a separate terminal window, navigate to the client folder, install dependencies, and start the client:

```cd client```

```npm install```

```npm start```

Open your web browser and visit http://localhost:3000 to access the Book Store React App.

## Run App on Docker

To run app in a Docker container, run this command at root directory.

```docker compose up```

Server will be running on 5000 and client on 3000 ports.

## Contribution

Feel free to explore the technical details, contribute to the codebase, and provide feedback or suggestions.

## License

This project is licensed under the MIT License.