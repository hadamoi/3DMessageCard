# 🎄🎅🏻 3D X-MAS card
You can rotate the mouse to view the card from different angles. <br />
On mobile, it moves according to the tilt of the phone. <br />
There was an issue that it didn't work on iPhone, 
so when you press the first button that appears, <br />
you can distinguish between PC / MOBILE. <br />
And if it's mobile, you can distinguish between IOS and Android environment within it. <br />
This way, it works on any mobile device.

#### ✔️ Things to remember
```
window.addEventListener("deviceorientation", function (event) {
          x = event.gamma;
          y = event.beta;
      });
```
* This is the JavaScript code that detects the device's orientation information and performs processing on that information. 

* The `window.addEventListener("deviceorientation", function (event) { ... })` is the part that registers an event listener to detect the `deviceorientation` event. This event occurs when the orientation information of a device (mobile device or device with a supporting sensor) changes.

* The event callback function gets the device's orientation information via `event.gamma` and `event.beta`. The `event.gamma` represents the angle at which the device rotates left and right, and the `event.beta` represents the angle at which the device rotates up and down.

* Within the callback function, `x = event.gamma;` and `y = event.beta;` are the parts that store the angle values obtained from those events in the variables `x` and `y`. These variables can then be utilized to implement additional logic based on the device's orientation.

* This code can be useful in situations where you need to use the device's orientation information on mobile devices or devices with supporting sensors. For example, it can be utilized in 3D games, virtual reality (VR) applications, and motion control interfaces to implement behavior based on the tilt or rotation of the device.
