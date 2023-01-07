const Product = require("../models/product");

const getAllProducts = async(req,res) =>{
    const {company,name,featured,sort,select} = req.query;
    const queryObject = {};
    if(company){
        queryObject.company = company;
    }
    if(featured){
        queryObject.featured = featured;
    }
    //search with iph ==> show iphone10 and iphone all name are available when include iph
    if(name){
        queryObject.name = {$regex:name, $options: "i"};
    }
    let apiData = Product.find(queryObject);
    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    // console.log(queryObject)
    //req.query for searching ?company=apple&name=watch
    const myData = await apiData;
     res.status(200).json({myData});
}

const getAllProductsTesting = async(req,res) =>{
    //sort name ascending-->
    // const myData = await Product.find(req.query).sort("name");
    //sort name descending--.>
    // const myData = await Product.find(req.query).sort("-name");
    // sort price descending-->
    // const myData = await Product.find(req.query).sort("name -price");
    const myData = await Product.find(req.query).select("name company");
     res.status(200).json({myData});
}

module.exports = {getAllProducts,getAllProductsTesting}