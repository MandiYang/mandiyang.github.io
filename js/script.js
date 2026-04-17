let currentDate = new Date();

//Den funktion skapad med hjälp av AI för att jag inte kan allting i javascript
function renderCalendar() {
    const datesContainer = document.getElementById("dates");
    const monthYear = document.getElementById("monthYear");

    datesContainer.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const today = new Date();

    monthYear.innerText = currentDate.toLocaleString("sv-SE", {
        month: "long",
        year: "numeric"
    });

    let start = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < start; i++) {
        datesContainer.innerHTML += "<div></div>";
    }

    for (let i = 1; i <= lastDate; i++) {
        let className = "";

        if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            className = "today";
        }

        datesContainer.innerHTML += `<div class="${className}" onclick="selectDate(${i})">${i}</div>`;
    }
}

// Det här har jag gjort själv för jag vet hur man får kalendern att gå fram i månad och bakåt, använder currentDate.setDate(1) för att det inte ska problem när dagens datum blir t.ex. 31:a mars och man ska gå till tävlingar i april.
function prevMonth() {
    currentDate.setDate(1); 
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setDate(1)
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

//Skapad själv för att navigera datum och hitta tävlingar i datumet med window.open från w3schools
function selectDate(day) {
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;

    window.open(
        "https://schack.se/kalender/lista/?tribe-bar-date=" 
        + year + "-" + month + "-" + day,
        "_blank"
    );
}

//Renderar calendern så fort man laddar skriptet i slutet av html dokument
renderCalendar();

//Gjort själv, vet hur man ändrar text på en knapp
function handleSubmit() {
    const btn = document.getElementById("submitBtn"); //https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    
    btn.classList.add("loading");
    btn.innerText = "Skickar...";

    setTimeout(() => {
        btn.classList.remove("loading");
        btn.innerText = "Skickat✅, vi återkommer inom 3 vardagar";
    }, 2000); //https://www.w3schools.com/JSREF/met_win_settimeout.asp
}

function navMemberLink() {
    window.location.href = "bli_medlem.html"; //Redirigerar till bli_medlem.html sidan
}