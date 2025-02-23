// import
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

//create Connection 
mongoose.connect('mongodb://localhost:27017/DB')
.then(() => {
    console.log("Connected succesfully");
})
.catch((err) => {
    console.log(err);
});

//Define Schema
const DBSchema = new Schema({
    name: String,
    Salary: Number,
});

//Create model
const DBModel = new model("Item", DBSchema);

//CRUD OPERATION

//Insert
// const insertItem = async () => {
//     const data = new DBModel({
//         name: "Tom",
//         Salary: 12000,
//     });

//     const result = await data.save();
//     console.log(result);
    
// };
// insertItem();

//Find
// const findItem = async () => {
//     const data = await DBModel.find({name: "Tom"});
//     console.log(data);
    
// };
// findItem();

//Update 
// const updateItem = async () => {
//     const result = await DBModel.updateOne({name: "Tom"}, {$set: {Salary: 15000}});
//     console.log(result);
    
// };
// updateItem();

//delete
const deleteItem = async () => {
    const result = await DBModel.deleteOne({name: "Tom"});
    console.log(result);
};
deleteItem();