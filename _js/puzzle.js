$(document).ready(function() {
    // Initiate CSS Grid animation tool
    const grid = document.querySelector(".grid");
    const { forceGridAnimation } = animateCSSGrid.wrapGrid(grid);

    // Get all the tiles and the empty tile
    const tiles = Array.from(document.querySelectorAll(".tile"));
    const emptyTile = document.querySelector(".tile--empty");

    // Get congratulations heading
    const heading = document.querySelector(".heading");

    // A key / value store of what areas to "unlock"
    const areaKeys = {
        A: ["B", "D"],
        B: ["A", "C", "E"],
        C: ["B", "F"],
        D: ["A", "E", "G"],
        E: ["B", "D", "F", "H"],
        F: ["C", "E", "I"],
        G: ["D", "H"],
        H: ["E", "G", "I"],
        I: ["F", "H"]
    };

    // Add click listener to all tiles
    tiles.map(tile => {
        tile.addEventListener("click", event => {
            // Grab the grid area set on the clicked tile and empty tile
            const tileArea = tile.style.getPropertyValue("--area");
            const emptyTileArea = emptyTile.style.getPropertyValue("--area");

            // Swap the empty tile with the clicked tile
            emptyTile.style.setProperty("--area", tileArea);
            tile.style.setProperty("--area", emptyTileArea);

            // Animate the tiles
            forceGridAnimation();

            // Unlock and lock tiles
            unlockTiles(tileArea);
        });
    });

    // Unlock or lock tiles based on empty tile position
    const unlockTiles = currentTileArea => {

        // Cycle through all the tiles and check which should be disabled and enabled
        tiles.map(tile => {
            const tileArea = tile.style.getPropertyValue("--area");

            // Check if that areaKey has the tiles area in it's values
            // .trim() is needed because the animation lib formats the styles attribute
            if (areaKeys[currentTileArea.trim()].includes(tileArea.trim())) {
                tile.disabled = false;
            } else {
                tile.disabled = true;
            }
        });

        // Check if the tiles are in the right order
        isComplete(tiles);
    };


    const isComplete = tiles => {

        // Get all the current tile area values
        const currentTilesString = tiles
            .map(tile => tile.style.getPropertyValue("--area").trim())
            .toString();

        // Compare the current tiles with the areaKeys keys
        if (currentTilesString == Object.keys(areaKeys).toString()) {
            heading.children[1].innerHTML = "Vittoria! Torna alla <a href='/index.html'>home page</a>!";
            heading.style = `
                animation: popIn .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            `;
            alert("Congratulazioni! Adesso conosci la password per il gioco finale nella home page.\n\nTENTARE!");
        }
    };


    // Inversion calculator
    const inversionCount = array => {

        // Using the reduce function to run through all items in the array
        // Each item in the array is checked against everything before it
        // This will return a new array with each instance of an item appearing before it's original predecessor
        return array.reduce((accumulator, current, index, array) => {
            return array
                .slice(index)
                .filter(item => {
                    return item < current;
                })
                .map(item => {
                    return [current, item];
                })
                .concat(accumulator);
        }, []).length;
    };

    // Randomise tiles
    const shuffledKeys = keys => Object.keys(keys).sort(() => .5 - Math.random());

    // Begin with our in order area keys
    let startingAreas = Object.keys(areaKeys);

    // Immediate random shuffle to hide solution at first
    startingAreas = shuffledKeys(areaKeys);
    tiles.map((tile, index) => {
        tile.style.setProperty("--area", startingAreas[index]);
    });

    // Use the inversion function to check if the keys will be solveable or not shuffled
    // Shuffle the keys until they are solvable
    while (inversionCount(startingAreas) % 2 == 1 || inversionCount(startingAreas) == 0) {
        startingAreas = shuffledKeys(areaKeys);
    }

    // QUICK FIX: ignore generated combination and hard-code nice shuffling
    startingAreas = ["I", "H", "G", "F", "E", "D", "C", "B", "A"]

    // Apply shuffled areas
    tiles.map((tile, index) => {
        tile.style.setProperty("--area", startingAreas[index]);
    });

    // Initial shuffle animation
    forceGridAnimation();

    // Unlock and lock tiles
    unlockTiles(emptyTile.style.getPropertyValue("--area"));

    var paragraph = document.getElementById("prize-paragraph");
    var prize = getPrize(getCurrentUser());
    paragraph.innerHTML += prize;
});

function getPrize(user) {
    switch(user) {
        case 'Mirco':
            return getHTMLPrize('acqua')
        case 'Stefano':
            return getHTMLPrize('vaccinazioni')
        case 'Gabripo':
            return getHTMLPrize('panettone')
        case 'Andrea':
            return getHTMLPrize('pallone')
        case 'Cara':
            return getHTMLPrize('acqua')
        case 'Eleonora':
            return getHTMLPrize('albero')
        case 'Sara':
            return getHTMLPrize('vaccinazioni')
        case 'Lorenzo':
            return getHTMLPrize('panettone')
        case 'Caterina':
            return getHTMLPrize('albero')
        case 'Maria Elena':
            return getHTMLPrize('vaccinazioni')
        case 'Alessandra':
            return getHTMLPrize('albero')
        case 'Francesca':
            return getHTMLPrize('acqua')
        case 'Marianna':
            return getHTMLPrize('panettone')
        case 'Alessia':
            return getHTMLPrize('pallone')
        case 'Irene':
            return getHTMLPrize('vaccinazioni')
        case 'Martina':
            return getHTMLPrize('acqua')
        case 'Rosanna':
            return getHTMLPrize('vaccinazioni')
        case 'Roberto':
            return getHTMLPrize('acqua')
        case 'Arianna':
            return getHTMLPrize('acqua')
        case 'Sciortino':
            return getHTMLPrize('albero')
        case 'Carolina':
            return getHTMLPrize('acqua')
        case 'Giovanni':
            return getHTMLPrize('albero')
        case 'Tommaso':
            return getHTMLPrize('panettone')
        case 'Gabriele':
            return getHTMLPrize('pallone')
        case 'Carlotta':
            return getHTMLPrize('acqua')
        case 'Nicolò':
            return getHTMLPrize('panettone')
        case 'Miner':
            return getHTMLPrize('pallone')
        case 'Valentino':
            return getHTMLPrize('pallone')
        case 'Silvia':
            return getHTMLPrize('panettone')
        default:
            return getHTMLPrize('albero')
    }
}

function getHTMLPrize(prize) {
    switch(prize) {
        case 'vaccinazioni':
            return "donare 10 vaccinazioni pediatriche.<br><br>" +
                "Il tuo aiuto si traduce in un gesto concreto che riduce le sofferenze e riporta la speranza.<br><br>" +
                "Da parte di tutte le bambine e i bambini raggiunti da Medici con l'Africa Cuamm, grazie di cuore!<br><br>" +
                "<img src='./assets/img/vaccinazioni.png'>"
        case 'pallone':
            return "donare 2 palloni a dei bambini, per divertirsi e per far sì che tutto sembri più normale.<br><br>" +
                "La possibilità di giocare è un diritto negato ai bambini che vivono in condizioni di povertà o in situazioni di emergenza, " +
                "eppure giocare insieme è tutto ciò che desiderano anche i bambini delle aree più remote o svantaggiate. " +
                "Proprio come tutti gli altri bambini del mondo.<br><br>" +
                "Da parte di tutte le bambine e i bambini raggiunti da UNICEF, grazie di cuore!<br><br>" +
                "<img src='./assets/img/palloni.png'>"
        case 'albero':
            return "piantare Meravigliao in Cameroon, un giovane albero di Cacao.<br><br>" +
                "Un contadino lo pianterà nella sua terra. Cacao Meravigliao sarà fotografato, geolocalizzato ed avrà la sua pagina online dove con la storia del progetto di cui farà parte.<br><br>" +
                "Permetterà una interazione virtuosa tra diverse specie ed un uso sostenibile delle risorse e dei terreni.<br><br>" +
                "Assorbirà CO2, emettendo ossigeno, favorendo la biodiversità e contrastando l’erosione del terreno.<br><br>" +
                "Da parte delle comunità rurali raggiunte da Treedom, grazie di cuore!<br><br>" +
                "<img src='./assets/img/cacao1.jpg' width='567' height='604'>"
        case 'acqua':
            return "donare a una famiglia un serbatoio con un filtro per depurare l’acqua.<br><br>" +
                "Nelle situazioni di emergenza e nei paesi in cui le famiglie sono costrette a bere acqua contaminata, " +
                "i serbatoi con filtri depuratori rappresentano una soluzione semplice e sicura per disporre di acqua potabile.<br><br>" +
                "Da parte di tutte le bambine e i bambini raggiunti da Save the Children, grazie di cuore!<br><br>" +
                "<a href='https://regalisolidali.savethechildren.it/cartolina/e95f8aa18a/' target='_blank'>" +
                "<img src='https://static.savethechildren.it/media/catalog/product/cache/1/image/480x480/9df78eab33525d08d6e5fb8d27136e95/r/e/regalo-solidale-emergenze-filtri_per_l-acqua-3.jpg'>" +
                "<br>" +
                "Clicca qui per vedere la tua cartolina regalo!" +
                "</a>"
        case 'panettone':
            return "donare un panettone sospeso.<br><br>" +
                "Il panettone è l’emblema del Natale e della condivisione, evoca il calore degli affetti più cari e dello stare in famiglia.<br>" +
                "Tuttavia, ogni anno sono sempre di più le persone che si trovano a vivere in stato di disagio.<br>" +
                "Il panettone può così diventare un piccolo gesto per colmare, in parte, un grande bisogno e aiutare chi è in difficoltà a sentirsi meno sole nel giorno di Natale.<br><br>" +
                "Da parte della famiglia che richiederà il panettone a 'Casa Jannacci' tramite " +
                "<a href='http://panettonesospeso.org/' target='_blank'>L’Associazione Panettone Sospeso ETS</a>, grazie di cuore!<br><br>" +
                "<img src='./assets/img/panettone.jpg' width='700' height='711'>"
    }
}
