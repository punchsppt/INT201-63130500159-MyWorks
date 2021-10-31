// 63130500159 Supapit Rattanataveesophon
// 2.1
let student = {id : 63130500159,                                    // เก็บรหัสนักศึกษา
               nameTitle : ["นางสาว", "Ms."],                       // ใช้ array เพื่อเก็บคำนำหน้าชื่อ ทั้งไทยและอังกฤษ
               name : ["ศุภาพิชญ์", "Supapit"],                        // ใช้ array เพื่อเก็บคำนำหน้าชื่อ ทั้งไทยและอังกฤษ
               surname : ["รัตนทวีโสภณ", "Rattanataveesophon"],       // ใช้ array เพื่อเก็บคำนำหน้าชื่อ ทั้งไทยและอังกฤษ
               coureId : {},                                        // ประกาศเป็น object ไว้ก่อน (จากข้อ 1 เปลี่ยนจากเก็บแบบ array 
                                                                        // เป็นเก็บ array ซ้อนใน object เพื่อให้สามารถเก็บค่ารหัสวิชาที่ลงทะเบียนได้ทุกตัว)
               gpa : {},                                            // ประกาศเป็น object ไว้ก่อน (จากข้อ 1 เปลี่ยนจากเก็บแบบ array 
                                                                        // เป็นเก็บ array ซ้อนใน object เพื่อให้สามารถเก็บค่าเกรดของวิชาที่เราได้)
               gpax : {}                                            // ประกาศเป็น object ไว้ก่อน (จากข้อ 1 เพิ่มมา 1 key โดยจะเก็บเป็นเกรดเฉลี่ยรวมของภาคการศึกษา)
               } ;

let course = {} ;                                                   // เพื่อเก็บข้อมูลของรายวิชา ประกาศเป็น object เปล่าไว้ก่อน

// ข้อมูลเทอม 1/2563
student.coureId = ["GEN101", "GEN121", "INT100", "INT101", "INT102", "INT114", "LNG220"] ;  // เก็บเป็น array ลงไปใน course id ของ student 
                                                                                                // เพื่อเก็บข้อมูลวิชาที่ลงทะเบียน
course.courseCredit = [1, 3, 3, 3, 1, 3, 3] ;                       // เก็บเป็น array ลงไปใน course credit ของ course เพื่อเก็บข้อมูลจำนวนหน่วยกิตของรายวิชา
student.gpa = ["A", "B", "B", "D+", "A", "C+", "B"] ;               // เก็บเป็น array ลงไปใน gpa ของ student เพื่อเก็บข้อมูลเกรดที่ได้ในรายวิชานั้น ๆ

console.log(student) ;
console.log(course) ;


 

 // 2.2 จำนวนหน่วยกิตที่ลงทะเบียน
 // เทอม
console.log("credit : " + course.courseCredit) ;

// ประกาศ sumcredits เพื่อรวมจำนวนหน่วยกิตที่ลงทะเบียนทั้งหมด
let sumCredits = course.courseCredit[0]+ course.courseCredit[1]+ 
                 course.courseCredit[2]+ course.courseCredit[3]+ 
                 course.courseCredit[4]+ course.courseCredit[5]+ 
                 course.courseCredit[6] ;

console.log("sum credits : " + sumCredits + " credits") ;



//Show all info
// console.log("Student id : " + student.id) ; 
// console.log("Student name : " + student.nameTitle[1] + " " + student.name[1] + " " + student.surname[1]) ;
// console.log("Course id : " + student.coureId) ;
// console.log("credit : " + course.courseCredit) ;
// console.log("sum credits : " + sumCredits + " credits") ;
// console.log("gpa : " + student.gpa) ;
 
// 2.3







 
