interface IDeveloper<T, X = null> {
  name: string;
  age: number;
  smartPhone: {
    brand: string;
    model: string;
  };
  smartWatch: T;
  bike?: X;
}

interface IPoorWatch {
  brand: string;
  heartRate: boolean;
  stopWatch: boolean;
}
interface IRichWatch {
  brand: string;
  heartRate: boolean;
  stopWatch: boolean;
  calling: boolean;
  calculator: boolean;
}
interface IRichBike {
  brand: string;
  engineCapacity: string;
}

const poorDeveloper: IDeveloper<IPoorWatch> = {
  name: "Mr. Poor",
  age: 21,
  smartPhone: {
    brand: "Xiaomi",
    model: "Note 11",
  },
  smartWatch: {
    brand: "Xiaomi",
    heartRate: true,
    stopWatch: true,
  },
  bike: null,
};

const richDeveloper: IDeveloper<IRichWatch, IRichBike> = {
  name: "Mr. Rich",
  age: 22,
  smartPhone: {
    brand: "Apple",
    model: "Iphone 17 pro max",
  },
  smartWatch: {
    brand: "Apple",
    calculator: true,
    calling: true,
    heartRate: true,
    stopWatch: true,
  },
  bike: {
    brand: "Yamaha",
    engineCapacity: "200cc",
  },
};
