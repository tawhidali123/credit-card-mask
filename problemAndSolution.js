maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"



// return masked string
function maskify(cc) {
  let string = cc;
  let breakDown = string.split('');
  let count = 0;
  breakDown.forEach(function(change){
    count++;
  })
  
  if(breakDown.length <= 4) {
    console.log(string)
  } else if (breakDown.length > 4) {
    let lastDigits = breakDown.slice(-4);
    let subtract = count - 4;
    console.log(subtract)
  }
}


maskify("4556364607935616")

//SampleTests
describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});




// amicks changes
const amicksMask = cc => {
  let maskedCC = [
    ...cc.slice(0, cc.length - 4).split("").map(e => e.replace(e, "#")),
    ...cc.slice(-4)
  ].join("");

  return cc.length >= 4 ? maskedCC : cc; 
}

amicksMask("4556364607935616");
