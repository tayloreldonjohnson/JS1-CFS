function calculateGrade(grade) {
    if(grade >= 90){
        return "A";
    } 
    else if (grade >= 80){
        return "B";
    }
    else if(grade >=70){
        return "C";
    }
    else if (grade >= 60){
        return "D";
    }
    else {
        return "F";
    }


   }
   
   // This part runs the calculateGrade function and shows the result
   var inputGrade = prompt("Enter a grade:");
   var parsedInt = parseInt(inputGrade);
   var finalGrade = calculateGrade(parsedInt);
   alert(finalGrade);