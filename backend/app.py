'''
The main starter flask code
Fetch response from frontend here
Send it to movie.py
Return in JSON format
Frontend will recieve it and render it
'''

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/submit", methods=["POST"])
def optimus():
    print("Hello")
    data = request.get_json()
    data = dict(data)
    print(data)
    


if __name__ == "__main__":
    app.run(debug=True)