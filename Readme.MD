Link: https://experienced-rogue-avatar.glitch.me/api/tutorials

Created a basic REST Api using Express.JS. The database used is a AWS RDS MySQL database.

Use Postman to try out the routes or directly access the urls through the web browser. Will create a small react app soon to demonstrate the api. Or, use it with your front-end app to demonstrate integration of backend with front-end. 

Disclaimer: This app is not completely secure, and should not and cannot be used for big scale production or development. It should be and is recommended to mainly be used for educational purposes, if used.

Model:
- Tutorial -> {
    title: string - required;
    description: string - required;
    published: boolean - default: false; 
}

Routes:

- GET "/api/tutorials/" -> Get all tutorials
- GET "/api/tutorials/:id" -> Get a tutorial by id.
- GET "/api/tutorials/published/" -> Get all tutorials that are published.

- POST "/api/tutorials/" -> Post a tutorial to the database

- PUT "/api/tutorials/:id" -> Update a tutorial (Requires all tutorial body content)

- DELETE "/api/tutorials/" -> Delete all tutorials
- DELETE "/api/tutorials/:id" -> Deletes a tutorial based on id.


Packages Used:
- express : Used to use the Express web framework.
- cors : For cross-origin resource sharing access. Needs more configuration, currently allowing all access.
- mysql : MySQL driver. Planned to update to mysql2 due to newer MySQL 8.0 features.
- helmet : Improve security by adding security-related HTTP headers to the app.
- dotenv : Load environment variables from .env file(s).
