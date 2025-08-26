export default function getListStudentIds(students_list) {
  if (!Array.isArray(students_list)) {
    return [];
  }
  return students_list.map((student) => student.id);
}