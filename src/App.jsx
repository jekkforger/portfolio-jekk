import { useEffect, useState } from 'react'
import { T, EMAIL, WA, SOCIALS, CV_FILE, PROJECT_IMGS, WEB3FORMS_KEY } from './data.js'

const PAGES = ['home', 'about', 'skills', 'exp', 'projects', 'social']
const ICONS = { home: '🏠', about: '👤', skills: '⚡', exp: '💼', projects: '🛰️', social: '💬' }

function read(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}
function write(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* abaikan */
  }
}

function Win({ title, children, className = '' }) {
  return (
    <section className={`win ${className}`}>
      <div className="win-bar">
        <span className="win-title">{title}</span>
        <span className="win-btns" aria-hidden="true"><i>-</i><i>□</i><i>×</i></span>
      </div>
      <div className="win-body">{children}</div>
    </section>
  )
}

function Chips({ items }) {
  return (
    <ul className="chips">
      {items.map((x) => <li key={x} className="chip">{x}</li>)}
    </ul>
  )
}

function Home({ t, go }) {
  const loop = [...t.skills.fields, ...t.skills.fields, ...t.skills.fields, ...t.skills.fields]
  return (
    <>
      <Win title="home.exe" className="hero">
        <div className="hero-grid">
          <div>
            <span className="sticker">{t.hero.status}</span>
            <p className="hi">{t.hero.hi}</p>
            <h1 className="chrome">Fahrizal<br />Mudzaqi<br />Maulana</h1>
            <p className="role">★ {t.hero.role} ★</p>
            <p className="lead">{t.hero.desc}</p>
            <div className="cta">
              <a className="btn primary" href={CV_FILE} download>⬇ {t.hero.cv}</a>
              <button className="btn" onClick={() => go('social')}>✉ {t.hero.contact}</button>
            </div>
          </div>
          <div className="cd-wrap" aria-hidden="true">
            <div className="cd" />
            <span className="sticker s1">Y2K</span>
            <span className="sticker s2">Web Dev</span>
            <span className="star st1">✦</span>
            <span className="star st2">✧</span>
          </div>
        </div>
      </Win>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">{loop.map((f, i) => <span key={i}>✦ {f}</span>)}</div>
      </div>
    </>
  )
}

function About({ t }) {
  const a = t.about
  return (
    <>
      <h2 className="page-title chrome">{a.title}</h2>
      <Win title="about-me.txt"><p className="lead">{a.bio}</p></Win>
      <div className="grid2">
        <Win title="education.doc">
          <h3>{a.degree}</h3>
          <p className="meta">{a.school} · {a.period}</p>
          <ul className="list">{a.eduPoints.map((p) => <li key={p}>{p}</li>)}</ul>
        </Win>
        <div className="stack">
          <Win title="certificates.zip">
            <h3>{a.certTitle}</h3>
            <Chips items={a.certs} />
          </Win>
          <Win title="languages.ini">
            <h3>{a.langTitle}</h3>
            <Chips items={a.langs} />
          </Win>
        </div>
      </div>
      <Win title="organizations.dir">
        <h3>{a.orgTitle}</h3>
        <ul className="orgs">
          {a.orgs.map((o) => (
            <li key={o.role}>
              <div className="row"><strong>{o.role}</strong><span className="badge">{o.year}</span></div>
              <p>{o.text}</p>
            </li>
          ))}
        </ul>
      </Win>
    </>
  )
}

function Skills({ t }) {
  const s = t.skills
  return (
    <>
      <h2 className="page-title chrome">{s.title}</h2>
      <Win title="expertise.exe">
        <h3>{s.fieldsTitle}</h3>
        <Chips items={s.fields} />
      </Win>
      <Win title="tech-stack.sys">
        <h3>{s.techTitle}</h3>
        <div className="grid3">
          {s.tech.map((g) => (
            <div key={g.name} className="group">
              <h4>{g.name}</h4>
              <Chips items={g.items} />
            </div>
          ))}
        </div>
      </Win>
      <Win title="soft-skills.dll">
        <h3>{s.softTitle}</h3>
        <Chips items={s.soft} />
      </Win>
    </>
  )
}

function Experience({ t }) {
  return (
    <>
      <h2 className="page-title chrome">{t.exp.title}</h2>
      <div className="timeline">
        {t.exp.items.map((it, i) => (
          <Win key={i} title={`${it.year}.log`}>
            <div className="row">
              <div>
                <h3>{it.role}</h3>
                {it.org && <p className="meta">{it.org}</p>}
              </div>
              <span className="badge">{it.year}</span>
            </div>
            <ul className="list">{it.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </Win>
        ))}
      </div>
    </>
  )
}

function Projects({ t }) {
  const p = t.projects
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (open === null) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <h2 className="page-title chrome">{p.title}</h2>
      <p className="lead center">{p.sub}</p>
      <div className="projgrid">
        {p.items.map((it, i) => (
          <Win key={it.tag} title={`${it.tag.toLowerCase().replace(' ', '-')}.proj`}>
            <button className="shot" onClick={() => setOpen(i)} aria-label={`${it.title} - ${p.close === 'Tutup' ? 'perbesar' : 'enlarge'}`}>
              <img src={PROJECT_IMGS[i]} alt={it.title} loading="lazy" />
            </button>
            <div className="row">
              <h3>{it.title}</h3>
              <span className="badge">{it.tag}</span>
            </div>
            <p className="meta">{it.text}</p>
          </Win>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={p.items[open].title} onClick={() => setOpen(null)}>
          <button className="btn lb-close" onClick={() => setOpen(null)}>× {p.close}</button>
          <img src={PROJECT_IMGS[open]} alt={p.items[open].title} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}

function Social({ t }) {
  const s = t.social
  const empty = { name: '', email: '', subject: '', message: '', website: '' }
  const [f, setF] = useState(empty)
  const [status, setStatus] = useState('idle')
  const [detail, setDetail] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    if (f.website) return // honeypot anti-spam
    setStatus('sending')
    setDetail('')
    if (!WEB3FORMS_KEY) {
      setDetail('Access key belum diisi di src/data.js')
      setStatus('err')
      return
    }
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: f.name,
          email: f.email,
          subject: `[Portofolio] ${f.subject}`,
          message: f.message,
          from_name: 'Website Portofolio',
        }),
      })
      const data = await res.json()
      if (res.ok && data.success === true) {
        setStatus('ok')
        setF(empty)
      } else {
        setDetail(String(data.message || ''))
        setStatus('err')
      }
    } catch {
      setDetail('Network / CORS error')
      setStatus('err')
    }
  }

  const links = SOCIALS.filter((x) => x.url)
  return (
    <>
      <h2 className="page-title chrome">{s.title}</h2>
      <p className="lead center">{s.sub}</p>
      <div className="grid2 contact">
        <Win title={s.window} className="mail">
          <form onSubmit={submit}>
            <div className="mrow"><span>{s.to}</span><output>{EMAIL}</output></div>
            <label className="mrow">
              <span>{s.name}</span>
              <input required value={f.name} onChange={set('name')} placeholder={s.phName} autoComplete="name" maxLength={80} />
            </label>
            <label className="mrow">
              <span>{s.from}</span>
              <input required type="email" value={f.email} onChange={set('email')} placeholder={s.phFrom} autoComplete="email" maxLength={120} />
            </label>
            <label className="mrow">
              <span>{s.subject}</span>
              <input required value={f.subject} onChange={set('subject')} placeholder={s.phSubject} maxLength={120} />
            </label>
            <label className="hp" aria-hidden="true">
              Website <input tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} />
            </label>
            <label className="mbody">
              <span className="sr">{s.message}</span>
              <textarea required rows={7} value={f.message} onChange={set('message')} placeholder={s.phMsg} maxLength={3000} />
            </label>
            <button className="btn primary wide" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? s.sending : `✉ ${s.send}`}
            </button>
            <p className={`notice ${status}`} role="status" aria-live="polite">
              {status === 'ok' && s.ok}
              {status === 'err' && s.err}
              {status === 'err' && detail && <small className="detail">Detail: {detail}</small>}
            </p>
          </form>
        </Win>
        <Win title="contact.card">
          <h3>{s.findTitle}</h3>
          <ul className="links">
            <li><a href={`mailto:${EMAIL}`}><b>@</b><span>{EMAIL}</span></a></li>
            <li><a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"><b>☎</b><span>{s.wa} +{WA}</span></a></li>
            {links.map((x) => (
              <li key={x.key}>
                <a href={x.url} target="_blank" rel="noopener noreferrer"><b>{x.icon}</b><span>{x.label}</span></a>
              </li>
            ))}
          </ul>
        </Win>
      </div>
    </>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [theme, setTheme] = useState(() => read('theme', 'light'))
  const [lang, setLang] = useState(() => read('lang', 'id'))
  const t = T[lang]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    write('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    write('lang', lang)
  }, [lang])

  const go = (p) => {
    setPage(p)
    window.scrollTo({ top: 0 })
  }

  const View = { home: Home, about: About, skills: Skills, exp: Experience, projects: Projects, social: Social }[page]

  return (
    <div className="app">
      <div className="sky" aria-hidden="true">
        <span style={{ left: '6%', top: '18%' }}>✦</span>
        <span style={{ left: '88%', top: '30%' }}>✧</span>
        <span style={{ left: '74%', top: '78%' }}>✦</span>
        <span style={{ left: '14%', top: '72%' }}>✧</span>
      </div>

      <header className="top">
        <button className="brand" onClick={() => go('home')} aria-label={t.nav.home}>
          <span className="brand-cd" aria-hidden="true" />FMM.exe
        </button>
        <nav className="menu" aria-label="Menu">
          {PAGES.map((p) => (
            <button key={p} className={p === page ? 'on' : ''} onClick={() => go(p)} aria-current={p === page ? 'page' : undefined}>
              {t.nav[p]}
            </button>
          ))}
        </nav>
        <div className="tools">
          <button className="tool" onClick={() => setLang(lang === 'id' ? 'en' : 'id')} aria-label={t.ui.lang} title={t.ui.lang}>
            {lang === 'id' ? 'ID' : 'EN'}
          </button>
          <button className="tool" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={t.ui.theme} title={t.ui.theme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <main key={page + lang} className="page">
        <View t={t} go={go} />
      </main>

      <footer className="foot">{t.ui.footer} · © 2026 Fahrizal Mudzaqi Maulana</footer>

      <nav className="tabbar" aria-label="Menu">
        {PAGES.map((p) => (
          <button key={p} className={p === page ? 'on' : ''} onClick={() => go(p)} aria-current={p === page ? 'page' : undefined}>
            <span aria-hidden="true">{ICONS[p]}</span>
            <small>{t.nav[p]}</small>
          </button>
        ))}
      </nav>
    </div>
  )
}
