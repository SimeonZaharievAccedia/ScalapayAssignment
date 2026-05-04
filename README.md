# ScalapayAssignment

These tests were created using Puppeteer and JEST for the UI and API automated tests respectively.

## Puppeteer and UI test setup
To set up Puppeteer you can use the following command:
```
npm i puppeteer
```
You could also check out the documentation if you want to use a different method to set up Puppeteer.
https://pptr.dev/guides/installation
You also need JEST to run this test:
```
npm install --save-dev jest
```

Then running the test is as simple as running this:
```
npm test scalapayapi.test.js
```
in the terminal of your IDE by choice.



## JEST and API test setup
To set up JEST you can use the following command:
```
npm install --save-dev jest
```
Or you could also refer to the documentation for different methods.
https://jestjs.io/docs/getting-started
Here you also need axios to be able to run the test:
```
npm install axios
```

After which you can run the API test using this command in the terminal:
```
npm test scalapayapi.test.js
```


## Credentials
The credentials are added to a .env file and the assigners for these assignments should have them. A sample .env file has been provided in which you can should change the values.


## Conclusion
The tests should pass locally assuming you are using the correct credentials.
