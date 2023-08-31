//auto complete

const search = document.getElementById('search');
const matchList =  document.getElementById('match-list')
const Započnite_unos_naziva_kolegija = [
    { label: "Matematika" },
    { label: "Supit" },
    { label: "Supit" },
    { label: "Supit" },
];

//search subjects and filter

const searchSubjects = async searchText => {
    try {
        const res = await fetch("https://www.fulek.com/data/api/supit/get-curriculum/5");
        const subjects = await res.json();

        let matches = [...Započnite_unos_naziva_kolegija,...subjects].filter(subject => {
            const regex = new RegExp(`^${searchText}`, 'gi');
            return subject.label.match(regex);
        });

        if (searchText.length === 0) {
            matches = [];
            matchList.innerHTML = '';
        }
        outputhtml(matches);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


const outputhtml = matches => {
    if(matches.length >0) {
        const html = matches.map(match => `
        <div class = "card card-body mb-1">
            <h4>${match.label}</h4>
        </div>`)
        .join('');

        matchList.innerHTML = html;
    }
};

search.addEventListener('input' ,() => searchSubjects(search.value));

$("#tbSubject").on("click", ".delete-row", function(){
    $(this).closest("tr").remove()//Brise najblizi redak tom gumbu
 });

