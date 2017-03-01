var fs = require('fs');
var builder = require('xmlbuilder');

function readFileToArray(filename) {

}

function createBlankXLIFFFile(sourceLanguage,targetLanguage,reactIntlLines) {
  //Create root object
  var root = builder.create(xliff);
  //TODO: attributes

  var body = root.ele('body');

  for ( var lineIndex = 0 ; lineIndex < reactIntlLines.length ; lineIndex++ ) {
    var currentLine = reactIntlLines( lineIndex );

    //Process line
    var lineProperties = processLine(currentLine);
    var line = body.ele('trans-unit');
    line.att('id', lineProperties.id);

    line.ele('source');

    line.ele('target');

  }
}

function processLine(line) {

}
