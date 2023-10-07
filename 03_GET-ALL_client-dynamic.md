# [F2] COMPLEX CRUD OPERATIONS: MAPPING DATA FROM RESTFUL API

**PROGRESS:** We currently have a full stack application, that allows for users to register, login and logout.

**GOAL:** We need to add to our application to allow users to ADD, READ, UPDATE & DELETE different products - allowing for full site capabilities.  

**CURRENT FOCUS** - Initial GET ALL Query:

  - **F2:** Add to our RESTful API to allow for GET ALL requests to read ALL "products" data from the database (**NOW**)

  - **F3:** Optimise our server GET ALL requests through the use of sort keys, indexes and through-put analysis

  - **F4:** Completing the suite of CRUD operations with image handling via "Firestore Cloud Storage"

&nbsp;

## 5. ADAPTING STATIC PRODUCTS MENU TO DYNAMIC:

**GOAL:** We can now alter `ProductsMenu.jsx` to become a dynamic component that pulls from our API & will refer to `GithubMenu.jsx` as a guide (*similar*)

  - **(a) Set `fetchProducts` method:**

    - To aid clarity, we will adjust states from `products` to `data`, as we're pulling it from an API (like `GithubMenu`) & set to an empty array (*wipe the mock data*)

    - Import in `axios` & call `get()` method from within an `async` function & `try-catch`

    - Store promise within `response` & chain the data array to `data` state

    - Using optional chaining, log the `err?.response`, setError to `true` & call the `toast.error` method to set a custom message (*make sure to import into component*)

  - **(b) Call API on mount with `useEffect`:**

    - Setup useEffect to only call the endpoint ONCE, using `useRef` (avoiding the re-mount call)

    - Call the `fetchProducts` function, followed by setting `loading` to `false`

    - Ensure the depdendency array is an empty array `[]`, to ensure it only loads on mount once

  - **(c) Ensure updated `data` state is passed as `products` props to reusable `ProductsList` component**

  - **(d) Test to ensure the dynamic page loads correctly, with console open!**

&nbsp;

## 6. REVIEW & UPDATE REUSABLE LIST & ITEM COMPONENTS:

**GOAL:** To ensure clearly written components, we will adjust our props being passed to the `ProductsList` & `ProductItem`: 

  - **(a) Adapt `ProductsList` to state which specific props will be passed to `ProductItem`:**

    - Now each prop is passed individually & allows us to format them prior to being consumed in the item component

    - **FOR EXAMPLE:** We can adjust the formatting of list items, such as creating a capitalisation function for `productName` or formatting `price` to have a dollar symbol

    - We can store these "formatter" functions in our `/utils` folder under a new file called `readUtils.js`

  - **(b) Adapt `ProductItem` to render different data `props`, in different ways:**

    - With our data captured within accepted `ProductItem` props, we need to change items from `product.name` to `props.name`

    - Further we can now access new props like `props.price` and pass these to the item

&nbsp;

## 7. REFACTORING LOGIC FOR NEW PRODUCT AXIOS SERVICE: `productService.js`

**GOAL:** As with `auth`, we need to extend our custom `axios` instance, which has a base URL of `http://localhost:5000` (our endpoint), to our product services.

  - (a) Create new `productService.js`, which imports the custom instance of axios from `api.js`

  - (b) Create a `get()` function, which will return the custom `api.get()` method, with our GET ALL endpoint as an argument

  - (c) Declare the `get` function as part of a `productService` object & export the object for use in our pages

  - (d) Import the productService `getAll` method into our `ProductsMenu` page & replace the `axios.get` call with it (*and remove axios import*)

  - (e) Adjust the error catch in `fetchProducts`, as the toast is now called automatically as part of our service (*and remove toast import*)

  - **IMPORTANT:** *We can now also delete `GithubMenu`, the `/apis` page directory & `github.js` service, as they are no longer needed for this app*

&nbsp;

## IMPORTANT NOTE FOR ADDITIONAL CLIENT-SIDE FEATURES:

If you would like to find out more about front-end tricks/features outside the rubric, such as:

  - Setting a `favicon` in React
  
  - Setting the `ProductsList` & `ProductItem` to a responsive grid & various CSS polish

  - More examples on `vanilla-extract`

... then review my extended version [on my GitHub](https://github.com/kuuzon/timbertop-united)) (*star the repo, so you can find it later*)