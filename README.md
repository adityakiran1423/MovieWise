# MovieWise

MovieWise is a platform for recommending you with movies based on your particular interest in any of your favourite movie

## Technologies used

MongoDB -> stores all data including custom metric about movies from movielens

React -> JS framework for handling frontend interactions

Flask -> backend webframework

PyMongo -> interacting with MongoDB instance directly from Flask

Scikit -> ML module for calculating cosine similarity matrix and ```similarity_score``` list

## How it works (backend)

1. MovieWise stores all the data (plot, rating, YOR, genre) about a movie in a MongoDB cluster
2. It then converts features like genres, plot, etc into numerical data
3. Using this numerical data, a feature vector of each movie is created
4. This value is stored for each of the movie in the MongoDB cluster
5. Once this is done, a cosine similarity matrix is constructed
6. This matrix is stored in another 'table' of the MongoDB instance
7. Once a particular movie is entered by the user, we fetch all it's details using an API
8. We then calculate the feature vector for the entered movie
9. A ```similarity_score``` list which contains numerical similarity value of each movie with entered movie is computed
10. We then sort the ```similarity_score``` list in descending order to obtain most similar movies
