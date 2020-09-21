function search() {
  var img = document.getElementById("img").value;
  location =
    "https://www.google.co.in/search?q=" +
    img +
    "&sxsrf=ALeKk01RLhvuOTJX7XWp0Xf2pZ5tYzfIEA:1600510159262&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiw74H8_PTrAhUiyosBHUY2Dk8Q_AUoAXoECBwQAw&biw=1920&bih=920";
  return false;
}

function advanceSearch() {
  var id1 = document.getElementById("id1").value;
  var id2 = document.getElementById("id2").value;
  var id3 = document.getElementById("id3").value;
  var id4 = document.getElementById("id4").value;
  location =
    "https://google.com/search?q=" +
    id1 +
    " " +
    id2 +
    " " +
    id3 +
    " " +
    "-" +
    id4;
  return false;
}

//https://www.google.com/search?sxsrf=ALeKk005UIAar_YJ3paBEpPjHCUWjr7X7A%3A1600709382100&source=hp&ei=BuNoX8P7A9ffz7sPzO6d8Ao&iflsig=AINFCbYAAAAAX2jxFo-7U-Bj6vD9Zrokd3j78R4ePC24&q=apple&btnI=I%27m+Feeling+Lucky
//https://www.google.com/search?source=hp&ei=S5hoX8DzMMOW4-EPpquDkAo&iflsig=AINFCbYAAAAAX2imW5eoHD2F4euZoYhLSgkbIVv55rH3&q=hello&btnI=I%27m+Feeling+Lucky
//https://www.google.com/search?source=hp&q=hello&btnI=I'm+Feeling+Lucky
function lucky() {
  var val = document.getElementById("luck").value;
  location =
    "https://www.google.com/search?sxsrf=ALeKk02AwTBnjrXBifoZn5JyJTQ5nFNfJA%3A1600709632987&source=hp&ei=AORoX-G1OsSDmgeC4pWAAQ&iflsig=AINFCbYAAAAAX2jyEAXJRL2kXiiUUZQ26-61NXGJZLme&q=" +
    val +
    "&btnI=I%27m+Feeling+Lucky";

  // store = encodeURI(store);
  // location = store;
  console.log(location);
  return false;
}
