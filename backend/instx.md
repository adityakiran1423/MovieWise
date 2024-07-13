# Working of feature vector calculation script

Download appropraite csv file which contains all the data you need

1. Decide relevant paramaters you want to analyse
2. Use skikit module's functions to convert parameters into numerical values
3. Using numerical values, convert each movie into feature vector
4. Once feature vector is calculated store it in a list
5. Once list is fully computed, use scikit function and make cosine similarity table
6. Store that matrix in new table in MongoDB
