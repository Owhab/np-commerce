# NP Commerce

## Project Overview

NP Commerce is an e-commerce platform designed to provide a seamless shopping experience for users. This project aims to offer a robust and scalable solution for online retailers, featuring a wide range of functionalities including product management, user authentication, and order processing.

## Features

- **User Authentication**: Secure login and registration system.
- **Product Management**: Add, edit, and delete products with ease.
- **Shopping Cart**: Users can add products to their cart and proceed to checkout.
- **Order Processing**: Efficient order management and tracking.
- **Payment Integration**: Supports multiple payment gateways.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Backend**: Node.js, Express.js, Prisma
- **Database**: MySql
- **Authentication**: JWT (JSON Web Tokens)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Owhab/np-commerce.git
    ```
2. Navigate to the project directory:
    ```bash
    cd np-commerce
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
        ```
        MONGO_URI=your_mongodb_uri
        JWT_SECRET=your_jwt_secret
        STRIPE_SECRET_KEY=your_stripe_secret_key
        ```

5. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

- Access the application at `http://localhost:3000`.
- Register a new account or log in with existing credentials.
- Browse products, add them to your cart, and proceed to checkout.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).
