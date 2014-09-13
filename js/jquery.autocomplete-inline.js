(function ($, document, window) {
    $.fn.autocomplete = function(options ) {

        //Default Settings
        var settings = $.extend({
            startChar  : '@',
            complete   : null,
            words:     new Array('arnet.com.ar','ciudad.com.ar','fibertel.com.ar','gmail.com','hotmail.com','live.com','live.com.ar','speedy.com.ar','yahoo.com','yahoo.com.ar'),
        }, options);


        //****************//
        //HELPER FUNCTIONS//
        //****************//

        function createSelection(field, start, end) 
        {
            if( field.createTextRange ) {
                var selRange = field.createTextRange();
                selRange.collapse(true);
                selRange.moveStart('character', start);
                selRange.moveEnd('character', end);
                selRange.select();
            } else if( field.setSelectionRange ) {
                field.setSelectionRange(start, end);
            } else if( field.selectionStart ) {
                field.selectionStart = start;
                field.selectionEnd = end;
            }
            field.focus();
        }

        function startsWith(str1,str2)
        {
            return str1.slice(0,str2.length) == str2;
        }

        function endsWith(str1, str2)
        {
            return str1.slice(-str2.length) == str2;
        }

        //****//
        //MAIN//
        //****//
        this.each( function() {
            $(this).keypress(function(event){
                event = event || window.event;
                var charCode = event.which || event.keyCode;
                var charStr = String.fromCharCode(charCode);
                var value = this.value + charStr; 

                if(document.selection){//IE

                    var range = document.selection.createRange();
                    value = value.replace(range.text,'');

                }else if(this.selectionStart || this.selectionStart == '0'){//Chrome y Firefox

                    var newValue = this.value.substr(0,this.selectionStart) + this.value.substring(this.selectionEnd) +charStr;
                    value = newValue;
                }

                var a_pos = value.indexOf(settings.startChar); 

                var textChars =  new Array();
                var idx;
                if(settings.startChar == '')
                {
                    idx = 0;
                }
                else
                {
                    idx = 1;
                }
                textChars = textChars.concat(value.split(''));

                if(a_pos > -1 && textChars[a_pos+idx] != undefined){

                   var suggestion = "";
                   var domain = (value.substring(a_pos+idx));

                   var words = settings.words;

                   for (var i = 0; i < words.length; i++) {
                    if(startsWith(words[i],domain)){
                        suggestion = words[i];
                        break;
                    }
                };

                if(suggestion !=""){
                  var newPos = a_pos + idx;

                  var a_domain = value.substring(newPos);

                  suggestion = suggestion.replace(a_domain,'');

                  var index = value.length-1;
                  value = value+suggestion;
                  $(this).val(value);
                  createSelection($(this).get(0),index+1,$(this).val().length);
                  return false;
              }
          }
      })
});
}   
}(jQuery, document, window));