# Full Stack Development

## Installation

The installation process requires:

- Node.js
- MongoDB

The installation steps for frontend are given in the frontend directory.
[Frontend Installation](./frontend/README.md)

The installation steps for backend are given in the backend directory.
[Backend Installation](./backend/README.md)

## Features

### Front-End Development

- I have created a simple web application with a user-friendly interface to display a list of items.
- The application fetches the item data from a JSON API endpoint.
- The item data contains the following attributes:
  - ID
  - Name
  - Description
  - Price.

### Interactive Filtering

- I have also added a filtering feature to the web application, allowing users to filter the list of items based on their name.

### Cart Functionality

- I have implemented a basic shopping cart feature that allows users to:
  - add items to the cart
  - view the items in the cart, and
  - calculate the total price of the items in the cart.

### Back-End API

- The back-end API is simple which is used to handle the item data for the web application.
- The API include endpoints to retrieve:
  - the list of items and
  - handle cart-related functionalities (add to cart, view cart).

### Data Persistence

- Implementation of data persistence for the items and cart functionality.
- I have used MongoDB to store the item data and the cart items for individual users.

## Authentication

- Basic user authentication system is added such that users can register, login, and logout.
- I have ensured that certain functionalities, such as adding items to the cart, are accessible only to authenticated users.
