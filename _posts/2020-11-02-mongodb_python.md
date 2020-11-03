---
title: "MongoDB - Creating, querying and transforming data with Python"
date: 2020-10-25
tags: [Mongo DB, Python, Cloud, Data Wrangling]
header:
  image: "/images/mongoDB/mongo_DB.jpeg"
excerpt: "Data Cleaning, Machine Learning, Data Science"
---
**Image Credits** Smith Collection / Gado / Getty Images


**Image Credits** Smith Collection / Gado / Getty Images


### MongoDB

MongoDB is a highly scalable database. All info is stored as JSON files, which makes it very fast and scalable.

### Terminology
* Collection - name used for tables

### Objective

I will be exploring how to create, query, and transform data into a Pandas DataFrame in Python.

With no further delays, let's get our hands dirty.

### Importing libraries and establish a connection with Mongo Server

```python
from flask_pymongo import pymongo as pm
from pymongo import MongoClient as mc

#Establish connection
connection = mc('localhost',27017)
```

### Creating a database
If a database does not exist under this name, a new database will be created.

```python
#createing a database
mydb = client['Employee']
```

### Creating a collection
Remember that your collection will be available after the first document is inserted.

```python
#creating a colletion 
information = mydb.employeeinformation
```


<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/1.jpg" alt="linearly separable data">


### Adding records
All the records must follow the JSON key pair format.
Let’s check how to insert one or more records.

```python
#one record
record={
        'firstname':'Mary',
        'lastname':'Murphy',
        'department':'Analytics',
        'qualification':'BE',
        'age':29}
        
information.insert_one(record)
```

<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/2.jpg" alt="linearly separable data">


```python

#adding multiple records in a list format

record=[{
        'firstname':'John',
        'lastname':'Gates',
        'department':'Analytics',
        'qualification':'statistics',
        'age':35
        
        },
         {
        'firstname':'Mark',
        'lastname':'Lee',
        'department':'Analytics',
        'qualification':'masters',
        'age':30
        
        },
        {
        'firstname':'Chloe',
        'lastname':'McGuire',
        'department':'Analytics',
        'qualification':'phd',
        'age':34
        
        },
        {
        'firstname':'Michael',
        'lastname':'Smith',
        'department':'Analytics',
        'qualification':'master',
        'age':32
        
        }]
        
information.insert_many(record)

```

<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/3.jpg" alt="linearly separable data">

### Querying the collection

Next, you will see how to perform a "SELECT *" and retrieve all the info in our collection.\
The info generated is a "cursor.Cursor" format that will require a loop to visualize it.

```python

#select * from the collection == table employeeinformation
information.find()

for item in information.find():
    print(item)

```
<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/4.jpg" alt="linearly separable data">

### Searching for one or /and more specific records

Selecting a specific name.

```python
#select * from employeeinformation where firstname = Mary

for item in information.find({'firstname':'Mary'}):
    print(item)
```
<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/5.jpg" alt="linearly separable data">


Selecting all documents that have a master’s or a Ph.D. as a qualification.

```python
#query documents using operators ($in, $Lt, $gt)
for item in information.find({'qualification':{'$in':['phd','master']}}):
    print(item)
```
<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/6.jpg" alt="linearly separable data">


Selecting all documents with master qualification and age under 35.

```python
for item in information.find({'qualification':'master','age':{'$lt':35}}):
    print(item)
```
<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/7.jpg" alt="linearly separable data">

Selecting all documents with Mary as first name OR any person with a master qualification.

```python
# OR operators 
for item in information.find({'$or':[{'firstname':'Mary'},{'qualification':'master'}]}):
    print(item)
```

<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/8.jpg" alt="linearly separable data">


### Transforming the collection into a Pandas DataFrame

Depending on the situation you would prefer to work using a Pandas DataFrame.\
Check how simple the conversion is.

```python
df = pd.DataFrame(list(information.find()))
df
```

<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/9.jpg" alt="linearly separable data">
