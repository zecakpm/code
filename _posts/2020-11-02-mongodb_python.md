---
title: "MongoDB - Creating, querying and transformig data with Python"
date: 2020-10-25
tags: [Mongo DB, Python, Cloud, Data Wrangling]
header:
  image: "/images/mongoDB/mongo_DB.jpeg"
excerpt: "Data Cleaning, Machine Learning, Data Science"
---
####### **Image Credits** Smith Collection / Gado / Getty Images


### MongoDB

MondoDB is a righly scalable database. All info is stored as JSON files, whitch makes it very fast and scalable.

### Terminology
* Collection - name used for tables

### Objective

I will be exploring how to create, query and transform data into a Pandas data frama in Python.

With no further delays, lets get ours hands dirt.

### Importing libraries and establish connection with Mongo Server

```python
from flask_pymongo import pymongo as pm
from pymongo import MongoClient as mc

#Establish connection
connection = mc('localhost',27017)
```

### Creating a data base
If a database does not exist under this name, a new data will be created.

```python
#createing a database
mydb = client['Employee']
```

### Creating a collection
Remember that your collection willbe available after the first document is inserted.

```python
#creating a colletion 
information = mydb.employeeinformation
```


<img src="{{ site.url }}{{ site.baseurl }}/images/mongoDB/1.jpg" alt="linearly separable data">


### Adding records
All the recors must follow the JSON key pair formatt.
Lets check how to insert one or more records.

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



