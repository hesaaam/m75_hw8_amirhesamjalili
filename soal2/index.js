class Database {
    static CreateDatabase() {
        let db = {
            student: [],
            teacher: [],
            manager: [],
        }

        localStorage.setItem('database', JSON.stringify(db))
    }
    static Add(info, type) {
        let db = JSON.parse(localStorage.getItem("database"))
        let idx = db[type].findIndex(user => user._nationalID === info._nationalID)
        if (idx === -1) {
            db[type].push(info)
            localStorage.setItem("database", JSON.stringify(db))
        }

    }


    static Remove(id, type) {
        let db = JSON.parse(localStorage.getItem("database"))
        let idx = db[type].findIndex(user => user._nationalID === id)
        if (idx > -1) {
            db[type].splice(idx, 1)
            localStorage.setItem("database", JSON.stringify(db))
        }

    }

    static Find(id, type) {
        let db = JSON.parse(localStorage.getItem("database"))
        let idx = db[type].findIndex(user => user._nationalID === id)
        if (idx > -1) {
            return db[type][idx]
        }
        return {}

    }

    static Update(info, type) {
        let db = JSON.parse(localStorage.getItem("database"))
        let idx = db[type].findIndex(user => user._nationalID === info._nationalID)
        if (idx !== -1) {
            db[type].splice(idx, 1, info)
            localStorage.setItem("database", JSON.stringify(db))
        }

    }

}


class Student {

    constructor(fullname,
        birthday,
        age,
        address,
        nationalID,
        gender,
        phoneNumber,
        grade,
        studyYear,

    ) {

        this._fullname = fullname;
        this._birthday = birthday;
        this._phoneNumber = phoneNumber;
        this._nationalID = nationalID;
        this._gender = gender;
        this._age = age;
        this._address = address;
        this._grade = grade;
        this._studyYear = studyYear;
        Database.Add(this, "student")


    }

    get fullname() {
        return this._fullname;
    }
    set fullname(value) {

        this._fullname = value;
        Database.Update(this, "student")
        return;

    }
    get birthday() {
        return this._birthday;
    }
    set birthday(value) {

        this._birthday = value;
        Database.Update(this, "student")
        return;

    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {

        this._phoneNumber = value;
        Database.Update(this, "student")
        return;

    }
    get nationalID() {
        return this._nationalID;
    }
    set nationalID(value) {

        this._nationalID = value;
        Database.Update(this, "student")
        return;

    }
    get gender() {
        return this._gender;
    }
    set gender(value) {

        this._gender = value;
        Database.Update(this, "student")
        return;

    }
    get age() {
        return this._age;
    }
    set age(value) {

        this._age = value;
        Database.Update(this, "student")
        return;

    }
    get address() {
        return this._address;
    }
    set address(value) {

        this._address = value;
        Database.Update(this, "student")
        return;

    }
    get grade() {
        return this._grade;
    }
    set grade(value) {

        this._grade = value;
        Database.Update(this, "student")
        return;

    }
    get studyYear() {
        return this._studyYear;
    }
    set studyYear(value) {

        this._studyYear = value;
        Database.Update(this, "student")
        return;

    }


}



class Teacher {
    constructor(fullname,
        birthday,
        age,
        address,
        nationalID,
        gender,
        phoneNumber,
        Field,
        Email,
        salary) {

        this._fullname = fullname;
        this._birthday = birthday;
        this._age = age;
        this._address = address;
        this._nationalID = nationalID;
        this._gender = gender;
        this._phoneNumber = phoneNumber;
        this._Field = Field;
        this._Email = Email;
        this._salary = salary;
        Database.Add(this, "teacher");


    }

    get fullname() {
        return this._fullname;
    }

    set fullname(value) {
        this._fullname = value;
        Database.Update(this, "teacher", )
        return;
    }
    get birthday() {
        return this._birthday;
    }

    set birthday(value) {
        this._birthday = value;
        Database.Update(this, "teacher", )
        return;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
        Database.Update(this, "teacher", )
        return;
    }
    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
        Database.Update(this, "teacher", )
        return;
    }
    get nationalID() {
        return this._nationalID;
    }

    set nationalID(value) {
        this._nationalID = value;
        Database.Update(this, "teacher", )
        return;
    }
    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
        Database.Update(this, "teacher", )
        return;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
        Database.Update(this, "teacher", )
        return;
    }
    get Field() {
        return this._Field;
    }

    set Field(value) {
        this._Field = value;
        Database.Update(this, "teacher", )
        return;
    }
    get Email() {
        return this._Email;
    }

    set Email(value) {
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (reg.test(value)) {
            this._Email = value;
            Database.Update(this, "teacher", )
            return;

        }
    }
    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
        Database.Update(this, "teacher", )
        return;
    }
}



class Manager {
    constructor(fullname,
        birthday,
        age,
        address,
        nationalID,
        gender,
        phoneNumber,
        Email,
        salary,
        major) {

        this.fullname = fullname;
        this.birthday = birthday;
        this.age = age;
        this.address = address;
        this.nationalID = nationalID;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.Email = Email;
        this.salary = salary;
        this.major = major;
        Database.Add(this, "manager")


    }

    get fullname() {
        return this._fullname
    }

    set fullname(value) {
        this._fullname = value
        Database.Update(this, "manager")
        return;
    }

    get birthday() {
        return this._birthday
    }

    set birthday(value) {
        this._birthday = value
        Database.Update(this, "manager")
        return;
    }

    get age() {
        return this._age
    }

    set age(value) {
        this._age = value
        Database.Update(this, "manager")
        return;
    }

    get address() {
        return this._address
    }

    set address(value) {
        this._address = value
        Database.Update(this, "manager")
        return;
    }

    get nationalID() {
        return this._nationalID
    }

    set nationalID(value) {
        this._nationalID = value
        Database.Update(this, "manager")
        return;
    }

    get gender() {
        return this._gender
    }

    set gender(value) {
        this._gender = value
        Database.Update(this, "manager")
        return;
    }

    get phoneNumber() {
        return this._phoneNumber
    }

    set phoneNumber(value) {
        this._phoneNumber = value
        Database.Update(this, "manager")
        return;
    }

    get Email() {
        return this._Email
    }

    set Email(value) {
        this._Email = value
        Database.Update(this, "manager")
        return;
    }

    get salary() {
        return this._salary
    }

    set salary(value) {
        this._salary = value
        Database.Update(this, "manager")
        return;
    }

    get major() {
        return this._major
    }

    set major(value) {
        this._major = value
        Database.Update(this, "manager")
        return;
    }

}


Database.CreateDatabase()

let student1 = new Student(
    "Akbar motasel",
    "01/01/2000",
    "09121234567",
    "male",
    "1234567892",
    25,
    "chaharaye akharat",
    85,
    3
)

let student2 = new Student(
    "Mohamad moradi",
    "01/01/1995",
    "09121234567",
    "male",
    "231458795",
    30,
    "chaharaye akharat",
    85,
    3

)

let teacher1 = new Teacher(
    "Farid namazi",
    "02/04/1986",
    45,
    "chaharaye akharat",
    "666",
    "male",
    "09123654785",
    "history",
    "farid@gmail.com",
    "12,500,000t"

)


let manager1 = new Manager(
    "Hamid kardi",
    "02/04/1983",
    52,
    "abmangol",
    "312",
    "male",
    "09121124112",
    "hamid@gmail.com",
    "20,000,000t",
    "management",
)

// console.log(Database.Remove("312", "manager"));

let x = Database.Find("312", "manager")

console.log(x);