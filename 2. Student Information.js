function studentInformation(name, age, grade) {
    age = Number(age)
    grade = Number(grade).toFixed(2)
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`)
}
studentInformation(`John`, 15, 5.54678)

//Name: {student name}, Age: {student age}, Grade: {student grade}