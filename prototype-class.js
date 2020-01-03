// Differences prototype and class
//class
let personC = class{
    constructor(name, id){
        this.names = name;
        this.ids = id;
    }
    getDetails(){
        return `${this.names} :: ${this.ids}`;
    }
};

let add = new personC("adi", 123);
console.log(add.getDetails());

let employeeC = class extends personC{
    constructor(names, ids, salary){
        super(names, ids);
        this.salarys = salary;
    }
    employeeInfo(){
        return `${this.names} :: ${this.ids} :: ${this.salarys}`
    }
};

let addnew = new employeeC("adis", 456, 19000);
console.log(addnew.employeeInfo());

//prototype
let personP = function(name, id){
    this.names = name;
    this.ids = id;
}

personP.prototype.getDetails = function(){
    return `${this.names} :: ${this.ids}`;
}

let adds = new personP("sudo", 111);
console.log(adds.getDetails());

let employeeP = function(names, ids, salary){
    personP.call(this, names, ids);
    this.salarys = salary;
}

Object.setPrototypeOf(employeeP, personP.prototype);

employeeP.prototype.employeeInfos = function(){
    return `${this.names} :: ${this.ids} :: ${this.salarys}`;
}

let tambah = new employeeP("dudu", 222, 1203);
console.log(tambah.employeeInfos());