# script to calculate feature vectors and add them to the mongodb database
# when request from frontend is recieved using axios, calc and send data in json
# axios for fe and be communication 
import pandas as pd

df = pd.read_csv("movie_dataset.csv")

def calculate_feature_matrix(df):

  df["genre_count"] = df["genres"].apply(lambda x: len(x.split(", ")))  
  df["runtime_category"] = pd.cut(df["runtime"], bins=[0, 120, 180, float("inf")], labels=["Short", "Medium", "Long"])  # Runtime category (dummy)

  # Feature matrix 
  feature_matrix = df[["genre_count", "runtime_category"]]

  return feature_matrix

# Create feature matrix for each movie
movie_features = calculate_feature_matrix(df.copy())

print(movie_features.head())

user_movie = "The Shawshank Redemption"
user_movie_features = movie_features[movie_features["title"] == user_movie]

print(f"Feature matrix for '{user_movie}':")
print(user_movie_features)
