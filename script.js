let scores=new Map([
  ["math",0],
  ["science",0],
  ["english",0]
]) //table of values
const data={};
function tablesave(){
  const tableroot=document.getElementById("tableroot");
  const rows=tableroot.querySelectorAll("tr"); //tr is table row

  rows.forEach(
    rows=>{  //table row
      const input=rows.querySelectorAll('input'); //find the input in the rows
      input.forEach(
        input=>{
          data[input.name]=input.value; //save the value to the list
        }
      )
    }
  )
  console.log(data);
}

function calculatev2(){ 
  //First we find the average of all the scores in each subject
  //Because the Formative would be the closest in material to the summative it will take 70% of the average
  const MathAverage=data['MS1']*0.15+data['MF1']*0.15+data['MF2']*0.7;
  const ScienceAverage=data['SS1']*0.15+data['SF1']*0.15+data['SF2']*0.7;
  const EnglishAverage=data['ES1']*0.15+data['EF1']*0.15+data['EF2']*0.7;

  const math=105-MathAverage;
  const science=105-ScienceAverage;
  const english=105-EnglishAverage;

  // Get the input field element using its ID
  const input = document.getElementById("hours");

  // Access the value
  const hours = input.value;

  //calculate the ratio
  const minutes=hours*60; //convert from hours to minutes

  let total=0;
  total+=math;
  total+=science;
  total+=english;
  const rationumber=minutes/total; //get the base number for the ratio

  //save the time
  const MathTime=rationumber*math;
  const EnglishTime=rationumber*english;
  const ScienceTime=rationumber*science;

  let output = document.getElementById("outputmath");
  output.textContent+=Math.round(MathTime)+' minutes';

  output=document.getElementById("outputenglish");
  output.textContent+=Math.round(EnglishTime)+' minutes';

  output=document.getElementById("outputscience");
  output.textContent+=Math.round(ScienceTime)+' minutes';
}
