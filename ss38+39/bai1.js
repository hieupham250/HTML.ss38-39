let prev = document.getElementById("prev");
let next = document.getElementById("next");
let steps = document.getElementsByClassName("step");
let lines = document.getElementsByClassName("line");
let count = 0;
next.onclick = function() {
    next.style.backgroundColor = "#2688d1";
    prev.style.backgroundColor = "";
        if (count < 4) {
            lines[count].style.backgroundColor = "#308bcf";
            count++;
            steps[count].style.borderColor = "#308bcf";
            console.log(count);
        }
        if (count === 3) {
            next.disabled = true;
        }
        prev.disabled = false;
    }

prev.onclick = function() {
    prev.style.backgroundColor = "#2688d1";
    next.style.backgroundColor = "";
        if (count > 0) {
            steps[count].style.borderColor = "";
            count--;
            lines[count].style.backgroundColor = "";
            console.log(count);
        }
        if (count === 0) {
            prev.disabled = true;
        }
        next.disabled = false;
    }