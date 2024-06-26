import {v2 as cloudinary} from "cloudinary"

import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_NAME, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadCloudinary = async (localFilePAth) => {
    try{
        if(!localFilePAth) return null
        // upload the file on cloudinary

       const response = await cloudinary.uploader.upload(localFilePAth,{
            resource_type:"auto"
        })

        // file has been uploaded successfully

        console.log("file is uploaded on cloudinary",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePAth) // remove yhe localy saved temporay file as the upload operation git failed
        return null
    }
}

