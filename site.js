  function getAbsoluteOffset(htmlelement) {
      var offset={x:htmlelement.offsetLeft,y:htmlelement.offsetTop};
      while(htmlelement=htmlelement.offsetParent)
      {
        offset.x+=htmlelement.offsetLeft;
        offset.y+=htmlelement.offsetTop;
      }
      return offset;
    }
    function image_onmouseout(ev) {
      //document.getElementById("mouseinfo").innerHTML="";
    }
    function image_onmousemove(ev) {
      var offset=getAbsoluteOffset(this);
      var teiler = parseFloat(7212/Weite);   // Bildbreite / Angezeigte Breite
      var teilerh = parseFloat(1380/Hoehe);              
      var dax =parseFloat((435000+((0.416150*(ev.clientX-offset.x))*teiler))/1000).toFixed(3);
      var day =addMinutes("00:01", ((ev.clientY-offset.y))*teilerh);
      document.getElementById("data").innerHTML="<center>X axis: "+dax+" MHz / Y axis: "+day+" h</center>"; //+Weite+" "+Hoehe;

                 }
    
function addMinutes(time, offset){
	// Uhrzeit wird in Stunden und Minuten geteilt
	var elements = time.split(":");
	var hours = elements[0];	
	var minutes = elements[1];
	// Aufrunden des Offsets fuer den Fall, dass eine Fliesskommazahl uebergeben wird
	var roundOffset = Math.ceil(offset);
	
	// Umrechnen der Uhrzeit in Minuten seit Tagesbeginn
	var timeSince24 = (hours * 60) + parseInt(minutes);
	// Addieren des uebergebenen Offsets
        timeSince24 = timeSince24 + parseInt(roundOffset);

	// Ueberlaufbehandlung
	if(timeSince24 < 0)
		timeSince24 = timeSince24 + 1440;
	else if(timeSince24 > 1440)
		timeSince24 = timeSince24 - 1440;
	
	// Errechnen von Stunden und Minuten aus dem Gesamtzeit seit Tagesbeginn
	var resMinutes = timeSince24 % 60;
	var resHours = (timeSince24 - resMinutes)/60;
	if (resHours <10) resHours ="0" +resHours;
	// Sicherstellen, dass der Wert fuer Minuten immer zweistellig ist
	if(resMinutes < 10)
		resMinutes = "0" + resMinutes;
		
	// Ausgabe des formatierten Ergebnisses
	return resHours + ":" + resMinutes;
}
    

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

