# Sg2im Web Demo

This is my attempt at making a web based demo of Google's [sg2im](https://github.com/google/sg2im), an end-to-end neural network model that converts a scene graph into a human recognizable image. My hope is to use their pretrained model to allow users to generate images themselves.

This web app will be built with React.js and Flask. My hope is that users can input potential objects (ie. sky, grass, shape) and their orders of relation so that they can create realistic images from the pre-trained model on the fly. This repo will contain the code for running the React.js frontend, [this other repo](https://github.com/jtloong/sg2im-api) contains the Flask service for serving the generated photos.

From [their paper](https://arxiv.org/abs/1804.01622) this is a visual example of how it works:

![alt text](README_images/model-example.png)

## Things to do

1. Use React components to save users objects and orders of relation (Done)
    * Function to save objects inputed from user to global scene graph ✔️
    * Function to add new objection relation rule components ✔️
    * Save object relations to global scene graph state ✔️
    * Create function to give users unique ID
2. Write a Flask endpoint to receive scene graphs from React front end & write Ajax function to pass info (In Progress)
    * Rewrite some of the sg2im Python functions for better handling to generate image ✔️
    * Create Flask endpoint to receive JSON data via HTTP requests ✔️
    * Write GET request to retrieve image from API based on user ID
    * Add Zappa tooling to deploy serverless to AWS Lambda

## Local demo instructions

To deploy the frontend, open a terminal and do the following:

```bash
git clone https://github.com/jtloong/sg2im-demo.git
cd sg2im-demo
npm start
```
If you want to have the full application, you'll need to clone the Flask API [here](https://github.com/jtloong/sg2im-api) and follow the demo instructions there. 

## Relevant links for the project

* https://github.com/google/sg2im
* https://github.com/facebook/create-react-app
* https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
* https://github.com/JedWatson/react-select
* https://testdriven.io/asynchronous-tasks-with-flask-and-redis-queue
* https://stackoverflow.com/questions/22565808/run-django-and-node-in-a-heroku-app-simultaneously
* https://blog.heroku.com/heroku-django-node
* http://www.flaskapi.org/api-guide/status-codes/
* https://medium.com/@dkhd/handling-multiple-requests-on-flask-60208eacc154
* https://stackoverflow.com/questions/49754413/how-to-accept-concurrent-request-using-gunicorn-for-flask-api
* https://www.patricksoftwareblog.com/receiving-files-with-a-flask-rest-api/
