// function loadHeader() {
//     fetch('index.html')
//         .then(response => response.text())
//         .then(data => { 
//             document.getElementById('head').innerHTML = data;
//             addEventListener();
//         })
//         .catch(error => console.error)

// }



function loadHeader(){
    fetch('index.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('head').innerHTML = data;
            addEventListener();
        })
        .catch(error => console.error);
};


document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
});
