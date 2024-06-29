//6.using rest operator function concept pass n no of character arguments an get the count of all vowels numbers of it.(forEach)

const characters = (...char)=>{
    let count = 0;
     char.forEach((ch)=>{

        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
        {
             count=count+1;
        }
        else{
             count;
        }
    })
    return count;
}


console.log(characters('a','b','e','i','r','s','u'));  