// This the javascript I used to close the menu on nav item click
// Had to use a for each loop to go through each navigation__item 
// in the navigation element otherwise it wouldnt select them


const navigation = document.querySelector('.navigation')
const navCheckbox = navigation.querySelector('.navigation__checkbox')
const navItems = navigation.querySelectorAll('.navigation__item')

const navClose = () => { //note using arrow function the listener needs to be at the bottom/below to work
    navCheckbox.checked = false;//selected the checkbox above then .checked selects the boolean of if its true or false and set it to false
}

navItems.forEach(item => item.addEventListener("click", navClose));


// Next need a function to close the popup when you click outside it
// But its not really a popup so have to change the actually search bar as when you click on 
// book now it takes you to a anchor tag which makes popup the target and therefor :target is active
// need to some how change the search bar from /#popup to anything else

let popup = document.querySelectorAll(".popup")[0]

const isHidden =  () => {

    popup.style.display('none');
    
   /* if (popup === true){
        console.log("hello");
        popup === false;
    }
    else if(popup === false ){
        console.log("npppppp");
        popup === true;
|*/
    
}


// const popupContent = popup.querySelector(".popup__content")

// const popupClose = () =>{
//    if (popupContent) {console.log('pop');
// }else {console.log("no")}
  
 
// }

// popup.addEventListener("click", popupClose);

// One way could be to change the class or toggle it using classList.toggle("")