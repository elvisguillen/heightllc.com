const path = require('path')
const { createPaginationPages, prefixPathFormatter } = require("gatsby-pagination");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              contentType
              path
              date(formatString: "DD MMMM, YYYY")
              author
              title
              tags
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const categoryTemplate = path.resolve(`src/templates/categories.js`);
    const tagsTemplate = path.resolve(`src/templates/tags.js`);
    const posts = result.data.allMarkdownRemark.edges;
    const blogposts = posts.filter(post => post.node.frontmatter.contentType === 'blog');

    // Create Paginated Tag and Category Pages 

    const tagSet = new Set();
    const tagMap = new Map();
    const categorySet = new Set();
    const authorSet = new Set();

    result.data.allMarkdownRemark.edges.forEach(edge => {
      if (edge.node.frontmatter.tags) {
        edge.node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag);

          const array = tagMap.has(tag) ? tagMap.get(tag) : [];
          array.push(edge);
          tagMap.set(tag, array);
        });
      }

      if (edge.node.frontmatter.author) {
        authorSet.add(edge.node.frontmatter.author);
      }

      if (edge.node.frontmatter.category) {
        categorySet.add(edge.node.frontmatter.category);
      }

    });

    const tagList = Array.from(tagSet);
    tagList.forEach(tag => {
      createPaginationPages({
        createPage: createPage,
        edges: tagMap.get(tag),
        component: tagsTemplate,
        pathFormatter: prefixPathFormatter(`tags/${(tag).replace('+', '').replace(/\s+/g, '-').toLowerCase()}`),
        limit: 2,
        context: {
          tag
        }
      });
    });
    
    const categoryList = Array.from(categorySet);
    categoryList.forEach(category => {
      const categoryEdges = posts.filter(({ node }) => { return node.frontmatter.category===category });
      createPaginationPages({
        createPage,
        edges: categoryEdges,
        component: categoryTemplate,
        pathFormatter: prefixPathFormatter(`/categories/${(category).replace(/\s+/g, '-').toLowerCase()}`),
        limit: 2,
        context: {
          category
        }
      });
    });

    const authorList = Array.from(authorSet);
    authorList.forEach(author => {
      const authorEdges = posts.filter(({ node }) => { return node.frontmatter.author===author });
      createPaginationPages({
        createPage,
        edges: authorEdges,
        component: tagsTemplate,
        pathFormatter: prefixPathFormatter(`/tags/${(author).replace(/\s+/g, '-').toLowerCase()}`),
        limit: 2,
        context: {
          author
        }
      });
    });
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.contentType)}.js`),
        context: {} // additional data can be passed via context
      })
    })
  })
}
