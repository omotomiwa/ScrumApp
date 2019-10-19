export class Scrumuser {
    constructor(
        public fullname : string,
        public email: string,
        public password: string,
        public type: string,
        

    ){}
}

export class loginuser {
    constructor(
        public email: string,
        public password: string,
        public project: string

    ){}
}

