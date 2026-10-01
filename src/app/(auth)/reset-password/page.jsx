import React, { Suspense } from 'react';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPasswordPAge = () => {
    return (
        <div>
            Reset Password page
            <Suspense fallback={<h2>Loading...</h2>}>
                <ResetPasswordForm></ResetPasswordForm>
            </Suspense>
        </div>
    );
};

export default ResetPasswordPAge;