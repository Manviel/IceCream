import { ParentComponent } from 'solid-js';

import ConnectFactory from '../../components/ConnectFactory';

type ArticleType = {
  name: string;
  href: string;
  id: string;
};

const Article: ParentComponent<ArticleType> = ({
  name,
  children,
  href,
  id,
}) => (
  <section class='layer view content-full rounded quicklink on-scroll' id={id}>
    <h2 class='info'>{name}</h2>

    {children}

    <ConnectFactory href={href} />
  </section>
);

export default Article;
