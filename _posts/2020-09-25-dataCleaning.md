---
title: "Data Cleaning and Normalization"
date: 2020-02-18
tags: [data cleaning, data normalization, machine learning, data science, neural network]
header:
  image: "/images/data_cleaning/data_cleaning.jpg"
excerpt: "Data Cleaning, Machine Learning, Data Science"
---



## Clean web log access 
Main aim of this task is to view the top pages of a certain web page.
How a easy task turns into a laborious activy. 
This log data was released on the Udemy Course called "Machine Learning, Data Science and Deep Learning with Python" by Frank Keane.

To download the data check out this link.



Lets start!!!


## Organizing web logs into fields

This code will parse an apache access log line in a bunch of fields, and then buids up what is called the regular expression.
This will allows us to appy it to each access log line, and group the pieces of data in these different fields

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

``` python
URLCounts = {}

#open the log file
with open(data, "r") as f:
    for line in (l.rstrip() for l in f):
        match= format_pat.match(line)
        if match:
            access = match.groupdict()
            #extract the request field
            request = access['request']
            #split request on its 3 components 
            (action, URL, protocol) = request.split()
            #if URL is in the dict, add 1, else create a new dict value for the new URL
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

## Code step by step
* Create a dictionaty
* For each line apply the regular expression
* If statement meets a standard pattern
* Extract a request field
* Split request into 3 components (action,URL, protocol)
* If the URL is present on the dictionary, add to it, if not create a dictionary value.
* Sort results


<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/1.jpg" alt="linearly separable data">

Our first road block is that not all fields have the 3 components that we are looking for.
So lets check what does not have 3 components.

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

Lets update our code to select only fields with 3 components.

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

The results were narrowed down, few results do not the actual posts we are looking for.
To filter a bit more the results lets set action = "GET".

<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/4.jpg" alt="linearly separable data">
<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/5.jpg" alt="linearly separable data">
<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/6.jpg" alt="linearly separable data">
<img src="{{ site.url }}{{ site.baseurl }}/images/data_cleaning/7.jpg" alt="linearly separable data">




# Model

   To reduce risk exposure we propose a short period classification using the Random Forest model.

# Structure

## Choose Markets & Companies

   Select major companies from NYSE, Nasdaq, and LSE.
## Collect data

   Use yahoo API to gather company data.


```r
library(quantmod)
library(randomForest)
library(sqldf)
library(caTools)
library(dplyr)


startDate = as.Date("2011-01-01")
endDate = as.Date("2019-11-30") 

stocks <- c("MSFT","AAPL","AMZN","GOOG","FB",
            "BRK-A","V","JPM","XON","WMT",
            "JNJ","BAC","PG","VZ","MA",
            "NG.L","HSBA.L","GLEN.L","GSK.L","AZN.L",
            "RIO.L","DGE.L","BATS.L","ULVR.L","RB.L",
            "VOD.L","BHP.L","PRU.L","LLOY.L","CPG.L")
summary(stocks)
getSymbols(stocks,src="yahoo",from=startDate,to=endDate)
# adding the stock data to a data frame formatting
frames <- list(as.data.frame(MSFT),as.data.frame(AAPL),as.data.frame(AMZN),as.data.frame(GOOG),as.data.frame(FB),as.data.frame(`BRK-A`),as.data.frame(V),as.data.frame(JPM),as.data.frame(XON),as.data.frame(WMT),as.data.frame(JNJ),as.data.frame(BAC),as.data.frame(PG),as.data.frame(VZ),as.data.frame(MA),as.data.frame(NG.L),as.data.frame(HSBA.L),as.data.frame(GLEN.L),as.data.frame(GSK.L),as.data.frame(AZN.L),as.data.frame(RIO.L),as.data.frame(DGE.L),as.data.frame(BATS.L),as.data.frame(ULVR.L),as.data.frame(RB.L),as.data.frame(VOD.L),as.data.frame(BHP.L),as.data.frame(PRU.L),as.data.frame(LLOY.L),as.data.frame(CPG.L))
print(frames)
# data frame to be populated with the results
resultDataSet <- data.frame(stocks=character(), Accuracy=double())
print(resultDataSet)
``` 

## Calculate indicators

   * RSI indicator
   * Exponential Moving Average Indicator
   * Difference in Exponential Moving Average
   * MACD Indicator
   * Bollinger Band indicator
   * % Change BB
 
    
```r
for(st in stocks){
  tryCatch({
    
    dataset = na.omit(frames[[index]])
    dataset = dataset[complete.cases(dataset), ]
    
    #RSI indicator
    relativeStrengthIndex20=RSI(Ad(dataset),n=20)
    plot(relativeStrengthIndex20)
    relativeStrengthIndex20
    
    # Exponential Moving Average Indicator
    exponentialMovingAverage20=EMA(Ad(dataset),n=20)
    plot(exponentialMovingAverage20)
    
    # Difference in Exponential Moving Average
    exponentialMovingAverageDiff <- Ad(dataset) - exponentialMovingAverage20
    plot(exponentialMovingAverageDiff)
    
    # MACD Indicator
    MACD <- MACD(Ad(dataset),fast = 12, slow = 26, signal = 9, type = "EMA", histogram = TRUE)
    plot(MACD)
    MACDsignal <- MACD[,2]
    plot(MACDsignal)
    
    # Bollinger Band indicator
    BollingerBands <- BBands(Ad(dataset),n=20,sd=2)
    plot(BollingerBands)
    
    # % Change BB
    PercentageChngpctB <- BollingerBands[,4]
    plot(PercentageChngpctB)
    
    # Price (Closes above Aden = 1, Closes below Aden = 0)
    Price=ifelse(dataset[4]>dataset[1], 1,0)
    plot(Price)
    dataset1<-data.frame(relativeStrengthIndex20, exponentialMovingAverage20, MACDsignal, PercentageChngpctB, Price)
    
    # Size of Data
    dim(dataset1)
    #Checking for missing data
    d3=dataset1
    ncol(d3)
    
    dataset1 = na.omit(dataset1)
    
    
    dim(dataset1)
    d3=dataset1
```

## Split data

   Split data ratio, 80% for training and 20% to validate the model.

```r
#Assigining col names
    colnames(dataset1)= c ("RSI20", "EMA20", "MACDsignal", "BB", "Price")
    
    # Encoding the target feature as factor
    dataset1$Price=factor(dataset1$Price, levels = c(0, 1))
    
    # Splitting the dataset into the Training set and Test set
    #sample
    set.seed(123)
    split = sample.split(dataset1$Price, SplitRatio = 0.8)
    training_set = subset(dataset1, split == TRUE)
    test_set = subset(dataset1, split == FALSE)
    
    # Feature Scaling (Normalization and dropping the predicted variable)
    training_set[-5] = scale(training_set[-5])
    test_set[-5] = scale(test_set[-5])
    
```

## Implement the model


```r
# Applying Random Forest Model on the Training set
    classifier = randomForest(x = training_set[-5],
                              y  = training_set[,5],
                              ntree = 60)
    
    # Predicting the Test set results
    predict_val = predict(classifier, newdata = test_set[-5])
```

## Calculate accuracy

```r
# Confusion Matrix
    confMat = table(test_set[, 5], predict_val)
    
    # Evaluating Model Accuracy on test data set using Confusion Matrix
    Model_Accuracy=(confMat[1,1] + confMat[2,2])/ (cm[1,1] + cm[1,2] + confMat[2,1] + confMat[2,2])
    
    linha<- data.frame(stocks=st,Accuracy=Model_Accuracy)
    
    #rbind_list combine a vecto or data frame by rows, in our case comining resultDataSet with linha
    resultDataSet <- rbind_list(resultDataSet,linha)
    
```

# Findings
   This represents that the model was able to predict the market direction on 63% of the cases. The result makes it an extra tool for trade strategies.
 



