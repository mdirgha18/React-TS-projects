import { marked } from "marked";
import { wordCount, readingTime } from "../utils/wordStats";

type PreviewProps = {
  markdown: string;
};

export default function Preview({ markdown }: PreviewProps) {
  return (
    <div className="preview">
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      <div className="stats">
        📊 {wordCount(markdown)} words · ⏱ {readingTime(markdown)} min read
      </div>
    </div>
  );
}
