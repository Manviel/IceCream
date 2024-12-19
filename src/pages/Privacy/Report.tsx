import { ParentComponent } from 'solid-js';

import Card from '../../components/Card';
import Stack from '../../components/Card/Stack';

import { IDType } from '../../global';

type AddressType = {
  address: string;
  city: string;
};

export interface IFullName {
  firstName: string;
  lastName: string;
}

export interface IUser extends IFullName {
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

interface IReport extends IDType {
  name: string;
  client: IUser;
}

const getFirstLetters = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0))
    .join('');
};

const Report: ParentComponent<IReport> = ({ name, id, client }) => {
  const { height, weight, age, phone, address, email, company, university } = client;

  return (
    <article class="grid card view content-full rounded" id={id}>
      <header class="flex proximity items-center col-span-2">
        <figure class="flex items-center justify-center paper shape report-logo">
          <figcaption>{getFirstLetters(name)}</figcaption>
        </figure>

        <address class="flex col tab">
          <h3 class="subtitle">{name}</h3>
          <p class="term grey-light">{address.city}</p>
        </address>
      </header>

      <h4 class="card-sub provision col-span-2">Body measurements</h4>

      <Card title="Height" number={height} description="cm" />
      <Card title="Weight" number={weight} description="kg" />

      <h4 class="card-sub provision col-span-2">Contacts</h4>

      <Stack theme="material" title="Email" description={email} />
      <Stack theme="ghost" title="Phone" description={phone} />

      <h4 class="card-sub provision col-span-2">Experience</h4>

      <Stack theme="alias" title={`${age} years old`} description={company.title} />
      <Stack theme="price" title={university} description={company.department} />
    </article>
  );
};

export default Report;
