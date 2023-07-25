import { ParentComponent } from 'solid-js';

import ConnectFactory from '../../components/Link/ConnectFactory';

import { AnchorType, IDType } from '../../models';

interface ArticleType extends IDType, AnchorType {
  name: string;
  date: string;
}

const Article: ParentComponent<ArticleType> = ({
  name,
  children,
  href,
  id,
  date,
}) => (
  <article class='card view content-full rounded on-scroll' id={id}>
    <small class='chip paper'>{date}</small>
    <h2 class='subtitle card-navigation'>{name}</h2>

    {children}

    <ConnectFactory href={href} />
  </article>
);

export default Article;
