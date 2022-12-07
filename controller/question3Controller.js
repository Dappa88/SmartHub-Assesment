import {question3} from "../model/question3Schema.js"

export const question3Controller = {
    Addnew : async(req,res)=>{
        try {
            const {title , content, AuthorName , address, phone_number,article_about} = req.body
            if (!(title || content || AuthorName || address || phone_number || article_about))
                return res.status(400).json({msg:"please fill in the blanks"})
            const new_article = new question3({title , content, AuthorName , address, phone_number,article_about})
            new_article.save()
            return res.status(200).json({msg:"article updated succesfully"})
        } catch (error) {
            return res.status(400).json({msg:error.message})

        }
    },
    Getall:async(req,res)=>{
        try {
            const {title , content, AuthorName , address, phone_number,article_about} = req.body
            const article = await question3.find()
            if (! article)
               return res.status(400).json({msg:"no article on the server"})
            return res.status(200).json({msg:article})
        } catch (error) {
            return res.status(400).json({msg:error.message})
            
        }


    },
    Updateone:async(req,res)=>{
        try {
            const id = req.params.id
            const article = await question3.findById(id)
            const {title , content, AuthorName , address, phone_number,article_about} = req.body
            const new_article = await question3.findByIdAndUpdate(id,{title , content, AuthorName , address, phone_number,article_about})
            return res.status(200).json({msg:"article updated succesfully"})
        } catch (error) {
            return res.status(400).json({msg:error.message})
        }
    },
    Deleteone:async (req, res)=>{
        try {
         const id = req.params.id
     
         const article = await question3.findOne({id})
     
         if(!article) 
             return res.status(400).json({msg: "article does not exist!"})
     
         const new_article = await question3.findByIdAndDelete(id)
         
         if(!new_article)
             return res.status(200).json({msg: "article deleted successfully!"})
         
        } catch (error) {
         return res.status(400).json({msg: error.message})
        }
}
}