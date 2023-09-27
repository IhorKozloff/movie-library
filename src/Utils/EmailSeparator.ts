export const emailSeparate = (email: string) => {

    const [emailName, emailPrefix] = email.split('@');
    return {emailName, emailPrefix};

};