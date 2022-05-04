import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface AcriveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export default function ActiveLink({ children, activeClassName, ...rest }: AcriveLinkProps){
    const { asPath } = useRouter();

    const className = asPath === rest.href ? activeClassName : '';
    
    return <Link {...rest}>
        {cloneElement(children, {
            className
        })}
    </Link>
}