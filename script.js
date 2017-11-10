function calculateGrade(grade) {
    if(grade = "apple" || "banana"){
        return "A";
    } else{
        return "B";
    }
    // else if(grade >=70){
    //     alert("C");
    // }
    // else if (grade >= 60){
    //     alert("D");
    // }
    // else {
    //     alert("F");
    // }


   }
   
   // This part runs the calculateGrade function and shows the result
   var inputGrade = prompt("Enter a grade:");
   var parsedInt = parseInt(inputGrade);
   var finalGrade = calculateGrade(parsedInt);
   alert(finalGrade);