const a =300;
for( let i=1; i<= a; i++){
  let count=0;
  for(let j=2; j<=i/2; j++){
    if(i%j==0){
      count++;
      break;
    }
  }
  if(i>1 && count==0){
    console.log(i);
    let tag = document.createElement("div");
    let text = document.createTextNode(i);
    tag.appendChild(text);
    document.body.appendChild(tag);
    tag.className+='box';
  }
}

