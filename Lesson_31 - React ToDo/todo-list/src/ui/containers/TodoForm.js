import React from "react";
import styles from "./TodoForm.module.css";
import { Form, Field } from "react-final-form";
import Input from "../components/form/Input";
import Button from "../components/form/Button";

const TodoForm = ({ onAdd }) => {
  const handleAdd = (values) => {
    const { inputValue } = values;
    onAdd(inputValue);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.inputValue || values.inputValue.trim().length < 5) {
      errors.inputValue = "Minimum length is 5 characters";
    }
    return errors;
  };

  return (
    <Form onSubmit={handleAdd} validate={validate}>
      {({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <Field name="inputValue" validate={validate}>
            {({ input, meta }) => (
              <div className={styles.input_box}>
                <Input
                  type="text"
                  {...input}
                  placeholder="Enter a new todo"
                  className={styles.input}
                />
                {meta.error && meta.touched && (
                  <span className={styles.error}>{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Button type="submit" text="Add" customClass={styles.addButton} />
        </form>
      )}
    </Form>
  );
};

export default TodoForm;
