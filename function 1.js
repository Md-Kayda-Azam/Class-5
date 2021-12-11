
 let kk = new Kaydaazam();
 
 let roll   = Number(prompt('Please your roll?'));
 let reg    = Number(prompt('Please your Registration roll?'))
 let bd     = prompt('Please your Broad name?');
 let gp     = prompt('Please your Group name?');
 let name   = prompt('Please your name?');
 let fname  = prompt('Please your Father name?');
 let mname  = prompt('Please your Mother name?');
 let db     = (prompt('Your Date of Birth?'));
 let ins    = prompt('Please your Institute name?');
 
 
 
 let bn    = Number(prompt('Bangla'));
 let en    = Number(prompt('English'));
 let math  = Number(prompt('Math'));
 let s     = Number(prompt('Science'));
 let ss    = Number(prompt('Social Science'));
 let rel   = Number(prompt('Religion'));
 




 console.log(kk.address(ins, name, fname, mname, roll, reg, bd, gp, db, bn, en, math, s, ss, rel));