---
title: "Detecting credit card fraudulent transactions with 99% accuracy"
date: 2020-11-03
tags: [pca, logistic regression, machine learning, data science]
header:
  image: "/images/data_cleaning/data_cleaning.jpg"
excerpt: “Fraud Detection, Machine Learning, Data Science"
---


For this article, I will explore data from credit card transactions and run a regression classifier to predict fraudulent ones. 

Where to find the data → [CSV file](https://www.kaggle.com/mlg-ulb/creditcardfraud)

I will also go through some technical topics as Principal Component Analysis and Confusion Matrix.

This an unbalanced dataset with the majority of the records being regular transactions, 284,807, and 492 fraudulent transactions. 

We only have numeric values in this dataset, due to PCA transformation, to preserve data confidentiality. 

* PCA: one of the most important aspects of this technique is the dimensionality reduction and preseservation of the variance. A practical result of this is much lower information resulting in similar accurate results.  

The scatter plot shows us the distribution (time x amount)

<img src="{{ site.url }}{{ site.baseurl }}/images/credit_card_fraud/1.jpg" alt="linearly separable data">


* 0 - regular transactions
* 1 -  fraudulent transactions

You need to like closely to find an orange dot.

Now let’s explore the code. Simple and Accurate ; )

### Libraries 

```python
import pandas as pd
import numpy as np
import seaborn as sns
from sklearn import linear_model
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score
```

### Importing file 
Importing CSV file and evaluating top 5 rows evaluation.

```python
data = pd.read_csv("/Users/joseformiga/Desktop/Python/credit_card_fraud_detection/creditcard.csv")

data.head()
```

### Splitting data 
Features: selecting all the columns excluding “Class”
Target: Selecting “Class” column, the variable we are aiming to predict

```python
features = data.iloc[:,:-1]
target = data['Class']

features_train, features_test, target_train, target_test = train_test_split(features,target,test_size=0.35)
```

###Running the classifier 
For this article, I will use the Logistics Regression model (supervised learning). 

```python
clf = linear_model.LogisticRegression(C=1e5)
clf.fit(features_train,target_train)
target_pred = np.array(clf.predict(features_test))
```

### Confusion matrix
A confusion matrix it’s a table where you can compare the outcome of your model with real data.

```python
print(confusion_matrix(target_test,target_pred))
print(accuracy_score(target_test,target_pred))
print(classification_report(target_test,target_pred))
```

Check out the image:
<img src="{{ site.url }}{{ site.baseurl }}/images/credit_card_fraud/precision_recall.jpg" alt="linearly separable data">


In your example we have:
*True positives (regular transaction classified as a regular transaction)
*True negatives (fraud transaction classified as fraud)
*False positives (regular transaction classified as fraud)
*False negatives (fraud classified as a regular transaction)

Here are our results.
* Confusion matrix
<img src="{{ site.url }}{{ site.baseurl }}/images/credit_card_fraud/2.jpg" alt="linearly separable data">

* Accuracy
<img src="{{ site.url }}{{ site.baseurl }}/images/credit_card_fraud/3.jpg" alt="linearly separable data">

* Classification report
<img src="{{ site.url }}{{ site.baseurl }}/images/credit_card_fraud/4.jpg" alt="linearly separable data">

The accuracy is impressive 99,9% !!! But is important to have in mind that we should explore further the results for Precision and Recall, but the latter is a topic for a new whole article = D
