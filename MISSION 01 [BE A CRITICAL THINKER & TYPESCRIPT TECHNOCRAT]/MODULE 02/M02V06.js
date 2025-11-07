const postsData = [
  {
    postId: 1,
    title: "Understanding JavaScript Closures",
    author: "Arafat",
  },
  {
    postId: 2,
    title: "React vs Vue: Which One to Choose?",
    author: "Mira",
  },
  {
    postId: 3,
    title: "Mastering MongoDB Aggregation",
    author: "Siam",
  },
  {
    postId: 4,
    title: "Node.js Best Security Practices",
    author: "Hasib",
  },
  {
    postId: 5,
    title: "How to Build REST APIs with Express",
    author: "Tisha",
  },
];

const lookUpTable = postsData.reduce((table, post) => {
  table[post.postId] = post;
  console.log(table);
  return table;
}, {});
// console.log(postsData);
// console.log("lookUpTable :>> ", lookUpTable);

const post = lookUpTable["1"];
