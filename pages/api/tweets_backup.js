export default (req, res) => {
  res.statusCode = 200
  res.json({
      tweets: [
        {
            id: 1, 
            avatarUrl: "https://s3-media3.fl.yelpcdn.com/photo/uXXoHbNTgZzYblLeSzoxPQ/o.jpg",
            text: "blah blah blah whatever" 
        },
        {   
            id: 2,
            avatarUrl: 'https://s3-media3.fl.yelpcdn.com/photo/uXXoHbNTgZzYblLeSzoxPQ/o.jpg',
            text: "hi" },
        { 
            id: 3,
            avatarUrl: 'https://s3-media3.fl.yelpcdn.com/photo/uXXoHbNTgZzYblLeSzoxPQ/o.jpg',
            text: "Hello" }
        ]
    })
}