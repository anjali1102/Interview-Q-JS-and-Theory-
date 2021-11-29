var readlineSync=require('readlineSync')

const studentData=[]
for(let i=1;i<=2;i++){
  var student={
    name:readlineSync.question(`Enter Student Name ${i} \n`),
    unitTest:readlineSync.question('Enter Unit Test Marks \n'),
    preFinal:readlineSync.question('Enter Pre final marks \n'),
    final:readlineSync.question('Enter Final Marks \n'),
    sumTotalMarks:function(){
      return this.unitTest+ this.preFinal+ this.final
    }
  }
  studentData.push(student)
}

function highestMarks(studentData){
  let highestScore=0;
  let topper='';
  for(let i=0;i<studentData.length;i++){
    marks=studentData[i].sumTotalMarks
    if(marks>highestScore){
      highestScore=marks;
      topper=studentData[i].name
    }
  }return topper;
}


let rankHolder=highestMarks(studentData);
console.log("The Topper is "+ rankHolder);

function getAverage(studentData){
  let sum=0;
  for(let i=0;i<studentData.length;i++){
    sum=sum+studentData[i].sumTotalMarks();
    var average=sum/2;
  }
  return average;
}

let averageMarks=getAverage(studentData)
console.log("The average is "+ averageMarks)