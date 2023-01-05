const getAllProducts = async(req,res) =>{
     await res.status(200).json({msg:"I am getAllProducts"});
}

const getAllProductsTesting = async(req,res) =>{
    await res.status(200).json({msg:"I am getAllProductsTesting"});
}

module.exports = {getAllProducts,getAllProductsTesting}