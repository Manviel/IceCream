import { ParentComponent } from 'solid-js';

import { IDType } from '../../models';

interface ArticleType extends IDType {
  name: string;
  date: string;
  job: string;
}

const Article: ParentComponent<ArticleType> = ({
  name,
  children,
  job,
  id,
  date,
}) => (
  <article class='card view content-full rounded on-scroll' id={id}>
    <small class='chip paper'>{date}</small>
    <h2 class='subtitle card-header'>{name}</h2>

    <h3 class='concise info'>{job}</h3>

    {children}
  </article>
);

export default Article;
