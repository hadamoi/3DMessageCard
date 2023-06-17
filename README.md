# 🎄🎅🏻 3D X-MAS card
You can rotate the mouse to view the card from different angles. <br />
On mobile, it moves according to the tilt of the phone. <br />
There was an issue that it didn't work on iPhone, 
so when you press the first button that appears, <br />
you can distinguish between PC / MOBILE. <br />
And if it's mobile, you can distinguish between IOS and Android environment within it.

#### ✔️ Things to remember
```
window.addEventListener("deviceorientation", function (event) {
          x = event.gamma;
          y = event.beta;
      });
```
