# Sg2im Web Demo

This is my attempt at making a web based demo of Google's [sg2im](https://github.com/google/sg2im), an end-to-end neural network model that converts a scene graph into a human recognizable image. My hope is to use their pretrained model to allow users to generate images themselves.

This web app will be built with React.js and Flask. My hope is that users can input potential objects (ie. sky, grass, shape) and their orders of relation so that they can create realistic images from the pre-trained model on the fly.

From [their paper](https://arxiv.org/abs/1804.01622) this is a visual example of how it works:
![alt text](images/model-example.png)

## Things to do

* Use React components to save users objects and orders of relation
* Write a Flask endpoint to receive scene graphs from React front end & write Ajax function to pass info
* Create handling function to receive image back and display it
