//Calculates the total score
function calculateTotal() {
    let englishCourse = Number(english.value);
    let entrepreneurshipCourse = Number(entrepreneurship.value);
    let libraryCourse =Number(library.value);
    let statisticsCourse = Number(statistics.value);
    let javascriptCourse = Number(javascript.value);

    let sumTotal = englishCourse + entrepreneurshipCourse + libraryCourse + statisticsCourse + javascriptCourse;

    let englishStatement = `English mark: ${englishCourse}`;
    console.log(englishStatement);
    eng.innerHTML = englishStatement;

    let entrepreneurshipStatement = `Entrepreneurship mark: ${entrepreneurshipCourse}`;
    console.log(entrepreneurshipStatement);
    entrepreneur.innerHTML = entrepreneurshipStatement;

    let libraryStatement = `Library mark: ${libraryCourse}`;
    console.log(libraryStatement);
    lib.innerHTML = libraryStatement;

    let statisticsStatement = `Statistics mark: ${statisticsCourse}`;
    console.log(statisticsStatement);
    maths.innerHTML = statisticsStatement;

    let javascriptStatement = `JavaScript mark: ${javascriptCourse}`;
    console.log(javascriptStatement);
    program.innerHTML = javascriptStatement;

    let summationStatement = `Total marks: ${sumTotal}`;
    console.log(summationStatement);
    summation.innerHTML = summationStatement;
}

//Calculates the average score
function calculateAverage() {
    let englishCourse = Number(english.value);
    let entrepreneurshipCourse = Number(entrepreneurship.value);
    let libraryCourse =Number(library.value);
    let statisticsCourse = Number(statistics.value);
    let javascriptCourse = Number(javascript.value);

    let average = (englishCourse + entrepreneurshipCourse + libraryCourse + statisticsCourse + javascriptCourse) / 5 ;
    console.log(average);
    averageStatement = `Your average score is: ${average}`;
    midpoint.innerHTML = averageStatement;
}

//Displays the grade
function displayGrade(){
    let englishCourse = Number(english.value);
    let entrepreneurshipCourse = Number(entrepreneurship.value);
    let libraryCourse =Number(library.value);
    let statisticsCourse = Number(statistics.value);
    let javascriptCourse = Number(javascript.value);

    let average = (englishCourse + entrepreneurshipCourse + libraryCourse + statisticsCourse + javascriptCourse) / 5 ;

    if (average >= 80)
    {
        let gradeA = ` Excellent Performance, you got an: A grade`;
        console.log(gradeA);
        category.innerHTML = gradeA;
        
    }
    else if (average >= 70)
    {
        let gradeB = `Good performance, you got a: B grade `;
        console.log(gradeB);
        category.innerHTML = gradeB;
        
    }
    else if (average >= 60)
    {
        let gradeC = `Your performance was okay, you got a: C grade`;
        console.log(gradeC);
        category.innerHTML = gradeC;
    }
    else if (average >= 50)
    {
        gradeD = `Your performance is poor, please do better. you got a: D grade`;
        console.log(gradeD);
        category.innerHTML = gradeD;
    }
    else
    {
        gradeE = `Very poor performance, You got an: F grade`;
        console.log(gradeE);
        category.innerHTML = gradeE;
    }   
}
