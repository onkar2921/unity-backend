# unity-backend


# start

intilaly go to server folder
cd server

download all dependencies
npm i


create  a env file and save the file with data that i have provided with you in email

to run:--
npm start

by using postman or thunderclient you can test the backend


i have provided all the request that i had made using thunderclient in this git repo


starts with http://localhost:8000/api/................ like this

Auth APIs

register
POST ----http://localhost:8000/api/auth/register
Register a user (accept username, password, type of user - buyer/seller)  if you register a new user then it should be buyer for seller you need to change in database role===true for that user to trear as a seller


login
POST http://localhost:8000/api/auth/login


1]

for creation of product  
post http://localhost:8000/api/createProduct

header----
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Content-Type: application/json
UserID: 653438879c975998e13fd0e6
authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM0Mzg4NzljOTc1OTk4ZTEzZmQwZTYiLCJuYW1lIjoic2VsbGVyMSIsImVtYWlsIjoic2VsbGVyMUBnbWFpbC5jb20iLCJpYXQiOjE2OTc5MjE2MDV9.dDs3gtoLCmg46PG4YQjwL6wtLXoXQyz-JHTWtrL4P3U



body---
{
  "name":"apple",
  "price":900000
}








APIs for buyers

2]
GET http://localhost:8000/api/buyer/list-of-sellers
Get a list of all sellers

headers---
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Content-Type: application/json
authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM0Mzg0ZDljOTc1OTk4ZTEzZmQwZTQiLCJuYW1lIjoidGVzdDEiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTY5NzkyMTU0OH0.yynveM07BIp5q5Sdgh44ZkaMejvGt5jFUtlU9RMVofM
UserID: 6534384d9c975998e13fd0e4




3]

GET http://localhost:8000/api/buyer/seller-catalog/653438af9c975998e13fd0e8
Get the catalog of a seller by seller_id

headers---
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Content-Type: application/json
authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM0Mzg0ZDljOTc1OTk4ZTEzZmQwZTQiLCJuYW1lIjoidGVzdDEiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTY5NzkyMTU0OH0.yynveM07BIp5q5Sdgh44ZkaMejvGt5jFUtlU9RMVofM
UserID: 6534384d9c975998e13fd0e4





4]
POST http://localhost:8000/api/buyer/create-order/653438af9c975998e13fd0e8
Send a list of items to create an order for seller with id = seller_id
headers----
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Content-Type: application/json
authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM0Mzg0ZDljOTc1OTk4ZTEzZmQwZTQiLCJuYW1lIjoidGVzdDEiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTY5NzkyMTU0OH0.yynveM07BIp5q5Sdgh44ZkaMejvGt5jFUtlU9RMVofM
UserID: 6534384d9c975998e13fd0e4


body---
{
  "products":[
    "65343d98a3a07aed4bc83018",
    "65343e88b77e4d80c1c6598d"
    ]
}







APIs for sellers

5]
POST http://localhost:8000/api/seller/create-catalog
Send a list of items to create a catalog for a seller

headers--
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Content-Type: application/json
authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM0Mzg0ZDljOTc1OTk4ZTEzZmQwZTQiLCJuYW1lIjoidGVzdDEiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTY5NzkyMTU0OH0.yynveM07BIp5q5Sdgh44ZkaMejvGt5jFUtlU9RMVofM
UserID: 6534384d9c975998e13fd0e4


body--
{
  "products":[
    "65343d98a3a07aed4bc83018",
  
    "65343e88b77e4d80c1c6598d"
    ],
    "sellerId":"653438af9c975998e13fd0e8"
  
}


6]
GET http://localhost:8000/api/seller/orders/653438af9c975998e13fd0e8
Retrieve the list of orders received by a seller

headers--
{
  "products":[
    "65343d98a3a07aed4bc83018",
  
    "65343e88b77e4d80c1c6598d"
    ],
    "sellerId":"653438af9c975998e13fd0e8"
  
}


