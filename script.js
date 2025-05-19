const units = [
  {
    name: "Unit 1: Limits and Continuity",
    topics: ["Intro to limits", "Estimating limits", "Asymptotes", "Continuity"]
  },
  {
    name: "Unit 2: Derivatives",
    topics: ["Definition of derivative", "Power rule", "Product & quotient rules", "Chain rule"]
  },
  {
    name: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions",
    topics: ["Implicit differentiation", "Inverse functions", "Related rates"]
  },
  {
    name: "Unit 4: Contextual Applications of Differentiation",
    topics: ["Motion", "Optimization", "Mean Value Theorem"]
  },
  {
    name: "Unit 5: Analytical Applications of Derivatives",
    topics: ["Curve sketching", "Concavity", "Inflection points"]
  },
  {
    name: "Unit 6: Integration and Accumulation of Change",
    topics: ["Riemann sums", "Definite integrals", "FTC"]
  },
  {
    name: "Unit 7: Differential Equations",
    topics: ["Slope fields", "Separation of variables", "Exponential models"]
  },
  {
    name: "Unit 8: Applications of Integration",
    topics: ["Area between curves", "Volumes of revolution", "Arc length"]
  },
  {
    name: "Unit 9: Parametric, Polar, and Vector Functions",
    topics: ["Parametric functions", "Polar coordinates", "Vector motion"]
  }
];

const unitContainer = document.getElementById("unit-container");
const topicContainer = document.getElementById("topic-container");
const questionBox = document.getElementById("question-box");

// Display unit buttons
function displayUnits() {
  unitContainer.innerHTML = "<h2>Select a Unit:</h2>";
  units.forEach((unit, index) => {
    const btn = document.createElement("button");
    btn.textContent = unit.name;
    btn.onclick = () => displayTopics(index);
    unitContainer.appendChild(btn);
  });
}

// Display topic buttons
function displayTopics(unitIndex) {
  topicContainer.style.display = "block";
  topicContainer.innerHTML = `<h3>${units[unitIndex].name} Topics:</h3>`;
  units[unitIndex].topics.forEach(topic => {
    const btn = document.createElement("button");
    btn.textContent = topic;
    btn.onclick = () => loadTopic(topic);
    topicContainer.appendChild(btn);
  });
  questionBox.innerHTML = "";
}

// Show placeholder message for now
function loadTopic(topic) {
  questionBox.innerHTML = `<p>🧠 Topic Selected: <strong>${topic}</strong><br>No questions loaded yet. Stay tuned!</p>`;
}

displayUnits();
