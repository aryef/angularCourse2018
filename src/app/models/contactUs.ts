export class ContactUs{

    public constructor(
        public firstName?:string,
        public lastName?:string,
        public email?:string,
        public message?: string
    ){

    }

    public toString():string{

        return `
        First name: ${this.firstName}
        Last name: ${this.lastName}
        Email: ${this.email}
        Message: ${this.message}
        `
    }
}