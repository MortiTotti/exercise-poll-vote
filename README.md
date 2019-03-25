# Exercise Poll
A web application using React for client side and **`http://pollsapi.docs.apiary.io`** as api service.

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
This application created by CRNA. There are 3 main screens in this application:
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
  	* *`index.js`*: it containts all the logic for **`QuestionInsert View`**
	* *`Layout`*: Base presentational component for index.js
	* *`Question-Choice-List`*: Presentational component to insert and delete the question choices, all its logic are inside the `index.js` file

##### Configuration
Settings for this application are inside a file named **`app.json`**. You can find this file in the following path: **`./app.json`**.

| key | Description & Values |
| --- | --- |
| url | To set the server side endpoint base url   |

### Screen shots
##### Questions list - Desktop
<img src="https://github.com/MortiTotti/exercise-poll-vote/blob/master/screenshots/questions-list-desktop.png" width="750" aspectRatio="1/2">

##### Questions list - Mobile
<img src="https://github.com/MortiTotti/exercise-poll-vote/blob/master/screenshots/questions-list-mobile.png" width="400" aspectRatio="1/2">

##### Questions insert
<img src="https://github.com/MortiTotti/exercise-poll-vote/blob/master/screenshots/question-insert.png" width="750" aspectRatio="1/2">

##### Question details - Desktop
<img src="https://github.com/MortiTotti/exercise-poll-vote/blob/master/screenshots/question-details-desktop.png" width="750" aspectRatio="1/2">

##### Question details - Mobile
<img src="https://github.com/MortiTotti/exercise-poll-vote/blob/master/screenshots/question-details-mobile.png" width="400" aspectRatio="1/2">

