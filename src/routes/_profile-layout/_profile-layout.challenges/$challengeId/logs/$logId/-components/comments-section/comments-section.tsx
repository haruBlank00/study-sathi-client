import { Comment } from "./comment";
import { NewCommentBox } from "./new-comment-box";

export const CommentsSection = () => {
  return (
    <div className="prose">
      <h4 className="dark:text-white mb-4">Comments</h4>

      <NewCommentBox />
      <div className="flex flex-col gap-6">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};
