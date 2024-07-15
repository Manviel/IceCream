import { ParentComponent } from 'solid-js';

import Card from '../../components/Card';

import { IDType } from '../../global';
import { getStack } from '../../global/theme';

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
    .map(word => word.charAt(0))
    .join('');
};

const Report: ParentComponent<ReportType> = ({ name, id, client }) => {
  const { height, weight, age, phone, address, email, company, university } = client;

  return (
    <article class="grid products card view content-full rounded users" id={id}>
      <header class="flex proximity items-center col-span-2">
        <figure class="flex items-center justify-center paper shape report-logo">
          <figcaption>{getFirstLetters(name)}</figcaption>
        </figure>

        <div class="flex col tab">
          <h3 class="subtitle">{name}</h3>
          <p class="term grey-light">{address.city}</p>
        </div>
      </header>

      <h4 class="card-sub provision col-span-2">Body measurements</h4>

      <Card title="Height" number={height} description="cm" />
      <Card title="Weight" number={weight} description="kg" />

      <h4 class="card-sub provision col-span-2">Contacts</h4>

      <div class={getStack('material')}>
        <p class="concise">Email</p>
        <strong class="subtitle">{email}</strong>
      </div>

      <div class={getStack('ghost')}>
        <p class="concise">Phone</p>
        <strong class="subtitle">{phone}</strong>
      </div>

      <h4 class="card-sub provision col-span-2">Experience</h4>

      <div class={getStack('alias')}>
        <p class="concise">{age} years old</p>
        <strong class="subtitle">{company.title}</strong>
      </div>

      <div class={getStack('price')}>
        <p class="concise">{university}</p>
        <strong class="subtitle">{company.department}</strong>
      </div>
    </article>
  );
};

export default Report;
