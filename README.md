# quiz-buzzer

Quiz buzzer system sample.<br>
Users can Quiz buzzer game and the moderator can change users view, make a sound depending on users answer.

## Build Setup

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```


## Firebase Setup

1. ### Login your Google account
    ``` bash
    $ yarn firebase login
    ```

2. ### Initialize your Firebase project
    This project use only realtime database.

    ``` bash
    $ yarn firebase init
    ```

3. ### Create .env of your Firebase configuration

4. ### Change database rule as follows

    ``` bash
    {
        "rules": {
            "quiz-state": {
                "current-quiz": {
                    ".read": true,
                    ".write": true
                },
                "respondent-id": {
                    ".read": true,
                    ".write": true
                } 
            }
        }
    }

    ```

5. ### Done!
    1. You can start to serve at localhost:3000
        ``` bash
        $ yarn dev
        ```
    2. You can manage user view at `localhost:3000/manage` and change questions by changing `static/data/quiz.js`