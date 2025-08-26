export default function getStudentIdsSum(ListStudents) {
  if (!Array.isArray(ListStudents)) {
    return [];
  }
  return ListStudents.reduce(function(prev, curr) {
    return prev + curr.id;
  }, 0);
}