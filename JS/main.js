//prevent default page reload on click
/* document.querySelector('button').addEventListener('click', function handleClick(event) {
    event.preventDefault();
});
 */

//===========================================================================================================


const itemList = document.querySelectorAll('.dropdown')

function clearStick() {
    const stickItems = document.querySelectorAll('.dropdown-content')
    stickItems.forEach(el => {
        el.classList.remove('stick')
    })
}
//                             -----------------------------------------------
//convert aDate (ID) to xDate (CLASS), call clearStick, 
//then toggle its stick (display: block)

itemList.forEach((el, index) => el.addEventListener('click', () => {
    var aDate = itemList[index].id
    var xDate = '.' + aDate.replace(aDate[0], 'x')
    clearStick()
    document.querySelector(xDate).classList.toggle('stick')

}))




















// notes

//do function on 'enter' key hit

/* When the keypress event occurs, the event object will contain the data of which
key is pressed. The code of the pressed key will be present in keyCode or the which
property of the event object. */
/* document.querySelector('#addNumsHere').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    //So, we check if the pressed keycode is equal to the Enter key code (13)
    if (keyCode === 13) {
        // call click function on Enter
        return addNums();
    }
}); */


