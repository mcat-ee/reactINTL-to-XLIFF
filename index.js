var fs = require('fs');
var builder = require('xmlbuilder');

/*
    Utility function for determining if something is null or undefined
*/
function isNullOrUndefined(object) {
  return object === null || object === undefined;
}

/*
  Read a file to JSON object
  React INTL file is JSON encoded with id for each message as key
*/
function readFileToJSONObject(filename) {
  obj = {};

  return obj;
}

/*
    Create a Trans-Unit XLIFF element.
    This element will contain the source and target elements for each message.
*/
function createTransUnitElement(parentElement) {
  if(isNullOrUndefined(parentElement)) {
    //TODO: Throw exception
  }
}

/*
    Creates an element of the form:
        <elementName ...attributeObject>
            elementText
        </elementName>
*/
function createElement(elementName, elementText, attributeObject, parentElement) {
  //Check if parentElement is defined, throw exception 
  if(isNullOrUndefined(parentElement)) {
    //TODO: Throw exception
  }

  var newElement = parentElement.ele('elementName');
  /*
  for key in attributeObject
    newElement.att(key, attributeObject[key])
  */

}

/*
    Take two React INTL files (in two distinct languages) and create an XLIFF file containing all messages and their target language translations.
    Options object attributes:
      - createPlaceholderElements: if a message is in the sourceFile and not in the targetObject, create a blank target element
*/
function createCompositeXLIFFFile(sourceLanguage, sourceFile, targetLanguage, targetFile, options) {


  var sourceReactObj = readFileToJSONObject(sourceFile);
  var targetReactObj = readFileToJSONObject(targetFile);

  /*
      for key in sourceReactObj
        createTransUnitElement
        createNestedElement for sourceObj, populate
        createNestedElement for targetObj, if present in targetFile populate
  */
}

/*
    Take a source React-INTL file and output an XLIFF file with empty elements for the target language
    
*/
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


