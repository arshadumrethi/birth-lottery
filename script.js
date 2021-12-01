const myList = document.getElementById("my-list")
const mySentence = document.getElementById("my-sentence")
const myBtn = document.getElementById("run-sim")

myBtn.addEventListener('click', function () {
    render()
})


let countryList = ["India", "China", "Nigeria", "Pakistan", "Indonesia", "Ethiopia", "United States", "Bangladesh", "DR Congo", "Egypt"]
let weights = [0.2, 0.15, 0.1, 0.09, 0.06, 0.04, 0.02, 0.01, 0.01, 0.01]

function render() {
    mySentence.textContent = `The 4 children were born in`
    myList.innerHTML = `<p>India</p>`
}

function weighted_random(items, weights) {
    var i;

    for (i = 0; i < weights.length; i++)
        weights[i] += weights[i - 1] || 0;

    var random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;

    return items[i];
}

let numChildren = 4

let myResults = []

function fourResults() {
    let myResults = weighted_random(countryList, weights)

}

