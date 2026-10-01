'use client'
import React from 'react';
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { requestPasswordReset } from '@/app/lib/auth-client';





const ForgotPasswordPage = () => {

    const handleForgotPassword = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())
        console.log(userData, 'forgot password');

        const resData = await requestPasswordReset({
            email: userData.email,
            redirectTo: '/reset-password'
        })
        console.log('forgot password', resData);
    }

    return (
      <div>
        <Form className="w-full max-w-96" onSubmit={handleForgotPassword}>
          <Fieldset>
            <Fieldset.Legend>forgot password</Fieldset.Legend>
            <FieldGroup>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Button type="submit">Save changes</Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    );
};

export default ForgotPasswordPage;