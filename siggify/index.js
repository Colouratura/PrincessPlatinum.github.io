/* Created by Wikia user Princess Platinum */
function siggify() {
        //Get the value of all input boxes and dropdowns
        var font = document.getElementById('font-selector').value || '',
                userName = document.getElementById('username').value || '',
                userText = document.getElementById('username-text').value || '',
                userColor = document.getElementById('username-color').value || '',
                talkText = document.getElementById('talkpage-text').value || '',
                talkColor = document.getElementById('talkpage-color').value || '',
                borderType = document.getElementById('border-type').value || '',
                borderWidth = document.getElementById('width-selector').value || '',
                backgroundColor = document.getElementById('background-color').value || '',
                borderColor = document.getElementById('border-color').value || '',
                topLeft = document.getElementById('top-left').value || '0',
                topRight = document.getElementById('top-right').value || '0',
                bottomRight = document.getElementById('bottom-right').value || '0',
                bottomLeft = document.getElementById('bottom-left').value || '0';

        //Put the signature together
        var borderRadius = '-moz-border-radius: ' + topLeft +'em ' + topRight + 'em ' + bottomRight + 'em ' + bottomLeft + 'em; -webkit-border-radius: ' + topLeft + 'em ' + topRight + 'em ' + bottomRight + 'em ' + bottomLeft + 'em; border-radius: ' + topLeft + 'em ' + topRight + 'em ' + bottomRight + 'em ' + bottomLeft + 'em;',
                sigNature = '<span style="padding: 0px 5px 0px 5px; border: ' + borderType + ' ' + borderWidth + 'px ' + borderColor + '; background: ' + backgroundColor + '; ' + borderRadius + '">[[User:' + userName + '|<span style="color: ' + userColor + '; font: ' + font + ';">' + userText + '</span>]]&nbsp;[[User talk:' + userName + '|<span style="color: ' + talkColor + '; font: ' + font +';">' + talkText + '</span>]]</span>';

        //Print code to output box
        document.getElementById( 'code-output' ).value = sigNature;
}
