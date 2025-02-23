const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'example.txt');

// // Read file
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data); // Convert Buffer to string UTF-8 ensures the content is properly converted into readable text.
//     }
// });

// //write file 
// fs.writeFile(filePath, "hello Nodejs", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("succesfully written"); 
//     }
// });

// //delete file 
// fs.unlink(filePath, (err) => {
//     if (err) {
//         console.log("Not deleted");   
//     } else {
//         console.log("deleted successfully");
        
//     }
// });

// //Make directory
// fs.mkdir("newDir", (err) => {
//     if (err) {
//          console.log("Not Created");   
//     } else {
//         console.log("Created successfully");
//      }
// });

// Remove directory
// fs.rmdir("/home/sujal/Documents/Sdac/newDir", (err) => {
//     if(err){
//         console.log("Not Removed");
//     } else {
//         console.log("Removed successfully");
        
//     }
// });