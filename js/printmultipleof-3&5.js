var num= prompt("Enter the range: ")
let i,sum=0;
for(i=1;i<=num;i++){
    if((i%3===0) || (i%5===0)) {
        sum=i;
        console.log(sum);
    }
}