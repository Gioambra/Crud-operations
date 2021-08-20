
# Crud-operations :large_orange_diamond:
This is a test app, in this app i want to use CRUD operation, this is my goal.

3 pages :
-LOGIN PAGE path: localhost:<port>/Login (Page of Login)
-HOME PAGE path: localhost:<port>/Home 
inside the home page we have the TODO table (with CRUD operations)

# ROADMAP :green_circle:

- develop Homepage, css and styles.. X
- code refactoring
- project refactorting (add folder and more order content)
- authentication security (sql injection..)
- creation of an account X
- Create a tale of TODO, the table will be always in contact with database CRUD operations X
- Add Logout button
- in the table TODO, change the icon onclick with fast refresh

# UPDATE 12/08

now there is a backend, you can test it with npm start in backend folder
and npm start in frontend folder.
important! if you want that the application works you have to create a database and add credentials in your .env file

# UPDATE 13/08

now is possible to login and if  go well, you can enter in the Homepage

	
# UPDATE 13/08



# SETUP:

Step to emulate my database emulate my database:

1. create a database with postgress
2. create a table with these comand :

SQL -> creation Database :

CREATE TABLE utenti (id  integer PRIMARY KEY, username VARCHAR(20), pssowrd VARCHAR(15));

3. populate the database with these script:

INSERT INTO utenti(id, username, password)
	VALUES (13, 'username', 'mypassword!');
  
4. now you can connect and read data from utenti database



# Trouble/issue:

# issue 1
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
# bypass

to bypass problem 1, i fetch data directly in App.js and pass the data to new file ShowAllUserv2.	


# issue 2

After the creation of login i want to redirect the user to another page, after the login is ok.
but with the tag <Redirect to="/..."/> i have some problems... (i already creating a routing but idont know why dont work)
maybe is better to use redux?

# resolved

to fix problem 2 i decide not to use  the tag "Redirect" but i used useHistory that is a Hooks.
You can find more info about this hooks here: https://reactrouter.com/web/api/Hooks


steps TODO:

1. CRUD app (save as object not yet in database) example : https://github.com/taniarascia/react-hooks
2. when all is ok, save the row in a database

# issue 3
pass data from lohin component homepage to antoher component..
Context? i tried but i had some problem.
Project/link for ideas for my app/test and tutorial:

# issue 4
in the TODO table a refetch happen when we click on the column 'isDone?'.
i use not a besdt pratcise to update that column.
TODO-> understand and find a best practise to update 
	
#issue 5
use effect infinite loop. :ghost:
the page work well, but the server is in a infinite loop
# another problem

actually im working with the upate of a TODO, and i have some problem with HTTP PUT request

- https://www.taniarascia.com/crud-app-in-react-with-hooks/
- https://www.bezkoder.com/react-node-express-postgresql/
- https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
- https://dev.to/andrewbaisden/creating-react-node-apps-that-connect-to-postgresql-and-harperdb-41h3
