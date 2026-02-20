app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log(name, email, message);

  res.json({ message: "Form submitted successfully" });
});