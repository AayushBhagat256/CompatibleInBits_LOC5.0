import pickle
import joblib
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk import word_tokenize
import pandas as pd
import pickle
from django.http import HttpResponse
from sklearn.ensemble import RandomForestClassifier

comment = ['I recently purchased the new Acer Aspire 5 laptop and I am thoroughly impressed with its performance. The laptop has a sleek and modern design, which is perfect for my professional needs.The laptop comes equipped with an Intel Core i7 processor and 16GB of RAM, which allows me to run multiple programs at once without any lag or slowdown. Additionally, the laptop has a large 15.6 inch Full HD IPS display which provides crystal-clear visuals and vibrant colors.The keyboard is backlit which is great for working in low light environments, and the touchpad is very responsive and easy to use. The laptop also has a built-in fingerprint reader which adds an extra layer of security.One thing that particularly impressed me was the battery life. I was able to use the laptop for a full workday without needing to charge it, which is incredibly convenient.Overall, I would highly recommend the Acer Aspire 5 laptop to anyone in need of a reliable and high-performing laptop for work or personal use. It offers great value for its price point and has exceeded my expectations in every way.I recently purchased the new Acer Aspire 5 laptop and I am thoroughly impressed with its performance. The laptop has a sleek and modern design, which is perfect for my professional needs.']

def nlp(comment):
    with open('sentimentModel.pkl', 'rb') as f:
        model = pickle.load(f)
    with open('tfidf.pkl', 'rb') as f:
        vector = pickle.load(f)
    test = vector.transform(comment)
    # print(test)
    predictions = model.predict(test)
    # print(predictions)
    return predictions