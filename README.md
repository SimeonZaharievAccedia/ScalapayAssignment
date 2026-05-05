# ScalapayAssignment

These tests were created using Puppeteer and JEST for the UI and API automated tests respectively.

## Puppeteer, JEST and UI test setup
To set up Puppeteer you can use the following command:
```
npm i puppeteer
```
You could also check out the documentation if you want to use a different method to set up Puppeteer.
https://pptr.dev/guides/installation
You also need JEST to run both of the tests:
```
npm install --save-dev jest
```
You would also need to add dotenv with this:
```
npm install dotenv
```
And lastly you would need to add this in your package.json file:
```
scripts": {
    "test": "jest"
  }
```

Then running the test is as simple as running this:
```
npm test scalapayui.test.js
```
in the terminal of your IDE by choice.



## API test setup
You will need axios to be able to run the test:
```
npm install axios
```

After which you can run the API test using this command in the terminal:
```
npm test scalapayapi.test.js
```


## Credentials
The credentials are added to a .env file and the assigners for these assignments should have them. A sample .env file has been provided in which you can should change the values and remove the ".example" from the end, place it in the same directory as the tests, specify the path for the .env file and it uses the variables set in the tests.


## Conclusion
The tests should pass locally with no issues assuming you are using the correct credentials and have set up the tools correctly.
