// confirm("Do you like it");

/** This function changes numeric result to letter degree 
 *  It starts with lowest grade and checks with single if's 
 *  and cheks all possible values
*/
function gradeLetter(value) {
        let letter = "F";

        // if a number and from 0-100 range
        if (value && value >=0 && value <= 100) {
                if(value >= 40){
                        letter = "C";
                }
                if (value >= 45) {
                        letter = "B-";
                }
                if (value >= 50) {
                        letter = "B";
                }
                if (value >= 60) {
                        letter = "B+";
                }
                if (value >= 65) {
                        letter = "A-";
                }
                if (value >= 70) {
                        letter = "A";
                }
        }
        else {
                letter = value+" is a wrong value, grades are 0-100";
        }
        return letter;

}

/* This version checks if a result is in between 2 values
*  using a series of if ... else if statements
*  and stops once it finds right scope 
*/
function gradeLetter2(value) {
        let letter = "F";

        // if a number and from 0-100 range
        if (value && value >=0 && value <= 100) {
                if (value >= 0 && value < 40){
                        letter = "F";
                }
                else if(value >= 40 && value < 45){
                        letter = "C";
                }
                else if (value >= 45 && value < 50) {
                        letter = "B-";
                }
                else if (value >= 50 && value < 60) {
                        letter = "B";
                }
                else if (value >= 60 && value < 65) {
                        letter = "B+";
                }
                else if (value >= 65 && value < 70) {
                        letter = "A-";
                }
                else if (value >= 70 && value < 100) {
                        letter = "A";
                }
                else {
                        letter = "Wrong value";
                }
        }
        else {
                letter = value+" is a wrong value, grades are 0-100";
        }
        return letter;

}

/** function reads from input#numberOfSubs value as number of subjects student has
 *  uses that value in for loop to ask user for result of those subjects 
 *  uses gradeLetter() function to change value to letter
 *  shows results in #result element on page  
  */
function getNumberOfSubs() {
        let numberOfSubs = parseFloat(document.getElementById("numberOfSubs").value);
        let results = "Your results are: ";
        let warning = "";
        if (numberOfSubs) {
                let sum = 0;
                for (i=1;i<=numberOfSubs;i++){
                        let msg = "Subject "+i;
                        let res = parseFloat(prompt("Result for "+msg));
                        results += "<br />"+msg+" : "+gradeLetter(res)+" ("+res+")";
                        if (res){
                                sum += res;
                        }
                        else {
                                warning = "not a number";
                        }
                }
                let avg = Math.round(100*sum/numberOfSubs)/100;
                results += "<br /> The average score is "+gradeLetter(avg)+" : ("+avg+")"+warning;
        }
        else {
                results = "Not a number";

        }

        document.getElementById("result").innerHTML = results;
}

/** function reads from input#numberOfSubs value as number of subjects student has
 *  uses that value in for loop to ask user for names of subjects and results of those subjects 
 *  uses gradeLetter2() function to change value to letter
 *  shows results in #result element on page  
  */
function getNumberOfSubs2() {
        let numberOfSubs = parseInt( document.getElementById("numberOfSubs").value);
        let results = "Your results are: ";

        let warning = "";
        if (numberOfSubs) {
                let sum = 0;
                for (i=1;i<=numberOfSubs;i++){
                        let msg = "Subject "+i;
                        let sub = prompt(msg);

                        msg = sub+" result : ";
                        let res = parseFloat(prompt(msg));
                        results += "<br />"+msg+" "+gradeLetter2(res)+" ("+res+")";
                        if (res){
                                sum += res;
                        }
                        else {
                                warning = "not a number";
                        }
                }
                let avg = Math.round(100*sum/numberOfSubs)/100;
                results += "<br /> The average score is "+gradeLetter2(avg)+" : ("+avg+")"+warning;
        }
        else {
                results = "Not a number";

        }

        document.getElementById("result").innerHTML = results;
}