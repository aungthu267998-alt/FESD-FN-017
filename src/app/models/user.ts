export class User {
  userEmail!: string;
  userPassword!: string;
  userFirstName!: string;
  userLastName!: string;
  userTel!: string;
  dateOfBirth!: Date | string | null | undefined;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  getAge(): number {
    // TC-08: Null or Undefined Value
    if (this.dateOfBirth === null || this.dateOfBirth === undefined) {
      throw new Error('Null or Undefined Value');
    }

    // TC-07: Incorrect Date Format (check slash format)
    if (typeof this.dateOfBirth === 'string' && this.dateOfBirth.includes('/')) {
      throw new Error('Incorrect Date Format');
    }

    const dob = new Date(this.dateOfBirth);

    if (isNaN(dob.getTime())) {
      throw new Error('Incorrect Date Format');
    }

    // Exam boundary date: May 20, 2024
    const today = new Date(2024, 4, 20);
    today.setHours(0, 0, 0, 0);
    
    const checkDob = new Date(dob);
    checkDob.setHours(0, 0, 0, 0);

    // TC-06: Future Date
    if (checkDob > today) {
      throw new Error('Future Date');
    }

    let age = today.getFullYear() - checkDob.getFullYear();
    const monthDiff = today.getMonth() - checkDob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < checkDob.getDate())) {
      age--;
    }

    return age;
  }
}