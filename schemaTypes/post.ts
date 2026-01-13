import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt', // ← Added this
      title: 'Excerpt',
      type: 'text',
      description: 'Short description of the blog post',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'featuredImage', // ← Changed from mainImage
      title: 'Featured Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'content', // ← Changed from body
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      subtitle: 'excerpt',
    },
  },
})
