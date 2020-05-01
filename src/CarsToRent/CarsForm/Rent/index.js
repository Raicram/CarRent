import React from 'react';
import {Field,Form} from 'react-final-form';
import {FormDiv,FormInputs,Input,EachInput,Label} from './styles';
import {Span} from '../AddCar/style';
import {RentButton} from "../../Cars/styles";

const RentForm = props =>{
    console.log(props.match.params.id);

    const onSubmit = values =>{
       console.log(values);
    };

    return(
        <FormDiv>
            <h1>Your car: {props.match.params.id}</h1>
            <FormInputs>
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
                        if (!values.phone) {
                            errors.phone = 'Required'
                        }
                        return errors
                    }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="name">
                                {({ input, meta }) => (
                                    <EachInput>
                                        <Label>Name</Label>
                                        <Input {...input} type="text" placeholder="Name" />
                                        {meta.error && meta.touched && <Span>{meta.error}</Span>}
                                    </EachInput>
                                )}
                            </Field>
                            <Field name="surname">
                                {({ input, meta }) => (
                                    <EachInput>
                                        <Label>Surname</Label>
                                        <Input {...input} type="text" placeholder="Surname" />
                                        {meta.error && meta.touched && <Span>{meta.error}</Span>}
                                    </EachInput>
                                )}
                            </Field>
                            <Field name="firstdate">
                                {({ input, meta }) => (
                                    <EachInput>
                                        <Label>Date of rent</Label>
                                        <Input {...input} type="text" placeholder="30-04-2020" />
                                        {meta.error && meta.touched && <Span>{meta.error}</Span>}
                                    </EachInput>
                                )}
                            </Field>
                            <Field name="seconddate">
                            {({ input, meta }) => (
                                <EachInput>
                                    <Label>Date of give back</Label>
                                    <Input {...input} type="text" placeholder="31-04-2020" />
                                    {meta.error && meta.touched && <Span>{meta.error}</Span>}
                                </EachInput>
                            )}
                            </Field>
                            <Field name="phone">
                                {({ input, meta }) => (
                                    <EachInput>
                                        <Label>Phone number</Label>
                                        <Input {...input} type="tel" placeholder="354 276 984" />
                                        {meta.error && meta.touched && <Span>{meta.error}</Span>}
                                    </EachInput>
                                )}
                            </Field>
                            <div className="buttons">
                                <RentButton type="submit" disabled={submitting}>
                                    Rent
                                </RentButton>
                            </div>
                        </form>
                    )}
                />
            </FormInputs>
        </FormDiv>
)};

export default RentForm