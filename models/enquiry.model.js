import mongoose from "mongoose"

const userEnquirySchema = await mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const enquiryModel = mongoose.model('enquiry', userEnquirySchema)

export default enquiryModel