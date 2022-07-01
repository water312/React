import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/my/account">
          <a>MyAccount</a>
        </Link>
      </li>
      <li>
        <Link href="/my/info">
          <a>MyInfo</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home