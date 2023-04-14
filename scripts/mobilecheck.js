window.onload = function() {

    // To detect mobile usage for the Photoshelter pages. Credit: http://www.abeautifulsite.net/detecting-mobile-devices-with-javascript/

    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    var element = document.getElementById("mobile-check");

    var siteWidth = 1280;
    var scale = screen.width /siteWidth;
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

  //   if (isMobile.any()) {
  //       element.style.opacity = "1";
  //       // console.log("mobile");
  //   } else {
  //       element.remove();
  //       // console.log("not mobile");
  //   };

  // } 
}