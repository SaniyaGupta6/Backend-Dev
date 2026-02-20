app.use(express.static("public"));

app.get("/gallery", (req, res) => {
  const images = ["1.jpg", "2.jpg", "3.jpg"];
  res.render("gallery", { images });
});