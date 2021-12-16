import Link from 'next/link'

const Nav = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/photos">
                        <a>photos</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav