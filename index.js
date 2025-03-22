//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];



function getAverageGrade(student, course) {
  for(let trans of student.transcript) {
    if (trans.course === course) {
      let sum = 0;
      for (let grade of trans.grades){
        sum += grade;
      }
      return sum / trans.grades.length;
    }
  }
  return -1;
}
console.log(getAverageGrade(bob, 'INFO 1603'));


function getAssignmentMark(student, course, num) {
  for (let trans of student.transcript) {
    if (trans.course === course) {
      if (num >= 1 && num <= trans.grades.length) {
        return trans.grades[num - 1];
      } else {
        return -1;
      }
    }
  }

  return -1;
}
console.log(getAssignmentMark(bob, 'INFO 1603', 1))

function averageAssessment(students, courseName, assignment) {
  let total = 0; 
  let count = 0; 
  for (let student of students) {
    let mark = getAssignmentMark(student, courseName, assignment);
    if (mark !== -1) {
      total += mark;
      count++;
    }
  }
  if (count === 0) {
    return -1;
  }
  return total / count;
}
console.log(averageAssessment(students, 'INFO 1603', 1));
console.log(averageAssessment(students, 'INFO 1601', 1));