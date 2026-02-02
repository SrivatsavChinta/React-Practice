export interface Member {
  name: string;
  gender: "Male" | "Female";
  age: number;
}

export const members: Member[] = [
  { name: "Aarav Sharma", gender: "Male", age: 28 },
  { name: "Ananya Verma", gender: "Female", age: 24 },
  { name: "Rohan Mehta", gender: "Male", age: 32 },
  { name: "Ishita Gupta", gender: "Female", age: 27 },
  { name: "Karan Malhotra", gender: "Male", age: 35 },
  { name: "Neha Kapoor", gender: "Female", age: 29 },
  { name: "Vikram Singh", gender: "Male", age: 41 },
  { name: "Pooja Nair", gender: "Female", age: 33 },
  { name: "Amit Joshi", gender: "Male", age: 26 },
  { name: "Sneha Iyer", gender: "Female", age: 31 },
  { name: "Rahul Chatterjee", gender: "Male", age: 38 },
  { name: "Meera Pillai", gender: "Female", age: 36 },
  { name: "Arjun Rao", gender: "Male", age: 23 },
  { name: "Kavya Reddy", gender: "Female", age: 25 },
  { name: "Siddharth Banerjee", gender: "Male", age: 34 },
  { name: "Nidhi Arora", gender: "Female", age: 28 },
  { name: "Manish Khanna", gender: "Male", age: 45 },
  { name: "Ritika Bansal", gender: "Female", age: 22 },
  { name: "Suresh Patil", gender: "Male", age: 39 },
  { name: "Alka Deshmukh", gender: "Female", age: 42 },
];

export const MEMBERS_LENGTH = members.length;
