export interface Person {
  id: string;
  title: "นาย" | "นาง" | "นางสาว";
  name: string;
  surname: string;
  date: string;
  dob: string;
  national: string;
  personalId: string;
  gender: "ผู้ชาย" | "ผู้หญิง" | "ไม่ระบุ";
  mobileCode: string;
  mobileNum: string;
  passport: string;
  expectSalary: string;
  division: string;
}
