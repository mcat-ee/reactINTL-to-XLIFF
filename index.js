var fs = require('fs');
var builder = require('xmlbuilder');

//Read file to JSON object - file is JSON encoded with id for each message as key
function readFileToJSONObject(filename) {
  obj = {};

  return obj;
}

function createTransUnitElement() {

}

/*
    Creates an element of the form:
        <elementName ...attributeObject>
            elementText
        </elementName>
*/
function createElement(elementName, elementText, attributeObject) {

}

function createCompositeXLIFFFile(sourceLanguage, sourceFile, targetLanguage, targetFile) {
  var sourceReactObj = readFileToJSONObject(sourceFile);
  var targetReactObj = readFileToJSONObject(targetFile);

  /*
      for key in sourceReactObj
        createTransUnitElement
        createNestedElement for sourceObj, populate
        createNestedElement for targetObj, if present in targetFile populate
  */
}

function createBlankXLIFFFile(sourceLanguage, sourceFile, targetLanguage) {

  var reactIntlLines = readFileToJSONObject(sourceFile);
  //Create root object
  var root = builder.create(xliff);
  //TODO: attributes

  var body = root.ele('body');

/*
    for non-prototype key in object:
      create trans-unit element
        create element for source
        set language of source
        set text of element to obj[key]

        create element for target
        set language of target
        set text to blank
*/


//TODO: Replace below 'for' block with implementation of above pseudocode
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
