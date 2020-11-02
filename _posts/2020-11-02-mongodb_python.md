---
title: "MongoDB - Creating, querying and trasnformig data with Python"
date: 2020-10-25
tags: [Mongo DB, Python, Cloud, Data Wrangling]
header:
  image: "/images/mondoDB/mongoDB.jpg"
excerpt: "Data Cleaning, Machine Learning, Data Science"
---
**Image Credits** Smith Collection / Gado / Getty Images


#MongoDB

MondoDB is a righly scalable database. All info is stored as JSON files, whitch makes it very fast and scalable.

#Terminology
*Collection
**Name used for tables

#Objective

I will be exploring how to create, query and transform data into a Pandas data frama in Python.

With no further delays, lets get ours hands dirt.

##Importing libraries and establish connection with Mongo Server

```python
from flask_pymongo import pymongo as pm
from pymongo import MongoClient as mc

#Establish connection
connection = mc('localhost',27017)
```

##Creating a data base
If a database does not exist under this name, a new data will be created.

```python
#createing a database
mydb = client['Employee']
```

##Creating a collection
Remember that your collection will only be available after the first document is inserted.

```python
#creating a colletion 
information = mydb.employeeinformation
```


<img src="{{ site.url }}{{ site.baseurl }}/images/naive_bayes/1.jpg" alt="linearly separable data">




