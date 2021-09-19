const Joi = require("joi");

exports.getBlogpostIdSchema = Joi.object({
  id: Joi.number().min(1),
});

exports.postBlogpostSchema = Joi.object({
  title: Joi.string().min(3).required(),
  post: Joi.string().min(10).required(),
});

exports.putBlogpostSchema = Joi.object({
  id: Joi.number(),
  post: Joi.string().min(10).required(),
});

exports.paginatedSchema = Joi.object({
  page: Joi.number(),
  limit: Joi.number(),
});

exports.deleteBlogpostSchema = Joi.object({
  id: Joi.number(),
});

//comments schema

exports.getCommentsIdSchema = Joi.object({
  id: Joi.number().min(),
});

exports.postCommentsSchema = Joi.object({
  comment: Joi.string().min(3).required(),
  blogpostId: Joi.number(),
});

exports.putCommentsSchema = Joi.object({
  id: Joi.number(),
  comment: Joi.string().min(3).required(),
});

exports.deleteCommentsSchema = Joi.object({
  id: Joi.number(),
});
