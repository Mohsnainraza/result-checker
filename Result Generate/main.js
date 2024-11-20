let students = [
    {
        rollNumber: 271965,
        name: "Adeem",
        score: "32 / 35",
        percentage: "91%",
        status: "EXCELLENT"
    },
    {
        rollNumber: 258317,
        name: "SYED ANAS",
        score: "31 / 35",
        percentage: "89%",
        status: "EXCELLENT"
    },
    {
        rollNumber: 260679,
        name: "Abdul Muizz",
        score: "31 / 35",
        percentage: "89%",
        status: "EXCELLENT"
    },
    {
        rollNumber: 260682,
        name: "Affan Ali",
        score: "31 / 35",
        percentage: "89%",
        status: "EXCELLENT"
    },
    {
        rollNumber: 266865,
        name: "Abdul Hadi",
        score: "28 / 35",
        percentage: "80%",
        status: "GOOD"
    },
    {
        rollNumber: 299695,
        name: "MUSTAFA PERVEZ",
        score: "27 / 35",
        percentage: "77%",
        status: "PASSED"
    },
    {
        rollNumber: 267832,
        name: "Muhammad",
        score: "27 / 35",
        percentage: "77%",
        status: "PASSED"
    },
    {
        rollNumber: 267133,
        name: "Muhammad Mustafa Hussain",
        score: "27 / 35",
        percentage: "77%",
        status: "PASSED"
    },
    {
        rollNumber: 259144,
        name: "Abdul Moiz",
        score: "27 / 35",
        percentage: "77%",
        status: "PASSED"
    },
    {
        rollNumber: 263630,
        name: "Mohammad Wasif",
        score: "26 / 35",
        percentage: "74%",
        status: "PASSED"
    },
    {
        rollNumber: 265627,
        name: "Hasnain Ali",
        score: "26 / 35",
        percentage: "74%",
        status: "PASSED"
    },
    {
        rollNumber: 262365,
        name: "Muhammad Faizan Khan",
        score: "25 / 35",
        percentage: "71%",
        status: "PASSED"
    },
    {
        rollNumber: 252944,
        name: "Muhammad Faizan",
        score: "25 / 35",
        percentage: "71%",
        status: "PASSED"
    },
    {
        rollNumber: 269662,
        name: "Huzaifa",
        score: "25 / 35",
        percentage: "71%",
        status: "PASSED"
    },
    {
        rollNumber: 258032,
        name: "Noor ul Hasan Siddique",
        score: "24 / 35",
        percentage: "69%",
        status: "PASSED"
    },
    {
        rollNumber: 265599,
        name: "Musab Bin Ahsan",
        score: "23 / 35",
        percentage: "66%",
        status: "PASSED"
    },
    {
        rollNumber: 258595,
        name: "Ather Junaid Siddique",
        score: "23 / 35",
        percentage: "66%",
        status: "PASSED"
    },
    {
        rollNumber: 286820,
        name: "Mohsnain Raza",
        score: "23 / 35",
        percentage: "66%",
        status: "PASSED"
    },
    {
        rollNumber: 265416,
        name: "Abdullah",
        score: "22 / 35",
        percentage: "63%",
        status: "PASSED"
    },
    {
        rollNumber: 265887,
        name: "Azeem Shahid",
        score: "22 / 35",
        percentage: "63%",
        status: "PASSED"
    },
    {
        rollNumber: 272187,
        name: "Hafiz Sharim Sohail",
        score: "21 / 35",
        percentage: "60%",
        status: "NEED IMPROVEMENT"
    },
    {
        rollNumber: 265811,
        name: "Syed Saad Zaidi",
        score: "21 / 35",
        percentage: "60%",
        status: "NEED IMPROVEMENT"
    },
    {
        rollNumber: 261523,
        name: "Aman ul Haq",
        score: "20 / 35",
        percentage: "57%",
        status: "NEED IMPROVEMENT"
    },
    {
        rollNumber: 255275,
        name: "Muhammad Moosa",
        score: "19 / 35",
        percentage: "54%",
        status: "NEED IMPROVEMENT"
    },
    {
        rollNumber: 265812,
        name: "Syed Anas Zaidi",
        score: "19 / 35",
        percentage: "54%",
        status: "NEED IMPROVEMENT"
    },
    {
        rollNumber: 284822,
        name: "Hamdan",
        score: "18 / 35",
        percentage: "51%",
        status: "NEED IMPROVEMENT"
    },
    {
        rollNumber: 265584,
        name: "Saleh Raza",
        score: "16 / 35",
        percentage: "46%",
        status: "FAIL"
    },
    {
        rollNumber: 271752,
        name: "Syed Shariq Ahmed",
        score: "13 / 35",
        percentage: "37%",
        status: "FAIL"
    }
]

function findStudent() {
    let rollnumberinput = document.getElementById('rollnumberinput').value;
    let rollNumber = parseInt(rollnumberinput,10)   
    let student = students.find(s => s.rollNumber===rollNumber)
    let resultDiv = document.getElementById('result')
    resultDiv.innerHTML = ""

    if (student) {
        resultDiv.innerHTML = `
        <h3>Student Details:</h3>
        <ul>
        <li><strong>Roll Number: </strong>${student.rollNumber}</li>
        <li><strong>Name: </strong>${student.name}</li>
        <li><strong>Score: </strong>${student.score}</li>
        <li><strong>Percentage </strong>${student.percentage}</li>
        <li><strong>Status: </strong>${student.status}</li>
        </ul>`;
    }else{
        resultDiv.innerHTML = `<p>Roll number ${rollNumber} not found.</p>`
    }

}


document.getElementById('rollnumberinput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        findStudent();
    }
});

