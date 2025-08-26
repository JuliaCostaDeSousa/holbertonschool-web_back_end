export default function getListStudentIds(ListStudents, city) {
  if (!Array.isArray(ListStudents)) {
    return [];
  }
  return ListStudents.filter((student) => student.location == city);
}