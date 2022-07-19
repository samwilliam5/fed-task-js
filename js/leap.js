var leapYear= prompt("Enter a Year to check its leap or not")
if ((leapYear %4  === 0) && (leapYear % 100 !==0) || (leapYear % 400 ===0) )
 {
    console.log("The entered year is leap");
}
else{
    console.log("The entered year is not leap");

}
