import Link from 'next/link'

export const Header = () => {
  return (
    <header className="site-container py-8">
      <nav className="space-x-4 ">
        <Link href="/">
          <a>Hakkımda</a>
        </Link>
        <Link href="/blog">
          <a>Yazılar</a>
        </Link>
      </nav>
    </header>
  )
}
