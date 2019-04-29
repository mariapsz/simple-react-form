class Person {
    name: any;
    surname: any;
    city: any;
    street: any;
    houseNumber: any;
    flatNumber: any;
    dateOfBirth: any;
    emailAddress: any;
    male: any;
    drivingLicense: boolean;
    comments: any;

    constructor() {
        this.name = '';
        this.surname = '';
        this.city = '';
        this.street = '';
        this.houseNumber = '';
        this.flatNumber = '';
        this.dateOfBirth = '';
        this.emailAddress = '';
        this.male = 'woman';
        this.drivingLicense = false;
        this.comments = '';
    }
}

export default Person;