let posts = [];

app.get("/posts", (req, res) => {
  res.render("posts", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("newPost");
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };

  posts.push(newPost);
  res.json({ message: "Post created successfully" });
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render("postDetail", { post });
});