# Crud-operations

Make crud operation, and at the end connect to a database.

Trouble/problem:

- i tried to use sequelize but, always an error "install pg manually"
- try sequelize with mysql but same problem "install mysql2 manually"
So now i restarted the project.
- When i try to pass username and password directly from onClick functionthis happen: 
TODO: find another solution
react-dom.development.js:14906 Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app

the problem probably is reguarding Event.handler : https://it.reactjs.org/warnings/invalid-hook-call-warning.html.. TODO FIX

steps TODO:

1. CRUD app (save as object not yet in database) example : https://github.com/taniarascia/react-hooks
2. when all is ok, save the row in a database

Project/link for ideas for my app/test and tutorial:

- https://www.taniarascia.com/crud-app-in-react-with-hooks/
- https://www.bezkoder.com/react-node-express-postgresql/
- https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
- https://dev.to/andrewbaisden/creating-react-node-apps-that-connect-to-postgresql-and-harperdb-41h3


Aready DONE?

- Passing userName and password to check component
- Creation of the Backend


#UPDATE 12/08

now there is a backend, you can test it with npm start in backend folder
and npm start in frontend folder.
important! if you want that the application works you have to create a database and add credentials in .env file
