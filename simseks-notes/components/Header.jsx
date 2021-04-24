import Link from 'next/link'

export const Header = () => {
  return (
    <header className="site-container py-6">
      <nav className="space-x-4 ">
        <Link href="/">
          <a>Hakkımda</a>
        </Link>
        <Link href="/blog">
          <a>Yazılar</a>
        </Link>
        <Link href="/photos">
          <a>Fotoğraflar</a>
        </Link>
        <Link href="/suggestions">
          <a>Öneriler</a>
        </Link>
        <Link href="/connection">
          <a>İletişim</a>
        </Link>
      </nav>
    </header>
  )
}
