var books = [];
class Book {
  constructor(
    year, type, title, isbn, link, textalign, textalignPage, textalignText, textalignLeft, textalignLeftPage, textalignLeftText, textalignRight, textalignRightPage, textalignRightText, textalignJustify, textalignJustifyPage, textalignJustifyText, textalignCenter, textalignCenterPage, textalignCenterText, column, columnPage, columnText, fontSize, fontSizePage, fontSizeText, italic, italicPage, italicText, scale, scalePage, scaleText, letterSpacing, letterSpacingPage, letterSpacingText, wordSpacing, wordSpacingPage, wordSpacingText, leading, leadingPage, leadingText, lineSpacing, lineSpacingPage, lineSpacingText, hyphenation, hyphenationPage, hyphenationText, bulletedlist, bulletedlistPage, bulletedlistText, numberedlist, numberedlistPage, numberedlistText) {
    this.year = year;
    this.type = type;
    this.title = title;
    this.isbn = isbn;
    this.link = link;
    this.textalign = textalign;
    this.textalignPage = textalignPage;
    this.textalignText = textalignText;
    this.textalignLeft = textalignLeft;
    this.textalignLeftPage = textalignLeftPage;
    this.textalignLeftText = textalignLeftText;
    this.textalignRight = textalignRight;
    this.textalignRightPage = textalignRightPage;
    this.textalignRightText = textalignRightText;
    this.textalignJustify = textalignJustify;
    this.textalignJustifyPage = textalignJustifyPage;
    this.textalignJustifyText = textalignJustifyText;
    this.textalignCenter = textalignCenter;
    this.textalignCenterPage = textalignCenterPage;
    this.textalignCenterText = textalignCenterText;
    this.column = column;
    this.columnPage = columnPage;
    this.columnText = columnText;
    this.fontSize = fontSize;
    this.fontSizePage = fontSizePage;
    this.fontSizeText = fontSizeText;
    this.italic = italic;
    this.italicPage = italicPage;
    this.italicText = italicText;
    this.scale = scale;
    this.scalePage = scalePage;
    this.scaleText = scaleText;
    this.letterSpacing = letterSpacing;
    this.letterSpacingPage = letterSpacingPage;
    this.letterSpacingText = letterSpacingText;
    this.wordSpacing = wordSpacing;
    this.wordSpacingPage = wordSpacingPage;
    this.wordSpacingText = wordSpacingText;
    this.leading = leading;
    this.leadingPage = leadingPage;
    this.leadingText = leadingText;
    this.lineSpacing = lineSpacing;
    this.lineSpacingPage = lineSpacingPage;
    this.lineSpacingText = lineSpacingText;
    this.hyphenation = hyphenation;
    this.hyphenationPage = hyphenationPage;
    this.hyphenationText = hyphenationText;
    this.bulletedlist = bulletedlist;
    this.bulletedlistPage = bulletedlistPage;
    this.bulletedlistText = bulletedlistText;
    this.numberedlist = numberedlist;
    this.numberedlistPage = numberedlistPage;
    this.numberedlistText = numberedlistText;
  }
}

// books[0] = new Book("1","2","3")



var spreadsheets = "https://spreadsheets.google.com/feeds/cells/1cKheOq0aShk6DdjSKgwMqm_6rcJZRE4nzEwGV-HvmdA/1/public/basic?alt=json-in-script&callback=?";
$.getJSON(spreadsheets, function(data) {
  Values = data.feed.entry;
  // console.log(Values[0].content.$t)
  for (var i = 106; i < Values.length; i += 53) {
    console.log(Values[i].content.$t)
    books[getIndex(i)] = new Book(
      Values[i].content.$t, Values[i + 1].content.$t, Values[i + 2].content.$t, Values[i + 3].content.$t, Values[i + 4].content.$t, Values[i + 5].content.$t, Values[i + 6].content.$t, Values[i + 7].content.$t, Values[i + 8].content.$t, Values[i + 9].content.$t, Values[i + 10].content.$t, Values[i + 11].content.$t, Values[i + 12].content.$t, Values[i + 13].content.$t, Values[i + 14].content.$t, Values[i + 15].content.$t, Values[i + 16].content.$t, Values[i + 17].content.$t, Values[i + 18].content.$t, Values[i + 19].content.$t, Values[i + 20].content.$t, Values[i + 21].content.$t, Values[i + 22].content.$t, Values[i + 23].content.$t, Values[i + 24].content.$t, Values[i + 25].content.$t, Values[i + 26].content.$t, Values[i + 27].content.$t, Values[i + 28].content.$t, Values[i + 29].content.$t, Values[i + 30].content.$t, Values[i + 31].content.$t, Values[i + 32].content.$t, Values[i + 33].content.$t, Values[i + 34].content.$t, Values[i + 35].content.$t, Values[i + 36].content.$t, Values[i + 37].content.$t, Values[i + 38].content.$t, Values[i + 39].content.$t, Values[i + 40].content.$t, Values[i + 41].content.$t, Values[i + 42].content.$t, Values[i + 43].content.$t, Values[i + 44].content.$t, Values[i + 45].content.$t, Values[i + 46].content.$t, Values[i + 47].content.$t, Values[i + 48].content.$t, Values[i + 49].content.$t, Values[i + 50].content.$t, Values[i + 51].content.$t, Values[i + 52].content.$t
    );

  }
render()


})

function render() {
  for (var i = 0; i < books.length; i++) {
    html = ""
    html += "<div id='book-"+i+"'class='book'><div class='gnb-1 width-4'>&nbsp;</div>"
    html += "<div id='book-"+i+"-year' class='gnb-1 width-1 book-year'><span>"+replaceHyphen(books[i].year)+"</sapn></div>"
    html += "<div id='book-"+i+"-type' class='gnb-1 width-1 book-type'><span>"+replaceHyphen(books[i].type)+"</sapn></div>"
    html += "<div id='book-"+i+"-title' class='gnb-1 width-3 book-title'><span>"+replaceHyphen(books[i].title)+"</sapn></div>"
    // html += "<div id='book-"+i+"-isbn' class='gnb-1 width-1 book-isbn'><span>"+replaceHyphen(books[i].isbn)+"</sapn></div>"
    // html += "<div id='book-"+i+"-link' class='gnb-1 width-1 book-link'><span>"+replaceHyphen(books[i].link)+"</sapn></div>"
    html += "<div id='book-"+i+"-textalign' class='gnb-1 width-2 book-textalign'><span>"+replaceHyphen(books[i].textalign)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignPage' class='gnb-1 width-1 book-textalignPage'><span>"+replaceHyphen(books[i].textalignPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignText' class='gnb-1 width-1 book-textalignText'><span>"+replaceHyphen(books[i].textalignText)+"</sapn></div>"
    html += "<div id='book-"+i+"-textalignLeft' class='gnb-1 width-2 book-textalignLeft'><span>"+replaceHyphen(books[i].textalignLeft)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignLeftPage' class='gnb-1 width-1 book-textalignLeftPage'><span>"+replaceHyphen(books[i].textalignLeftPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignLeftText' class='gnb-1 width-1 book-textalignLeftText'><span>"+replaceHyphen(books[i].textalignLeftText)+"</sapn></div>"
    html += "<div id='book-"+i+"-textalignRight' class='gnb-1 width-2 book-textalignRight'><span>"+replaceHyphen(books[i].textalignRight)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignRightPage' class='gnb-1 width-1 book-textalignRightPage'><span>"+replaceHyphen(books[i].textalignRightPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignRightText' class='gnb-1 width-1 book-textalignRightText'><span>"+replaceHyphen(books[i].textalignRightText)+"</sapn></div>"
    html += "<div id='book-"+i+"-textalignJustify' class='gnb-1 width-2 book-textalignJustify'><span>"+replaceHyphen(books[i].textalignJustify)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignJustifyPage' class='gnb-1 width-1 book-textalignJustifyPage'><span>"+replaceHyphen(books[i].textalignJustifyPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignJustifyText' class='gnb-1 width-1 book-textalignJustifyText'><span>"+replaceHyphen(books[i].textalignJustifyText)+"</sapn></div>"
    html += "<div id='book-"+i+"-textalignCenter' class='gnb-1 width-2 book-textalignCenter'><span>"+replaceHyphen(books[i].textalignCenter)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignCenterPage' class='gnb-1 width-1 book-textalignCenterPage'><span>"+replaceHyphen(books[i].textalignCenterPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-textalignCenterText' class='gnb-1 width-1 book-textalignCenterText'><span>"+replaceHyphen(books[i].textalignCenterText)+"</sapn></div>"
    html += "<div id='book-"+i+"-column' class='gnb-1 width-2 book-column'><span>"+replaceHyphen(books[i].column)+"</sapn></div>"
    // html += "<div id='book-"+i+"-columnPage' class='gnb-1 width-1 book-columnPage'><span>"+replaceHyphen(books[i].columnPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-columnText' class='gnb-1 width-1 book-columnText'><span>"+replaceHyphen(books[i].columnText)+"</sapn></div>"
    html += "<div id='book-"+i+"-fontSize' class='gnb-1 width-2 book-fontSize'><span>"+replaceHyphen(books[i].fontSize)+"</sapn></div>"
    // html += "<div id='book-"+i+"-fontSizePage' class='gnb-1 width-1 book-fontSizePage'><span>"+replaceHyphen(books[i].fontSizePage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-fontSizeText' class='gnb-1 width-1 book-fontSizeText'><span>"+replaceHyphen(books[i].fontSizeText)+"</sapn></div>"
    html += "<div id='book-"+i+"-italic' class='gnb-1 width-2 book-italic'><span>"+replaceHyphen(books[i].italic)+"</sapn></div>"
    // html += "<div id='book-"+i+"-italicPage' class='gnb-1 width-1 book-italicPage'><span>"+replaceHyphen(books[i].italicPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-italicText' class='gnb-1 width-1 book-italicText'><span>"+replaceHyphen(books[i].italicText)+"</sapn></div>"
    html += "<div id='book-"+i+"-scale' class='gnb-1 width-2 book-scale'><span>"+replaceHyphen(books[i].scale)+"</sapn></div>"
    // html += "<div id='book-"+i+"-scalePage' class='gnb-1 width-1 book-scalePage'><span>"+replaceHyphen(books[i].scalePage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-scaleText' class='gnb-1 width-1 book-scaleText'><span>"+replaceHyphen(books[i].scaleText)+"</sapn></div>"
    html += "<div id='book-"+i+"-letterSpacing' class='gnb-1 width-2 book-letterSpacing'><span>"+replaceHyphen(books[i].letterSpacing)+"</sapn></div>"
    // html += "<div id='book-"+i+"-letterSpacingPage' class='gnb-1 width-1 book-letterSpacingPage'><span>"+replaceHyphen(books[i].letterSpacingPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-letterSpacingText' class='gnb-1 width-1 book-letterSpacingText'><span>"+replaceHyphen(books[i].letterSpacingText)+"</sapn></div>"
    html += "<div id='book-"+i+"-wordSpacing' class='gnb-1 width-2 book-wordSpacing'><span>"+replaceHyphen(books[i].wordSpacing)+"</sapn></div>"
    // html += "<div id='book-"+i+"-wordSpacingPage' class='gnb-1 width-1 book-wordSpacingPage'><span>"+replaceHyphen(books[i].wordSpacingPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-wordSpacingText' class='gnb-1 width-1 book-wordSpacingText'><span>"+replaceHyphen(books[i].wordSpacingText)+"</sapn></div>"
    html += "<div id='book-"+i+"-leading' class='gnb-1 width-2 book-leading'><span>"+replaceHyphen(books[i].leading)+"</sapn></div>"
    // html += "<div id='book-"+i+"-leadingPage' class='gnb-1 width-1 book-leadingPage'><span>"+replaceHyphen(books[i].leadingPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-leadingText' class='gnb-1 width-1 book-leadingText'><span>"+replaceHyphen(books[i].leadingText)+"</sapn></div>"
    html += "<div id='book-"+i+"-lineSpacing' class='gnb-1 width-2 book-lineSpacing'><span>"+replaceHyphen(books[i].lineSpacing)+"</sapn></div>"
    // html += "<div id='book-"+i+"-lineSpacingPage' class='gnb-1 width-1 book-lineSpacingPage'><span>"+replaceHyphen(books[i].lineSpacingPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-lineSpacingText' class='gnb-1 width-1 book-lineSpacingText'><span>"+replaceHyphen(books[i].lineSpacingText)+"</sapn></div>"
    html += "<div id='book-"+i+"-hyphenation' class='gnb-1 width-2 book-hyphenation'><span>"+replaceHyphen(books[i].hyphenation)+"</sapn></div>"
    // html += "<div id='book-"+i+"-hyphenationPage' class='gnb-1 width-1 book-hyphenationPage'><span>"+replaceHyphen(books[i].hyphenationPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-hyphenationText' class='gnb-1 width-1 book-hyphenationText'><span>"+replaceHyphen(books[i].hyphenationText)+"</sapn></div>"
    html += "<div id='book-"+i+"-bulletedlist' class='gnb-1 width-2 book-bulletedlist'><span>"+replaceHyphen(books[i].bulletedlist)+"</sapn></div>"
    // html += "<div id='book-"+i+"-bulletedlistPage' class='gnb-1 width-1 book-bulletedlistPage'><span>"+replaceHyphen(books[i].bulletedlistPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-bulletedlistText' class='gnb-1 width-1 book-bulletedlistText'><span>"+replaceHyphen(books[i].bulletedlistText)+"</sapn></div>"
    html += "<div id='book-"+i+"-numberedlist' class='gnb-1 width-2 book-numberedlist'><span>"+replaceHyphen(books[i].numberedlist)+"</sapn></div>"
    // html += "<div id='book-"+i+"-numberedlistPage' class='gnb-1 width-1 book-numberedlistPage'><span>"+replaceHyphen(books[i].numberedlistPage)+"</sapn></div>"
    // html += "<div id='book-"+i+"-numberedlistText' class='gnb-1 width-1 book-numberedlistText'><span>"+replaceHyphen(books[i].numberedlistText)+"</sapn></div>"
    html += "</div>"
    $("#content").append(html);
  }
}

// function makeDiv(i) {
//   html = ""
//   html += "<div id='book"
//   html += "' class='book'><div class='gnb-1 width-4'>&nbsp;</div>"
//   html += "<div id='book"
//   html += getIndex(i)
//   html += getIndex(i)
//   html += "-year'></div>"
//   html += "</div>"
//   $("#content").append(html);
// };


function getIndex(i) {
  return Math.ceil((i - 106) / 53)
}

let replaceHyphen = (string) => {
  if ("-" === string) {
    return "&nbsp;"
  }else {
    return string
  }
};
