///////////////////////////////////////////////////////
/// These functions where taken from SELFHTML reference
/// http://de.selfhtml.org/javascript/beispiele/fensterueberwachen.htm
/// It reloads page after resizing browser window
///////////////////////////////////////////////////////    

function Fensterweite () {
  if (window.innerWidth) {
    return window.innerWidth;
  } else if (document.body && document.body.offsetWidth) {
    return document.body.offsetWidth;
  } else {
    return 0;
  }
}

function Fensterhoehe () {
  if (window.innerHeight) {
    return window.innerHeight;
  } else if (document.body && document.body.offsetHeight) {
    return document.body.offsetHeight;
  } else {
    return 0;
  }
}

function neuAufbau () {
  if (Weite != Fensterweite() || Hoehe != Fensterhoehe())
    location.href = location.href;
}

/* Überwachung von Netscape initialisieren */
if (!window.Weite && window.innerWidth) {
  window.onresize = neuAufbau;
  Weite = Fensterweite();
  Hoehe = Fensterhoehe();
}
///////////////////////////////////////////////////////


