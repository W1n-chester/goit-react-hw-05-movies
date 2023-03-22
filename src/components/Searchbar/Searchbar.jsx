import { useState } from 'react';
import { Form, SearchbarHed, Button } from './Searchbar.styled';
export const Searchbar = ({ onSetSearchParams }) => {
  const [request, setRequest] = useState('');
  const writeInput = e => {
    const { value } = e.currentTarget;
    setRequest(value);
    };
    
  const formSubmit = e => {
    e.preventDefault();
    const nextParams =
      e.target.request.value !== '' ? { name: e.target.request.value } : {};
    onSetSearchParams(nextParams);
    reset();
    };
    
  const reset = () => {
    setRequest('');
  };
  return (
    <>
      <SearchbarHed>
        <Form onSubmit={formSubmit}>
          <input
            name="request"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={request}
            onChange={writeInput}
          />
          <Button type="submit">
            <span>Search</span>
          </Button>
        </Form>
      </SearchbarHed>
    </>
  );
};
