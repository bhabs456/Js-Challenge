let keywords = [ // Array containing all keywords
    "Java",
    "JavaScript",
    "Python",
    "C++",
    "C",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "TypeScript",
    "Tailwind CSS",
    "Angular",
    "Vue.js"
];

const resultBox = document.querySelector(".result-box"); // Get result box
const inputBox = document.getElementById("input-box"); // Get input box

inputBox.onkeyup = function () { // Run this whenever user types

    let result = []; // Store matching keywords
    let input = inputBox.value; // Get what user typed

    if (input.length) { // Check if input is not empty

        result = keywords.filter((key) => { // Find matching keywords

            return key.toLowerCase().includes(input.toLowerCase()); // Compare without caring about uppercase/lowercase
        });

        display(result); // Show matching results
        console.log(result); // Print results in console
    }
}

function display(result) { // Function to display results

    const content = result.map((list) => { // Convert each result into an <li>

        return "<li onclick=show(this)>" + list + "</li>"; // Create clickable list item
    });

    resultBox.innerHTML = "<ul>" + content.join("") + "</ul>"; // Put results inside the result box
}

function show(list) { // Runs when user clicks a result

    inputBox.value = list.innerHTML; // Put selected result in input box
    resultBox.innerHTML = ""; // Remove suggestions
}