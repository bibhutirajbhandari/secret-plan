// 1: Write a unit conversion program. The program should display a menu with options.
// 	MENU
// 	1) cm to m
// 	2) m to km
// 	3) cm to km
// 	4) km to cm
// 	5) km to m
// 	6) m to cm
// The program should exit if user enters 'q' or 'Q', else it should continuously display menu after particular conversion has taken place.

while (true) {
  let ans = prompt(
    "MENU \n 1. cm to m \t 2. m to km \t 3. cm to km \n 4. km to cm \n 5. km to m \n 6. m to cm"
  );

  if (ans === "q" || ans === "Q") {
    break;
  }

  switch (parseInt(ans)) {
    case 1:
      cmtom();
      break;
    case 2:
      mtokm();
      break;
    case 3:
      cmtokm();
      break;
    case 4:
      kmtocm();
      break;
    case 5:
      kmtom();
      break;
    case 6:
      mtocm();
      break;
    default:
      prompt("enter a valid choice");
      break;
  }
}

function cmtom() {
  const cm = prompt("enter a number");
  prompt(`${cm}cm -> ${cm / 100}m`);
}

function mtokm() {
  const m = prompt("enter a number");
  prompt(`${m}m-> ${m / 1000}m`);
}
function cmtokm() {
  const cm = prompt("enter a number");
  prompt(`${cm}cm -> ${cm / 1000} m`);
}

function kmtocm() {
  const km = prompt("enter a number");
  prompt(`${km}km -> ${km * 10000} cm`);
}

function kmtom() {
  const km = prompt("enter a number");
  prompt(`${km}km -> ${km * 1000}m`);
}

function mtocm() {
  const m = prompt("enter a number");
  prompt(`${m}m -> ${m * 100}cm`);
}
