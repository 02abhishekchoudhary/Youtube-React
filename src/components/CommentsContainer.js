import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Naruto Uzumaki",
    text: "This is my ninjutsu! Believe it!",
    replies: [],
  },
  {
    name: "Naruto Uzumaki",
    text: "This is my ninjutsu! Believe it!",
    replies: [
      {
        name: "Naruto Uzumaki",
        text: "This is my ninjutsu! Believe it!",
        replies: [
          {
            name: "Naruto Uzumaki",
            text: "This is my ninjutsu! Believe it!",
            replies: [
              {
                name: "Naruto Uzumaki",
                text: "This is my ninjutsu! Believe it!",
                replies: [
                  {
                    name: "Naruto Uzumaki",
                    text: "This is my ninjutsu! Believe it!",
                    replies: [
                      {
                        name: "Naruto Uzumaki",
                        text: "This is my ninjutsu! Believe it!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Naruto Uzumaki",
    text: "This is my ninjutsu! Believe it!",
    replies: [],
  },
  {
    name: "Naruto Uzumaki",
    text: "This is my ninjutsu! Believe it!",
    replies: [],
  },
  {
    name: "Naruto Uzumaki",
    text: "This is my ninjutsu! Believe it!",
    replies: [],
  },
  {
    name: "Naruto Uzumaki",
    text: "This is my ninjutsu! Believe it!",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
