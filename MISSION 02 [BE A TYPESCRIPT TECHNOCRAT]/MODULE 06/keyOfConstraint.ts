interface richPeople {
  car: string;
  bike: string;
  cng: string;
}

type poorPeople1 = "car" | "bike" | "cng";
type poorPeople2 = keyof richPeople;

const people1: poorPeople1 = "cng";
const people2: poorPeople2 = "bike";
