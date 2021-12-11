

function Azam(){

    this.jannat = function(){
     

        if( age >= 1 && age <= 5 ) 
        return`Hi ${name} you are a baby.`

       else if( age >= 6 && age <= 17 ) 
       return`Hi ${name} you are a teenager.`

       else if( age >= 18 && age <= 40 ) 
       return`Hi ${name} you are a young man.`

       else if( age >= 41 && age <= 60 ) 
       return`Hi ${name} you are a an old man.`
    }

    this.area = function(type, lenght, width){

               if( type == 's'){
               return lenght * lenght;
               }
               else if( type == 'r' ){
               return lenght * width;
               }
               else if( type == 't'){
               return .5 * lenght * width;
               }
    
        }


    this.agecal = function(mname, year){

             return` Hi ${mname}, your are ${2021- year} your old`;
        }

    this.ginnah = function(currency, amount){
            if( currency == "doller"){
                return(` ${currency} ${amount} = ${amount *83} Taka`);
            }
            else if( currency == "pound"){
              return(` ${currency} ${amount} = ${amount *90} Taka`);
            }
            else if( currency == "rupe"){
              return(` ${currency} ${amount} = ${amount *80} Taka`);
            }
            else if( currency == "real"){
              return(` ${currency} ${amount} = ${amount *22.60} Taka`);
            }
    }


}

