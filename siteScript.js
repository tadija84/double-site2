var counter3 = 0;
var counter4 = 0;
var countDatas = [
  { firstLine: "Više od ", numData: 300, lastLine: "završenih projekata" },
  { firstLine: "Preko", numData: 150, lastLine: "zadovoljnih klijenata" },
  { firstLine: "Urađeno više od", numData: 100, lastLine: "kampanja" },
  { firstLine: "Preko", numData: 15, lastLine: "godina postojanja" }
];

var myCountUp = setInterval(setCountUp, 10);
function setCountUp() {
  if (counter3 > countDatas.length - 1) {
    counter3 = 0;
  }
  if (counter4 == 0) {
    startFadeIn();
  }
  var firstLineCount = document.getElementById("countFirstLine");
  var countNumbs = document.getElementById("numCount");
  var lastLineCount = document.getElementById("countLastLine");
  firstLineCount.innerHTML = countDatas[counter3].firstLine;
  lastLineCount.innerHTML = countDatas[counter3].lastLine;
  countNumbs.innerHTML = counter4;
  counter4++;
  if (counter4 > countDatas[counter3].numData - 1) {
    if (counter4 > countDatas[counter3].numData + 200) {
      startFadeOut();
    }
    if (counter4 > countDatas[counter3].numData + 299) {
      counter3++;
      counter4 = 0;
      firstLineCount.innerHTML = "";
      lastLineCount.innerHTML = "";
      countNumbs.innerHTML = "";
    } else {
      countNumbs.innerHTML = countDatas[counter3].numData;
    }
  }
}
function startFadeIn() {
  document.getElementById("numbsWrap").style.animationName = "fadeIn";
  document.getElementById("numbsWrap").style.animationDuration = "1s";
}
function startFadeOut() {
  document.getElementById("numbsWrap").style.animationName = "fadeOut";
  document.getElementById("numbsWrap").style.animationDuration = "2s";
}
var counter1 = 0;
var quotes = [
  {
    oneQuote:
      "Employees of the Agency Headline have excellent client approach, proactive thinking and find the best models of communication, respecting deadlines and never losing patience.",
    oneQuoteAutor: "LJUDMILA JEVTIĆ, OTP BANK SERBIA"
  },
  {
    oneQuote:
      "It is a pleasure to work with people who are dedicated to their work and who, due to personal traits, make your work responsibilities a pleasure.",
    oneQuoteAutor: "ANĐELINA KUZMANOVIĆ, KNAUF INSULATION BALKANS"
  },
  {
    oneQuote:
      "After working with number of agencies, D-Kit bought us with their directness, creativity, and great understanding for all our demands. They are always there to help us in the right way and turn our wishes into reality.",
    oneQuoteAutor: "MONIKA MILINKOVIĆ, FARMALOGIST MARKETING"
  },
  {
    oneQuote:
      "It is a rarity in this days and also a great pleasure when you have the opportunity to work with professional, smart, hard-working people and those who know their job well.",
    oneQuoteAutor: "AIDA ĐEDOVIĆ, EDITOR, PRVA TELEVISION"
  },
  {
    oneQuote:
      "What Tesla is in science. What Messi is in football. What Madonna is in music. What Đokovic is in tennis. That is agency Headline in communication business.",
    oneQuoteAutor: "SLOBODAN ŠARENAC, RADIO TELEVISION OF SERBIA"
  },
  {
    oneQuote:
      "Committed, resourceful, helpful... and very important for us in journalism - accurate and precise in arrangements.",
    oneQuoteAutor: "JULIJANA SIMIĆ, POLITIKA DAILY"
  }
];
var myQuote = setInterval(setQuote, 5000);

function setQuote() {
  var oneQuoteText = document.getElementById("quoteText");
  var quoteAutor = document.getElementById("quoteAutor");
  if (counter1 > quotes.length - 1) {
    counter1 = 0;
  }
  oneQuoteText.innerHTML = quotes[counter1].oneQuote;
  quoteAutor.innerHTML = quotes[counter1].oneQuoteAutor;
  counter1++;
}

var slidePictures = [
  {
    picTitle: "Naziv usluge",
    picSourse: "./materijal/slikeProjekata1.png",
    id: 1
  },
  {
    picTitle: "Naziv usluge",
    picSourse: "./materijal/slikeProjekata2.png",
    id: 2
  },
  {
    picTitle: "Ili klijenta",
    picSourse: "./materijal/slikeProjekata3.png",
    id: 3
  },
  {
    picTitle: "Ili projekta",
    picSourse: "./materijal/slikeProjekata4.png",
    id: 4
  },
  {
    picTitle: "Ili kampanje",
    picSourse: "./materijal/slikeProjekata5.png",
    id: 5
  },
  {
    picTitle: "Vrsta proizvoda",
    picSourse: "./materijal/slikeProjekata6.png",
    id: 6
  },
  {
    picTitle: "Grad ili mesto",
    picSourse: "./materijal/slikeProjekata7.png",
    id: 7
  }
];
document.getElementById("leftArrow").addEventListener("click", goLeft);
document.getElementById("rightArrow").addEventListener("click", goRight);
var counter2 = 0;
function goRight() {
  if (counter2 > slidePictures.length - 1) {
    counter2 = 0;
  }
  var firstPic = document.getElementById("firstPicDiv");
  var secondPic = document.getElementById("secondPicDiv");
  var thirdPic = document.getElementById("thirdPicDiv");
  var fourthPic = document.getElementById("fourthPicDiv");
  var lastPic = document.getElementById("lastPicDiv");
  var picT1 = document.getElementById("firstPicTitle");
  var picT2 = document.getElementById("secondPicTitle");
  var picT3 = document.getElementById("thirdPicTitle");
  var picT4 = document.getElementById("fourthPicTitle");

  firstPic.style.backgroundImage =
    "url(" + slidePictures[counter2].picSourse + ")";
  firstPic.setAttribute("class", slidePictures[counter2].id);
  secondPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 1)].picSourse + ")";
  secondPic.setAttribute(
    "class",
    slidePictures[findCountRight(counter2, 1)].id
  );
  thirdPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 2)].picSourse + ")";
  secondPic.setAttribute(
    "class",
    slidePictures[findCountRight(counter2, 2)].id
  );
  fourthPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 3)].picSourse + ")";
  fourthPic.setAttribute(
    "class",
    slidePictures[findCountRight(counter2, 3)].id
  );
  lastPic.style.backgroundImage =
    "linear-gradient( to right, transparent, white), url(" +
    slidePictures[findCountRight(counter2, 4)].picSourse +
    ")";
  lastPic.setAttribute("class", slidePictures[findCountRight(counter2, 4)].id);
  picT1.innerHTML = slidePictures[counter2].picTitle;
  picT2.innerHTML = slidePictures[findCountRight(counter2, 1)].picTitle;
  picT3.innerHTML = slidePictures[findCountRight(counter2, 2)].picTitle;
  picT4.innerHTML = slidePictures[findCountRight(counter2, 3)].picTitle;
  counter2++;
}
goRight();
function findCountRight(xn, yn) {
  var z = xn + yn;
  if (z > slidePictures.length - 1) {
    z = z - 7;
  }
  return z;
}
function goLeft() {
  if (counter2 < 0) {
    counter2 = slidePictures.length - 1;
  }
  var firstPic = document.getElementById("firstPicDiv");
  var secondPic = document.getElementById("secondPicDiv");
  var thirdPic = document.getElementById("thirdPicDiv");
  var fourthPic = document.getElementById("fourthPicDiv");
  var lastPic = document.getElementById("lastPicDiv");
  firstPic.style.backgroundImage =
    "url(" + slidePictures[counter2].picSourse + ")";
  secondPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 1)].picSourse + ")";
  thirdPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 2)].picSourse + ")";
  fourthPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 3)].picSourse + ")";
  lastPic.style.backgroundImage =
    "linear-gradient( to right, transparent, white), url(" +
    slidePictures[findCountRight(counter2, 4)].picSourse +
    ")";
  counter2--;
}
var myPics = setInterval(goRight, 5000);

document.getElementById("firstPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("secondPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("thirdPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("fourthPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("lastPicDiv").addEventListener("click", function() {
  bigPictureShow(this.style.backgroundImage);
});
document.getElementById("lastPicDiv").addEventListener("click", goRight);

function bigPictureShow(picUrl) {
  var bigPicture = document.getElementById("bigPic");
  bigPicture.style.display = "block";
  var picWrap = document.getElementById("bigPicWrap");
  picWrap.style.display = "block";
  picWrap.style.backgroundImage = picUrl;
  console.log(picUrl);
}

document.getElementById("close").addEventListener("click", closeBigPic);
function closeBigPic() {
  var bigPicture = document.getElementById("bigPic");
  bigPicture.style.display = "none";
}

var leftAr = document.getElementById("slideArrowLeft");
var rightAr = document.getElementById("slideArrowRight");

leftAr.addEventListener("click", function() {
  var picWrap = document.getElementById("bigPicWrap");
  var tempUrl = picWrap.style.backgroundImage;
  findPrev(tempUrl);
});
rightAr.addEventListener("click", function() {
  var picWrap = document.getElementById("bigPicWrap");
  var tempUrl = picWrap.style.backgroundImage;
  findNext(tempUrl);
});

function findNext(tempUrl) {
  var allPics = slidePictures;
  for (var i = 0; i < allPics.length; i++) {
    var xUrl = 'url("' + allPics[i].picSourse + '")';
    var xyUrl =
      'linear-gradient(to right, transparent, white), url("' +
      allPics[i].picSourse +
      '")';
    if (xUrl == tempUrl || xyUrl == tempUrl) {
      var ij = i + 1;
      if (ij > allPics.length - 1) {
        ij = 0;
      }
      callNext(ij);
    }
  }
}
function findPrev(tempUrl) {
  var allPics = slidePictures;
  for (var i = 0; i < allPics.length; i++) {
    var xUrl = 'url("' + allPics[i].picSourse + '")';
    var xyUrl =
      'linear-gradient(to right, transparent, white), url("' +
      allPics[i].picSourse +
      '")';
    if (xUrl == tempUrl || xyUrl == tempUrl) {
      var ij = i - 1;
      if (ij < 0) {
        ij = allPics.length - 1;
      }
      callNext(ij);
    }
  }
}
function callNext(ij) {
  var allPics = slidePictures;
  var xUrl = 'url("' + allPics[ij].picSourse + '")';
  bigPictureShow(xUrl);
}




document.getElementById("burgerMenu").addEventListener("click", showMenu);
function showMenu() {
  var mainH = document.getElementById("mainHeader");
  var tabs = document.getElementById("tabs");
  if (mainH.style.display == "none") {
    mainH.style.display = "block";
    tabs.style.display = "grid";
    document.getElementById("linkNaslovna").addEventListener("click", hideTabs);
    document.getElementById("linkONama").addEventListener("click", hideTabs);
    document.getElementById("linkUsluge").addEventListener("click", hideTabs);
    document.getElementById("linkKlijenti").addEventListener("click", hideTabs);
    document.getElementById("linkKontakt").addEventListener("click", hideTabs);
  } else {
    mainH.style.display = "none";
    tabs.style.display = "none";
  }
}
function hideTabs() {
  showMenu();
}
