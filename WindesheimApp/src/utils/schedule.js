export default getSchedule = (values, date) => {
  let newLessons = []
  for(lesson of values) {
    if(lesson.roosterdatum == date) {
      newLessons.push(lesson)
    }
  }
  return newLessons
}
