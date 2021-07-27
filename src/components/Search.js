import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import NewsList from './NewsList';

export default function Search({filteredNews, setFilter}) {
    const handleChange = (e) => {
		setFilter(e.target.value)
	}
    
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Search: </Label>
                    <Input 
                    type="text" 
                    onChange={e => handleChange(e)}
                    placeholder="Title of news or Author's Name" 
                    />
                   <NewsList filteredNews={filteredNews}/>
                </FormGroup>
            </Form>
        </div>
    )
}
