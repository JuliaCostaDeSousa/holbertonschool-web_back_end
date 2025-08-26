export default function updateStudentGradeByCity(ListStudents, city, newGrades) {
  if (!Array.isArray(ListStudents)) {
    return [];
  }
  const studentsCity = ListStudents.filter((student) => student.location === city)
  
  return studentsCity.map((student) => {
    const gradeFound = newGrades.find(obj => obj.studentId === student.id)
    var finalGrade;
    if (!gradeFound) {
      finalGrade = 'N/A';
    }
    else {
      finalGrade = gradeFound.grade;
    };
    return {...student, grade: finalGrade};
    });
}