class Person {
    name: any;
    surname: any;
    city: any;
    street: any;
    houseNumber: any;
    flatNumber: any;
    dateOfBirth: any;
    phoneNumber: any;
    emailAddress: any;
    male: any;
    drivingLicense: any;
    comments: any;

    constructor() {
        this.name = '';
        this.surname = '';
        this.city = '';
        this.street = '';
        this.houseNumber = '';
        this.flatNumber = '';
        this.dateOfBirth = '';
        this.phoneNumber = '';
        this.emailAddress = '';
        this.male = '';
        this.drivingLicense = false;
        this.comments = '';
    }
}

export default Person;