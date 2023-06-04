This is the assignment of pococare and i have to built front-end and back-end both.

### Install npm Packages

```javascript
npm i --global
```



### Run Server
```javascript
npx nodemon index.js
```
### Runs the project in the development mode

[http://localhost:8500](http://localhost:8500)


## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:



## NPM Packages
<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1" alt="nodemailer" width="50" height="70"/>
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>

</p>
   
   
## API Endpoints
   #### Welcome
```javascript
GET  / 
```
  #### /user
 
```javascript



```
#### User 
```javascript
onlt admin and super admin can acces this route
GET /user/all  
POST  /user/register
POST  /user/login
GET /user/logout
PATCH /user/update:id
DELETE /user/update:id

#### user Body
{
 
  name: String,
  email: String,
  password: String,
  role: user ,seller: String
}

