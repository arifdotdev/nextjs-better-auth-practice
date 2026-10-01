'use client'
import { updateUser } from "@/app/lib/auth-client";
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



const ProfilePage = () => {
  const handleUpdateUserProfile = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries())

    const resData = await updateUser({
        name: userData.name
    })
    console.log('update user data', resData);

  };

  return (
    <div>
      <Form className="w-full max-w-96" onSubmit={handleUpdateUserProfile}>
        <Fieldset>
          <Fieldset.Legend>Profile Settings</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
           
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              Save changes
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default ProfilePage;
