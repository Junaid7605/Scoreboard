function addOne(type) {
    let actual_count = document.getElementById(`counter_${type}`);

    // let results = ac;
    let results = parseInt(actual_count.textContent)
    results+=1;
    actual_count.textContent=results;
}

function addTwo(type) {
    let actual_count = document.getElementById(`counter_${type}`);

    // let results = ac;
    let results = parseInt(actual_count.textContent)
    results+=2;
    actual_count.textContent=results;
}

function addThree(type) {
    let actual_count = document.getElementById(`counter_${type}`);

    // let results = ac;
    let results = parseInt(actual_count.textContent)
    results+=3;
    actual_count.textContent=results;
}

//reset Function when reset button is pressed

function resetCount() {
    document.getElementById("counter_home").textContent = 0;
    document.getElementById("counter_guest").textContent = 0;
    
}
