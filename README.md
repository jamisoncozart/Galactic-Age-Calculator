# _Galactic Age Calculator_

#### _App to calculate a persons age if they were living on the different planets in the solar system._, 7 February 2020

#### By _**Jamison Cozart**_

## Description

_This Galactic Age Calculator takes a user input and returns to the user a list of ages on different planets in the solar system. This project focused on using Webpack to to link, bundle, and process code. This project also focused on test-driven-development using Jest._

## Setup/Installation Requirements

1. Clone the repository into preferred directory:
    ```
    git clone https://github.com/jamisoncozart/Galactic-Age-Calculator
    ```
2. Change directories into the project directory:
    ```
    cd Galactic-Age-Calculator/
    ```
2. Install all dependencies listed in the package.json:
    ```
    npm install
    ```
3. Run the start script to Lint, Build, and Start the live server, and the webpage will open automatically in your default web browser
    ```
    npm run start
    ```

## Behavior Driven Development Specifications

|Behavior | Input | Output|
|:-----:|:----:|:------:|
|User inputs nothing, show error message|""|_HTML 'required' form error_|
|User inputs a number, create a GalacticAge Class that calculates and stores all the user's planetary ages|"23"|GalacticAge.earthAge = 23, GalacticAge.mercuryAge = 95, GalacticAge.venusAge = 37, GalacticAge.marsYears = 12, GalacticAge.jupiterYears = 1|
|Calculate years left on earth based on starting life expectancy of 150 years|"23"|GalacticAge.earthYearsLeft = 150 - this.earthAge|
|Calculate years left on mercury based on starting life expectancy of 150 years|"23"|GalacticAge.mercuryYearsLeft = this.earthYearsLeft / 0.24|
|Calculate years left on venus based on starting life expectancy of 150 years|"23"|GalacticAge.venusYearsLeft = this.earthYearsLeft / 0.62|
|Calculate years left on mars based on starting life expectancy of 150 years|"23"|GalacticAge.marsYearsLeft = this.earthYearsLeft / 1.88|
|Calculate years left on jupiter based on starting life expectancy of 150 years|"23"|GalacticAge.jupiterYearsLeft = this.earthYearsLeft / 11.86|
|If user chooses 'space', lifeExpect is multiplied by 1.2|"space"|lifeExpect *= 1.2|
|If user likes sci-fi, lifeExpect multiplied by 1.2|"likes scifi"|lifeExpect *= 1.2|
|If user is an alien, add 100 to lifeExpect|"true"|lifeExpect += 100|
|If user age has surpassed 150, show years cheated death|earthYears = 173| earthYearsCheatedDeath = 23 |

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* Jest
* Webpack
* ESLint
* Babel
* Git

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jamison Cozart_**