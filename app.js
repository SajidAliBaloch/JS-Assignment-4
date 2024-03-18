// // ==================== Assignment # 4 ===================

// // 1. Declare an empty array using JS literal notation to store student names in future.

var studentNames = []

// // 2. Declare an empty array using JS object notation to store student names in future.

var studentData = {
    studentNames: []
  };

// //   3. Declare and initialize a strings array.

var teacherNames = ["Rizwan Jamal", "Ghous Ahmed", "Saad Ali"];

// 4. Declare and initialize a numbers array.

var playersNumber = [ 7, 4, 10, 11, 1,];

// 5. Declare and initialize a boolean array.

var booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.

var mixedArray = ['Sajid', 7 , true];

// // 7. Declare and Initialize an array and store available education qualifications in Pakistan show the listed qualifications in your browser.

var edDegrees = ["Qualifications:" + ` 
<ol>
<li>SSC</li>
<li>HSC</li>
<li>BCS</li>
<li>BS</li>
<li>BCOM</li>
<li>MS</li>
<li>M. Phil</li>
<li>PhD</li>
</ol>
`]

document.write(edDegrees)

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student and display.

var studentNames = ["Michael", "John", "Tony"];

var studentScores = [320, 230, 480];

var total = 500

var michealPerc = (studentScores[0] / total * 100 + "%")
var johPerc = (studentScores[1] / total * 100 + "%")
var tonyPerc = (studentScores[2] / total * 100 + "%")

document.write(`<ul>
<li>Score of ${studentNames[0]} is ${studentScores[0]}. Percntage: ${michealPerc}</li>
<li>Score of ${studentNames[1]} is ${studentScores[1]}. Percntage: ${johPerc}</li>
<li>Score of ${studentNames[2]} is ${studentScores[2]}. Percntage: ${tonyPerc}</li>
</ul>`)


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort
// method.

var arrNumber =  [320,230,480,120]

arrNumber.sort()

document.write(arrNumber)

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities
// array.

var cityList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar",]

var selectedCities = [];

selectedCities = cityList.slice(2,4)

// document.write ("Selecte Cities:"+ selectedCities)

// 12. Write a program to create a single string from the below mentioned array:

var arr = ["This", " is", " my ", " cat"];

var arrJoined = arr.join(" ")

document.write(arrJoined)

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

var fifoArray = [];

fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");

var firstValue = fifoArray.shift();
var firstValue = fifoArray.shift();
var firstValue = fifoArray.shift();
var firstValue = fifoArray.shift();

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-
// First Out)

var devices = ["Keyboar", "Mouse", "Printer", "Monitor"]

devices.reverse()

document.write(devices)

// 15. Write a program to store phone manufacturers in an array. Display the following dropdown/select menu in your browser using document.write() method:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`<select>
<option value="Apple">Apple</option>
<option value="Samsung">Samsung</option>
<option value="Motorola">Motorola</option>
<option value="Nokia">Nokia</option>
<option value="Sony">Sony</option>
<option value="Haier">Haier</option>
</select>`)
