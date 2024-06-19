import { ParentComponent } from 'solid-js';

import Card from '../../components/Card';

import { IDType } from '../../models';
import { getStack } from '../../models/theme';

type AddressType = {
  address: string;
  city: string;
};

export interface FullNameType {
  firstName: string;
  lastName: string;
}

export interface UserType extends FullNameType {
  email: string;
  age: number;
  phone: string;
  height: number;
  weight: number;
  university: string;
  address: AddressType;
  company: {
    title: string;
    department: string;
  };
}

interface ReportType extends IDType {
  name: string;
  client: UserType;
}

const getFirstLetters = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0))
    .join('');
};

const Report: ParentComponent<ReportType> = ({ name, id, client }) => {
  const { height, weight, age, phone, address, email, company, university } =
    client;

  return (
    <article class='card view content-full rounded flex col lockup' id={id}>
      <header class='flex proximity items-center'>
        <figure class='flex items-center justify-center paper shape report-logo'>
          <figcaption>{getFirstLetters(name)}</figcaption>
        </figure>

        <div class='flex col widget-title'>
          <h3 class='subtitle'>{name}</h3>
          <p class='term grey-light'>{address.city}</p>
        </div>
      </header>

      <h4 class='card-sub provision'>Body measurements</h4>

      <section class='grid products proximity users'>
        <Card title='Height' number={height} description='cm' />

        <Card title='Weight' number={weight} description='kg' />
      </section>

      <h4 class='card-sub provision'>Contacts</h4>

      <section class='grid products proximity users'>
        <div class={getStack('material')}>
          <p class='concise'>Email</p>
          <strong class='subtitle'>{email}</strong>
        </div>

        <div class={getStack('ghost')}>
          <p class='concise'>Phone</p>
          <strong class='subtitle'>{phone}</strong>
        </div>
      </section>

      <h4 class='card-sub provision'>Experience</h4>

      <section class='grid products proximity users'>
        <div class={getStack('layer')}>
          <p class='concise'>{age} years old</p>
          <strong class='subtitle'>{company.title}</strong>
        </div>

        <div class={getStack('price')}>
          <p class='concise'>{university}</p>
          <strong class='subtitle'>{company.department}</strong>
        </div>
      </section>
    </article>
  );
};

export default Report;
