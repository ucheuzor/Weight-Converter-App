
const input = document.getElementById('lbsInput');
const output = document.getElementById('output');
const gramsOutput = document.getElementById('gramsOutput');
const kgOutput = document.getElementById('kgOutput');
const ozOutput = document.getElementById('ozOutput');

output.style.visibility = 'hidden';

const WeightCalc = (e) => {
    output.style.visibility = 'visible';
    let lbs = e.target.value;
    gramsOutput.innerHTML = lbs / .0022046;
    kgOutput.innerHTML = lbs / 2.2046;
    ozOutput.innerHTML = lbs * 16;
};

input.addEventListener('input', WeightCalc);

