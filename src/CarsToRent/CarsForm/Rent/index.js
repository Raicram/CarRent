import React from 'react';
import {Field,Form} from 'react-final-form';
import {FormDiv} from './styles';

const RentForm = props =>{
    console.log(props.match.params.id);

    const onSubmit = values =>{
       console.log(values);
    };

    return(
        <FormDiv>
            <h1>Your car: {props.match.params.id}</h1>
            <div>
                <Form
                    onSubmit={onSubmit}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required'
                        }
                        if (!values.surname) {
                            errors.surname = 'Required'
                        }
                        if (!values.firstdate) {
                            errors.firstdate = 'Required'
                        }
                        if (!values.seconddate) {
                            errors.seconddate = 'Required'
                        }
                        return errors
                    }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="name">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Name</label>
                                        <input {...input} type="text" placeholder="Name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="surname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Surname</label>
                                        <input {...input} type="text" placeholder="Password" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="firstdate">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Date of rent</label>
                                        <input {...input} type="text" placeholder="Confirm" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="seconddate">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Date of give back</label>
                                        <input {...input} type="password" placeholder="Confirm" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <div className="buttons">
                                <button type="submit" disabled={submitting}>
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </FormDiv>
)};

export default RentForm