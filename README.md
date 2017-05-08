# WebQuiz

## Running API
This project is an Angular project with an API built using .NET (Framework 4.6.1). To run the API you need to open the solution file "WebQuiz.sln" then build this solution (The NuGet packages should be installed automatically), the next step is run IIS Express (Just debug the web project). Notice that in IIS Express is running just the API, there is no a website there. The website is running under Webpack using Angular.

## Running the website
To Run the website you need to go to the folder "webApp" and then install the npm packages, with the command:

```bash
 npm i 
 ```
 
 Then you can run the project with the command

 ```bash
ng serve 
```

and navigate to "http://localhost:4200/"

For references for Angular please go to https://github.com/angular/angular-cli

## Instrucctions

Please, when you send the quiz do not include the packages folder (NuGet packages) and node_modules folder. It is much better if you create a fork of this project and send the URL with your changes. 