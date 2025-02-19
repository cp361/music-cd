//? Henter input-felterne for author, title og year fra index.html
const author = document.getElementById('author');
const title = document.getElementById('title');
const year = document.getElementById('year');

//? Henter containeren, hvor listerne skal vises
const listContainer = document.getElementById('listContainer');

//? Sæt max-værdien for årstal til nuværende år
const currentYear = new Date().getFullYear();
year.max = currentYear; //? Dynamisk opdatering af max-værdien

//? Funktion til at tilføje en ny CD til listen
function addCD() {

    //? Konverterer year-inputtet til et heltal, så ikke hentes som en string
    const yearValue = parseInt(year.value, 10);
    
    //? Validering: Sikrer, at alle felter er udfyldt
    if (author.value === '' || title.value === '' || year.value === '') {
        alert('Please fill in all fields');
    } 
    //? Validering: Tjekker om året er 1982 eller nyere, og at det er et gyldigt tal. Det er pga den første CD blev lavet i 1982
    else if (yearValue < 1982 || yearValue > currentYear || isNaN(yearValue)) {
        alert('Year must be between 1982 and the current year');
    } 
    else {
        //? Opretter en ny <ul> liste til at indeholde CD-informationerne
        let cdList = document.createElement('ul');
        cdList.classList.add('title_list'); //? Tilføjer en klasse til <ul> for eventuel styling

        //? Opretter 3 <li> element for author og tilføjer det til <ul>
        let authorLi = document.createElement('li');
        authorLi.innerHTML = `${author.value}`;
        cdList.appendChild(authorLi);

        let titleLi = document.createElement('li');
        titleLi.innerHTML = `${title.value}`;
        cdList.appendChild(titleLi);

        let yearLi = document.createElement('li');
        yearLi.innerHTML = `${year.value}`;
        cdList.appendChild(yearLi);

        //? Opretter et ikon (skraldespand/kryds) for at slette listen
        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-ban', 'delete-icon'); //? Tilføjer relevante klasser til ikonet
        cdList.appendChild(deleteIcon); //? Tilføjer ikonet til <ul>

        //? Tilføjer hele den nye <ul> til listContainer, så den vises på siden
        listContainer.appendChild(cdList);

        //? Rydder inputfelterne, så brugeren kan indtaste en ny CD
        title.value = '';
        author.value = '';
        year.value = '';
    }
}

//? Tilføjer en event listener, der lytter efter klik på listContainer
listContainer.addEventListener('click', function (e) {
    //? Tjekker, om det klikkede element har klassen 'fa-ban' (dvs. skraldespandsikonet)
    if (e.target.classList.contains('fa-ban')) {
        e.target.parentElement.remove(); //? Fjerner hele <ul> elementet, når skraldespandsikonet klikkes
    }
});
