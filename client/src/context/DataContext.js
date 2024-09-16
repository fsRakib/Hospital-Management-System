"use client";
import React, { createContext, useContext, useState } from "react";

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const appointments = [
    {
      name: "Ques1daD",
      owner: "md. rakibul kabir",
      year: 2024,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2dscs",
      owner: "siam ahmed",
      year: 2024,
      type: "Term Test",
      mark: "Mark",
    },
    {
      name: "Ques2SCSCZSC",
      owner: "arka das",
      year: 2024,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2xvzcvzSnfgjhdtyaesegsegsdgstgw4twetw",
      owner: "robin ahmed",
      year: 2023,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2xzvzxvz",
      owner: "mahfuzul hasan siam",
      year: 2023,
      type: "Term Test",
      mark: "Mark",
    },
    {
      name: "Ques2vxfgsdvx",
      owner: "rakib",
      year: 2023,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2cbxcbxcbxc",
      owner: "rakib",
      year: 2022,
      type: "Term Test",
      mark: "Mark",
    },
    {
      name: "Ques2dgsdgzdzdgzdgzdgzd",
      owner: "rakib",
      year: 2022,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2afzsdfzdfzdf",
      owner: "rakib",
      year: 2021,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2zdgzdgzdgvzd",
      owner: "rakib",
      year: 2021,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2zdvzxdvzxdcvzxcv",
      owner: "rakib",
      year: 2021,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2zvxdvbxfcbx",
      owner: "rakib",
      year: 2020,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2bxxfvxbvxcbvxc",
      owner: "rakib",
      year: 2020,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2xxfbcnbcgncg",
      owner: "rakib",
      year: 2020,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2",
      owner: "rakib",
      year: 2019,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2",
      owner: "rakib",
      year: 2019,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2",
      owner: "rakib",
      year: 2019,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2",
      owner: "rakib",
      year: 2019,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2",
      owner: "rakib",
      year: 2019,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2",
      owner: "rakib",
      year: 2019,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2",
      owner: "rakib",
      year: 2019,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2",
      owner: "rakib",
      year: 2018,
      type: "Semester",
      mark: "Mark",
    },
    {
      name: "Ques2",
      owner: "rakib",
      year: 2018,
      type: "Semester",
      mark: "Mark",
    },
  ];

  const doctorInfo = [
    {
      name: "Rakib",
      dept: "Cardiology",
      qualification: "MBBS",
      age: "34",
      gender: "Male",
      specialist: "Heart",
      number: "+880 1881665711",
    },
    {
      name: "Sadia",
      dept: "Neurology",
      qualification: "MD",
      age: "42",
      gender: "Female",
      specialist: "Brain",
      number: "+880 1881665722",
    },
    {
      name: "Arif",
      dept: "Orthopedics",
      qualification: "MBBS, MS",
      age: "38",
      gender: "Male",
      specialist: "Bones",
      number: "+880 1881665733",
    },
    {
      name: "Maya",
      dept: "Dermatology",
      qualification: "MBBS",
      age: "29",
      gender: "Female",
      specialist: "Skin",
      number: "+880 1881665744",
    },
    {
      name: "Nabil",
      dept: "Pediatrics",
      qualification: "MBBS, MD",
      age: "35",
      gender: "Male",
      specialist: "Child Care",
      number: "+880 1881665755",
    },
    {
      name: "Ritu",
      dept: "Gynecology",
      qualification: "MBBS, MD",
      age: "39",
      gender: "Female",
      specialist: "Pregnancy",
      number: "+880 1881665766",
    },
    {
      name: "Farhan",
      dept: "Urology",
      qualification: "MBBS, MS",
      age: "45",
      gender: "Male",
      specialist: "Kidney",
      number: "+880 1881665777",
    },
    {
      name: "Ayesha",
      dept: "Ophthalmology",
      qualification: "MBBS",
      age: "31",
      gender: "Female",
      specialist: "Eye",
      number: "+880 1881665788",
    },
    {
      name: "Tariq",
      dept: "Endocrinology",
      qualification: "MD",
      age: "47",
      gender: "Male",
      specialist: "Diabetes",
      number: "+880 1881665799",
    },
    {
      name: "Nasrin",
      dept: "Gastroenterology",
      qualification: "MBBS, MD",
      age: "37",
      gender: "Female",
      specialist: "Digestive System",
      number: "+880 1881665800",
    },
    {
      name: "Zahid",
      dept: "Psychiatry",
      qualification: "MBBS, MD",
      age: "50",
      gender: "Male",
      specialist: "Mental Health",
      number: "+880 1881665811",
    },
    {
      name: "Hina",
      dept: "Oncology",
      qualification: "MD",
      age: "41",
      gender: "Female",
      specialist: "Cancer",
      number: "+880 1881665822",
    },
    {
      name: "Rafiq",
      dept: "Pulmonology",
      qualification: "MBBS, MD",
      age: "33",
      gender: "Male",
      specialist: "Lungs",
      number: "+880 1881665833",
    },
    {
      name: "Rubina",
      dept: "Radiology",
      qualification: "MBBS",
      age: "44",
      gender: "Female",
      specialist: "Imaging",
      number: "+880 1881665844",
    },
    {
      name: "Samir",
      dept: "Nephrology",
      qualification: "MBBS, MD",
      age: "36",
      gender: "Male",
      specialist: "Kidney",
      number: "+880 1881665855",
    },
    {
      name: "Kamal",
      dept: "Hematology",
      qualification: "MBBS, MS",
      age: "43",
      gender: "Male",
      specialist: "Blood Disorders",
      number: "+880 1881665866",
    },
    {
      name: "Zara",
      dept: "Rheumatology",
      qualification: "MBBS",
      age: "28",
      gender: "Female",
      specialist: "Joints",
      number: "+880 1881665877",
    },
    {
      name: "Asif",
      dept: "Anesthesiology",
      qualification: "MD",
      age: "40",
      gender: "Male",
      specialist: "Anesthesia",
      number: "+880 1881665888",
    },
    {
      name: "Shireen",
      dept: "Otolaryngology",
      qualification: "MBBS",
      age: "48",
      gender: "Female",
      specialist: "Ear, Nose, Throat",
      number: "+880 1881665899",
    },
    {
      name: "Salman",
      dept: "Dentistry",
      qualification: "BDS",
      age: "32",
      gender: "Male",
      specialist: "Teeth",
      number: "+880 1881665900",
    },
  ];

  const myReports = [
    {
      testName: "Blood test",
      result: "Negative",
      amount: "300 tk",
      comment: "Take rest",
    },
    {
      testName: "X-ray",
      result: "Normal",
      amount: "500 tk",
      comment: "No issues found",
    },
    {
      testName: "Urine test",
      result: "Positive",
      amount: "200 tk",
      comment: "Drink more water",
    },
    {
      testName: "MRI scan",
      result: "Clear",
      amount: "2000 tk",
      comment: "Follow up needed",
    },
    {
      testName: "CT scan",
      result: "Abnormal",
      amount: "1500 tk",
      comment: "Consult specialist",
    },
    {
      testName: "ECG",
      result: "Normal",
      amount: "800 tk",
      comment: "Heart function normal",
    },
    {
      testName: "Cholesterol test",
      result: "High",
      amount: "400 tk",
      comment: "Control diet",
    },
    {
      testName: "Liver function test",
      result: "Normal",
      amount: "600 tk",
      comment: "No abnormalities",
    },
    {
      testName: "Thyroid test",
      result: "Low",
      amount: "450 tk",
      comment: "Medication prescribed",
    },
    {
      testName: "Blood sugar test",
      result: "High",
      amount: "300 tk",
      comment: "Monitor diet and sugar intake",
    },
    {
      testName: "Allergy test",
      result: "Positive",
      amount: "700 tk",
      comment: "Avoid allergens",
    },
    {
      testName: "Vitamin D test",
      result: "Deficient",
      amount: "550 tk",
      comment: "Take supplements",
    },
    {
      testName: "Kidney function test",
      result: "Normal",
      amount: "650 tk",
      comment: "Kidney is functioning well",
    },
    {
      testName: "Hemoglobin test",
      result: "Low",
      amount: "350 tk",
      comment: "Take iron supplements",
    },
    {
      testName: "Eye test",
      result: "20/20",
      amount: "250 tk",
      comment: "No vision issues",
    },
    {
      testName: "Heart ultrasound",
      result: "Healthy",
      amount: "1800 tk",
      comment: "No abnormalities detected",
    },
    {
      testName: "Bone density test",
      result: "Low",
      amount: "900 tk",
      comment: "Calcium supplements recommended",
    },
    {
      testName: "Lung function test",
      result: "Normal",
      amount: "400 tk",
      comment: "No issues with lung capacity",
    },
    {
      testName: "Stool test",
      result: "Negative",
      amount: "350 tk",
      comment: "No signs of infection",
    },
    {
      testName: "HIV test",
      result: "Negative",
      amount: "1000 tk",
      comment: "No further tests required",
    },
  ];
  const cabinRoomList = [
    {
      name: "cabin-1",
      roomNumber: "201-B",
      assignedNurse: "Mrs. Tanjid Khan",
      supervisingDoctor: "Dr. Younius Khan",
      caseSummary: "Need 24 hours to observe",
      bill: "3000 tk",
    },
    {
      name: "cabin-2",
      roomNumber: "202-A",
      assignedNurse: "Mr. Aminul Islam",
      supervisingDoctor: "Dr. Rakib Hasan",
      caseSummary: "Post-surgery recovery",
      bill: "4000 tk",
    },
    {
      name: "cabin-3",
      roomNumber: "203-C",
      assignedNurse: "Mrs. Salma Begum",
      supervisingDoctor: "Dr. Maria Haque",
      caseSummary: "Observation for 48 hours",
      bill: "3500 tk",
    },
    {
      name: "cabin-4",
      roomNumber: "204-D",
      assignedNurse: "Ms. Faria Khan",
      supervisingDoctor: "Dr. Faruk Ahmed",
      caseSummary: "Routine checkup",
      bill: "3200 tk",
    },
    {
      name: "cabin-5",
      roomNumber: "205-B",
      assignedNurse: "Mr. Shahidul Islam",
      supervisingDoctor: "Dr. Sarah Rahman",
      caseSummary: "Patient recovering well",
      bill: "5000 tk",
    },
    {
      name: "cabin-6",
      roomNumber: "206-A",
      assignedNurse: "Mrs. Anika Zaman",
      supervisingDoctor: "Dr. Karim Ullah",
      caseSummary: "Undergoing treatment for infection",
      bill: "4200 tk",
    },
    {
      name: "cabin-7",
      roomNumber: "207-C",
      assignedNurse: "Mr. Sadiq Rahman",
      supervisingDoctor: "Dr. Fahim Ahsan",
      caseSummary: "Need 48 hours for further tests",
      bill: "3800 tk",
    },
    {
      name: "cabin-8",
      roomNumber: "208-B",
      assignedNurse: "Ms. Laila Chowdhury",
      supervisingDoctor: "Dr. Kamal Uddin",
      caseSummary: "Post-accident care",
      bill: "6000 tk",
    },
    {
      name: "cabin-9",
      roomNumber: "209-A",
      assignedNurse: "Mrs. Tania Noor",
      supervisingDoctor: "Dr. Shahed Malik",
      caseSummary: "Patient stable, needs observation",
      bill: "3400 tk",
    },
    {
      name: "cabin-10",
      roomNumber: "210-C",
      assignedNurse: "Mr. Omar Farooq",
      supervisingDoctor: "Dr. Salim Sheikh",
      caseSummary: "Critical condition, constant monitoring",
      bill: "8000 tk",
    },
    {
      name: "cabin-11",
      roomNumber: "211-B",
      assignedNurse: "Mrs. Nazia Rahman",
      supervisingDoctor: "Dr. Jamil Haque",
      caseSummary: "Observation for 72 hours",
      bill: "4500 tk",
    },
    {
      name: "cabin-12",
      roomNumber: "212-A",
      assignedNurse: "Ms. Rima Sultana",
      supervisingDoctor: "Dr. Afzal Hossain",
      caseSummary: "Awaiting test results",
      bill: "3600 tk",
    },
    {
      name: "cabin-13",
      roomNumber: "213-D",
      assignedNurse: "Mr. Iqbal Khan",
      supervisingDoctor: "Dr. Nasrin Jahan",
      caseSummary: "Undergoing treatment for high fever",
      bill: "3300 tk",
    },
    {
      name: "cabin-14",
      roomNumber: "214-B",
      assignedNurse: "Mrs. Sumaiya Khatun",
      supervisingDoctor: "Dr. Imran Siddique",
      caseSummary: "Post-op recovery, 48-hour observation",
      bill: "5200 tk",
    },
    {
      name: "cabin-15",
      roomNumber: "215-A",
      assignedNurse: "Mr. Rahat Choudhury",
      supervisingDoctor: "Dr. Mahbub Alam",
      caseSummary: "Stable condition, under treatment",
      bill: "3100 tk",
    },
    {
      name: "cabin-16",
      roomNumber: "216-C",
      assignedNurse: "Ms. Noor Jahan",
      supervisingDoctor: "Dr. Tahmina Rahman",
      caseSummary: "Routine post-surgery check",
      bill: "3700 tk",
    },
    {
      name: "cabin-17",
      roomNumber: "217-B",
      assignedNurse: "Mrs. Lubna Chowdhury",
      supervisingDoctor: "Dr. Ehsan Ahmed",
      caseSummary: "Under treatment for viral infection",
      bill: "4300 tk",
    },
    {
      name: "cabin-18",
      roomNumber: "218-A",
      assignedNurse: "Mr. Jamal Khan",
      supervisingDoctor: "Dr. Kazi Rahim",
      caseSummary: "Patient needs extended care",
      bill: "5400 tk",
    },
    {
      name: "cabin-19",
      roomNumber: "219-D",
      assignedNurse: "Ms. Arifa Khan",
      supervisingDoctor: "Dr. Shakib Hasan",
      caseSummary: "Scheduled for surgery",
      bill: "7500 tk",
    },
    {
      name: "cabin-20",
      roomNumber: "220-B",
      assignedNurse: "Mr. Hasan Hossain",
      supervisingDoctor: "Dr. Tasnim Rahman",
      caseSummary: "Under observation for 24 hours",
      bill: "4100 tk",
    },
  ];

  const wardRoomList = [
    {
      name: "ward-1",
      roomNumber: "201-B",
      assignedNurse: "Mrs. Tanjid Khan",
      supervisingDoctor: "Dr. Younius Khan",
      caseSummary: "Need 24 hours to observe",
      bill: "3000 tk",
    },
    {
      name: "ward-2",
      roomNumber: "202-A",
      assignedNurse: "Mr. Aminul Islam",
      supervisingDoctor: "Dr. Rakib Hasan",
      caseSummary: "Post-surgery recovery",
      bill: "4000 tk",
    },
    {
      name: "ward-3",
      roomNumber: "203-C",
      assignedNurse: "Mrs. Salma Begum",
      supervisingDoctor: "Dr. Maria Haque",
      caseSummary: "Observation for 48 hours",
      bill: "3500 tk",
    },
    {
      name: "ward-4",
      roomNumber: "204-D",
      assignedNurse: "Ms. Faria Khan",
      supervisingDoctor: "Dr. Faruk Ahmed",
      caseSummary: "Routine checkup",
      bill: "3200 tk",
    },
    {
      name: "ward-5",
      roomNumber: "205-B",
      assignedNurse: "Mr. Shahidul Islam",
      supervisingDoctor: "Dr. Sarah Rahman",
      caseSummary: "Patient recovering well",
      bill: "5000 tk",
    },
    {
      name: "ward-6",
      roomNumber: "206-A",
      assignedNurse: "Mrs. Anika Zaman",
      supervisingDoctor: "Dr. Karim Ullah",
      caseSummary: "Undergoing treatment for infection",
      bill: "4200 tk",
    },
    {
      name: "ward-7",
      roomNumber: "207-C",
      assignedNurse: "Mr. Sadiq Rahman",
      supervisingDoctor: "Dr. Fahim Ahsan",
      caseSummary: "Need 48 hours for further tests",
      bill: "3800 tk",
    },
    {
      name: "ward-8",
      roomNumber: "208-B",
      assignedNurse: "Ms. Laila Chowdhury",
      supervisingDoctor: "Dr. Kamal Uddin",
      caseSummary: "Post-accident care",
      bill: "6000 tk",
    },
    {
      name: "ward-9",
      roomNumber: "209-A",
      assignedNurse: "Mrs. Tania Noor",
      supervisingDoctor: "Dr. Shahed Malik",
      caseSummary: "Patient stable, needs observation",
      bill: "3400 tk",
    },
    {
      name: "ward-10",
      roomNumber: "210-C",
      assignedNurse: "Mr. Omar Farooq",
      supervisingDoctor: "Dr. Salim Sheikh",
      caseSummary: "Critical condition, constant monitoring",
      bill: "8000 tk",
    },
    {
      name: "ward-11",
      roomNumber: "211-B",
      assignedNurse: "Mrs. Nazia Rahman",
      supervisingDoctor: "Dr. Jamil Haque",
      caseSummary: "Observation for 72 hours",
      bill: "4500 tk",
    },
    {
      name: "ward-12",
      roomNumber: "212-A",
      assignedNurse: "Ms. Rima Sultana",
      supervisingDoctor: "Dr. Afzal Hossain",
      caseSummary: "Awaiting test results",
      bill: "3600 tk",
    },
    {
      name: "ward-13",
      roomNumber: "213-D",
      assignedNurse: "Mr. Iqbal Khan",
      supervisingDoctor: "Dr. Nasrin Jahan",
      caseSummary: "Undergoing treatment for high fever",
      bill: "3300 tk",
    },
    {
      name: "ward-14",
      roomNumber: "214-B",
      assignedNurse: "Mrs. Sumaiya Khatun",
      supervisingDoctor: "Dr. Imran Siddique",
      caseSummary: "Post-op recovery, 48-hour observation",
      bill: "5200 tk",
    },
    {
      name: "ward-15",
      roomNumber: "215-A",
      assignedNurse: "Mr. Rahat Choudhury",
      supervisingDoctor: "Dr. Mahbub Alam",
      caseSummary: "Stable condition, under treatment",
      bill: "3100 tk",
    },
    {
      name: "ward-16",
      roomNumber: "216-C",
      assignedNurse: "Ms. Noor Jahan",
      supervisingDoctor: "Dr. Tahmina Rahman",
      caseSummary: "Routine post-surgery check",
      bill: "3700 tk",
    },
    {
      name: "ward-17",
      roomNumber: "217-B",
      assignedNurse: "Mrs. Lubna Chowdhury",
      supervisingDoctor: "Dr. Ehsan Ahmed",
      caseSummary: "Under treatment for viral infection",
      bill: "4300 tk",
    },
    {
      name: "ward-18",
      roomNumber: "218-A",
      assignedNurse: "Mr. Jamal Khan",
      supervisingDoctor: "Dr. Kazi Rahim",
      caseSummary: "Patient needs extended care",
      bill: "5400 tk",
    },
    {
      name: "ward-19",
      roomNumber: "219-D",
      assignedNurse: "Ms. Arifa Khan",
      supervisingDoctor: "Dr. Shakib Hasan",
      caseSummary: "Scheduled for surgery",
      bill: "7500 tk",
    },
    {
      name: "ward-20",
      roomNumber: "220-B",
      assignedNurse: "Mr. Hasan Hossain",
      supervisingDoctor: "Dr. Tasnim Rahman",
      caseSummary: "Under observation for 24 hours",
      bill: "4100 tk",
    },
  ];
  const availableTest = [
    {
      name: "Blood test",
      amount: "300 tk",
      time: "07:30 PM",
    },
    {
      name: "X-ray",
      amount: "500 tk",
      time: "08:00 AM",
    },
    {
      name: "MRI Scan",
      amount: "3000 tk",
      time: "10:30 AM",
    },
    {
      name: "CT Scan",
      amount: "4000 tk",
      time: "11:00 AM",
    },
    {
      name: "Urine test",
      amount: "200 tk",
      time: "09:00 AM",
    },
    {
      name: "ECG",
      amount: "1500 tk",
      time: "02:00 PM",
    },
    {
      name: "Cholesterol test",
      amount: "600 tk",
      time: "03:00 PM",
    },
    {
      name: "Blood Sugar test",
      amount: "350 tk",
      time: "08:45 AM",
    },
    {
      name: "Liver Function test",
      amount: "1200 tk",
      time: "12:00 PM",
    },
    {
      name: "Kidney Function test",
      amount: "1000 tk",
      time: "01:30 PM",
    },
    {
      name: "HIV test",
      amount: "1800 tk",
      time: "04:00 PM",
    },
    {
      name: "Thyroid Function test",
      amount: "900 tk",
      time: "10:00 AM",
    },
    {
      name: "Pregnancy test",
      amount: "300 tk",
      time: "09:15 AM",
    },
    {
      name: "Vitamin D test",
      amount: "700 tk",
      time: "01:00 PM",
    },
    {
      name: "Complete Blood Count",
      amount: "500 tk",
      time: "02:45 PM",
    },
    {
      name: "Urine Culture test",
      amount: "600 tk",
      time: "03:30 PM",
    },
    {
      name: "Lipid Profile test",
      amount: "1200 tk",
      time: "11:30 AM",
    },
    {
      name: "Hemoglobin test",
      amount: "300 tk",
      time: "07:00 PM",
    },
    {
      name: "Allergy test",
      amount: "2500 tk",
      time: "05:00 PM",
    },
    {
      name: "Bone Density test",
      amount: "2000 tk",
      time: "06:00 PM",
    },
  ];

  const ambulanceList = [
    {
      driverName: "Md. Karim Rahman",
      number: "+880 1777266489",
      dutyTime: "06:00 PM",
    },
    {
      driverName: "Ali Hossain",
      number: "+880 1882365479",
      dutyTime: "08:00 AM",
    },
    {
      driverName: "Shahidul Islam",
      number: "+880 1765432178",
      dutyTime: "07:30 AM",
    },
    {
      driverName: "Rahim Uddin",
      number: "+880 1953467281",
      dutyTime: "09:00 AM",
    },
    {
      driverName: "Mahmud Khan",
      number: "+880 1938475629",
      dutyTime: "12:00 PM",
    },
    {
      driverName: "Hasan Ahmed",
      number: "+880 1734598273",
      dutyTime: "02:00 PM",
    },
    {
      driverName: "Farid Hossain",
      number: "+880 1793847564",
      dutyTime: "04:00 PM",
    },
    {
      driverName: "Sohail Khan",
      number: "+880 1612349876",
      dutyTime: "06:30 PM",
    },
    {
      driverName: "Azizur Rahman",
      number: "+880 1993765432",
      dutyTime: "08:30 PM",
    },
    {
      driverName: "Mamun Kabir",
      number: "+880 1718273645",
      dutyTime: "10:00 PM",
    },
    {
      driverName: "Bashir Hossain",
      number: "+880 1647823659",
      dutyTime: "07:00 AM",
    },
    {
      driverName: "Jamal Uddin",
      number: "+880 1758493726",
      dutyTime: "11:00 AM",
    },
    {
      driverName: "Faisal Ahmed",
      number: "+880 1918273645",
      dutyTime: "01:00 PM",
    },
    {
      driverName: "Salman Rahman",
      number: "+880 1612376458",
      dutyTime: "03:00 PM",
    },
    {
      driverName: "Kamal Hossain",
      number: "+880 1778265347",
      dutyTime: "05:00 PM",
    },
    {
      driverName: "Rafiq Ali",
      number: "+880 1789654321",
      dutyTime: "09:30 PM",
    },
    {
      driverName: "Nazim Uddin",
      number: "+880 1963748592",
      dutyTime: "11:00 PM",
    },
    {
      driverName: "Tariq Islam",
      number: "+880 1865473821",
      dutyTime: "05:30 AM",
    },
    {
      driverName: "Mustafizur Rahman",
      number: "+880 1876543219",
      dutyTime: "06:00 AM",
    },
    {
      driverName: "Nasir Hossain",
      number: "+880 1756348279",
      dutyTime: "08:30 AM",
    },
  ];
  const emergencyContactList = [
    {
      name: "Dr. Provash Roy",
      dept: "Urology",
      number: "+880 1883266503",
      dutyTime: "08:30 AM",
    },
    {
      name: "Dr. Farzana Akhter",
      dept: "Cardiology",
      number: "+880 1718266479",
      dutyTime: "10:00 AM",
    },
    {
      name: "Dr. Shakil Ahmed",
      dept: "Orthopedics",
      number: "+880 1623476523",
      dutyTime: "09:00 AM",
    },
    {
      name: "Dr. Nazrul Islam",
      dept: "Neurology",
      number: "+880 1736471823",
      dutyTime: "11:00 AM",
    },
    {
      name: "Dr. Mahfuz Alam",
      dept: "Dermatology",
      number: "+880 1853467281",
      dutyTime: "12:30 PM",
    },
    {
      name: "Dr. Sabrina Hossain",
      dept: "Pediatrics",
      number: "+880 1783947561",
      dutyTime: "01:00 PM",
    },
    {
      name: "Dr. Tanvir Khan",
      dept: "Gastroenterology",
      number: "+880 1938475629",
      dutyTime: "02:30 PM",
    },
    {
      name: "Dr. Farid Ahmed",
      dept: "Pulmonology",
      number: "+880 1678938475",
      dutyTime: "03:00 PM",
    },
    {
      name: "Dr. Samira Khan",
      dept: "ENT",
      number: "+880 1765432178",
      dutyTime: "08:00 AM",
    },
    {
      name: "Dr. Kamal Uddin",
      dept: "Nephrology",
      number: "+880 1645379826",
      dutyTime: "04:00 PM",
    },
    {
      name: "Dr. Rubel Sarker",
      dept: "Oncology",
      number: "+880 1912376458",
      dutyTime: "09:30 AM",
    },
    {
      name: "Dr. Monira Begum",
      dept: "Gynecology",
      number: "+880 1857493629",
      dutyTime: "02:00 PM",
    },
    {
      name: "Dr. Taufiq Rahman",
      dept: "Ophthalmology",
      number: "+880 1965847321",
      dutyTime: "10:30 AM",
    },
    {
      name: "Dr. Aminul Islam",
      dept: "Cardiology",
      number: "+880 1987654321",
      dutyTime: "03:30 PM",
    },
    {
      name: "Dr. Jamil Hassan",
      dept: "Neurology",
      number: "+880 1648273659",
      dutyTime: "04:30 PM",
    },
    {
      name: "Dr. Sharmin Akhter",
      dept: "Pediatrics",
      number: "+880 1749827364",
      dutyTime: "06:00 PM",
    },
    {
      name: "Dr. Omar Faruq",
      dept: "Dermatology",
      number: "+880 1687425369",
      dutyTime: "07:00 PM",
    },
    {
      name: "Dr. Hasan Mahmud",
      dept: "Urology",
      number: "+880 1789374628",
      dutyTime: "08:00 PM",
    },
    {
      name: "Dr. Nusrat Jahan",
      dept: "Orthopedics",
      number: "+880 1674382719",
      dutyTime: "09:00 PM",
    },
    {
      name: "Dr. Fahim Rahman",
      dept: "Gastroenterology",
      number: "+880 1938471628",
      dutyTime: "10:00 PM",
    },
  ];
  const nurseInfo = [
    {
      name: "Mrs. Rokeya Hosssem",
      gender: "Female",
      allocation: "R-504C",
      address: "DakhainKhan, Airport, Dhaka",
      number: "+880 135790378",
    },
    {
      name: "Mr. Jamal Uddin",
      gender: "Male",
      allocation: "R-302A",
      address: "Bashundhara, Dhaka",
      number: "+880 1728346578",
    },
    {
      name: "Ms. Sharmin Akter",
      gender: "Female",
      allocation: "R-210B",
      address: "Mohammadpur, Dhaka",
      number: "+880 1672384927",
    },
    {
      name: "Mr. Habib Rahman",
      gender: "Male",
      allocation: "R-102D",
      address: "Banani, Dhaka",
      number: "+880 1827364859",
    },
    {
      name: "Mrs. Ayesha Siddiqua",
      gender: "Female",
      allocation: "R-403B",
      address: "Gulshan, Dhaka",
      number: "+880 1738294657",
    },
    {
      name: "Mr. Asaduzzaman",
      gender: "Male",
      allocation: "R-301C",
      address: "Mirpur, Dhaka",
      number: "+880 1627483921",
    },
    {
      name: "Ms. Nusrat Jahan",
      gender: "Female",
      allocation: "R-504A",
      address: "Dhanmondi, Dhaka",
      number: "+880 1982734658",
    },
    {
      name: "Mr. Firoz Ahmed",
      gender: "Male",
      allocation: "R-206D",
      address: "Uttara, Dhaka",
      number: "+880 1792847563",
    },
    {
      name: "Mrs. Rahima Khatun",
      gender: "Female",
      allocation: "R-305B",
      address: "Savar, Dhaka",
      number: "+880 1847362849",
    },
    {
      name: "Mr. Shahin Alam",
      gender: "Male",
      allocation: "R-102B",
      address: "Malibagh, Dhaka",
      number: "+880 1638492751",
    },
    {
      name: "Ms. Mahbuba Begum",
      gender: "Female",
      allocation: "R-202A",
      address: "Tejgaon, Dhaka",
      number: "+880 1928374650",
    },
    {
      name: "Mr. Kamrul Islam",
      gender: "Male",
      allocation: "R-208C",
      address: "Khilgaon, Dhaka",
      number: "+880 1762483927",
    },
    {
      name: "Mrs. Bilkis Banu",
      gender: "Female",
      allocation: "R-307A",
      address: "Rampura, Dhaka",
      number: "+880 1728394856",
    },
    {
      name: "Mr. Taufiq Rahman",
      gender: "Male",
      allocation: "R-405D",
      address: "Baridhara, Dhaka",
      number: "+880 1837462839",
    },
    {
      name: "Ms. Fatema Akter",
      gender: "Female",
      allocation: "R-209B",
      address: "Shantinagar, Dhaka",
      number: "+880 1657392846",
    },
    {
      name: "Mr. Moin Uddin",
      gender: "Male",
      allocation: "R-506A",
      address: "Agargaon, Dhaka",
      number: "+880 1827364859",
    },
    {
      name: "Mrs. Asma Khatun",
      gender: "Female",
      allocation: "R-306C",
      address: "Lalmatia, Dhaka",
      number: "+880 1728394857",
    },
    {
      name: "Mr. Mahbubur Rahman",
      gender: "Male",
      allocation: "R-408B",
      address: "Farmgate, Dhaka",
      number: "+880 1638471928",
    },
    {
      name: "Ms. Rehana Siddique",
      gender: "Female",
      allocation: "R-309D",
      address: "Jatrabari, Dhaka",
      number: "+880 1783927462",
    },
    {
      name: "Mr. Aminul Islam",
      gender: "Male",
      allocation: "R-407A",
      address: "Shahbagh, Dhaka",
      number: "+880 1827364957",
    },
  ];
  const myBillList = [
    {
      bill_ID: "5132",
      date: "07 Apr 2024",
      amount: "5000 tk",
      description: "Appendice operation done",
      payment_Status: "Paid",
      method: "Card",
    },
    {
      bill_ID: "5133",
      date: "08 Apr 2024",
      amount: "3000 tk",
      description: "General checkup",
      payment_Status: "Unpaid",
      method: "Cash",
    },
    {
      bill_ID: "5134",
      date: "09 Apr 2024",
      amount: "12000 tk",
      description: "Heart surgery",
      payment_Status: "Paid",
      method: "Bank",
    },
    {
      bill_ID: "5135",
      date: "10 Apr 2024",
      amount: "7500 tk",
      description: "Orthopedic treatment",
      payment_Status: "Unpaid",
      method: "Nagad",
    },
    {
      bill_ID: "5136",
      date: "11 Apr 2024",
      amount: "4000 tk",
      description: "Maternity care",
      payment_Status: "Paid",
      method: "Baksh",
    },
    {
      bill_ID: "5137",
      date: "12 Apr 2024",
      amount: "6800 tk",
      description: "Neurology consultation",
      payment_Status: "Unpaid",
      method: "Rocket",
    },
    {
      bill_ID: "5138",
      date: "13 Apr 2024",
      amount: "8500 tk",
      description: "Kidney dialysis",
      payment_Status: "Paid",
      method: "Nagad",
    },
    {
      bill_ID: "5139",
      date: "14 Apr 2024",
      amount: "3500 tk",
      description: "Pediatric consultation",
      payment_Status: "Paid",
      method: "Card",
    },
    {
      bill_ID: "5140",
      date: "15 Apr 2024",
      amount: "6000 tk",
      description: "ENT surgery",
      payment_Status: "Unpaid",
      method: "Cash",
    },
    {
      bill_ID: "5141",
      date: "16 Apr 2024",
      amount: "9200 tk",
      description: "Dental care",
      payment_Status: "Paid",
      method: "Bank",
    },
    {
      bill_ID: "5142",
      date: "17 Apr 2024",
      amount: "7800 tk",
      description: "Liver surgery",
      payment_Status: "Unpaid",
      method: "Baksh",
    },
    {
      bill_ID: "5143",
      date: "18 Apr 2024",
      amount: "4300 tk",
      description: "Dermatology consultation",
      payment_Status: "Paid",
      method: "Rocket",
    },
    {
      bill_ID: "5144",
      date: "19 Apr 2024",
      amount: "5200 tk",
      description: "Eye surgery",
      payment_Status: "Unpaid",
      method: "Nagad",
    },
    {
      bill_ID: "5145",
      date: "20 Apr 2024",
      amount: "9700 tk",
      description: "Gynecology consultation",
      payment_Status: "Paid",
      method: "Card",
    },
    {
      bill_ID: "5146",
      date: "21 Apr 2024",
      amount: "6400 tk",
      description: "Urology treatment",
      payment_Status: "Unpaid",
      method: "Baksh",
    },
    {
      bill_ID: "5147",
      date: "22 Apr 2024",
      amount: "7800 tk",
      description: "Oncology treatment",
      payment_Status: "Paid",
      method: "Bank",
    },
    {
      bill_ID: "5148",
      date: "23 Apr 2024",
      amount: "3000 tk",
      description: "General checkup",
      payment_Status: "Paid",
      method: "Cash",
    },
    {
      bill_ID: "5149",
      date: "24 Apr 2024",
      amount: "4900 tk",
      description: "Cardiology consultation",
      payment_Status: "Unpaid",
      method: "Rocket",
    },
    {
      bill_ID: "5150",
      date: "25 Apr 2024",
      amount: "5600 tk",
      description: "Orthopedic surgery",
      payment_Status: "Paid",
      method: "Nagad",
    },
    {
      bill_ID: "5151",
      date: "26 Apr 2024",
      amount: "4200 tk",
      description: "Pulmonology consultation",
      payment_Status: "Unpaid",
      method: "Card",
    },
  ];
  const myPreviousHistory = [
    {
      date: "12 Jan 2023",
      treatment: "Knee Replacement",
      doctor: "Dr. Alice Johnson",
      previous_medicine: "Ibuprofen, Tramadol",
      case_summary: "Successful surgery, requires physical therapy.",
    },
    {
      date: "05 Feb 2023",
      treatment: "Appendectomy",
      doctor: "Dr. Mark Smith",
      previous_medicine: "Ciprofloxacin, Painkillers",
      case_summary: "Removed inflamed appendix, follow-up needed in 2 weeks.",
    },
    {
      date: "14 Mar 2023",
      treatment: "Cataract Surgery",
      doctor: "Dr. Maria Sanchez",
      previous_medicine: "Prednisolone, Timolol",
      case_summary: "Vision improved, continue eye drops for 4 weeks.",
    },
    {
      date: "20 Apr 2023",
      treatment: "Hip Replacement",
      doctor: "Dr. Robert Brown",
      previous_medicine: "Gabapentin, Naproxen",
      case_summary: "Patient should avoid heavy lifting for 6 weeks.",
    },
    {
      date: "10 May 2023",
      treatment: "Gallbladder Removal",
      doctor: "Dr. Sarah Lee",
      previous_medicine: "Antibiotics, Painkillers",
      case_summary: "No complications, follow a low-fat diet.",
    },
    {
      date: "18 Jun 2023",
      treatment: "Fractured Arm",
      doctor: "Dr. David Wong",
      previous_medicine: "Acetaminophen, Ibuprofen",
      case_summary: "Arm casted, return in 6 weeks for evaluation.",
    },
    {
      date: "02 Jul 2023",
      treatment: "Asthma Attack",
      doctor: "Dr. Emily Davis",
      previous_medicine: "Salbutamol, Fluticasone",
      case_summary: "Respiratory function stabilized, continue inhaler.",
    },
    {
      date: "15 Aug 2023",
      treatment: "Kidney Stones",
      doctor: "Dr. John Carter",
      previous_medicine: "Tamsulosin, Painkillers",
      case_summary: "Stones passed, increase water intake to prevent recurrence.",
    },
    {
      date: "22 Sep 2023",
      treatment: "Migraine",
      doctor: "Dr. Paul Anderson",
      previous_medicine: "Sumatriptan, Naproxen",
      case_summary: "Symptom relief, avoid bright lights and stress.",
    },
    {
      date: "30 Sep 2023",
      treatment: "Anemia",
      doctor: "Dr. Olivia Hernandez",
      previous_medicine: "Iron supplements, Vitamin C",
      case_summary: "Dietary changes recommended, recheck blood levels in 3 months.",
    },
    {
      date: "05 Oct 2023",
      treatment: "Pneumonia",
      doctor: "Dr. Charles Nguyen",
      previous_medicine: "Amoxicillin, Paracetamol",
      case_summary: "Lung infection cleared, rest advised for 2 weeks.",
    },
    {
      date: "18 Oct 2023",
      treatment: "Skin Rash",
      doctor: "Dr. Sophia Martinez",
      previous_medicine: "Hydrocortisone cream, Antihistamines",
      case_summary: "Skin reaction reduced, avoid allergens.",
    },
    {
      date: "25 Oct 2023",
      treatment: "Diabetes Type 2",
      doctor: "Dr. William Wilson",
      previous_medicine: "Metformin, Insulin",
      case_summary: "Blood sugar stable, maintain regular monitoring.",
    },
    {
      date: "01 Nov 2023",
      treatment: "Hypertension",
      doctor: "Dr. Amanda Patel",
      previous_medicine: "Amlodipine, Losartan",
      case_summary: "Blood pressure controlled, monitor regularly.",
    },
    {
      date: "12 Dec 2023",
      treatment: "ACL Reconstruction",
      doctor: "Dr. Michael Clark",
      previous_medicine: "Oxycodone, Ibuprofen",
      case_summary: "Knee brace required for 8 weeks, begin physical therapy.",
    },
    {
      date: "20 Dec 2023",
      treatment: "Severe Allergic Reaction",
      doctor: "Dr. Nancy Thomas",
      previous_medicine: "Epinephrine, Antihistamines",
      case_summary: "Patient stabilized, avoid exposure to allergens.",
    },
    {
      date: "03 Jan 2024",
      treatment: "Bronchitis",
      doctor: "Dr. George White",
      previous_medicine: "Azithromycin, Cough Syrup",
      case_summary: "Infection cleared, no further complications.",
    },
    {
      date: "16 Jan 2024",
      treatment: "Sinusitis",
      doctor: "Dr. Hannah Harris",
      previous_medicine: "Fluticasone, Amoxicillin",
      case_summary: "Nasal congestion relieved, avoid cold environments.",
    },
    {
      date: "01 Feb 2024",
      treatment: "Back Pain",
      doctor: "Dr. Jason Taylor",
      previous_medicine: "Ibuprofen, Muscle Relaxants",
      case_summary: "Pain reduced, physical therapy recommended.",
    },
    {
      date: "18 Feb 2024",
      treatment: "Tonsillectomy",
      doctor: "Dr. Katherine Scott",
      previous_medicine: "Painkillers, Antibiotics",
      case_summary: "Post-surgery recovery successful, avoid spicy foods.",
    }
  ];
  

  return (
    <DataContext.Provider
      value={{
        appointments,
        doctorInfo,
        myReports,
        cabinRoomList,
        wardRoomList,
        availableTest,
        ambulanceList,
        emergencyContactList,
        nurseInfo,
        myBillList,
        myPreviousHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for consuming the data context
export const useDataContext = () => {
  return useContext(DataContext);
};
