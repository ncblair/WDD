CALHAT.COM/GET : 

A website made by Nathan Blair (ME) to sell CALHATs to UC Berkeley students. 

HOW IT WORKS:

Users fill out a form that I designed, specifying their name, mobile number, dorm, etc. Using Javascript/Jquery, their input is passed through lightweight tests using mostly regular expression statements (for example, mobile number must have 11 digits, may have an added 12th digit in front, and may have dashes and parenthesis in appropriate locations (1)). If all required input fields have "good" input, the user is allowed to submit the form, which is then passed to a PHP script that emails and texts the content to my partners and I. 


(1) Regex for mobile numbers
/^([0-9]*\-*\(*[0-9]{3}\)*\-*[0-9]{3}\-*[0-9]{4})$/
