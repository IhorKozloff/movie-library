import { Form, Formik } from 'formik';
import { Input, FormButton, FormTittle } from 'components/Forms/FormComponents';

interface IFields {
    name: string;
    email: string;
    password: string;
}

interface IProps {
    onSubmitRegisterForm: (data: IFields) => void;
}

export const RegisterForm = ({onSubmitRegisterForm}: IProps) => {

    const initialValues: IFields = {name: '', email: '', password: ''};

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={(values, actions) => {
                onSubmitRegisterForm({
                    name: values.name,
                    email: values.email, 
                    password: values.password
                });
                actions.resetForm();
            }}>
                <Form 
                    name="UserRegisterForm"
                    className="user-register-form-bg w-screen flex flex-col p-5 bg-white bg-no-repeat bg-contain rounded-xl mobile:w-[280px] mobile:p-15 tablet:w-[400px] pt-[150px] bg-registerBg"
                >

                    <FormTittle>Sign Up for Contacts Book</FormTittle>
                    <ul className="flex-col mt-10 mb-[50px]">
                        <li>
                            <Input type={'text'}>
                        Name
                            </Input>
                        </li>

                        <li>
                            <Input type={'email'}>
                        Email
                            </Input>
                        </li>

                        <li>
                            <Input type={'text'}>
                        Password
                            </Input>
                        </li>
                    </ul>

                    <FormButton name="btn">Sign Up</FormButton>

                </Form>
            </Formik>
    
        </>
    );
};