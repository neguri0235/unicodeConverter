// 유니코드 -> 한글     
// \\uc3d8\\ucfe8 \\uc124\\uc815\\ud574\\uc918\
function replaceAll(strTemp, strValue1, strValue2) {
   while (1) {
    if (strTemp.indexOf(strValue1) != -1)
                strTemp = strTemp.replace(strValue1, strValue2);
                else break;
            }
            return strTemp;
}
        
function unicodeToKor() {
            var str = document.getElementById("unicode").value;

            document.getElementById("result").innerHTML = replaceAll(
                unescape(replaceAll(str, "\\", "%")),
                "%",
                ""
            );
}

const sendMessageId = document.getElementById('unicode');

if (sendMessageId) {
    sendMessageId.oninput= function () {
        console.log('aa')
        var str = document.getElementById("unicode").value;
        document.getElementById("result").innerHTML = replaceAll(
            unescape(replaceAll(str, "\\", "%")),
            "%",
            ""
        );
    };
}
