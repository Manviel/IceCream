import { ParentComponent } from 'solid-js';

import ConnectFactory from '../../components/ConnectFactory';

type ArticleType = {
  name: string;
  href: string;
  id: string;
  date: string;
};

const Article: ParentComponent<ArticleType> = ({
  name,
  children,
  href,
  id,
  date,
}) => (
  <section class='layer view content-full rounded on-scroll' id={id}>
    <small class='paper'>{date}</small>
    <h2 class='info card-sub'>{name}</h2>

    {children}

    <ConnectFactory href={href} />
  </section>
);

export default Article;
