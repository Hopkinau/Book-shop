# [F2] COMPLEX CRUD OPERATIONS: MAPPING DATA FROM RESTFUL API

**PROGRESS:** We currently have a full stack application, that allows for users to register, login and logout.

**GOAL:** We need to add to our application to allow users to ADD, READ, UPDATE & DELETE different products - allowing for full site capabilities.  

**CURRENT FOCUS** - Initial GET ALL Query:

  - **F2:** Add to our RESTful API to allow for GET ALL requests to read ALL "products" data from the database (**NOW**)

  - **F3:** Optimise our server GET ALL requests through the use of sort keys, indexes and through-put analysis

  - **F4:** Completing the suite of CRUD operations with image handling via "Firestore Cloud Storage"

&nbsp;

## 1. DATA SETUP FOR GET ALL REQUEST [CHALLENGE]

**GOAL:** To initially setup our GET ALL request, we need at least two sets of products data.  We have none & have no way to add it yet via our RESTful API = we need to code it directly via Cloud Firestore:

**CHALLENGE:** Manually add "products" data to your Cloud Firestore to allow for mock/dummy API requests to be made in development:

  - (a) Create a new database collection (our new "partition") called `products`

  - (b) Create **TWO SETS** of mock/dummy data in the structure shown (*try to create two raw documents with same structure as provided in the 03_Database-Partitioning keynote*)

&nbsp;

## 2. ROUTING THE NEW PRODUCTS REQUEST [CHALLENGE]

**GOAL:** We need our server to be able to pass requests made to the endpoint `/api/products` to the relevant controller function.

**CHALLENGE:** Complete the following steps, akin to our `auth` routes setup:

  - **(a) Create a **NEW** sub-route** from `routes.js` that imports a **NEW** `productRoutes.js` (*note - we need to ensure we set the correct path to `/products`*)

  - **(b) Create the new `productRoutes.js`:**

    - Import all necessary express modules

    - Import the **NEW** `productController.js` 

    - Export & set the first controller function, `getAllProducts`, and set placeholders for the other requests we will need to create in future (*GET ON SALE, POST, GET BY ID, UPDATE, DELETE*)

&nbsp;

## 3. HANDLING THE GET ALL QUERY

**GOAL:** Complete the `getAllProducts` controller function, in the **NEW** `productController.js`, so GET ALL queries will successfully retrieve the manually created product data

  - **(a) Setup controller file:**

    - Import in our `db` config file & `ApiError` class into the controller

    - Setup export function for our controller functions & placeholders for the requests to be handled (*as per routes above*)

  - **(b) Define `getAllProducts` function:**

    - Declare standard `async` function taking handlers `req, res, next` as parameters

    - Inside a `try-catch`, store the collection reference in variable & issue the `get()` request to the db

    - Handle error for where the user asked for non-existant documents / 500 error

    - On success, define the locations of the data (*noting `id` exists outside the doc*) & push **EACH** set of data to the `docs` array, using the `forEach` method on the `snapshot` db response

    - Using `res`, send a response with the array of data documents back

  - **(c) Test the products GET ALL endpoint [CHALLENGE]:**

    - Using Postman, issue the correct query to the endpoint we just created to ensure it works

    - We should be returned with the mock data we created earlier on, as `JSON` data

&nbsp;

## DOCUMENTATION

  - [**GET Requests** to Cloud Firestore](https://firebase.google.com/docs/firestore/query-data/get-data)