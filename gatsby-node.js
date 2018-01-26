const path = require('path')
const pagination = require('gatsby-paginate');

// const createCategoryPages = (createPage, edges) => {
//   // Tell it to use our tags template.
//   const categoryTemplate = path.resolve(`src/templates/categories.js`);
//   // Create an empty object to store the posts.
//   const posts = {};
//   console.log("creating posts");

//   // Loop through all nodes (our markdown posts) and add the tags to our post object.

//   edges.forEach(({ node }) => {
//     if (node.frontmatter.categories) {
//       node.frontmatter.categories.forEach(category => {
//         if (!posts[category]) {
//           posts[category] = [];
//         }
//         posts[category].push(node);
//       });
//     }
//   });

//   // Create the tags page with the list of tags from our posts object.
//   // createPage({
//   //   path: "/categories",
//   //   component: categoriesTemplate,
//   //   context: {
//   //     posts,
//   //   },
//   // });

//   // For each of the tags in the post object, create a tag page.

//   Object.keys(posts).forEach(categoryName => {
//     const post = posts[categoryName];
//     pagination({
//       edges: posts,
//       createPage: createPage,
//       pageTemplate: categoryTemplate,
//       pathPrefix: `/research/categories/${categoryName}`,
//       pageLength: 2
//     });
//   });
// };

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
              categories {
                category
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges;
    const blogposts = posts.filter(post => post.node.frontmatter.contentType === 'blog');
    pagination({
      edges: blogposts,
      createPage: createPage,
      pageTemplate: "src/templates/research.js",
      pathPrefix: `research`,
      pageLength: 2
    });

    // categoryList.forEach(category => {
    //   const edges = result.data.allMarkdownRemark.edges.filter(({ node }) => { return node.contentType===blog });
      
    // });

    // createCategoryPages(createPage, posts);

        
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.contentType)}.js`),
        context: {} // additional data can be passed via context
      })
    })
  })
}

