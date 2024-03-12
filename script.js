//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function withoutarticles(input){
   let words = input.split(" ");
   let articleLessWords = words.filter((item)=>{
    let smallCaseWord = item.toLowerCase();
    if(smallCaseWord === "the" || smallCaseWord === "an" || smallCaseWord === "a"){
        return false;
    }
    return true ;

   })
   return articleLessWords.join(" ");
}



let hashMap={};

let ans = [];

for(let i=0 ; i<touristSpots.length ; i++)
{
   let articlelessstring = withoutarticles(touristSpots[i])
//    console.log(articlelessstring);
   hashMap[articlelessstring]=touristSpots[i];
   ans.push(articlelessstring);
}
    


    ans.sort();
    
    // console.log(ans);
    let finalresult= [];

for(let i=0 ; i<ans.length ; i++){
    finalresult.push(hashMap[ans[i]]);
}
// console.log(finalresult);






let ultag = document.getElementById("bands");
console.log(ultag);
for(let i=0 ; i<finalresult.length ; i++)
{
    let litag = document.createElement("li");
	let a = document.createElement("a");
    a.innerText = finalresult[i];
	litag.append(a)
    ultag.append(litag)
}







// console.log(articleLessarray);
// console.log("vali")