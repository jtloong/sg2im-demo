#!flask/bin/python
from flask import Flask
from flask import request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/generate', methods=['POST'])
def generate():
    error = None
    print("Hello")
    if request.method == 'POST':
        print("It is POST")
        print(request.content_type)
        scene_graph = request.json
        print(scene_graph)
        print(scene_graph['objects'])
        print(scene_graph['relationships'])
    # the code below is executed if the request method
    # was GET or the credentials were invalid
    return "Success!"

if __name__ == '__main__':
    app.run(debug=True)
