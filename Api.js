export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const { userid, password } = req.body;
  // Add or remove users here
  const users = [
    { userid: "alice", password: "pass1" },
    { userid: "bob", password: "pass2" },
    { userid: "charlie", password: "pass3" }
  ];
  const valid = users.some(user => user.userid === userid && user.password === password);
  if (valid) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
}
