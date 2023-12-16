/*
if the value of marks variable is greater than or equal to 90, the value of result variable should be "A grade"
marks  90>
       A grade

marks in between  80  &  89
       B grade

marks in between 70 & 79
       C grade

marks in between 60 & 69
       D grade

marks is lessthan 60
       F grade
       
marks is less than 35
       failed
*/


let marks = prompt('enter your total marks');
if (marks >= 90 && marks <= 100) {
  document.write("A Grade")
}
else if (marks >= 80 && marks <= 89) {
  document.write("B Grade")
}
else if (marks >= 70 && marks <= 79) {
  document.write("C Grade")
}
else if (marks > 60 && marks <= 69) {
  document.write("D Grade")
}
else if (marks <= 60 && marks >= 35) {
  document.write("F Grade")
}
else if (marks <= 34 && marks >= 0) {
  document.write("failed")
}
else {
  document.write("Enter valid Number")
}