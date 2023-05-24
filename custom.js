let button = document.querySelectorAll("button")[0];
let container = document.querySelector(".container");
let x = 0, y = 0;
let mx = 0, my = 0;
let isMobile = false;

function loop() {
  mx += (x - mx) * .1;
  my += (y - my) * .1;
  //가속도 설정. 뒤의 값을 변경하면 가속도 값 변경

  container.style.transform = `translate3d(-50%, -50%, 0) rotateX( ${(my / 10)}deg) rotateY(${(-mx / 10)}deg)`;
  // //마우스 위치에 따른 대상의 움직임 위치 셋팅

  window.requestAnimationFrame(loop);
  //반복 실행
}

function loopMobile() {
  mx += (x - mx) * .1;
  my += (y - my) * .1;

  container.style.transform = `translate3d(-50%, -50%, 0) rotateX( ${(my - 40)}deg) rotateY(${mx}deg) scale(0.96)`;

  window.requestAnimationFrame(loopMobile);
}

function mobileChk() {
  let mobileKeyWords = new Array('Android', 'iPhone', 'iPad', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
  for (let info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
          return true;
      }
  }
  return false;
}

function iosChk(){
  let mobileKeyWords = new Array('iPhone', 'iPad');
  for (let info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
          return true;
      }
  }
  return false;
}

isMobile = mobileChk();
isIos = iosChk();



button.addEventListener("click", function () {
  button.classList.add("dimed");
  container.classList.add("active");

  if (isMobile) {
    const isSafariOver13 = window.DeviceOrientationEvent !== undefined &&  typeof window.DeviceOrientationEvent.requestPermission === 'function'
    if (isSafariOver13) {
      // IOS일때만 실행
      DeviceOrientationEvent.requestPermission().then(function (){
        mobileOrientationChk();
      }).catch(console.error);
    } else {
      mobileOrientationChk();
    }

    function mobileOrientationChk(){
      window.addEventListener("deviceorientation", function (event) {
          //디바이스가 움직임 감지될때 실행
          x = event.gamma;
          y = event.beta;
      });
      loopMobile();
    }
    
  } else {
    window.addEventListener("mousemove", function (e) {
  
      // console.log(e.clientY-window.innerHeight / 2)
      x = (e.clientX - window.innerWidth / 2);
      y = (e.clientY - window.innerHeight / 2);
      //마우스 위치값을 화면의 정가운데가 0,0이 되도록 맞춤
      // console.log(x, y);
    });
    loop();
  }
})



