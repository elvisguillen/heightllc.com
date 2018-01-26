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
//     if (node.frontmatter.tags) {
//       node.frontmatter.tags.forEach(tag => {
//         if (!posts[tag]) {
//           posts[tag] = [];
//         }
//         posts[tag].push(node);
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

//   Object.keys(posts).forEach(tagName => {
//     const post = posts[tagName];
//     pagination({
//       edges: post,
//       createPage: createPage,
//       pageTemplate: categoryTemplate,
//       pathPrefix: `tags/${tagName}`,
//       pageLength: 2,
//       context: {
//         posts,
//         post,
//         tag: tagName,
//       },
//     });
//     // createPage({
//     //   path: `/tags/${tagName}`,
//     //   component: categoryTemplate,
//     //   context: {
//     //     posts,
//     //     post,
//     //     tag: tagName,
//     //   },
//     // });
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
              tags
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


    // Create Paginated Tag Pages 

    const tagSet = new Set();
    const tagMap = new Map();

    result.data.allMarkdownRemark.edges.forEach(edge => {
      if (edge.node.frontmatter.tags) {
        edge.node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag);

          const array = tagMap.has(tag) ? tagMap.get(tag) : [];
          array.push(edge);
          tagMap.set(tag, array);
        });
      }
    });

    const tagList = Array.from(tagSet);
    tagList.forEach(tag => {
      // Creates tag pages
      pagination({
        edges: tagMap.get(tag),
        createPage: createPage,
        pageTemplate: categoryTemplate,
        pathPrefix: `tags/${(tag).replace(/\s+/g, '-').toLowerCase()}`,
        context: {
          tag
        }
      });
    });

    // Create Paginated Category Pages

    // const categorySet = new Set();
    // const categoryMap = new Map();

    // result.data.allMarkdownRemark.edges.forEach(edge => {
    //   if (edge.node.frontmatter.categories.category) {
    //     edge.node.frontmatter.categories.category.forEach(category => {
    //       tagSet.add(category);

    //       const array = tagMap.has(category) ? tagMap.get(category) : [];
    //       array.push(edge);
    //       categoryMap.set(category, array);
    //     });
    //   }
    // });

    // const categoryList = Array.from(categorySet);
    // categoryList.forEach(tag => {
    //   // Creates tag pages
    //   pagination({
    //     edges: categoryMap.get(category),
    //     createPage: createPage,
    //     pageTemplate: categoryTemplate,
    //     pathPrefix: `categories/${(category).replace(/\s+/g, '-').toLowerCase()}`,
    //     context: {
    //       category
    //     }
    //   });
    // });

        
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.contentType)}.js`),
        context: {} // additional data can be passed via context
      })
    })
  })
}

