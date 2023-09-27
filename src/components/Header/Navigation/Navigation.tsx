import { NavigationLink } from 'components/Header/Navigation/Navigation.styled';

export const Navigation = () => {
    return (
        <>
            <ul 
                className="
                    navigation-links-list flex justify-center gap-2.5
                    mobile:gap-10
                    [&_li]:text-white
                ">
                <li>
                    <NavigationLink to="/">home</NavigationLink>
                </li>

                <li>
                    <NavigationLink to="/library">my library</NavigationLink>
                </li>
            </ul>
        </>
    );
};