export class Student {
    id: number;
    name: string;
    email: string;
    birthday: string;

    constructor(id?: number, name?: string, email?: string, birthday?: string) {
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
        this.birthday = birthday || '';
    }
}
