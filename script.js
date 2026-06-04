loadDashboard();

function goToCategories() {

    let name = document.getElementById("playerName").value;

    if(name.trim().length < 3){
        alert(
"Please enter a valid name"
);
    }

    localStorage.setItem("playerName", name);

    window.location.href = "category.html";
}

function goToProfile() {
    window.location.href = "profile.html";
}

function goToAdmin() {
    window.location.href = "login.html";
}

function loadDashboard() {

    let quizzes =
        JSON.parse(localStorage.getItem("quizzes")) || [];

    let leaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

    document.getElementById("totalQuizzes").innerText =
        quizzes.length;

    let totalQuestions = 0;

    quizzes.forEach(q => {
        totalQuestions += q.questions.length;
    });

    document.getElementById("totalQuestions").innerText =
        totalQuestions;

    let highest = 0;

    leaderboard.forEach(player => {

        if (player.score > highest) {
            highest = player.score;
        }

    });

    document.getElementById("highestScore").innerText =
        highest;

    let recent =
        document.getElementById("recentQuizzes");

    // Clear old cards before adding new ones
    recent.innerHTML = "";

    if (quizzes.length === 0) {

        recent.innerHTML = `
        <div class="quiz-card">
            <h3>No Quizzes Available</h3>
            <p>Create a quiz to get started.</p>
        </div>
        `;

        return;
    }

    quizzes
        .slice(-3)
        .reverse()
        .forEach(quiz => {

            recent.innerHTML += `
            <div class="quiz-card">

                <h3>${quiz.category}</h3>

                <p>${quiz.description}</p>

                <p>
                    Difficulty:
                    ${quiz.difficulty}
                </p>

            </div>
            `;

        });

}
