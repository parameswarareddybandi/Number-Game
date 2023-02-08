var num = Math.floor(Math.random() * 100) + 1;

var tries = 0;

function guess() {

    var guessed = document.form1.myGuess.value;

    if(guessed.length==0){

        document.form1.hint.value="Field should not be empty.";

        return;
        
    }

    document.form1.myGuess.value = "";
    
    tries++;


    if(tries == 9){
       
        window.alert('Last Chance, Be Careful.')
    
    }
    
    if(num > guessed){
        
        document.form1.hint.value="No, Guess Higher. Tries : "+tries;
    }
    
    if(num < guessed){
        
        document.form1.hint.value="No, Guess Lower. Tries : "+tries;
    }
    
    if(num == guessed){
        
        document.form1.hint.value="Hurray ! You Won The Game.";
        
        window.setTimeout("location.reload()", 5000);
    }
    
    if(tries == 10){
        
        document.form1.hint.value="Sorry ! You Lost The Game. Ans:["+num+"]";
        
        window.setTimeout("location.reload()", 5000);
    }

}

function Rating1() {

    document.getElementById('r1').src="goldstar1.png";

    document.form1.hint.value=" Sorry ! I will try to improve it ";

    setTimeout(function(){

        window.location.reload();
     
    }, 5000);

}

function Rating2() {

    document.getElementById('r1').src="goldstar1.png";

    document.getElementById('r2').src="goldstar1.png";

    document.form1.hint.value=" Thanks for your feedback. ";

    setTimeout(function(){
        
        window.location.reload();
     
    }, 5000);

}

function Rating3() {

    document.getElementById('r1').src="goldstar1.png";

    document.getElementById('r2').src="goldstar1.png";

    document.getElementById('r3').src="goldstar1.png";

    document.form1.hint.value=" Thank You ! ";

    setTimeout(function(){
        
        window.location.reload();
     
    }, 5000);

}

function Rating4() {

    document.getElementById('r1').src="goldstar1.png";

    document.getElementById('r2').src="goldstar1.png";

    document.getElementById('r3').src="goldstar1.png";

    document.getElementById('r4').src="goldstar1.png";

    document.form1.hint.value=" Thank You Very Much. ";
    
    setTimeout(function(){
        
        window.location.reload();
     
    }, 5000);

}

function Rating5() {

    document.getElementById('r1').src="goldstar1.png";

    document.getElementById('r2').src="goldstar1.png";

    document.getElementById('r3').src="goldstar1.png";

    document.getElementById('r4').src="goldstar1.png";

    document.getElementById('r5').src="goldstar1.png";

    document.form1.hint.value=" Iam Feeling Grateful. ";

    setTimeout(function(){
        
        window.location.reload();
     
    }, 5000);

}

