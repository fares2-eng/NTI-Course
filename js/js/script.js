

//  function looping (startNum, endNum, breakNum, continueNum) {
//     if (startNum != undefined && endNum != undefined && breakNum != undefined && continueNum !=undefined) {


        for(var i = startNum; i<= endNum; i++){
            if (i == breakNum) {
               break    
            }
            if (i == continueNum) {
                continue
            }
            console.log(i)
        }
    
    else {
        alert("please enter the numbers")
}
 
 var nums=looping(2,10,6,4 )







//  array

 var courses=["Html" , "CSS" ,"js" ]
 var p = prompt("Enter the courses you need to add")


 if(  courses.includes(p) )
 {
    console.log( "course is found")
 }

 else{
    courses.push(p)
 }

 console.log(courses)

















