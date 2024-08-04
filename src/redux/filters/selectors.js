import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contactsList, filter) => {
    switch (filter) {
      case filter:
        return contactsList.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      default:
        return contactsList;
    }
  }
);
