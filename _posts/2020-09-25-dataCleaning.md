---
title: "Data Cleaning and Normalization"
date: 2020-02-18
tags: [data cleaning, data normalization, machine learning, data science, neural network]
header:
  image: "/images/data_cleaning/data_cleaning.jpg"
excerpt: "Data Cleaning, Machine Learning, Data Science"
---



### Clean weblog access 
The main aim of this task is to view the top pages of a certain web page and understand how an easy task can turn into a laborious activity. 
This log data was released on the Udemy Course called "Machine Learning, Data Science and Deep Learning with Python" by Frank Keane.

Let’s start!!!


### Organizing weblogs into fields

This code will parse an apache access logline in a bunch of fields and then builds up what is called the regular expression.
This will allow us to apply it to each access logline, and group the pieces of data in these different fields

``` python
import re

format_pat= re.compile(
    r"(?P<host>[\d\.]+)\s"
    r"(?P<identity>\S*)\s"
    r"(?P<user>\S*)\s"
    r"\[(?P<time>.*?)\]\s"
    r'"(?P<request>.*?)"\s'
    r"(?P<status>\d+)\s"
    r"(?P<bytes>\S*)\s"
    r'"(?P<referer>.*?)"\s'
    r'"(?P<user_agent>.*?)"\s*'
)

df = "access_log.txt"

```

### Code step by step
* Create a dictionary
* For each line apply the regular expression
* If statement meets a standard pattern (3 components --> action,URL, protocol)
* Extract a request field
* Split request into 3 components (action,URL, protocol)
* If the URL is present on the dictionary, add to it, if not create a dictionary value.
* Sort results

``` python
URLCounts = {}

with open(data, "r") as f:
    for line in (l.rstrip() for l in f):
        match= format_pat.match(line)
        if match:
            access = match.groupdict()
            request = access['request']
            (action, URL, protocol) = request.split()
            if URL in URLCounts:
                URLCounts[URL] = URLCounts[URL] + 1
            else:
                URLCounts[URL] = 1

# sort the results 
results = sorted(URLCounts, key=lambda i: int(URLCounts[i]), reverse=True)

#printing the first 20 results
for result in results[:20]:
    print(result + ": " + str(URLCounts[result]))
```

<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/1.jpg" alt="linearly separable data">

Our first roadblock is that not all fields have the 3 components that we are looking for.
So let’s check which rows do not have 3 components.

``` python
URLCounts = {}

with open(data, "r") as f:
    for line in (l.rstrip() for l in f):
        match= format_pat.match(line)
        if match:
            access = match.groupdict()
            request = access['request']
            fields = request.split()
            if (len(fields) != 3):
                print(fields)

```

<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/2.jpg" alt="linearly separable data">

Let’s update our code to select only fields with 3 components.

``` python
URLCounts = {}

with open(data, "r") as f:
    for line in (l.rstrip() for l in f):
        match= format_pat.match(line)
        if match:
            access = match.groupdict()
            request = access['request']
            fields = request.split()
            #code added to remove blanks and any other field with len different than 3
            if (len(fields) == 3):
                URL = fields[1]
                if URL in URLCounts:
                    URLCounts[URL] = URLCounts[URL] + 1
                else:
                    URLCounts[URL] = 1

results = sorted(URLCounts, key=lambda i: int(URLCounts[i]), reverse=True)

for result in results[:20]:
    print(result + ": " + str(URLCounts[result]))

```

<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/3.jpg" alt="linearly separable data">

The results were narrowed down, but we are not quite there yet.
To restrict it a bit more let’s set action = "GET".
This means that users "getting" info from the website.

``` python
URLCounts = {}

with open(logPath, "r") as f:
    for line in (l.rstrip() for l in f):
        match= format_pat.match(line)
        if match:
            access = match.groupdict()
            request = access['request']
            fields = request.split()
            if (len(fields) == 3):
                (action, URL, protocol) = fields
                if (action == 'GET'):
                    if URL in URLCounts:
                        URLCounts[URL] = URLCounts[URL] + 1
                    else:
                        URLCounts[URL] = 1

results = sorted(URLCounts, key=lambda i: int(URLCounts[i]), reverse=True)

for result in results[:20]:
    print(result + ": " + str(URLCounts[result]))
```

<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/4.jpg" alt="linearly separable data">

Digging deeper into the results is possible to find "blank" user agents, meaning that those requests are coming from 
not regular users, or any type of web scrappers.

* selecting most used agent ="browser"
* check the second result, "-: 4035", could be a scrapping tool
* baiduspider, googlebot and yandexbot are webcrawlers

``` python

UserAgents = {}

with open(logPath, "r") as f:
    for line in (l.rstrip() for l in f):
        match= format_pat.match(line)
        if match:
            access = match.groupdict()
            agent = access['user_agent']
            if agent in UserAgents:
                UserAgents[agent] = UserAgents[agent] + 1
            else:
                UserAgents[agent] = 1

results = sorted(UserAgents, key=lambda i: int(UserAgents[i]), reverse=True)

for result in results:
    print(result + ": " + str(UserAgents[result]))

```

<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/5.jpg" alt="linearly separable data">

There still agents that do not look right, so let’s add few more filters. Let’s remove agents that have the following words
bots,Bots,spider,Spider, and "-".  

``` python

URLCounts = {}

with open(logPath, "r") as f:
    for line in (l.rstrip() for l in f):
        match= format_pat.match(line)
        if match:
            access = match.groupdict()
            #restricting the user agent that does not have the following words
            #W3 total cache is the website owner cache 
            agent = access['user_agent']
            if (not('bot' in agent or 'spider' in agent or 
                    'Bot' in agent or 'Spider' in agent or
                    'W3 Total Cache' in agent or agent =='-')):
                request = access['request']
                fields = request.split()
                if (len(fields) == 3):
                    (action, URL, protocol) = fields
                    if (action == 'GET'):
                        if URL in URLCounts:
                            URLCounts[URL] = URLCounts[URL] + 1
                        else:
                            URLCounts[URL] = 1

results = sorted(URLCounts, key=lambda i: int(URLCounts[i]), reverse=True)

for result in results[:20]:
    print(result + ": " + str(URLCounts[result]))

```

<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/6.jpg" alt="linearly separable data">

Almost there, finally the last approach. So the next action is to filter only for URLs ending in "/".

``` python
URLCounts = {}

with open(logPath, "r") as f:
    for line in (l.rstrip() for l in f):
        match= format_pat.match(line)
        if match:
            access = match.groupdict()
            agent = access['user_agent']
            if (not('bot' in agent or 'spider' in agent or 
                    'Bot' in agent or 'Spider' in agent or
                    'W3 Total Cache' in agent or agent =='-')):
                request = access['request']
                fields = request.split()
                if (len(fields) == 3):
                    (action, URL, protocol) = fields
                    if (URL.endswith("/")):
                        if (action == 'GET'):
                            if URL in URLCounts:
                                URLCounts[URL] = URLCounts[URL] + 1
                            else:
                                URLCounts[URL] = 1

results = sorted(URLCounts, key=lambda i: int(URLCounts[i]), reverse=True)

for result in results[:20]:
    print(result + ": " + str(URLCounts[result]))

```

<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/7.jpg" alt="linearly separable data">
