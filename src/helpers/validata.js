const Joi = require("joi");

exports.getBlogpostIdSchema = Joi.object({
  id: Joi.number().min(1),
});

exports.postBlogpostSchema = Joi.object({
  title: Joi.string().min(3),
  post: Joi.string().min(10),
});

exports.putBlogpostSchema = Joi.object({
  id: Joi.number(),
  title: Joi.string().min(3),
  post: Joi.string().min(10),
});

exports.paginatedSchema = Joi.object({
  page: Joi.number(),
  limit: Joi.number(),
});

exports.deleteBlogpostSchema = Joi.object({
  id: Joi.number(),
});
