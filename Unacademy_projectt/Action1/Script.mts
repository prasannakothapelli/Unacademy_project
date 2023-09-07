'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebButton("Log in").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebEdit("Enter your mobile number").Set "8179932491" @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebButton("Request OTP").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'wait(15)
'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebNumber("WebNumber").Set "2" @@ script infofile_;_ZIP::ssf4.xml_;_
'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebNumber("WebNumber_2").Set "6" @@ script infofile_;_ZIP::ssf5.xml_;_
'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebNumber("WebNumber_3").Set "1" @@ script infofile_;_ZIP::ssf6.xml_;_
'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebNumber("WebNumber_4").Set "7" @@ script infofile_;_ZIP::ssf7.xml_;_
'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebNumber("WebNumber_5").Set "1" @@ script infofile_;_ZIP::ssf8.xml_;_
'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebNumber("WebNumber_6").Set "8"
'----------


'Start transaction'
Services.StartTransaction "login"

'CheckPoints' @@ hightlight id_;_331776_;_script infofile_;_ZIP::ssf21.xml_;_
Window("Google Chrome_3").WinObject("Chrome Legacy Window").Check CheckPoint("Login") @@ hightlight id_;_331776_;_script infofile_;_ZIP::ssf22.xml_;_
'Browser("Unacademy - India's largest").Page("Unacademy - India's largest").WebButton("Log in").Click @@ script infofile_;_ZIP::ssf23.xml_;_
Window("Google Chrome_3").WinObject("Chrome Legacy Window").Check CheckPoint("Enter your mobile number") @@ hightlight id_;_331776_;_script infofile_;_ZIP::ssf24.xml_;_
Window("Google Chrome_3").WinObject("Chrome Legacy Window").Check CheckPoint("Request OTP") @@ hightlight id_;_331776_;_script infofile_;_ZIP::ssf25.xml_;_
 @@ script infofile_;_ZIP::ssf11.xml_;_

fnOpenWebUnacademy()
fnLogin()
fnMobileNumber()
fnRequestOtpbutton()
fnotp()

Services.EndTransaction "login"
