export const secondsToMin =(d)=> {
    d = Number(d);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var mDisplay = m > 0 ? m + (m == 1 ? " M: " : " M: ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " S " : " S ") : "";
    return mDisplay + sDisplay;
  }