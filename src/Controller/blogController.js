const Blog = require("../Models/blogModel")

exports.addblog = async(req, res)=>{
    try {
        const {title, description, author, rating} = req.body;
        if(!title || !description){
            return res.status(401).json({message: "All fields are required"})
        }

        const existingblog = await Blog.findOne({title})
        if(existingblog){
            return res.status(401).json({message: "Blog already existed"})
        }

        const blog = await Blog.create({
            title,
            description,
            author,
            rating,
        
        })
        return res.status(201).json({message: "Blog Added Successfully", blog})
    } catch (error) {
        return res.status(500).json({message: "Something went wrong in adding blog ", error: error.message})
    }
}

exports.getblog = async(req,res)=>{
try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if(!blog){
        return res.status(404).json({message: "Blog not found"})
    }

    return res.status(201).json({message: "Blog Found Successfully", blog})
} catch (error) {
  return res.status(500).json({message: "Something went wrong"})   
}

}

exports.updateblog = async(req,res)=>{
    try {
        const { title, description, author, rating } = req.body;
        const id = req.params.id;
        const blog = await Blog.findByIdAndUpdate(id, {
            title, 
            description,
            author,
            rating
        }, {new: true, runValidators: true})

        if(!blog){
        return res.status(404).json({message: "Blog not found"})
    }

    return res.status(200).json({message: "Blog Updated Successfully", blog})
    } catch (error) {
        return res.status(500).json({message: "Something went wrong in updating", error: error.message})
    }
}

exports.deleteblog = async(req,res)=>{
    try {
        const id = req.params.id;
        const blog = await Blog.findByIdAndDelete(id)

        if(!blog){
        return res.status(404).json({message: "Blog not found"})
    }

    return res.status(200).json({message: "Blog Deleted Successfully"})
    } catch (error) {
        return res.status(500).json({message: "Something went wrong in deleting blog"})
    }
}