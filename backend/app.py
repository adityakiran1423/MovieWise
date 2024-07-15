# # '''
# # The main starter flask code
# # Fetch response from frontend here
# # Send it to movie.py
# # Return in JSON format
# # Frontend will recieve it and render it
# # '''

# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # import movies  # Import the movies function from your movies module

# # app = Flask(__name__)
# # CORS(app)


# # @app.route("/submit", methods=["POST"])
# # def optimus():
# #     received_data = request.json  # Get the JSON data from the request
# #     recs = movies()  # Assuming movies() fetches or processes data
# #     response_data = {"received": received_data, "recommendations": recs}  # Construct response data
# #     return jsonify(response_data)  # Return JSON response


# # if __name__ == "__main__":
# #     app.run(debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd
# import random
# #from movie import get_movie_details  # Import the get_movie_details function from your movie module

# app = Flask(__name__)
# CORS(app)

# # @app.route("/submit", methods=["POST"])
# # def optimus():
# #     received_data = request.json  # Get the JSON data from the request
# #     movie_name = received_data.get("movie_name")  # Extract movie name from the received data

# #     if movie_name:
# #         movie_details = movie(movie_name)  # Call the movie function with the movie name
# #         response_data = {
# #             "received": received_data,
# #             "movie_details": movie_details
# #         }
# #         return jsonify(response_data)  # Return JSON response
# #     else:
# #         return jsonify({"error": "Movie name not provided"}), 400  # Return error if movie name is missing

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# # import movie  # Import the movie function from your movie module

# app = Flask(__name__)
# CORS(app)

# @app.route("/submit", methods=["POST"])
# def optimus():
#     received_data = request.json  # Get the JSON data from the request
#     try:
#         movie_details = movie.movie()  # Call the movie function to get movie details
#         response_data = {
#             "received": received_data,
#             "movie_details": movie_details
#         }
#         return jsonify(response_data)  # Return JSON response
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500  # Return error if something goes wrong

# if __name__ == "__main__":
#     app.run(debug=True)

    

# # def movie(movie_name):
# #     # Mock data for demonstration purposes
# #     movie_data = {
# #         "Inception": {
# #             "genre": "Science Fiction",
# #             "name": "Inception",
# #             "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
# #         },
# #         "The Matrix": {
# #             "genre": "Science Fiction",
# #             "name": "The Matrix",
# #             "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
# #         }
# #         # Add more movie data as needed
# #     }

# #     return movie_data.get(movie_name, {
# #         "genre": "Unknown",
# #         "name": movie_name,
# #         "description": "Description not available."
# #     })


# # def movie():
# #     # Read the CSV file
# #     df = pd.read_csv('movie_details.csv')
    
# #     # Check if the CSV has at least 10 entries
# #     if len(df) < 10:
# #         raise ValueError("The CSV file must contain at least 10 movies.")

# #     # Randomly select 10 movies
# #     sampled_movies = df.sample(n=10)

# #     # Extract names and descriptions
# #     movies_list = []
# #     for _, row in sampled_movies.iterrows():
# #         movie_info = {
# #             "name": row['name'],
# #             "description": row['description']
# #         }
# #         movies_list.append(movie_info)

# #     return movies_list



# # if __name__ == "__main__":
# #     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import random

app = Flask(__name__)
CORS(app)

def movie():
    # Read the CSV file
    df = pd.read_csv('movie_details.csv')
    
    # Check if the CSV has at least 10 entries
    if len(df) < 10:
        raise ValueError("The CSV file must contain at least 10 movies.")

    # Randomly select 10 movies
    sampled_movies = df.sample(n=10)

    # Extract names and descriptions
    movies_list = []
    for _, row in sampled_movies.iterrows():
        movie_info = {
            "name": row['name'],
            "description": row['description']
        }
        movies_list.append(movie_info)

    return movies_list

@app.route("/submit", methods=["POST"])
def optimus():
    received_data = request.json  # Get the JSON data from the request
    movie_name = received_data.get("movieName", "")  # Get the movie name from the request
    try:
        movie_details = movie()  # Call the movie function to get movie details
        response_data = {
            "received": movie_name,
            "movie_details": movie_details
        }
        return jsonify(response_data)  # Return JSON response
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return error if something goes wrong

if __name__ == "__main__":
    app.run(debug=True)
