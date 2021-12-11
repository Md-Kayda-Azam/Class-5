
function Kaydaazam(){

                 this.address = function( ins, name, fname, mname, roll, reg, bd, gp, db, bn, en, math, s, ss, rel){
        
       
                    return`
       
                    Institute     : ${ins}
   Name               : ${name}
   Father's  Name     : ${fname}
   Mother's  Name     : ${mname}  
   Roll No            : ${roll}                           
   Registration Roll  : ${reg}                         
   Board              : ${bd}                             
   Group              : ${gp} 
   Date of Birth      : ${db}                          
   Type               : REGULAR                       
   Result CGPA & Grade: ${ cgpa(gpa(bn), gpa(en), gpa(math), gpa(s), gpa(ss), gpa(rel))}
                
                      
   
   
   
   Subject        Marks    GPA      Grade
                                         
   Bangla         ${bn}        ${gpa(bn)}            ${grade(bn)}
   Engliah        ${en}        ${gpa(en)}            ${grade(en)}
   Math           ${math}      ${gpa(math)}          ${grade(math)}
   Science        ${s}         ${gpa(s)}             ${grade(s)}
   Social Science ${ss}        ${gpa(ss)}            ${grade(ss)}
   Religion       ${rel}       ${gpa(rel)}           ${grade(rel)}
   ------------------------------------------------------------------------------------------
   
   `
       
 
            }
    }
 
    this.gpa = function (marks){
       
        let gpa;
  
    if( marks >= 0 && marks <= 32 ){
       gpa = 0;
       }
       else if(marks >=32 && marks < 40 ){
       gpa = 1;
       }
       else if(marks >=40 && marks < 50 ){
       gpa = 2;
       }
       else if(marks >=50 && marks < 60 ){
       gpa = 3;
       }
       else if(marks >=60 && marks < 70 ){
       gpa = 3.5;
       }
       else if(marks >=70 && marks < 80 ){
       gpa = 4;
       }
       else if(marks >=80 && marks <= 100 ){
       gpa = 5;
       }
  
       return gpa;
  }



  

 
       
     
 
 
 
 
 
 this.grade = function (marks){
     
    let grade; 

if( marks >= 0 && marks <= 32 ){
   grade = 'F';
   }
   else if(marks >=32 && marks < 40 ){
    grade = 'D';
   }
   else if(marks >=40 && marks < 50 ){
   grade = 'C';
   }
   else if(marks >=50 && marks < 60 ){
   grade = 'B';
   }
   else if(marks >=60 && marks < 70 ){
   grade = 'A-';
   }
   else if(marks >=70 && marks < 80 ){
   grade = 'A';
   }
   else if(marks >=80 && marks <= 100 ){
   grade = 'A+';
   }

   return grade;
}
  
 








cgpa = (bn, en, math, s, ss, rel) =>{
    
    let total_cgpa = ( bn + en + math + s + ss + rel );
    
    let cgpa = total_cgpa/6;
  
     if(bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0){
         return "You are a Failed"
     }else{
         return` ${cgpa} & ${totalgrade(cgpa)}`
     }
  
  }
  
  
     
 this.totalgrade = function(cgpa){
    if( cgpa >= 0 && cgpa < 1){
        return 'F';
    }
    else if( cgpa >= 1 && cgpa < 2){
        return 'D';
    }
    else if( cgpa >= 2 && cgpa < 3){
        return 'C';
    }
    else if( cgpa >= 3 && cgpa < 3.5){
        return 'B';
    }
    else if( cgpa >= 3.5 && cgpa < 4){
        return 'A-';
    }
    else if( cgpa >= 4 && cgpa < 5){
        return 'A';
    }
    else if( cgpa == 5){
        return 'A+';
    }
  }
  
  
 