//hàm hỗ trợ lấy dl từ mongo
module.exports = {
    multileMongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};