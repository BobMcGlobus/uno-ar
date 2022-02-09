# uno-ar
An additional AR layer for the classic card game UNO, created during a university group project. 
All rights of the basic card game are owned by Mattel.  so please don't sue us ;)

### Who we are
We are online media students of the DHBW Mosbach in Germany. Currently (start of this repo) we are in our fifth semester. The team of this project consists of five people, two of which are responsible for the development of this prototype.

### Why this project exists
This project is a university project of the fifth semester of our online media course. We had the task to add an augmented reality layer to a classic game. We thought for a while how we could do this best and came to the conclusion to choose a card game. Our choice was the very popular card game UNO from Mattel. Since in our opinion Uno would not have benefited from playful 3D models like a training card game would have. Therefore we decided to make the game manual accessible via Ar.


## How it works
UNO-AR works entirely in the browser, camera and other sensor data are not sent to the server, 
but are used entirely on the client side to compute and display the AR content. To achieve this 
we use [Mind AR](https://github.com/hiukim/mind-ar-js) a JavaScript library based on AFRAME. The webgl code on which Mind AR is based is 
written in glsl shader code using the tensorflowJS core API. One of the advantages that Mind AR 
brings is a relatively high performance, since webgl can exploit the GPU performance of the client.

## Try it
You can easily try UNO AR by going to [https://www.ar-nav.de](https://www.ar-nav.de) (preferably with a smartphone) and then scanning a compatible UNO card with the camera.
Unfortunately, not all uno cards are compatible at the time of this project, there are simply too many different card designs. However, we have listed some below for testing.
Additionally it is to be noted that the appearing instructions will be in German, this has to do with the fact that this project was developed in the context of a work for a German university.

https://imgur.com/a/0ftEFfA

## Run local
To run the project locally, it is sufficient to simply run the project through a local web server.
