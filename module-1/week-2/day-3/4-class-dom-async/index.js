class Classroom {
  constructor(students) {
    this.students = students;
    this.timer = 0;
    this.intervalId = null;
  }

  pickRandomStudent() {
    const randomIndex = Math.floor(Math.random() * this.students.length);

    const randomStudent = this.students[randomIndex];

    return randomStudent;
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  timedChallenge(time, cb) {
    setTimeout(() => {
      console.log("Complete !");
      cb(this.pickRandomStudent());
    }, time);
  }

  startTimer(cb) {
    this.intervalId = setInterval(() => {
      console.log(this);
      console.log(this.timer);
      cb(this.timer);
      this.timer++;
    }, 1000);
  }
}

const students = [
  { name: "Bob", age: 30 },
  { name: "Alice", age: 31 },
  { name: "John", age: 28 },
];

const classroom = new Classroom(students);

const studentDisplay = document.getElementById("selected-student");
const btnRandom = document.getElementById("btn-random");
const btnChallenge = document.getElementById("btn-challenge");
const inputChallengeTime = document.getElementById("challenge-time");
const btnTimer = document.getElementById("btn-timer");
const btnStopTimer = document.getElementById("btn-stop-timer");
btnTimer.onclick = () => {
  classroom.startTimer((timerValue) => {
    const timerElement = document.getElementById("timer");

    timerElement.textContent = `Time ${timerValue}`;
  });
};

btnStopTimer.onclick = () => {
  classroom.stopTimer();
};

btnChallenge.onclick = () => {
  const inputValue = inputChallengeTime.value;

  studentDisplay.textContent = "";

  classroom.timedChallenge(inputValue, (randomStudent) => {
    studentDisplay.textContent = randomStudent.name;
  });
};

btnRandom.onclick = () => {
  studentDisplay.textContent = classroom.pickRandomStudent().name;
};

studentDisplay.textContent = classroom.pickRandomStudent().name;
