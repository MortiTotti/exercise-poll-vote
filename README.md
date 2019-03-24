# exercise-poll-vote
A simple React app using **`http://pollsapi.docs.apiary.io`** as its api service.

## Explanation
This is a React application (using react-semnatic-ui) to demonstrate a simple voting system.
The goal of this application is to display a list of questions and user can vote to the questions or he can create his own question.

### React Installation & Run
- Run **`npm i`** to install the packages.
- Run **`npm start`** to start the application.

### Tests
 Under implementation!!!.
 - To run the tests simply execute  **`npm run test`**.

### React
##### Explanation
This application has been created by CRNA. There are 2 main screens in this application:
1. **`InvoicesList View`**
  	* *`index.js`*: it containts all the logic for **`InvoicesList View`**
	* *`Layout`*: Base presentational component for index.js
	* *`List`*: Presentational component to list all the invoices
2. **`InvoiceModal View`**
  	* *`index.js`*: it containts all the logic for **`InvoiceModal View`**
	* *`Layout`*: Base presentational component for index.js
	* **`Invoice-Information`**: 
    	1. *`index.js`*: it containts all the logic for **`InvoiceInformation View`**
  		2. *`Layout`*: Base presentational component for index.js
  		3. *`Layout-Desktop`*: Presentational component for Desktop view port
    	4. *`Layout-Mobile`*: Presentational component for mobile view port
	* **`Payments`**: 
    	1. *`index.js`*: it containts all the logic for **`InvoiceInformation View`**
  		2. *`Layout`*: Base presentational component for index.js
  		3. *`Bank-Payments-List`*: Presentational component to display the search result of `/payments/:iban` endpoint

##### Configuration
Settings for this application are inside a file named **`app.json`**. You can find this file in the following path: **`./client/app.json`**.

| key | Description & Values |
| --- | --- |
| url | To set the server side endpoint base url   |
| defaultIBAN | To set the default IBAN when a user doesn't choose `From Bank Account` option in **`InvoiceInformation View`** |

### Screen shots
##### Sign in screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/sign-in.png" width="400" aspectRatio="1/2">

##### Sign up screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/sign-up.png" width="400" aspectRatio="1/2">

##### Home - Users screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/users-screen.jpg" width="400" aspectRatio="1/2">

##### User Main Information
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-edit-screen.png" width="400" aspectRatio="1/2">

##### User Addresses
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-edit-address.png" width="400" aspectRatio="1/2">

##### Delete User 
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-delete-account.png" width="400" aspectRatio="1/2">

