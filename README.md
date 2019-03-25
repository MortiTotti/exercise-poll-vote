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

### Server
##### Explanation
To know more about the server apis go to `https://pollsapi.docs.apiary.io/`.

### React
##### Explanation
This application has been created by CRNA. There are 2 main screens in this application:
1. **`QuestionList View`**
  	* *`index.js`*: it containts all the logic for **`QuestionList View`**
	* *`Layout`*: Base presentational component for index.js
	* *`List`*: Presentational component to list all the invoices
2. **`QuestionDetails View`**
  	* *`index.js`*: it containts all the logic for **`QuestionDetails View`**
	* *`Layout`*: Base presentational component for index.js
	* *`Choice-Item-Desktop-Layout`*: Presentational component to show every question choice in desktop mode
	* *`Choice-Item-Mobile-Layout`*: Presentational component to show every question choice in mobile mode
2. **`QuestionInsert View`**
  	* *`index.js`*: it containts all the logic for **`InvoiceModal View`**
	* *`Layout`*: Base presentational component for index.js
	* *`Question-Choice-List`*: Presentational component to insert and delete the question choices, all its logic are inside the `index.js` file

##### Configuration
Settings for this application are inside a file named **`app.json`**. You can find this file in the following path: **`./app.json`**.

| key | Description & Values |
| --- | --- |
| url | To set the server side endpoint base url   |

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

