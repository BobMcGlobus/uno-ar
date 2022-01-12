# uno-ar
An additional AR layer for the classic card game UNO, created during a university group project. 
All rights of the basic card game are owned by Mattel.  so please don't sue us ;)

### Who we are
We are online media students of the DHBW Mosbach in Germany. Currently (start of this repo) we are in our fifth semester. The team of this project consists of five people, two of which are responsible for the development of this prototype.

### Why this project exists
Dieses Projekt ist als Uni Projektarbeit des fünften Semesters an unseres Onlinemedien Studienganges. Wir hatten die Aufgabe ein klassisches Spiel mit einer zusätzlichen Augmented realaty ebene zu versehen.
Wir überlegten eine weile wie wir dies am besten machen könnten und kamen zum Schluss ein Kartenspiel zu wählen. Unsere Wahl fiel dabei auf das in Deutschland sehr beliebte Kartenspiel UNO von Mattel.
Da unserer Meinung nach Uno nicht von Spielerischen 3D Modellen Profitiert hätte wie dies ein Trainingcardgame getahen hätte. Daher habenwir uns dazu entschieden, die Spielanleitung mittels Ar zugänglich zu machen. 

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

<img src="https://lh4.googleusercontent.com/Xb98ZzBCDyP3ls-ZWkOxlibDB3GfItcbe7hO18ge727TainzpYND-wCLnGUus9VzEMzwdAhrIRJCalXctqVh=w737-h1238-rw" width="35%" border="10px"/>
<img src="https://lh3.googleusercontent.com/up-kTuj9jzX5AAeMXXhC7w45flxG5m1OduaxbGdhMGBOjncUcB0o5RFYtEUegYUIHc6LwlqXETp5Zwj5Sqfw=w1530-h1238-rw" width="35%" border="10px"/>