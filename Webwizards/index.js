import Artist from "../model/user.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    // const {Fullname,email,Password,confirmPassword} = await req.body;
    const {Fullname,email,Password,confirmPassword} = await req.body;
    const artist = await Artist.findOne({ email });
    if (artist) {
      return res.status(400).json({ message: "User already exists" }); //returns the value and work hi done!
    }
    const hashPassword = await bcryptjs.hash(Password,10);
    const RegisteredArtist = await new Artist({
      Fullname:Fullname,
      email:email,
      Password:hashPassword,
      confirmPassword:confirmPassword
      // confirmPassword: confirmPassword
    });
    await RegisteredArtist.save();
    res.status(200).render(index).json({message: "User registered successfully",Artist:{
      _id:RegisteredArtist._id,
      Fullname: RegisteredArtist.Fullname,
      email: RegisteredArtist.email,
    }})
  } 
  catch (error) {
    console.log("Error", error.message);
    res.status(500).json({message :"server error"});
  }
  
};
export const login = async (req,res)=> {
  try{
    const {email,Password} = req.body;
    const artist =await Artist.findOne({email});
    const pass_same =await bcryptjs.compare(Password,artist.Password) 
  
    if(!artist){
      return res.status(400).json({message:"invalid email or signup if new here"}) }
    else if(!pass_same){
      return res.status(400).json({message:"Incorrect Password"})
                 }
    else{
      return res.status(200).json({message:"Login Successful",artist:{
        _id: artist._id ,//for frontend..we declared artist for finding email so it's for that specific user
        Fullname: artist.Fullname,
        email: artist.email}
           })
        }
    }
    
  catch(error){
    console.log(error.message);
    res.status(500).json({message: "Internal server error"})
           }
}
