import React from 'react';
import {Form,Field} from 'react-final-form';
import actions_b from "../../duck/actions";
import actions_d from "../../Description/duck/actions";
import {connect} from 'react-redux';
import {AddCar,Input,Span,Button} from "./style.js";



const AddForm = props =>{
    const onSubmit = values =>{
        props.add_brand(values.brand);
        props.add_desc(values.description);

        values.brand= '';
        values.description= '';
    };

    return(
        <AddCar>
        <Form
            onSubmit={onSubmit}
            validate={values => {
                const errors = {};
                if (!values.brand) {
                    errors.brand = 'Required'
                }
                if (!values.description) {
                    errors.description = 'Required'
                }
                return errors
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="brand">
                        {({ input, meta }) => (
                            <div>
                                <label>Brand</label>
                                <Input {...input} type="text" placeholder="Brand e.g. BMW" />
                                {meta.error && meta.touched && <Span>{meta.error}</Span>}
                            </div>
                        )}
                    </Field>
                    <Field name="description">
                        {({ input, meta }) => (
                            <div>
                                <label>Description</label>
                                <Input {...input} type="text" placeholder="Description" />
                                {meta.error && meta.touched && <Span>{meta.error}</Span>}
                            </div>
                        )}
                    </Field>
                    <div className="buttons">
                        <Button type="submit" disabled={submitting}>
                            Submit
                        </Button>
                    </div>
                </form>
            )}
        />
        </AddCar>
    )};

const mapDispatchToProps = dispatch =>({
    add_brand: brand => dispatch(actions_b.add(brand)),
    add_desc: desc => dispatch(actions_d.add(desc))
});

export default connect(null,mapDispatchToProps)(AddForm)