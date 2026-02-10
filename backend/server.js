// bcs we import module add the extension too
import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`Sever is running on Port ${process.env.PORT}`);
});