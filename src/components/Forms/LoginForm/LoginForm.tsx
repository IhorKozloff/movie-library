import { Formik, Form } from 'formik';
import { Input, FormButton, FormTittle } from 'components/Forms/FormComponents';
import { Link } from 'react-router-dom';

interface IUserCredentials {
    email: string;
    password: string;
}

interface IProps {
    onSubmitLoginForm: (data: IUserCredentials) => void;
}

export const LoginForm = ({onSubmitLoginForm}: IProps) => {

    const initialValues: IUserCredentials = {email: '', password: ''};

    return (
        <Formik initialValues={initialValues} onSubmit={(data, actions) => {
            onSubmitLoginForm({
                email: data.email,
                password: data.password
            });
            actions.resetForm();
        }}>
        
            <Form 
                name="UserLoginForm"
                className="user-login-form-bg w-screen flex flex-col p-5 bg-white bg-no-repeat bg-contain rounded-xl mobile:w-[280px] mobile:p-15 tablet:w-[400px] tablet:pt-[150px]"
            >
                <FormTittle>Log in into your account</FormTittle>
                <Input type={'email'}>
                Email
                </Input>

                <Input type={'text'}>
                Password
                </Input>
                <p style={{marginTop: '63px', marginBottom: '8px', textAlign: 'center'}}>
                Forgot your password? <Link to={'/register'} className="styled-link"> Reestablish </Link>
                </p>
            
                <FormButton name="btn">Log In</FormButton>
            </Form>
        </Formik>
    );
};