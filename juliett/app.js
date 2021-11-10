
//---VERSION ONLY WITH CONSOLE.LOG()
var userChoice = prompt('Ange sten, sax, påse');

//Random number between 1 and 3
let index = Math.floor((Math.random() * 3) + 1);
let array = ['sten', 'sax', 'påse'];

    if( 
        ( (userChoice == 'sten') && (array[index-1] == 'sten') ) || 
        ( (userChoice == 'sax') && (array[index-1] == 'sax') ) || 
        ( (userChoice == 'påse') && (array[index-1] == 'påse') ) ){
        console.log(array[index-1]);
        console.log("We all won!");
    }
    else if(
        ( (userChoice == 'sten') && (array[index-1] == 'sax') ) || 
        ( (userChoice == 'sax') && (array[index-1] == 'påse') ) || 
        ( (userChoice == 'påse') && (array[index-1] == 'sten')) ){
        console.log("you won!");
        console.log(array[index-1]);
    }
    else{
        console.log(array[index-1]);
        console.log("you lost!");
    }
//long version
    // else if( ((userChoice == 'sten') && (array[index-1] == 'sax')) ){
    //     console.log("You won!");
    // }
    // else if( (userChoice == 'sax') && (array[index-1] == 'sten') ){
    //     console.log("You lost!");
    // }
    // else if( (userChoice == 'sax') && (array[index-1] == 'påse') ){
    //     console.log("You won!");
    // }
    // else if( ( (userChoice == 'påse') && (array[index-1] == 'sten') ){
    //     console.log ('You won!');
    // }
    // else if( (userChoice == 'påse') && (array[index-1] == 'sax')){
    //     console.log("You lost!");
    // }


    //VERSION WITH DOM
    // let userOption = document.getElementById("input");
    // let btn = document.getElementById("btn");
 

    // btn.addEventListener('click', function(){
    //     //userOption = userOption.v
    //     console.log(userOption.value);
    //     alert('hej');
    // });

    // document.getElementById("myBtn").addEventListener("click", displayDate);