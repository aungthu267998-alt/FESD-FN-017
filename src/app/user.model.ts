export class User {
  userEmail!: string;
  userPassword!: string;
  userFirstName!: string;
  userLastName!: string;
  userTel!: string;
  dateOfBirth!: Date | string;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  getAge(): number {
    if (!this.dateOfBirth) {
      throw new Error('Null or Undefined Value');
    }

    const dob = new Date(this.dateOfBirth);
    if (isNaN(dob.getTime())) {
      throw new Error('Incorrect Date Format');
    }

    const today = new Date();
   
    if (dob > today) {
      throw new Error('Future Date');
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }
}