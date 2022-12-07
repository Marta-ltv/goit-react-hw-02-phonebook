import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';


export class App extends Component {
   
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }
  



  render() {
    
    return (
      <div>
      
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        
        {/* <Section>
          <Filter />
          <ContactList />
        </Section> */}

      </div>
    );
}
}