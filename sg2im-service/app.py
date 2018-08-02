#!flask/bin/python
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/generate', methods=['POST'])
def generate():
    error = None
    print("Hello")
    print(request)
    if request.method == 'POST':
        scene_graph = request.text
        print(scene_graph)
    # the code below is executed if the request method
    # was GET or the credentials were invalid
    return scene_graph

if __name__ == '__main__':
    app.run(debug=True)
