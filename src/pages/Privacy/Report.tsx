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

const Report: ParentComponent<IReport> = (props) => {
  return (
    <article class="grid card view content-full rounded" id={props.id}>
      <header class="flex proximity items-center col-span-2">
        <figure class="flex items-center justify-center paper shape report-logo">
          <figcaption>{getFirstLetters(props.name)}</figcaption>
        </figure>

        <address class="flex col tab">
          <h3 class="subtitle">{props.name}</h3>
          <p class="term grey-light">{props.client.address.city}</p>
        </address>
      </header>

      <h4 class="card-sub provision col-span-2">Body measurements</h4>

      <Card title="Height" number={props.client.height} description="cm" />
      <Card title="Weight" number={props.client.weight} description="kg" />

      <h4 class="card-sub provision col-span-2">Contacts</h4>

      <Stack theme="material" title="Email" description={props.client.email} />
      <Stack theme="ghost" title="Phone" description={props.client.phone} />

      <h4 class="card-sub provision col-span-2">Experience</h4>

      <Stack theme="alias" title={`${props.client.age} years old`} description={props.client.company.title} />
      <Stack theme="price" title={props.client.university} description={props.client.company.department} />
    </article>
  );
};

export default Report;
