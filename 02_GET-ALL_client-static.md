# [F2] COMPLEX CRUD OPERATIONS: MAPPING DATA FROM RESTFUL API

**PROGRESS:** We currently have a full stack application, that allows for users to register, login and logout.

**GOAL:** We need to add to our application to allow users to ADD, READ, UPDATE & DELETE different products - allowing for full site capabilities.  

**CURRENT FOCUS** - Initial GET ALL Query:

  - **F2:** Add to our RESTful API to allow for GET ALL requests to read ALL "products" data from the database (**NOW**)

  - **F3:** Optimise our server GET ALL requests through the use of sort keys, indexes and through-put analysis

  - **F4:** Completing the suite of CRUD operations with image handling via "Firestore Cloud Storage"

&nbsp;

## 4. STATIC PRODUCTS PAGE: `ProductsPage.jsx` -> `ProductsMenu.jsx`

**GOAL:** To construct a routed, boilerplate file that will allow us to code our GET ALL request to the RESTful API.

**NOTE:** As part of our early planning, `ProductsPage.jsx` is already routed under `localhost:3000/store/products` with a basic static page.  We will also use a lot of the logic in `GitHubMenu.jsx` to work for our API instead:

  - **(a) UPDATE NAMING:** Change name of page to `ProductsMenu.jsx` for consistency

  - **(b) UPDATE ROUTING:** Route changes including the updated name & nesting all products pages under `/store` route 

  - **(c) REMOVE OLD METHODS:** Remove methods we will not need for this page, as we will make requests to our API (and Firestore) to add or remove products to our database: `handleAddProduct` & `handleRemoveProduct`

  - **(d) STYLE LIST & ITEM COMPONENTS:** Adapt static `ProductsList` & `ProductItem` styling further, to build a more polished products menu (*e.g. removing the button*):

    - Destructured the props in the function for each component

    - Removed the add & remove buttons

    - Minor updates to the list styles for `gridContainer` & `productGrid`

    - Styling on the item to make them centered & allow us to add dynamic title & pricing in future

    - Adjusted structure of item, so the entire box is a LINK - that way the user can CLICK on it, to access its details page (*later*)

  - **(e) FINALISE STATIC RENDER:** Adapt default `return` render to display some title text for the products menu page

  - **(f) BASE STATES:** Setup initial states for later use, being `data`, `loading` & `error`

  - **(g) CONDITIONAL RENDERS:** Setup conditional returns in the event of true loading/error states (*including importing in the `Loader` reusable component*)