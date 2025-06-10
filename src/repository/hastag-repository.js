const Hashtag = require('../models/hashtag');

class HastagRepository {
  async create(data){
    try {
      const hashTag = Hashtag.create(data);
      return hashTag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data){
    try {
      const tags = Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id){
    try {
      const hashTag = Hashtag.findById(id);
      return hashTag;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id){
    try {
      const hashTag = Hashtag.findById(id);
      return hashTag;
    } catch (error) {
      console.log(error);
    }
  }  

  async destroy(id){
    try {
      const response = Hashtag.findByIdAndRemove(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async findByName(titleList){
    try {
      const tags = Hashtag.find({
        title: titleList
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HastagRepository;