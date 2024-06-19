import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true },
        password: { type: String },
        role: { type: String },
        resetToken: { type: String },
        resetTokenExpiration: { type: Date }
    }, {
    versionKey: false,
    timestamps: true
}
)

const adminModal = mongoose.model("admin", adminSchema);

module.exports = adminModal;
