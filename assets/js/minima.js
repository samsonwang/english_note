
var initNavbar = function () {
  // hide nav when scroll down, show nav when scroll up
  var updateNav = function () {
    var previousTop = 0;
    function updateNavImpl () {
      var currentTop = window.pageYOffset;
      // console.log("initNavbar, previousTop =", previousTop);
      // console.log("initNavbar, currentTop =", currentTop);
      if (currentTop + 30 < previousTop || currentTop < 60) { // scrolling top
        document.querySelector(".nav-custom").classList.remove("hidden");
      }
      else if (currentTop > previousTop) {
        document.querySelector(".nav-custom").classList.add("hidden");
      }
      previousTop = currentTop;
    }
    return updateNavImpl;
  } ();
  window.addEventListener("scroll", updateNav);
}

var initScrollTop = function () {
  document.querySelector("#scroll-top")
    .addEventListener("click", function() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 800) {
      document.querySelector("#scroll-top").style = "display:block;";
    }
    else {
      document.querySelector("#scroll-top").style = "display:none;";
    }
  });
};

var modAnchorTarget = function () {
  document.querySelectorAll('a').forEach(function(item) {
    // console.log("modAnchortarget,", item);
    var pattern = new RegExp("/" + window.location.host + "/");
    if (!pattern.test(item.href)) {
      // console.log("modAnchortarget, outer link", item);
      item.target = "_blank";
      item.rel = "noreferer";
    }
  });
};

var initLazyLoad = function () {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: "img[data-src]"
  });
};

// Handler when the DOM is fully loaded
var onReady = function() {
  initNavbar();
  modAnchorTarget();
  initScrollTop();
  initLazyLoad();
};

if (document.readyState === "complete"
    || (document.readyState !== "loading"
        && !document.documentElement.doScroll)) {
  onReady();
} else {
  document.addEventListener("DOMContentLoaded", onReady);
}

/*
window.addEventListener("load", function() {
  // avoid css transition before load
  document.querySelector("body").classList.remove("preload");
});
*/
