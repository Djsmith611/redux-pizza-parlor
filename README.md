# <center> WELCOME TO THE CHEESY PIZZERIA! </center>
### <center> PIZZA ORDERING APP </center>

## Description

_Duration: 3 Week Sprint_

This is a pizza-ordering application intended to be used by an employee when taking a customer's order.  Users can:

 * Add pizzas to the cart
 * Enter the customer's information (name, address, etc.)
 * Review the order and customer's information
 * Checkout and restart the process

 Admins can:

 * View a summary of orders
 * Click into line items on the order summary page for details

The app stores all pizzas ordered and the customer's information in a Redux store until the user checks out.  At checkout, the app sends the order and customer's information to a database.  The admin page pulls its summary and detailed information from the database.  

This documentation provides sample content for the database.

## Build

This is a group project.  We collaborated using Jira and Slack.  Here's the breakdown of who did what: 

[@DeadstockFox:](https://github.com/DeadstockFox)
 * `/select` page and functionality

[@Djsmith611:](https://github.com/Djsmith611)
 * Initial Redux store buildout
 * Initial Jira board buildout
 * Landing page and framer-motion transitions
 * `/info` page and functionality
 * `/admin` details functionality

[@Kern89:](https://github.com/Kern89)
 * `/admin` page and functionality

[@lonsnw:](https://github.com/lonsnw)
 * Additional Redux store buildout
 * Additional Jira organization/ticket-making
 * Documentation
 * `/checkout` page and functionality

All:
 * Planning/strategy
 * Troubleshooting
 * Branching, merging, and version control
 * Collaboration on styling

Server side GET and POST request code was provided, as were [wireframes](./wireframes/).

This app is not currently deployed.  This document will be updated with a link to where to find the app once it is deployed.  It was built in response to this assignment: [Assignment Instructions](./INSTRUCTIONS.md).

## Screen Shots

Landing page `/`:
<br />
<center><image src=public/images/landing.png width=80%></center>
<br />

Pizza selection `/select`:
<br />
<center><image src=public/images/order-page.png width=80%></center>
<br />

Customer info input `/info`:
<br />
<center><image src=public/images/info-basic.png width=80%></center>
<br />

Checkout screen `/checkout`:
<br />
<center><image src=public/images/checkout-basic.png width=80%></center>
<br />

Admin view `/admin`:
<br />
<center><image src=public/images/admin-basic.png width=80%></center>
<br />

Admin view with details:
<br />
<center><image src=public/images/admin-detailed.png width=80%></center>
<br />

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation

The application has been tested and run on a local machine using the browser. It may be deployed in the future but currently is only available locally.

1. Clone down a version of this repository
2. Create a database named `pizza_parlor`
3. Create and populate three tables: `line_item`, `orders`, and `pizza`.  
    - This project is built on [Postgres](https://www.postgresql.org/download/), which you will need to install to use the app
    - The `database.sql` file contained in this repository provides all of the necessary queries for creating the tables needed to run the app
    - The queries will also populate the `pizza` table with sample data
    - The `line_item` and `orders` tables will be populated when the app is used, so no sample data is needed or provided
4. Open in your editor of choice and run `npm install` in the terminal.
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. Navigate to the localhost port provided by your terminal when you initiate your client.  The default port when running Vite, for example, is `http://localhost:5173/`

## Usage
I work at the Cheesy Pizzeria taking orders over the phone and making dough.  My coworkers on the line and I are far more interested in making amazing pizzas than managing the orders database, so our boss hired some developers to make an app that'll keep me kneading while also tracking orders and information for the managerial folks.  

The kitchen staff only needs to know the orders and whether they'll be picked up or delivered.  Our boss wants to track orders and customers over the course of the day or longer, so they're interested in building a database with information about who ordered what and when.  From there, they can track customer loyalty and see which areas of the metro they might want to target with their advertising campaigns.

In anticipation of adding ordering kiosks in our building or even allowing customers to order online, our boss also requested a landing page for the app that digitally welcomes our customers to The Cheesy Pizzeria.  The boss has an eye towards efficiency and maybe even expansion.

Here's what we did to set this app up for taking orders starting at lunch today:

1. Follow the installation instructions above
2. Select `Start your order` to begin the order
3. Select `Add to Cart` from under each pizza that the customer wants
4. Select `Next` to move to the next page and input the customer's information
5. Enter the customer's information into the fields, select whether the pizzas will be picked up or delivered, and then select `Next`
6. Review the information with the customer to ensure that the order has been taken correctly
7. After the customer has confirmed their order and information, select `Checkout`
8. The kitchen POS will return to the landing page, ready for the next order
9. In the office, managers can monitor the day's sales by calling up the admin page at `/admin`
10. Managers can call up details for individual orders by clicking on the `DETAILS` button in each line item

## Technologies

- PostgreSQL
- Express
- React
- Node
- MUI
- Moment
- Framer-Motion

## Documentation
This documentation was built following a [provided template](https://github.com/PrimeAcademy/readme-template/blob/main/README.md).   It has been edited for style,  consistency, and to provide all relevant details.

## Support
If you have suggestions or issues, please contact a member of the project team.
