function FourWheeler(madeby, model, year,fuelType) {
    this.madeby = madeby;
    this.model = model;
    this.year = year;
    this.fuelType = fuelType;
  }
  
  FourWheeler.prototype.displayInfo = function () {
    console.log(`Brand : ${this.madeby} `);
    console.log(`Model : ${this.model}`)
    console.log(`year  : ${this.year}`)
    console.log(`fuel Type : ${this.fuelType}`)
  };

  function Car(madeby, model, year,fuelType,numOfDoors,numOfWheels,numOfSeats) {
    FourWheeler.call(this, madeby, model, year,fuelType);
    this.numOfDoors = numOfDoors;
    this.numOfWheels = numOfWheels;
    this.numOfSeats = numOfSeats;
  }
  
  Car.prototype = Object.create(FourWheeler.prototype);
  
  Car.prototype.displayCarInfo = function () {
    this.displayInfo();
    console.log(`Number of seats: ${this.numOfSeats} `)
    console.log(`Number of Doors: ${this.numOfDoors}`);
    console.log(`Number of wheels: ${this.numOfWheels}`);
  };
  
  const myCar = new Car('Tata', 'Safari', 2009,'Diesel',4,4,7);
  myCar.displayCarInfo();
  