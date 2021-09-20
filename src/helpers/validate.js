const Joi = require("joi");

exports.getBlogpostIdSchema = Joi.object({
  id: Joi.number().required(),
});

exports.postBlogpostSchema = Joi.object({
  title: Joi.string().min(3).required(),
  post: Joi.string().min(10).required(),
});

exports.putBlogpostSchema = Joi.object({
  id: Joi.number().required(),
  post: Joi.string().min(10).required(),
});

exports.paginatedSchema = Joi.object({
  page: Joi.number(),
  limit: Joi.number(),
});

exports.deleteBlogpostSchema = Joi.object({
  id: Joi.number().required(),
});

//comments schema

exports.getCommentsIdSchema = Joi.object({
  id: Joi.number().min(),
});

exports.postCommentsSchema = Joi.object({
  comment: Joi.string().min(3).required(),
  blogpostId: Joi.number().required(),
});

exports.putCommentsSchema = Joi.object({
  id: Joi.number().required(),
  comment: Joi.string().min(3).required(),
});

exports.deleteCommentsSchema = Joi.object({
  id: Joi.number().required(),
});
