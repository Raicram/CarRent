import React from "react";
import {Wrapper} from "./styles";
import {Field,Form} from 'react-final-form';
import {Link} from "react-router-dom";

import {EachInput, Input, Label} from "../CarsToRent/CarsForm/Rent/styles";
import {Span} from "../CarsToRent/CarsForm/AddCar/style";
import {RentButton} from "../CarsToRent/Cars/styles";



export default function LogIn () {

    const onSubmit = values =>{
        console.log(values);
    };

    return(
        <Wrapper>
            <h1>Log in to your account</h1>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {};
                    if (!values.nickname) {
                        errors.name = 'Required'
                    }
                    if (!values.password) {
                        errors.surname = 'Required'
                    }
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="nickname">
                            {({ input, meta }) => (
                                <EachInput>
                                    <Label>nickname</Label>
                                    <Input {...input} type="text" placeholder="nickname" />
                                    {meta.error && meta.touched && <Span>{meta.error}</Span>}
                                </EachInput>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <EachInput>
                                    <Label>Password</Label>
                                    <Input {...input} type="password" />
                                    {meta.error && meta.touched && <Span>{meta.error}</Span>}
                                </EachInput>
                            )}
                        </Field>
                        <div className="buttons">
                            <RentButton type="submit" disabled={submitting}>
                                log in
                            </RentButton>
                        </div>
                    </form>
                    )}
                />
                <div>
                    <p>Dont'have an account?</p>
                    <Link to={`/register`}><RentButton>Register</RentButton></Link>
                </div>
        </Wrapper>
    )
}
