import { ParentComponent } from 'solid-js';

type ArticleType = {
  name: string;
};

const Article: ParentComponent<ArticleType> = ({ name, children }) => (
  <article class='layer view content-full rounded screen on-scroll'>
    <h2 class='info'>{name}</h2>

    {children}
  </article>
);

export default Article;
